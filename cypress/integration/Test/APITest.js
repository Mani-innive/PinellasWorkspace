import apis from '../Pages/API'
describe('DepartmentsAPITest', () => {

  it('get_agency_list_with_fiscal_year', () => {

    cy.writeFile('./cypress/fixtures/apiresult.json', '[')
    cy.apitest(apis.deptquery1, apis.deptbodytextprefix1,apis.deptbodytextsuffix1,apis.deptbodytextsuffix2)
    cy.writeFile('./cypress/fixtures/apiresult.json', '{}]',{ flag: 'a+' })
  })

 })
