import { NextFunction, Request, Response } from 'express';

import { User } from '../../models/user.model';

export const find = (req: Request, res: Response, next: NextFunction) => {

	User.findOne({ where: { account: req.query.account } })
	.then(user=>{
		if(user){
			res.json(user)
		}
	})
.catch(next)
};