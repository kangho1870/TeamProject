package com.example.test.domain.mypage;

import com.example.test.dto.mypage.AppointmentResDto;

import java.sql.Time;
import java.util.Date;

public class MypageAppointment {
    private String user_name;
    private String user_nickname;
    private Date appointment_date;
    private Time appointment_time;
    private String appointment_content;
    private String hospital_name;
    private String hospital_address;
    private String hospital_organ_loc;
    private String hospital_phone;

    public AppointmentResDto toAppointmentResDto() {
        return AppointmentResDto.builder()
                .userName(user_name)
                .userNickname(user_nickname)
                .appointmentDate(appointment_date)
                .appointmentTime(appointment_time)
                .appointmentContent(appointment_content)
                .hospitalName(hospital_name)
                .hospitalAddress(hospital_address)
                .hospitalOrganLoc(hospital_organ_loc)
                .hospitalPhone(hospital_phone)
                .build();
    }
}
