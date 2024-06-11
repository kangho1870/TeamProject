package com.example.test.service.hospital;

import com.example.test.domain.hospital.Hospital;
import com.example.test.domain.hospital.HospitalRepository;
import com.example.test.dto.hospital.HospitalAppointmentReqDto;
import com.example.test.dto.hospital.HospitalFilterReqDto;
import com.example.test.dto.hospital.HospitalRespDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
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
    public List<HospitalRespDto> getHospitalList(String department, int page, String userAddress, boolean hospitalOpen, boolean nightOpen, boolean emergency) throws Exception {
        List<HospitalRespDto> hospitalRespDtoList = new ArrayList<>();
        Map<String, Object> data = new HashMap<>();
        LocalDate nowDate = LocalDate.now();
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        page = (page - 1) * 20;
        data.put("page", page);
        data.put("hospitalOpen", hospitalOpen ? 1 : 0);
        data.put("nightOpen", nightOpen ? 1 : 0);
        data.put("emergency", emergency ? 0 : 1);
        data.put("department", department);
        data.put("userAddress", userAddress);
        data.put("saturdayOpen", 0);
        data.put("sundayOpen", 0);
        data.put("nowTime", LocalTime.now());
        data.put("nowDay", nowDate.format(dateFormatter));
        System.out.println(data.get("page"));
        System.out.println("data = " + data);

        List<Hospital> hospitalList = hospitalRepository.getHospitalList(data);


        hospitalList.forEach(hospital -> {
            List<String> hospitalDepartMentForHospital = new ArrayList<>();

            hospitalDepartMentForHospital.add(hospital.getHospital_category_name());
            HospitalRespDto hospitalRespDto = hospital.toHospitalRespDto();
            hospitalRespDto.setHospitalCategory(hospitalDepartMentForHospital);

            hospitalRespDtoList.add(hospitalRespDto);
        });

        System.out.println("hospitalRespDtoList = " + hospitalRespDtoList);
        return hospitalRespDtoList;
    }

    @Override
    public boolean addAppointment(HospitalAppointmentReqDto hospitalAppointmentReqDto) throws Exception {
        return hospitalRepository.setAppointment(hospitalAppointmentReqDto.toHospitalAppointment()) > 0;
    }

}
