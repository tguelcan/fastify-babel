import path from 'path';
import fastify from 'fastify';
import plugins from '$plugins/';
import { port, host, logger } from '$lib/config';

/**
 * Initial app instance
 * Export for tests
 * */
export const app = fastify({
	logger,
});

/**
 * Register Plugins
 * */
app.register(plugins);

/**
 * Backend core function
 * Self executing function
 * */
(async () => {
	try {
		await app.ready();
		process.env.NODE_ENV === 'test' || (await app.listen(+port, host));
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
})();
