import express, { Request, Response } from 'express';
import { TestService } from '../services/test';

const router = express.Router();


router.get('/',
	(req: Request, res: Response) => {
		res.send(TestService.getAllTests());
	});

router.get('/:id',
	(req: Request, res: Response) => {
		const { id } = req.params
		res.send(TestService.getTestByID(parseInt(id)));
	});

router.post("/new",
	(req: Request, res: Response) => {
		const test = req.body;
		TestService.createTest(test);
		res.sendStatus(201);
	});

export default router;