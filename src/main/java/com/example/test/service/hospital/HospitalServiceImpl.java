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
import java.util.stream.Collectors;

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
        int page = (hospitalFilterReqDto.getPage() -1) * 20;
        filterMap.put("page", page);
        System.out.println("hospitalFilterReqDto.getPage() = " + hospitalFilterReqDto.getPage());
        System.out.println(page + " +1 번째 부터");
        System.out.println("filterMap = " + filterMap);

        System.out.println("hospitalFilterReqDto = " + hospitalRepository.getHospitalList(filterMap));

//        List<Hospital> hospitalList = hospitalRepository.getHospitalList(filterMap);
//
//        List<Integer> hospitalIds = hospitalList.stream()
//                .map(Hospital::getHospital_id)
//                .collect(Collectors.toList());
//        List<Hospital> hospitalCategory = hospitalRepository.getHospitalCategory(hospitalIds);
        List<String> hospitalDepartMent =  new ArrayList<>();

        List<Hospital> hospitalList = hospitalRepository.getHospitalList(filterMap);


        hospitalList.forEach(hospital -> {
            // 각 병원에 대한 카테고리 리스트 생성
            List<String> hospitalDepartMentForHospital = new ArrayList<>();

            // 카테고리 추가
            hospitalDepartMentForHospital.add(hospital.getHospital_category_name());

            // HospitalRespDto 객체 생성 및 설정
            HospitalRespDto hospitalRespDto = hospital.toHospitalRespDto();
            hospitalRespDto.setHospitalCategory(hospitalDepartMentForHospital);

            // 리스트에 추가
            hospitalRespDtoList.add(hospitalRespDto);
        });

        System.out.println("hospitalDepartMent = " + hospitalDepartMent);


        return hospitalRespDtoList;
    }

}
