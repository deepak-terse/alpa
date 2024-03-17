import { FastifyInstance } from 'fastify';
import { shortenUrl, redirectToOriginalUrl } from './controllers/urlController';

const routes = async (fastify: FastifyInstance) => {
	fastify.post('/shorten', shortenUrl);
	fastify.get('/:shortUrlId', redirectToOriginalUrl);

	fastify.get('/home', async (_request, reply) => {
		return reply.view('/views/index.ejs');
 	});

};

export default routes;