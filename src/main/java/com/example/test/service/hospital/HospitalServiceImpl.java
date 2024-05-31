package com.example.test.service.hospital;

import com.example.test.domain.hospital.Hospital;
import com.example.test.domain.hospital.HospitalRepository;
import com.example.test.dto.hospital.HospitalAppointmentReqDto;
import com.example.test.dto.hospital.HospitalFilterReqDto;
import com.example.test.dto.hospital.HospitalRespDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
        Map<String, Object> data = new HashMap<>();
        Map<String, Object> time = new HashMap<>();
        List<String> categorys = new ArrayList<>();
        LocalDate nowDate = LocalDate.now();
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        data.put("hospitalId", hospitalId);
        data.put("nowDate", nowDate.format(dateFormatter));

        List<Hospital> hospitalTimeById = hospitalRepository.getHospitalTimeById(data);
        for(Hospital hospital : hospitalTimeById){
            time.put(hospital.getDay_of_week(), hospital.getStart_time() + "~" + hospital.getEnd_time());
        }

        Hospital hospital = hospitalRepository.getHospitalById(data);
        categorys.add(hospital.getHospital_category_name());
        hospitalRespDto = hospital.toHospitalRespDto();

        hospitalRespDto.setHospitalCategory(categorys);
        hospitalRespDto.setTime(time);

        return hospitalRespDto;
    }

    @Override
    public List<HospitalRespDto> getHospitalList(HospitalFilterReqDto hospitalFilterReqDto) throws Exception {
        List<HospitalRespDto> hospitalRespDtoList = new ArrayList<>();
        Map<String, Object> filterMap = hospitalFilterReqDto.createFilterMap();
        int page = (hospitalFilterReqDto.getPage() -1) * 20;
        filterMap.put("page", page);

        List<Hospital> hospitalList = hospitalRepository.getHospitalList(filterMap);

        hospitalList.forEach(hospital -> {
            List<String> hospitalDepartMentForHospital = new ArrayList<>();

            hospitalDepartMentForHospital.add(hospital.getHospital_category_name());
            HospitalRespDto hospitalRespDto = hospital.toHospitalRespDto();
            hospitalRespDto.setHospitalCategory(hospitalDepartMentForHospital);

            hospitalRespDtoList.add(hospitalRespDto);
        });
        return hospitalRespDtoList;
    }

    @Override
    public boolean addAppointment(HospitalAppointmentReqDto hospitalAppointmentReqDto) throws Exception {
        return hospitalRepository.setAppointment(hospitalAppointmentReqDto.toHospitalAppointment()) > 0;
    }

}
