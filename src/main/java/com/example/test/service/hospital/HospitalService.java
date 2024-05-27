package com.example.test.service.hospital;

import com.example.test.dto.hospital.HospitalFilterReqDto;
import com.example.test.dto.hospital.HospitalRespDto;

import java.util.List;

public interface HospitalService {
    public HospitalRespDto getHospital(int hospitalId) throws Exception;
    public List<HospitalRespDto> getHospitalList(HospitalFilterReqDto hospitalFilterReqDto) throws Exception;
}
