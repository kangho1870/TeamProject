package com.example.test.controller.hospital;

import com.example.test.dto.CMRespDto;
import com.example.test.dto.hospital.HospitalAppointmentReqDto;
import com.example.test.dto.hospital.HospitalFilterReqDto;
import com.example.test.dto.hospital.HospitalRespDto;
import com.example.test.service.hospital.HospitalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hospitals")
public class HospitalController {

    private final HospitalService hospitalService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getHospitalById(@PathVariable int id) {
        HospitalRespDto hospitalRespDto = new HospitalRespDto();
        try {
            hospitalRespDto = hospitalService.getHospital(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed load", hospitalRespDto));
        }

        return ResponseEntity.ok().body(new CMRespDto<>(1, "success load", hospitalRespDto));
    }

    @PostMapping("")
    public ResponseEntity<?> getHospitalList(@RequestBody HospitalFilterReqDto hospitalFilterReqDto) {
        List<HospitalRespDto> hospitalRespDtoList = new ArrayList<>();
        try {
            hospitalRespDtoList = hospitalService.getHospitalList(hospitalFilterReqDto);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed load", hospitalRespDtoList));
        }

        return ResponseEntity.ok().body(new CMRespDto<>(1, "success load", hospitalRespDtoList));
    }

    @PostMapping("/appointment")
    public ResponseEntity<?> hospitalAppointment(@RequestBody HospitalAppointmentReqDto hospitalAppointmentReqDto) {
        System.out.println("hospitalAppointmentReqDto = " + hospitalAppointmentReqDto);
        boolean status = false;
        try {
            status = hospitalService.addAppointment(hospitalAppointmentReqDto);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail appointment", status));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success appointment", status));
    }
}
