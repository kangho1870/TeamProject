package com.example.test.service.mypage;

import com.example.test.dto.mypage.AppointmentResDto;

import java.util.List;

public interface MypageService {

    public List<AppointmentResDto> getAppointment(int userId) throws Exception;
    public Object selectCategory(String category, int userId) throws Exception;
}
