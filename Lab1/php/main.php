<?php
    $arr = json_decode($_POST["data"], true);
    $xValue = $arr["x"];
    $yValue = $arr["y"];
    $rValue = $arr["r"];

    echo is_hit($xValue, $yValue, $rValue); //сформировать нормальный response

    function hit_first_q($x, $y, $r) {
        return (pow($x, 2) + pow($y, 2) <= (pow($r, 2) / 2)) && ($x >= 0 ) && ($y >= 0 );
    }

    function hit_second_q($x, $y, $r) {
        return ($x <= 0) && ($x >= $r * (-1)) && ($y >= 0) && ($y <= $r);
    }

    function hit_fourth_q($x, $y, $r) {
        return ($y >= $x - $r / 2) && ($x >= 0 && $y <= 0);
    }

    function is_hit($x, $y, $r) {
        if (hit_first_q($x, $y, $r) || hit_second_q($x, $y, $r) || hit_fourth_q($x, $y, $r)) {
            return "hit";
        } else {
            return "miss";
        }
    }
?>