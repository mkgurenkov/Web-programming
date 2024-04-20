package com.example.lab4.utils;

import com.example.lab4.database.Point;
import com.example.lab4.database.Result;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

public class ResultGenerator {
    public static Result generate(Point point) {
        long startTime = System.nanoTime();
        Result result = new Result();
        result.setPoint(point);
        result.setHit(isHit(point.getX(), point.getY(), point.getR()));
        result.setExecutionTime(0);
        result.setCurrentTime(getTime());
        long endTime = System.nanoTime();
        result.setExecutionTime(((double)(endTime - startTime))/1000);
        return result;
    }
    private static boolean hitFirstQ(double x, double y, double r) {
        return (Math.pow(x, 2) + Math.pow(y, 2) <= (Math.pow(r, 2) / 4)) && (x >= 0 ) && (y >= 0 );
    }
    private static boolean hitSecondQ(double x, double y, double r) {
        return (x <= 0) && (x >= r * (-1)) && (y >= 0) && (y <= r);
    }
    private static boolean hitForthQ(double x, double y, double r) {
        return (y >= x - r / 2) && (x >= 0 && y <= 0);
    }

    private static boolean isHit(double x, double y, double r) {
        return hitFirstQ(x, y, r) || hitSecondQ(x, y, r) || hitForthQ(x, y, r);
    }
    private static String getTime() {
        LocalDateTime localDateTime = LocalDateTime.now();
        return formatTime(String.valueOf(localDateTime.getHour())) + ":"
                + formatTime(String.valueOf(localDateTime.getMinute())) + ":" + formatTime(String.valueOf(localDateTime.getSecond()));
    }
    private static String formatTime(String time) {
        if (time.length() < 2) {
            return "0" + time;
        }
        return time;
    }
}
