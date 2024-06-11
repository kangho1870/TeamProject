package com.example.test.domain.mypage;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MypageRepository {

    public List<MypageAppointment> getAppointments(int userId) throws Exception;
}
