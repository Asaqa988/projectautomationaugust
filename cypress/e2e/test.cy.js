
/// <reference types= "cypress" />


const expectedCurrency = "SAR"
const expectedAttribute = "lang"
const expectedLanguage = "en"

describe('Aspire Test Cases', () => {
  it.skip('check the currency is SAR', () => {
    cy.visit('https://www.almosafer.com/en')

    cy.get('.cta__saudi').click()

    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedCurrency)
  })

  it('Check the lanaguage of the website', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi').click()

    cy.get('html').should('have.attr',expectedAttribute,expectedLanguage)

    
  });
})