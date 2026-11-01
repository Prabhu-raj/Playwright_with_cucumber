const test = require('node:test');
const assert = require('node:assert/strict');

const { config, testUsers } = require('./env.ts');

test('config centralizes browser, urls and credentials', () => {
  assert.ok(config.browser.name);
  assert.ok(config.urls.webdriverUniversity);
  assert.ok(testUsers.webdriverUniversity.username);
  assert.ok(testUsers.webdriverUniversity.password);
  assert.ok(testUsers.typesense.email);
  assert.ok(testUsers.typesense.password);
});
