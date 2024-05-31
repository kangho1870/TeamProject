package com.example.test.dto.hospital;

import com.example.test.domain.hospital.HospitalAppointment;
import lombok.*;

import java.sql.Date;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HospitalAppointmentReqDto {
    private int hospitalId;
    private int userId;
    private Date appointmentDay;
    private LocalTime appointmentTime;
    private String appointmentContent;

    public HospitalAppointment toHospitalAppointment() {
        return HospitalAppointment.builder()
                .hospital_id(hospitalId)
                .user_id(userId)
                .appointment_date(appointmentDay)
                .appointment_time(appointmentTime)
                .appointment_content(appointmentContent)
                .build();
    }
}