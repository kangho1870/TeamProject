package com.example.test.domain.hospital;

import com.example.test.dto.hospital.HospitalRespDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hospital {
    private int hospital_id;
    private String hospital_name;
    private String hospital_address;
    private String hospital_organ_loc;
    private String hospital_category_name;
    private String hospital_phone;
    private double hospital_latitude;
    private double hospital_longitude;
    private String day_of_week;
    private Time start_time;
    private Time end_time;
    private int total_count;


    public HospitalRespDto toHospitalRespDto() {
        return HospitalRespDto.builder()
                .hospitalId(hospital_id)
                .hospitalName(hospital_name)
                .hospitalAddress(hospital_address)
                .hospitalOrganLoc(hospital_organ_loc)
                .hospitalPhone(hospital_phone)
                .hospitalLatitude(hospital_latitude)
                .hospitalLongitude(hospital_longitude)
                .totalCount(total_count)
                .startTime(start_time)
                .endTime(end_time)
                .build();
    }
}
