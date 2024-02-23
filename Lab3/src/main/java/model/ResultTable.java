package model;

import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;
import lombok.Data;

import java.io.Serializable;
import java.util.List;
@Named
@SessionScoped
@Data
public class ResultTable implements Serializable {
    private static final long serialVersionUID = 1L;
    private List<Result> results;
    @PostConstruct
    public void init() {
        results = new DatabaseInteractor().getResults();
    }
    public void add(Result result) {
        results.add(result);
    }
    public void clear() {
        results.clear();
        new DatabaseInteractor().clear();
    }
}
