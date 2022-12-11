import express from 'express';

import * as controller from './controller';

export const user2Router = express.Router();

/** GET /api/users */
user2Router.route('/').get(controller.find);

