package model;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Named
@RequestScoped
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppManager implements Serializable {
    private static final long serialVersionUID = 1L;
    @Inject
    private Point point;
    @Inject
    private ResultTable resultTable;
    public void run() {
        DatabaseInteractor databaseInteractor = new DatabaseInteractor();
        Result result = formResult();
        resultTable.add(result);
        databaseInteractor.addResult(result);
    }

    private Result formResult() {
        Result result = new Result();
        Point point_copy = new Point(point);
        result.setPoint(point_copy);
        result.setHit(isHit(point_copy.getX(), point_copy.getY(), point_copy.getR()));
        result.setExecutionTime(0);
        result.setCurrentTime(getTime());
        return result;
    }
    private boolean hitFirstQ(double x, double y, double r) {
        return (Math.pow(x, 2) + Math.pow(y, 2) <= (Math.pow(r, 2) / 4)) && (x >= 0 ) && (y >= 0 );
    }
    private boolean hitSecondQ(double x, double y, double r) {
        return (x <= 0) && (x >= r * (-1)) && (y >= 0) && (y <= r);
    }
    private boolean hitForthQ(double x, double y, double r) {
        return (y >= x - r / 2) && (x >= 0 && y <= 0);
    }

    private boolean isHit(double x, double y, double r) {
        return hitFirstQ(x, y, r) || hitSecondQ(x, y, r) || hitForthQ(x, y, r);
    }
    private String getTime() {
        LocalDateTime localDateTime = LocalDateTime.now();
        return formatTime(String.valueOf(localDateTime.getHour())) + ":"
                + formatTime(String.valueOf(localDateTime.getMinute())) + ":" + formatTime(String.valueOf(localDateTime.getSecond()));
    }
    private String formatTime(String time) {
        if (time.length() < 2) {
            return "0" + time;
        }
        return time;
    }
}
