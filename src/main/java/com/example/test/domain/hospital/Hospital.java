package com.example.test.domain.hospital;

import com.example.test.dto.hospital.HospitalRespDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hospital {
    private int hospital_id;
    private String hospital_name;
    private String hospital_address;
    private String hospital_organ_loc;
    private String[] hospital_category;

    public HospitalRespDto toHospitalRespDto() {
        return HospitalRespDto.builder()
                .hospitalId(hospital_id)
                .hospitalName(hospital_name)
                .hospitalAddress(hospital_address)
                .hospitalOrganLoc(hospital_organ_loc)
                .hospitalCategory(hospital_category)
                .build();
    }
}
