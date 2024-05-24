package com.example.test.service.hospital;

import com.example.test.domain.hospital.Hospital;
import com.example.test.domain.hospital.HospitalRepository;
import com.example.test.dto.hospital.HospitalRespDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HospitalServiceImpl implements HospitalService{

    private final HospitalRepository hospitalRepository;

    @Override
    public HospitalRespDto getHospital(int hospitalId) {
        HospitalRespDto hospitalRespDto = new HospitalRespDto();
        List<String> hospitalDepartMent =  new ArrayList<>();

        try {
            List<Hospital> hospitalByIdList = hospitalRepository.getHospitalById(hospitalId);
            for(Hospital hospital : hospitalByIdList) {
                hospitalDepartMent.add(hospital.getHospital_category_name());
            }
            hospitalRespDto = hospitalByIdList.get(0).toHospitalRespDto();
            hospitalRespDto.setHospitalCategory(hospitalDepartMent);
            return hospitalRespDto;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return hospitalRespDto;
    }
}
