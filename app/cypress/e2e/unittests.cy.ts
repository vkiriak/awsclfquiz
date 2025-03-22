describe('app home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.text', 'Select an Exam')
  })
})


describe('load question page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/quiz/practice-test-0/')
    cy.get('h1').should('have.text', 'Question 1')
  })
})


describe('app exams page', () => {
  it('it shoudl request all list of exmas json files available', () => {
    cy.request('http://localhost:3000/api/exams').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(24);
    })
  })
})

describe('evaluate loading of exam 1 question', () => {
  it('it should load all question for exam 1 json ', () => {
    cy.request('http://localhost:3000/api/questions/json/practice-test-0').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(1);
    })
  })
})
