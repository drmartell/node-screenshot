console.log('running index.js');
  
require('dotenv').config();
console.log(process.env.SCREENSHOT_DIR);

const
  emailPosting = require('./utils/email-posting'),
  puppeteer = require('puppeteer'),
  timestamp = require('./utils/timestamp'),
  url = require('./url'),
  screenshotDirectory = process.env.SCREENSHOT_DIR,
  path = screenshotDirectory + timestamp() + '_screenshot.png';

(async() => {
  await emailPosting({ title: 'node-screenshot started', html: 'node-screenshot started' });
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url);
  try {
    await page.screenshot({ path });
  } catch(err) { console.error(err); } // eslint-disable-line no-console
  await browser.close();
})();
