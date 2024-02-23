package model;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Named;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
@Entity
@Table(name = "point")
@Named
@RequestScoped
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Point implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "x")
    private Double x;
    @Column(name = "y")
    private Double y;
    @Column(name = "r")
    private double r;
    @OneToOne(mappedBy = "point", cascade = CascadeType.ALL)
    private Result result;
    public Point(Point point) {
        this.result = point.getResult();
        this.id = point.getId();
        this.x = point.getX();
        this.y = point.getY();
        this.r = point.getR();
    }
}
