import { chromium, firefox, webkit, devices } from 'playwright';

const iPhone = devices['iPhone 6'];

module.exports = {
    browserType: chromium,
    launchConfig: {
        headless: true,
        slowMo: 10,
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    },
    contextConfig: {
        viewport: iPhone.viewport,
        userAgent: iPhone.userAgent
    }
};
