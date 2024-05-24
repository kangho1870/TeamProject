package com.example.test.controller.hospital;

import com.example.test.dto.CMRespDto;
import com.example.test.dto.hospital.HospitalRespDto;
import com.example.test.service.hospital.HospitalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hospitals")
@RequiredArgsConstructor
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
}
