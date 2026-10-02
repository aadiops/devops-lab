const test = require('node:test');
const assert = require('node:assert/strict');

const { buildResponse } = require('../app.js');

test('buildResponse returns expected application metadata', () => {
  const response = buildResponse();

  assert.equal(response.status, 'ok');
  assert.equal(response.service, 'devops-lab');
  assert.ok(response.timestamp);
});
