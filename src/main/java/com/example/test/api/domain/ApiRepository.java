package com.example.test.api.domain;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ApiRepository {

    public int addData(Map<String, Object> map);
    public int addTime(Map<String, Object> map);
    public int addDepartment(List<String> list);
    public int addHospitalDepartment(Map<String, Object> map);
}
