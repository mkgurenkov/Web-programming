import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import org.json.JSONException;
import org.json.JSONObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.Math;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class AreaCheckerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        long startTime = System.nanoTime();
        RequestDispatcher dispatcher = request.getRequestDispatcher("ajax.jsp");
        PrintWriter out = response.getWriter();
        try {
            JSONObject json = new JSONObject(request.getParameter("data"));
            String x = (String) json.get("x");
            String y = (String) json.get("y");
            String r = (String) json.get("r");
            Validator validator = new Validator(x, y, r);
            if (validator.validate_data()) {
                long endTime = System.nanoTime();
                double executionTime = ((double)(endTime - startTime))/1000;
                HttpSession session = request.getSession();
                setAttributes(session, x, y, r, executionTime);
                dispatcher.forward(request, response);
            } else {
                out.println("ERROR: Invalid data");
            }
        } catch (JSONException | NumberFormatException | NullPointerException e) {
            out.println("ERROR: Invalid data");
        }
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
    private void setAttributes(HttpSession session, String x, String y, String r, double executionTime) {
        List<TableRow> table;
        if (session.getAttribute("table") == null) {
            table = new ArrayList<>();
        } else {
            table = (List<TableRow>) session.getAttribute("table");
        }
        TableRow row = new TableRow();
        row.setX(x);
        row.setY(y);
        row.setR(r);
        row.setExecutionTime(executionTime);
        row.setCurrentTime(getTime());
        if (isHit(Double.parseDouble(x), Double.parseDouble(y), Double.parseDouble(r))) {
            row.setHit("hit");
        } else {
            row.setHit("miss");
        }
        table.add(row);
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

