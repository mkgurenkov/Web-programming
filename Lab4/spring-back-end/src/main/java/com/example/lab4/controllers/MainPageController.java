package com.example.lab4.controllers;

import com.example.lab4.database.Point;
import com.example.lab4.database.PointService;
import com.example.lab4.database.Result;
import com.example.lab4.database.ResultService;
import com.example.lab4.utils.ResultGenerator;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainPageController {
    private final ResultService resultService;
    private final PointService pointService;
    public MainPageController(ResultService resultService, PointService pointService) {
        this.resultService = resultService;
        this.pointService = pointService;
    }
    @GetMapping("/main-page")
    public ResponseEntity<List<Result>> doGet(@RequestParam(required = false) Double x, Double y, Double r) {
        if (x == null && y == null && r == null) {
            List<Result> list = resultService.getAllResults();
            return new ResponseEntity<>(list, HttpStatus.OK);
        } else {
            Point point = new Point();
            point.setX(x);
            point.setY(y);
            point.setR(r);
            Result result = ResultGenerator.generate(point);
//        result.setUsername(authorisationBean.getUsername());
            result.setUsername("sample username");
            pointService.addPoint(point);
            resultService.addResult(result);
            List<Result> list = new ArrayList<>();
            list.add(result);
            return new ResponseEntity<>(list, HttpStatus.OK);
        }
    }
    @GetMapping("/logout")
    public ResponseEntity<String> doGet(HttpServletRequest request, HttpServletResponse response) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
//    @PostMapping("/main-page")
//    public ResponseEntity<Result> doPost(@RequestBody Point point) {
//        Result result = ResultGenerator.generate(point);
////        result.setUsername(authorisationBean.getUsername());
//        result.setUsername("sample username");
//        pointService.addPoint(point);
//        resultService.addResult(result);
//        return new ResponseEntity<>(result, HttpStatus.OK);
//        //[{x: "1", y: "2", r: "2", hit: "hit", executionTime: "2312", currentTime: "17:00"}]
//    }
}

