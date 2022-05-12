import { makeGet, makePost } from './http';
import { buildInstance } from './instance';

const instance = buildInstance();

export const get = makeGet({ instance });
export const post = makePost({ instance });
