import path from 'path';
import fastifyPlugin from 'fastify-plugin';
import fastifyNow from 'fastify-now';

/**
 * Define plugins
 * @param {app} app instance
 * @param {options} app options
 * @param {next} next pass
 * */
const plugin = async (app, options, next) => {
	await app.register(fastifyNow, {
		routesFolder: path.join(__dirname, './../routes'),
	});

	next();
};

export default fastifyPlugin(plugin, {
	fastify: '3.x',
	name: 'loader',
});
