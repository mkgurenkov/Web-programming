package support;

public class Validator {
    private final String str_x;
    private final String str_y;
    private final String str_r;
    public Validator(String str_x, String str_y, String str_r) {
        this.str_x = str_x;
        this.str_y = str_y;
        this.str_r = str_r;
    }
    public boolean validate_data() throws NumberFormatException {
        return validate_x() && validate_y() && validate_r();
    }
    private boolean validate_x() throws NumberFormatException {
        double x = Double.parseDouble(str_x);
        return (x >= -4) && (x <= 4);
    }
    private boolean validate_y() throws NumberFormatException {
        double y = Double.parseDouble(str_y);
        return (y > -3) && (y < 3);
    }
    private boolean validate_r() throws NumberFormatException {
        int r = Integer.parseInt(str_r);
        return (r > 0) && (r <= 5);
    }
}
