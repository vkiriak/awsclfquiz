describe('app home page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.text', 'Select an Exam')
  })
})


describe('100% pass quiz test', () => {
  it('passes', () => {
    /* Load the test quiz questions */
    cy.visit('http://localhost:3000/quiz/practice-test-0/')
    cy.get('h1').should('have.text', 'Question 1')
    
    /* Question 1 */
    cy.get('button').eq(3).should('have.text', 'D. AWS Management Console.').click()
    cy.contains('button', 'Next').click()
    
    /* Question 2 */
    cy.get('button').eq(1).should('have.text', 'B. Automatically provisioning new resources to meet demand.').click()
    cy.get('button').eq(4).should('have.text', 'E. Ability to recover quickly from failures.').click()
    cy.contains('button', 'Review').click()

    /* Review */
    cy.get('h1').should('have.text', 'Review Your Answers')
    cy.contains('button', 'Submit Quiz').click()

    /* Results */
    cy.get('h1').should('have.text', 'Quiz Results - practice-test-0')
    cy.contains('p','Score: 100.00%')
  })
})


describe('50% pass quiz test', () => {
  it('passes', () => {
    /* Load the test quiz questions */
    cy.visit('http://localhost:3000/quiz/practice-test-0/')
    cy.get('h1').should('have.text', 'Question 1')
    
    /* Question 1 */
    cy.get('button').eq(3).should('have.text', 'D. AWS Management Console.').click()
    cy.contains('button', 'Next').click()
    
    /* Question 2 */
    cy.get('button').eq(1).should('have.text', 'B. Automatically provisioning new resources to meet demand.').click()
    // cy.get('button').eq(4).should('have.text', 'E. Ability to recover quickly from failures.').click()
    cy.contains('button', 'Review').click()

    /* Review */
    cy.get('h1').should('have.text', 'Review Your Answers')
    cy.contains('button', 'Submit Quiz').click()

    /* Results */
    cy.get('h1').should('have.text', 'Quiz Results - practice-test-0')
    cy.contains('p','Score: 50.00%')
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
  it('it should load all questions for exam 1 json ', () => {
    cy.request('http://localhost:3000/api/questions/json/practice-test-0').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array').and.to.have.length(2);
      expect(response.body[0].correctAnswer).to.eq('D');
      expect(response.body[1].correctAnswer).to.eq('B, E');
    })
  })
})
