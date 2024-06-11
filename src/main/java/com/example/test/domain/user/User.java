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
public class User {
    private int user_id;
    private String user_name;
    private String user_email;
    private String user_password;
    private int user_phone;
    private String user_nickname;
    private int user_gender;
    private Long kakao_auth_id;
    private String user_role;
    private LocalDateTime create_date;
    private LocalDateTime update_date;


}
