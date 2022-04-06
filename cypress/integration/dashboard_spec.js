describe('Sick Trick Wish List',() => {
  it('User can visit http://localhost:3000/ and see the title, form and tricks displayed.', () => {
    cy.visit('http://localhost:3000/')
        .contains("Sick Trick Wish List")
      .get('form')
      .get('.trick-section')
  })

  it('User should be able to select inputs and they are displayed on the page', () => {
    cy.visit('http://localhost:3000/')
      .get('form')
        .get('#stance').select(1).should('have.value', 'Regular')
        .get('#name').type('Boogie').should('have.value', 'Boogie')
        .get('#obstacle').select(1).should('have.value', 'Flatground')
        .get('#link').type('https://www.youtube.com/watch?v=-73chmC1rkI').should('have.value', 'https://www.youtube.com/watch?v=-73chmC1rkI')
  })

  it('User should be able to create a new trick', () => {
    cy.visit('http://localhost:3000/')
      .get('form')
        .get('#stance').select(1).should('have.value', 'Regular')
        .get('#name').type('Boogie').should('have.value', 'Boogie')
        .get('#obstacle').select(1).should('have.value', 'Flatground')
        .get('#link').type('https://www.youtube.com/watch?v=-73chmC1rkI').should('have.value', 'https://www.youtube.com/watch?v=-73chmC1rkI')
        .get('input[type=submit]').click()

        .get('.trick-section')
          .contains('Regular Boogie')
        .get('.trick-section')
          .contains('Flatground')
        .get('.trick-section')
          .contains('https://www.youtube.com/watch?v=-73chmC1rkI')
  })
})
