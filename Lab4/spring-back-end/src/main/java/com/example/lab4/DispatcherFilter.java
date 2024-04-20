package com.example.lab4;

import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import java.io.IOException;

@Component
@WebFilter(urlPatterns = "/*")
@Order(1)
public class DispatcherFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        String acceptHeader = ((HttpServletRequest) request).getHeader("Accept");

        if (acceptHeader != null && acceptHeader.contains("text/html")) {
            request.getRequestDispatcher("/").forward(request, response);
        } else {
            chain.doFilter(request, response);
        }
    }
}
