package com.example.test.domain.hospital;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface HospitalRepository {

    public Hospital getHospitalById(Map<String, Object> map) throws Exception;
    public List<Hospital> getHospitalList(Map<String, Object> map) throws Exception;
    public List<Hospital> getHospitalCategory(List<Integer> ids) throws Exception;

    public List<Hospital> getHospitalTimeById(Map<String, Object> map) throws Exception;
}
