/**
 * Get env variables from running process
 * */
const {
	PORT = 3000,
	HOST = '0.0.0.0',
	NODE_ENV = 'developemnt',
	LOG_LEVEL = 'debug',
} = process.env;

const all = {
	port: PORT,
	host: HOST,
	env: NODE_ENV,
	logger: {
		level: LOG_LEVEL,
	},
};
const development = {};
const production = {
	logger: {
		level: true,
	},
};
const test = {};

//
for (const [key, value] of Object.entries(Object.assign(all, [all.env]))) {
	module.exports[key] = value;
}
