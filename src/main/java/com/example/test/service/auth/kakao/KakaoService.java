package com.example.test.service.auth.kakao;

import com.example.test.domain.user.User;
import com.example.test.domain.user.UserRepository;
import com.example.test.dto.kakao.KakaoTokenRespDto;
import com.example.test.dto.kakao.KakaoUserInfoRespDto;
import io.netty.handler.codec.http.HttpHeaderValues;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.OAuth2Token;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@Service
public class KakaoService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private String clientId;
    private final String KAUTH_TOKEN_URL_HOST;
    private final String KAUTH_USER_URL_HOST;

    @Autowired
    public KakaoService(UserRepository userRepository, @Value("${oauth.kakao.client-id}") String clientId) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
        this.clientId = clientId;
        KAUTH_TOKEN_URL_HOST ="https://kauth.kakao.com";
        KAUTH_USER_URL_HOST = "https://kapi.kakao.com";
    }

    public String getAccessTokenFromKakao(String code) throws IOException {

        KakaoTokenRespDto kakaoTokenRespDto = WebClient.create(KAUTH_TOKEN_URL_HOST).post()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .path("/oauth/token")
                        .queryParam("grant_type", "authorization_code")
                        .queryParam("client_id", clientId)
                        .queryParam("code", code)
                        .build(true))
                .header(HttpHeaders.CONTENT_TYPE, HttpHeaderValues.APPLICATION_X_WWW_FORM_URLENCODED.toString())
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, clientResponse -> Mono.error(new RuntimeException("Invalid Parameter")))
                .onStatus(HttpStatusCode::is5xxServerError, clientResponse -> Mono.error(new RuntimeException("Internal Server Error")))
                .bodyToMono(KakaoTokenRespDto.class)
                .block();


        log.info(" [Kakao Service] Access Token ------> {}", kakaoTokenRespDto.getAccessToken());
        log.info(" [Kakao Service] Refresh Token ------> {}", kakaoTokenRespDto.getRefreshToken());
        //제공 조건: OpenID Connect가 활성화 된 앱의 토큰 발급 요청인 경우 또는 scope에 openid를 포함한 추가 항목 동의 받기 요청을 거친 토큰 발급 요청인 경우
        log.info(" [Kakao Service] Id Token ------> {}", kakaoTokenRespDto.getIdToken());
        log.info(" [Kakao Service] Scope ------> {}", kakaoTokenRespDto.getScope());

        return kakaoTokenRespDto.getAccessToken();
    }

    public KakaoUserInfoRespDto getUserInfo(String accessToken) throws IOException {
        KakaoUserInfoRespDto userInfo = WebClient.create(KAUTH_USER_URL_HOST)
                .get()
                .uri(uriBuilder -> uriBuilder
                        .scheme("https")
                        .path("/v2/user/me")
                        .build(true))
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .header(HttpHeaders.CONTENT_TYPE, HttpHeaderValues.APPLICATION_X_WWW_FORM_URLENCODED.toString())
                .retrieve()
                .onStatus(HttpStatusCode::is4xxClientError, clientResponse -> Mono.error(new RuntimeException("Invalid Parameter")))
                .onStatus(HttpStatusCode::is5xxServerError, clientResponse -> Mono.error(new RuntimeException("Internal Server Error")))
                .bodyToMono(KakaoUserInfoRespDto.class)
                .block();

        log.info("[ Kakao Service ] Auth ID ---> {} ", userInfo.getId());
        log.info("[ Kakao Service ] NickName ---> {} ", userInfo.getKakaoAccount().getProfile().getNickName());
//        log.info("[ Kakao Service ] ProfileImageUrl ---> {} ", userInfo.getKakaoAccount().getProfile().getProfileImageUrl());

        User byAuthId = userRepository.findByAuthId(userInfo.getId());

        if(byAuthId == null) {
            System.out.println("test");
            User newUser =
                    User.builder().kakao_auth_id(userInfo.getId())
                            .user_name(userInfo.getKakaoAccount().getProfile().getNickName())
                            .user_role("ROLE_USER")
                            .user_nickname(userInfo.getKakaoAccount().getProfile().getNickName())
                            .user_password(passwordEncoder.encode(userInfo.getKakaoAccount().getProfile().getNickName()))
                            .build();
            try {
                System.out.println("newUser = " + newUser);
                userRepository.saveUser(newUser);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return userInfo;
    }
}
