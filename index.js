const
  puppeteer = require('puppeteer'),
  timestamp = require('./utils/timestamp'),
  url = require('./url');

(async() => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: timestamp + '_screenshot.png' });
  await browser.close();
})();
