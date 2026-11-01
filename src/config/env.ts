import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), 'env/.env') });

const getString = (key: string, fallback: string): string => {
  return process.env[key] ?? fallback;
};

const getNumber = (key: string, fallback: number): number => {
  const value = Number(process.env[key] ?? fallback);
  return Number.isFinite(value) ? value : fallback;
};

const getBoolean = (key: string, fallback: boolean): boolean => {
  const value = process.env[key];

  if (value === undefined) {
    return fallback;
  }

  return ['true', '1', 'yes', 'y'].includes(value.toLowerCase());
};

export const config = {
  browser: {
    name: getString('BROWSER', 'chromium'),
    headless: getBoolean('HEADLESS', false),
    width: getNumber('BROWSER_WIDTH', 1920),
    height: getNumber('BROWSER_HEIGHT', 1080),
  },
  execution: {
    browsers: getString('BROWSERS', 'chromium')
      .split(',')
      .map((browserName) => browserName.trim())
      .filter(Boolean),
    parallel: getNumber('PARALLEL', 1),
    retry: getNumber('RETRY', 1),
    timeout: getNumber('DEFAULT_TIMEOUT', 30000),
    logLevel: getString('LOG_LEVEL', 'info'),
  },
  urls: {
    webdriverUniversity: getString('WEB_DRIVER_URL', 'https://www.webdriveruniversity.com/'),
    webdriverLoginPortal: getString(
      'WEB_DRIVER_LOGIN_URL',
      'https://www.webdriveruniversity.com/Login-Portal/index.html'
    ),
    typesense: getString('TYPESENSE_URL', 'https://cloud.typesense.org/'),
    peiRegistration: getString('PEI_URL', 'https://careers.pei.group/registration.aspx'),
  },
  testUsers: {
    webdriverUniversity: {
      username: getString('WEB_DRIVER_USERNAME', 'webdriver'),
      password: getString('WEB_DRIVER_PASSWORD', 'webdriver123'),
    },
    typesense: {
      email: getString('TYPESENSE_EMAIL', 'qa.user@example.com'),
      password: getString('TYPESENSE_PASSWORD', 'Password@123'),
    },
    pei: {
      firstName: getString('PEI_FIRSTNAME', 'Test'),
      lastName: getString('PEI_LASTNAME', 'User'),
      email: getString('PEI_EMAIL', 'qa.user@example.com'),
      password: getString('PEI_PASSWORD', 'Password@123'),
    },
  },
};

export const { browser, execution, urls, testUsers } = config;
export default config;
