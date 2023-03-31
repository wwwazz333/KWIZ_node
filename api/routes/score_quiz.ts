import express, { Request, Response } from 'express';
import { ScoreQuizService } from '../services/score_quiz';

const router = express.Router();


router.get('/',
	(req: Request, res: Response) => {
		res.send(ScoreQuizService.getAllScoreQuizs());
	});

router.get('/:id',
	(req: Request, res: Response) => {
		const { id } = req.params
		res.send(ScoreQuizService.getScoreQuizByID(parseInt(id)));
	});

router.post("/new",
	(req: Request, res: Response) => {
		const test = req.body;
		ScoreQuizService.createScoreQuiz(test);
		res.sendStatus(201);
	});

export default router;