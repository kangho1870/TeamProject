package com.example.test.domain.hospital;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface HospitalRepository {

    public List<Hospital> getHospitalById(int hospitalId) throws Exception;
    public List<Hospital> getHospitalList(Map<String, Object> map) throws Exception;
}
