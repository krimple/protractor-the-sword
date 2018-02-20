const CommonPage = require('../pages/common-page');

describe('Test Suite', () => {
  beforeEach(() => {
    this.commonPage = new CommonPage();
  });

  beforeEach(async () => {
    await browser.get('http://localhost:3000');
  });

  it('searched by strings', async () => {
    // your protractor test code here
    // please consider using page objects
  });
});

