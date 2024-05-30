package com.example.test.dto.hospital;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HospitalRespDto {
    private int hospitalId;
    private String hospitalName;
    private String hospitalAddress;
    private String hospitalOrganLoc;
    private List<String> hospitalCategory = new ArrayList<>();
    private String hospitalPhone;
    private double hospitalLatitude;
    private double hospitalLongitude;
    private Time startTime;
    private Time endTime;
    private int totalCount;
    private Map<String, Object> time;
}
