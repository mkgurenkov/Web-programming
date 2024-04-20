package com.example.lab4.database;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PointService {
    private final PointRepository pointRepository;
    public PointService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }
    public void addPoint(Point point) {
        pointRepository.save(point);
    }
}
