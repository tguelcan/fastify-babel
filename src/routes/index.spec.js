import test from 'ava';
import { app } from '$app/index.js';

const endpoint = '/';

test.serial(`GET ${endpoint} | 200`, async (t) => {
  const { statusCode, statusMessage, body } = await app.inject({
    method: 'GET',
    url: `${endpoint}`,
  });

  t.is(statusCode, 200, 'Returns a status code of 200');
  t.is(statusMessage, 'OK', 'Returns a status message');
  t.like(JSON.parse(body), { content: 'hello world' }, 'Returns content');
});
