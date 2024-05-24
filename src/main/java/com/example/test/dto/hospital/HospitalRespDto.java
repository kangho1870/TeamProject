package com.example.test.dto.hospital;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HospitalRespDto {
    private int hospitalId;
    private String hospitalName;
    private String hospitalAddress;
    private String hospitalOrganLoc;
    private String[] hospitalCategory;
}
