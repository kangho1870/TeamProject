package com.example.test.domain.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class KakaoUser {
    private Long userCode;
    private Long kakaoId;
    private String kakaoProfileImg;
    private String kakaoNickname;
    private String kakaoEmail;
    private String userRole;
    private LocalDateTime createTime;

}
