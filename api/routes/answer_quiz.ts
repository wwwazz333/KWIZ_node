import express, { Request, Response } from 'express';
import { AnswerQuizService } from '../services/answer_quiz';

const router = express.Router();


router.get('/',
	(req: Request, res: Response) => {
		res.send(AnswerQuizService.getAllQuestionQuizs());
	});

router.get('/:id',
	(req: Request, res: Response) => {
		const { id } = req.params
		res.send(AnswerQuizService.getQuestionQuizByID(parseInt(id)));
	});

router.get('/for_question/:idQuestion',
	(req: Request, res: Response) => {
		const { idQuestion } = req.params
		res.send(AnswerQuizService.getAnswerQuizForQuestion(parseInt(idQuestion)));
	});

router.post("/new",
	(req: Request, res: Response) => {
		const test = req.body;
		AnswerQuizService.createQuestionQuiz(test);
		res.sendStatus(201);
	});

export default router;