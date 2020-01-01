require('dotenv').config();
const
  puppeteer = require('puppeteer'),
  timestamp = require('./utils/timestamp'),
  url = require('./url'),
  screenshotDirectory = process.env.SCREENSHOT_DIR,
  path = screenshotDirectory + timestamp() + '_screenshot.png';

(async() => {
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url);
  try {
    await page.screenshot({ path });
  } catch(err) { console.error(err); }
  await browser.close();
})();
