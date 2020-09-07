import { navigateTo } from "../support/page_objects/navigationPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"
//import { browser } from "protractor"
//import { fn } from "cypress/types/jquery"

//The following 2 variables are for configuring selective tests with certain browsers

const runOn = (browser, fn) => {
    if (Cypress.isBrowser(browser)) {
        fn()
    }
}

const ignoreOn = (browser, fn) => {
    if (!Cypress.isBrowser(browser)) {
        fn()
    }
}

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.openHomePage()
    })

//"ignoreOn" is used below to indicate that you do not want to run this particular test on any given browser, so it'll be skipped over    
//ignoreOn('firefox', () => {
    it('verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage() 
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
 
     })
//})

    

    it(' should submit Inline and Basic form and select tomorrow date in the calendar', () =>  {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Felix', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')

        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)

        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Felix', 'Islava')
        onSmartTablePage.updateAgeByFirstName('Felix', '39')
        onSmartTablePage.deleteRowByIndex(1) //Entered "1" because we want to delete the 2nd row on the table
    })

})
