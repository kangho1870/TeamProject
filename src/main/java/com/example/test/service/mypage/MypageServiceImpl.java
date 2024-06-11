package com.example.test.service.mypage;

import com.example.test.domain.mypage.MypageRepository;
import com.example.test.dto.mypage.AppointmentResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MypageServiceImpl implements MypageService{
    private final MypageRepository mypageRepository;

    @Override
    public List<AppointmentResDto> getAppointment(int userId) throws Exception {
        List<AppointmentResDto> appointments = new ArrayList<>();

        mypageRepository.getAppointments(userId).forEach(appointment -> {
            appointments.add(appointment.toAppointmentResDto());
        });

        return appointments;
    }

    public Object selectCategory(String category, int userId) throws Exception {
        Object appointmentResDtos = new ArrayList<>();

        if(category.equals("articles")) {

        }
        if(category.equals("appointment")) {
            appointmentResDtos = getAppointment(userId);
            return appointmentResDtos;
        }
        if(category.equals("medicalHistory")) {

        }
        if(category.equals("favoritesHospital")) {

        }

        return appointmentResDtos;
    }
}
