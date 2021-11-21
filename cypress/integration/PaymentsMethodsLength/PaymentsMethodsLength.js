import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import PaymentsMethodsLength from '../../support/PaymentsMethodsLength';


Given('that enter into the Saturn website' , () => {
   cy.visit("/");
})

When('close the cookies alert' , () => {
    PaymentsMethodsLength.CloseCookiesAlert();
})

Then('valid that are 12 Payments Methods' , () => {
    PaymentsMethodsLength.PaymentsMethods();
})

