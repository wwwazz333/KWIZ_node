import express, { Request, Response } from 'express';
import { QuestionQuizService } from '../services/question_quiz';
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
		const { quiz, questions } = req.body;
		const result = QuizService.createQuiz(quiz);		
		
		for (const question of questions) {
			question.quizId = result.lastInsertRowid;
			console.log(question.answers);
			
			QuestionQuizService.createQuestionQuiz(question);
		}
	});

export default router;