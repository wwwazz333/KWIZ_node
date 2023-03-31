import { AnswerQuiz } from './answer_quiz';
import { database } from '../../config/database';


export namespace AnswerQuizHelper {
	export const getAllAnswerQuizs = (): Array<AnswerQuiz> => {
		return database.prepare('SELECT * FROM answer_quiz').all();
	}


	export const createAnswerQuiz = (answerQuiz: AnswerQuiz): void => {
		const res = database.prepare('INSERT INTO answer_quiz(answer, questionId, isCorrect) VALUES(?, ?, ?)')
			.run([answerQuiz.answer, answerQuiz.questionId, answerQuiz.isCorrect]);
	}
	export const getAnswerQuizByID = (id: number): AnswerQuiz => {
		return database.prepare('SELECT * FROM answer_quiz WHERE id = ?')
			.get([id]);
	}

	export const getAnswerQuizForQuestion = (idQuestion: number): Array<AnswerQuiz> => {
		return database.prepare('SELECT * FROM answer_quiz WHERE questionId = ?')
			.all([idQuestion]);
	}
}