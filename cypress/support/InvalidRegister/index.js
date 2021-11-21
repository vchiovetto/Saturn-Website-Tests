import{ELEMENTS} from './element'

const invalidEmail = "invalidEmail";

class InvalidRegister {
    CloseCookiesAlert() {
        cy.get(ELEMENTS.CookieAlert).click();
    }

    ProfileIconClick() {
        cy.get(ELEMENTS.ProfileIcon).click();   
    }

    ChooseToRegisterOption() {
        cy.get(ELEMENTS.RegisterOption).click()
        cy.contains("Neuer Kunde?").should("be.visible");
    }

    TypeInvalidEmail() {
        cy.get(ELEMENTS.Email).type(invalidEmail);
    }

    ClickSubmit() {
        cy.get(ELEMENTS.Submit).click();
    }

    ErrorMessage() {
        cy.get(ELEMENTS.ErrorMessage).should("be.visible")
        cy.get(ELEMENTS.ErrorMessage).should("have.text" , "Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    }
}

export default new InvalidRegister();