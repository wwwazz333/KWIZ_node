import express from 'express';
import quiz from './routes/quiz';
import answer_quiz from './routes/answer_quiz';
import score_quiz from './routes/score_quiz';
import question_quiz from './routes/question_quiz';


const router = express.Router();

router.use('/quiz', quiz);

router.use('/answer_quiz', answer_quiz);

router.use('/score_quiz', score_quiz);

router.use('/question_quiz', question_quiz);


export default router;