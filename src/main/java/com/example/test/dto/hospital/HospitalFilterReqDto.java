package com.example.test.dto.hospital;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class HospitalFilterReqDto {
    private String department;
    private String userAddress;
    private boolean hospitalOpen;
    private boolean nightOpen;
    private boolean emergency;
    private int page;

    public Map<String, Object> createFilterMap() {
        LocalDate nowDate = LocalDate.now();
        DayOfWeek dayOfWeek = nowDate.getDayOfWeek();
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        LocalTime now = LocalTime.now();
        LocalTime night = LocalTime.of(19, 00, 00);
        Map<String, Object> filterMap = new HashMap<String, Object>();

        filterMap.put("department", department);
        filterMap.put("dayOfWeek", dayOfWeek);
        filterMap.put("address", userAddress);
        filterMap.put("nowDay", nowDate.format(dateFormatter));
        filterMap.put("hospitalOpen", hospitalOpen ? now : LocalTime.of(10, 00, 00));
        filterMap.put("nightOpen", nightOpen ? night : LocalTime.of(10, 00, 00));
        filterMap.put("emergency", emergency ? 0 : 1);
        filterMap.put("page", page);
        return filterMap;
    }

    public static String getKoreanDayOfWeek(DayOfWeek dayOfWeek) {
        switch (dayOfWeek) {
            case MONDAY:
                return "MONDAY";
            case TUESDAY:
                return "TUESDAY";
            case WEDNESDAY:
                return "WEDNESDAY";
            case THURSDAY:
                return "THURSDAY";
            case FRIDAY:
                return "FRIDAY";
            case SATURDAY:
                return "SATURDAY";
            case SUNDAY:
                return "SUNDAY";
            default:
                return "";
        }
    }
}
