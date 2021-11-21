import{ELEMENTS} from './element'

const options = ['Übersicht aller Services', 'Hilfe & FAQ', 'Smartphone Reparatur', 
'Versandkosten', 'Bestellservice', 'Technikberatung@Home', 'Newsletter Anmeldung',
'Mietservice', 'Nachhaltigkeit mit Saturn', 'Altgeräteentsorgung', 'Marktabholung',
'Rückgabe/Retoure', 'Gutschein Card', 'Produktrückruf']

class ServicesOptions {

    CloseCookiesAlert() {
        cy.get(ELEMENTS.CookieAlert).click();
    }

    ServicesOptions() {
        options.map((option,index) => 
            cy.get(ELEMENTS.Footer).scrollIntoView().eq(0).children().eq(0)
            .children().eq(0).children().eq(1).children().eq(2)
            .children().eq(1).children().eq(0).children().eq(index).should("have.text" , option)
        )
    }
}

export default new ServicesOptions();