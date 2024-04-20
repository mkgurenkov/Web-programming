package com.example.lab4.database;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {
    private final ResultRepository resultRepository;
    public ResultService(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }
    public void addResult(Result result) {
        resultRepository.save(result);
    }
}
