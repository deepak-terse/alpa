import { FastifyInstance } from 'fastify';
import { getShortUrl, redirectToOriginalUrl, getConfig } from './controllers/urlController';

const routes = async (fastify: FastifyInstance) => {
	fastify.post('/shorten', getShortUrl);
	fastify.get('/:shortUrlId', redirectToOriginalUrl);
	fastify.get('/config', getConfig);

	fastify.get('/home', async (_request, reply) => {
		return reply.view('/views/index.ejs');
 	});

};

export default routes;