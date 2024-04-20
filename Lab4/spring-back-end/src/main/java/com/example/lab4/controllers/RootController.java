package com.example.lab4.controllers;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Controller
public class RootController {

    @GetMapping(value = "/", produces = "text/html")
    public String sendFrontApplication() {
        return "forward:index.html";
    }
//    @GetMapping(value = "/", produces = "application/json")
//    @ResponseBody
//    public ResponseEntity<Object> sendAuthorisationStatus(@RequestParam String param) {
//        if (param.equals("is_authorised")) {
//            return new ResponseEntity<>(authorisationBean.isAuthorised(), HttpStatus.OK);
//        } else if (param.equals("get_username")) {
//            return new ResponseEntity<>(Map.of("username", authorisationBean.getUsername()), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//    }
}
