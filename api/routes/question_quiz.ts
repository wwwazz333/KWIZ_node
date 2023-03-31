import express, { Request, Response } from 'express';
import { QuestionQuizService } from '../services/question_quiz';

const router = express.Router();


router.get('/',
	(req: Request, res: Response) => {
		res.send(QuestionQuizService.getAllQuestionQuizs());
	});

router.get('/:id',
	(req: Request, res: Response) => {
		const { id } = req.params
		res.send(QuestionQuizService.getQuestionQuizByID(parseInt(id)));
	});

router.get('/for/:idQuiz',
	(req: Request, res: Response) => {
		const { idQuiz } = req.params
		res.send(QuestionQuizService.getAllQuestionQuizForQuiz(parseInt(idQuiz)));
	});

router.post("/new",
	(req: Request, res: Response) => {
		const test = req.body;
		QuestionQuizService.createQuestionQuiz(test);
		res.sendStatus(201);
	});

export default router;