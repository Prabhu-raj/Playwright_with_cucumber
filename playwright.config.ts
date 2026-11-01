import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), 'env/.env') });

const browserName = process.env.BROWSER ?? 'chromium';
const headless = process.env.HEADLESS === 'true';

export default defineConfig({
  testDir: './src',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }], ['list']],
  use: {
    baseURL: process.env.WEB_DRIVER_URL ?? 'https://www.webdriveruniversity.com/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless,
    viewport: {
      width: Number(process.env.BROWSER_WIDTH ?? 1920),
      height: Number(process.env.BROWSER_HEIGHT ?? 1080),
    },
  },
  projects: [
    {
      name: browserName,
      use: {
        ...devices['Desktop Chrome'],
        browserName,
      },
    },
  ],
});
