package com.example.test.service.hospital;

import com.example.test.dto.hospital.HospitalAppointmentReqDto;
import com.example.test.dto.hospital.HospitalFilterReqDto;
import com.example.test.dto.hospital.HospitalRespDto;

import java.util.List;

public interface HospitalService {
    public HospitalRespDto getHospital(int hospitalId) throws Exception;
    public List<HospitalRespDto> getHospitalList(
            String department,
            int page,
            String userAddress,
            boolean hospitalOpen,
            boolean nightOpen,
            boolean emergency
    ) throws Exception;
    public boolean addAppointment(HospitalAppointmentReqDto hospitalAppointmentReqDto) throws Exception;
}
