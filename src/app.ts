import fastify, { FastifyInstance } from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyRedis from '@fastify/redis';
import view from '@fastify/view';

import path from 'path';
import ejs from 'ejs';

import dotenv from 'dotenv';

import routes from './routes';
import config from './config';

dotenv.config();

const server: FastifyInstance = fastify({logger: true})

server.register(fastifyStatic, {
	root: path.join(__dirname, '../public'),
});

server.register(view, {
	engine: {
		ejs
	}
});

server.register(fastifyRedis, {
	host: config.REDIS_HOST,
	port: config.REDIS_PORT
});

server.register(routes);

const options: any = {
	host: config.HOST,
	port: config.PORT,
	backlog: 500
};

server.listen(options, (err, address) => {
	if (err) {
		server.log.error(err)
		process.exit(1)
	}
	server.log.info(`Started server at ${address}`)
})
