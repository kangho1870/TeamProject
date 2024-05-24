package com.example.test.service.hospital;

import com.example.test.dto.hospital.HospitalRespDto;

public interface HospitalService {
    public HospitalRespDto getHospital(int hospitalId) throws Exception;
}
