import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import PaymentsMethodsLength from '../../support/PaymentsMethodsLength';
import ServicesOptions from '../../support/ServicesOptions';


Given('that enter into the Saturn website' , () => {
   cy.visit("/");
})

When('close the cookies alert' , () => {
    ServicesOptions.CloseCookiesAlert();
})

Then('valid the Services Options' , () => {
    ServicesOptions.ServicesOptions();
})

