require('dotenv').config();
const replace = require('replace-in-file');
const addToCompanies = require('../utils/add-to-companies');

describe('addToCompanies', () => {
  it('should add a company name to companies.js object', () => {
    const companyName = 'Acme Test Co Inc.';
    addToCompanies(companyName);
    const companies = require('../companies');
    expect(companies[companyName]).toBeTruthy();
    
    // remove test data from file
    try {
      const results = replace.sync({
        files: '../companies.js',
        from: `'${ companyName }': true,\n`,
        to: ''
      });
      console.log(results);
    } catch(err) { console.error(err); }
  });
});

// describe('getFjId', () => {
//   it('should fetch a numeric Id in string form', () => {
//     expect(getFjId().toEqual(expect.any(String)));
//   });
// });
