package com.example.lab4.database;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "result")
@Data
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "username")
    private String username;
    @OneToOne
    @JoinColumn(name = "point_id")
    private Point point;
    @Column(name = "hit")
    private boolean hit;
    @Column(name = "execution_time")
    private double executionTime;
    @Column(name = "cur_time")
    private String currentTime;
}