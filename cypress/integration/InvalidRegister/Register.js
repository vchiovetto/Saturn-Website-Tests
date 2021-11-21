import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import  InvalidRegister  from '../../support/InvalidRegister/index'

Given('that enter into the Saturn website' , () => {
   cy.visit("/");
})

When('close the cookies alert' , () => {
    InvalidRegister.CloseCookiesAlert();
})

And('click in the profile icon' , () => {
    InvalidRegister.ProfileIconClick();
})

And('choose the to register option' , () => {
    InvalidRegister.ChooseToRegisterOption();
})

And('type an invalid email' , () => {
    InvalidRegister.TypeInvalidEmail();
})

And('click in the submit button' , () => {
    InvalidRegister.ClickSubmit();
})

Then('an error message appear' , () => {
    InvalidRegister.ErrorMessage();
})