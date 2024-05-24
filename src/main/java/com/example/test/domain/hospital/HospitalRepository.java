package com.example.test.domain.hospital;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HospitalRepository {

    public List<Hospital> getHospitalById(int hospitalId) throws Exception;
}
