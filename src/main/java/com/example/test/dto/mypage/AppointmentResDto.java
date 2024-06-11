package com.example.test.dto.mypage;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentResDto {
    private String userName;
    private String userNickname;
    private Date appointmentDate;
    private Time appointmentTime;
    private String appointmentContent;
    private String hospitalName;
    private String hospitalAddress;
    private String hospitalOrganLoc;
    private String hospitalPhone;

}
