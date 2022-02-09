import { NowRequestHandler } from 'fastify-now';

export const GET = async function (request) {
  return { content: 'hello world' };
};

GET.opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          content: { type: 'string' },
        },
      },
    },
  },
};
