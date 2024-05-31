package com.example.test.domain.hospital;

import lombok.*;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HospitalAppointment {
    private int hospital_id;
    private int user_id;
    private LocalTime appointment_time;
    private String appointment_content;
    private Date appointment_date;
    private LocalDateTime create_date;
}