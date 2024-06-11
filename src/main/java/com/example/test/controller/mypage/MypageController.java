package com.example.test.controller.mypage;

import com.example.test.dto.CMRespDto;
import com.example.test.service.mypage.MypageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mypage")
@RequiredArgsConstructor
public class MypageController {
    private final MypageService mypageService;

    @GetMapping("/{category}")
    public ResponseEntity<?> getCategoryContent(@PathVariable("category") String category, @RequestHeader("userId") int userId) {
        Object responseEntity = new Object();
        try {
            responseEntity = mypageService.selectCategory(category, userId);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail", responseEntity));
        }
        return ResponseEntity.ok().body(new CMRespDto<>(1, "success", responseEntity));
    }
}
