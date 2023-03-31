import { QuestionQuiz } from './question_quiz';
import { database } from '../../config/database';
import { AnswerQuizHelper } from '../answer_quiz/helper';


export namespace QuestionQuizHelper {
	export const getAllQuestionQuizs = (): Array<QuestionQuiz> => {
		const questions = database.prepare('SELECT * FROM questionQuiz').all();

		for (const question of questions) {
			question.answers = AnswerQuizHelper.getAnswerQuizForQuestion(question.id);
		}

		return questions;
	}


	export const createQuestionQuiz = (questionQuiz: QuestionQuiz): void => {
		const res = database.prepare('INSERT INTO questionQuiz(question, quizId) VALUES(?, ?)')
			.run([questionQuiz.question, questionQuiz.quizId]);
	}
	export const getQuestionQuizByID = (id: number): QuestionQuiz => {
		const question = database.prepare('SELECT * FROM questionQuiz WHERE id = ?')
			.get([id]);

		question.answers = AnswerQuizHelper.getAnswerQuizForQuestion(question.id);


		return question;
	}
}