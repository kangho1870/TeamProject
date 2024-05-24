package com.example.test.api.service;

import com.example.test.api.domain.ApiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ApiService {

    private final ApiRepository apiRepository;

    public boolean saveData(Map<String, Object> data) throws Exception {

        Map<String, Object> medicalInstitInfo = (Map<String, Object>) data.get("MedicalInstitInfo");
        Map<String, Object> body = (Map<String, Object>) medicalInstitInfo.get("body");
        Map<String, Object> items = (Map<String, Object>) body.get("items");
        List<Map<String, Object>> itemList = (List<Map<String, Object>>) items.get("item");

        Set<String> examPartSet = new HashSet<>();
        List<String> departmentMap = new ArrayList<>();


        // 1. hospital add
        for(int i = 0; i < itemList.size(); i++) {
            if(itemList.get(i).get("medical_instit_kind") == "응급의료기관이외") {
                itemList.get(i).put("medical_instit_kind", 0);
            }else {
                itemList.get(i).put("medical_instit_kind", 1);
            }
            itemList.get(i).put("id", (i + 1));

            apiRepository.addData(itemList.get(i));
        }

        // 2. hospital_category_mst add
        for(Map<String, Object> item : itemList) {
            String examPart = (String) item.get("exam_part");
            if(examPart != null && !examPart.isEmpty()) {
                String[] parts = examPart.split(",");
                for(String part : parts) {
                    examPartSet.add(part.trim());
                }
            }

        }
        List<String> departmentList = new ArrayList<>(examPartSet);

        apiRepository.addDepartment(departmentList);

        // 3. hospital_category add
        for(int i = 0; i < itemList.size(); i++) {
            Map<String, Object> stringObjectMap = itemList.get(i);
            String examPart = (String) stringObjectMap.get("exam_part");
            String[] splitPart = examPart.split(",");

            for(String part : splitPart) {
                Map<String, Object> hospitalDepartmentMap = new HashMap<>();
                hospitalDepartmentMap.put("hospital_id", (i + 1));
                hospitalDepartmentMap.put("department", part);
                apiRepository.addHospitalDepartment(hospitalDepartmentMap);
            }
        }

        // 4. hospital_time add
        for(int i = 0; i < itemList.size(); i++) {
            Map<String, Object> timeList = new HashMap<>();

            timeList.put("id", (i + 1));
            timeList.put("hospitalName", itemList.get(i).get("instit_nm"));
            timeList.put("Monday", itemList.get(i).get("Monday"));
            timeList.put("Tuesday", itemList.get(i).get("Tuesday"));
            timeList.put("Wednesday", itemList.get(i).get("Wednesday"));
            timeList.put("Thursday", itemList.get(i).get("Thursday"));
            timeList.put("Friday", itemList.get(i).get("Friday"));
            timeList.put("Saturday", itemList.get(i).get("Saturday"));
            timeList.put("Sunday", itemList.get(i).get("Sunday"));
            timeList.put("holiday", itemList.get(i).get("holiday"));

            System.out.println("timeList = " + timeList.get("hospitalName"));
            apiRepository.addTime(timeList);
        }



        return true;
    }
}
