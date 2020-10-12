// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('apitest', (queryname,bodytextprefix,bodytextsuffix,bodytextsuffix2) => {
   let agency = ["BCC","CCC"]
    let year = [2020,2019,2018,2017,2016,2015]
    for(let i=0;i<agency.length; i++){
for (let j=0; j<year.length; j++){
    cy.log(queryname+agency[i]+year[j])
    cy.writeFile('./cypress/fixtures/apiresult.json','{"queryname":"'+queryname+agency[i]+year[j]+'"'+',',{ flag: 'a+' })
    cy.request({
      method: 'POST',
      url: 'https://pinellas-sits-qa.azurewebsites.net/snowflake/data/search',
      body:  bodytextprefix+year[j]+bodytextsuffix+agency[i]+bodytextsuffix2,
  headers: {
     // 'Cookie': 'cookieValueGoesHere',
      'content-Type':'application/json'
  }}).then(response => {
  
    expect(response.status).to.eq(200)
    cy.writeFile('./cypress/fixtures/apiresult.json','\n'+'"staus":'+response.status+',',{ flag: 'a+' })
    if(expect(response.status).to.eq(200)){
      cy.writeFile('./cypress/fixtures/apiresult.json','\n'+'"teststaus":"passed"'+',',{ flag: 'a+' })
    }
  
      expect(response.body).to.not.be.null
      expect(response.headers['content-type']).to.eq('application/json; charset=utf-8')
      cy.log(response)
      cy.log(response.duration)
    cy.writeFile('./cypress/fixtures/apiresult.json','\n'+'"time":'+response.duration+'}'+','+'\n',{ flag: 'a+' })
  
    }); }}
  });
  