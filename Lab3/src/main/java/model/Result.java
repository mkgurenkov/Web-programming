package model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "result")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
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
