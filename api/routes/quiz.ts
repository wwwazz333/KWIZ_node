import express, { Request, Response } from 'express';
import { QuizService } from '../services/quiz';

const router = express.Router();


router.get('/',
	(req: Request, res: Response) => {
		res.send(QuizService.getAllQuiz());
	});

router.get('/:id',
	(req: Request, res: Response) => {
		const { id } = req.params
		res.send(QuizService.getQuizByID(parseInt(id)));
	});

router.post("/new",
	(req: Request, res: Response) => {
		const test = req.body;
		QuizService.createQuiz(test);
		res.sendStatus(201);
	});

export default router;