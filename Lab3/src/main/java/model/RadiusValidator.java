package model;

import jakarta.faces.component.UIComponent;
import jakarta.faces.application.FacesMessage;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.Validator;
import jakarta.faces.validator.FacesValidator;
import jakarta.faces.validator.ValidatorException;

@FacesValidator("radiusValidator")
public class RadiusValidator implements Validator {

    @Override
    public void validate(FacesContext context, UIComponent component, Object value) throws ValidatorException {
        if (value == null || (double) value == 0) {
            System.out.println("сработал валидатор радиуса");
            FacesMessage msg = new FacesMessage("Установите R");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(msg);
        }
    }
}

