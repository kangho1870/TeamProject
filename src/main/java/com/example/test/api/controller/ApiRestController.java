package com.example.test.api.controller;

import com.example.test.api.ApiExplorer;
import com.example.test.api.service.ApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ApiRestController {
    @Autowired
    private ApiExplorer apiExplorer;

    private final ApiService apiService;

    @GetMapping("/api/hospital")
    public ResponseEntity<?> getApiData() {
        Map<String, Object> data = new HashMap<>();
        try {
            data = apiExplorer.data();
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }

        System.out.println("data = " + data);

        try {
            apiService.saveData(data);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return ResponseEntity.ok().body(null);
    }
}
