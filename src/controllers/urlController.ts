import { FastifyRequest, FastifyReply } from 'fastify';
import redis from '../utils/redis';
import config from '../config';

export const shortenUrl = async (request: FastifyRequest, reply: FastifyReply) => {
	const { url } = request.body as { url: string };

	const shortUrlId = Math.random().toString(36).slice(2, 8);

	await redis.set(shortUrlId, url);

	reply.code(200).send({ shortUrl: `${config.HOST}:${config.PORT}/${shortUrlId}` });
};

export const redirectToOriginalUrl = async (request: FastifyRequest, reply: FastifyReply) => {
	const { shortUrlId } = request.params as { shortUrlId: string };

	const originalUrl = await redis.get(shortUrlId);

	if (!originalUrl) {
		reply.code(404).send({ error: 'URL not found' });
		return;
	}

	reply.redirect(originalUrl);
};
