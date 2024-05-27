package com.example.test.service.hospital;

import com.example.test.domain.hospital.Hospital;
import com.example.test.domain.hospital.HospitalRepository;
import com.example.test.dto.hospital.HospitalFilterReqDto;
import com.example.test.dto.hospital.HospitalRespDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class HospitalServiceImpl implements HospitalService{

    private final HospitalRepository hospitalRepository;

    @Override
    public HospitalRespDto getHospital(int hospitalId) throws Exception{
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

    @Override
    public List<HospitalRespDto> getHospitalList(HospitalFilterReqDto hospitalFilterReqDto) throws Exception {
        List<HospitalRespDto> hospitalRespDtoList = new ArrayList<>();
        Map<String, Object> filterMap = hospitalFilterReqDto.createFilterMap();
//        filterMap.put("dayOfWeek", hospitalFilterReqDto.getDayOfWeek());
        System.out.println("filterMap = " + filterMap);

        System.out.println("hospitalFilterReqDto = " + hospitalRepository.getHospitalList(filterMap));
        hospitalRepository.getHospitalList(filterMap).forEach(hospital -> {
            hospitalRespDtoList.add(hospital.toHospitalRespDto());
        });


        return hospitalRespDtoList;
    }

}
