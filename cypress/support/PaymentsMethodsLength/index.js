import{ELEMENTS} from './element'

class PaymentsMethodsLength {
    CloseCookiesAlert() {
        cy.get(ELEMENTS.CookieAlert).click();
    }

    PaymentsMethods() {
        cy.get(ELEMENTS.Footer).scrollIntoView().eq(0).children().eq(0)
        .children().eq(0).children().eq(0).children().eq(1)
        .children().eq(0).children().eq(1).children().should('have.length' , 12);
    }
   
}

export default new PaymentsMethodsLength();