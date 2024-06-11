package com.example.test.controller.User;

import com.example.test.dto.CMRespDto;
import com.example.test.dto.kakao.KakaoUserInfoRespDto;
import com.example.test.service.auth.kakao.KakaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.core.OAuth2Token;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/login")
@RequiredArgsConstructor
public class UserController {

    private final KakaoService kakaoService;

    @GetMapping("/kakao")
    public ResponseEntity<?> kakao(@RequestParam("code") String code) {
        System.out.println("code = " + code);
        String accessToken = null;
        OAuth2Token oAuth2Token = null;
        try {
            accessToken = kakaoService.getAccessTokenFromKakao(code);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "token error", accessToken));
        }



        KakaoUserInfoRespDto userInfo = null;
        try {
            userInfo = kakaoService.getUserInfo(accessToken);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "token error", accessToken));
        }



        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", userInfo));
    }


}
