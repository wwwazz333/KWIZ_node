import { QuestionQuiz } from './question_quiz';
import { database } from '../../config/database';
import { AnswerQuizHelper } from '../answer_quiz/helper';


export namespace QuestionQuizHelper {
	export const getAllQuestionQuizs = (): Array<QuestionQuiz> => {
		const questions = database.prepare('SELECT * FROM question_quiz').all();

		for (const question of questions) {
			question.answers = AnswerQuizHelper.getAnswerQuizForQuestion(question.id);
		}

		return questions;
	}


	export const createQuestionQuiz = (questionQuiz: QuestionQuiz): void => {
		const res = database.prepare('INSERT INTO question_quiz(question, quizId) VALUES(?, ?)')
			.run([questionQuiz.question, questionQuiz.quizId]);

		
		for (let answer of questionQuiz.answers) {
		
			answer.questionId = res.lastInsertRowid;
			AnswerQuizHelper.createAnswerQuiz(answer);
		}
	}
	export const getQuestionQuizByID = (id: number): QuestionQuiz => {
		const question = database.prepare('SELECT * FROM question_quiz WHERE id = ?')
			.get([id]);

		question.answers = AnswerQuizHelper.getAnswerQuizForQuestion(question.id);


		return question;
	}

	export const getAllQuestionQuizForQuiz = (idQuiz: number): Array<QuestionQuiz> => {
		const questions = database.prepare('SELECT * FROM question_quiz where quizId = ?').all([idQuiz]);

		for (const question of questions) {
			question.answers = AnswerQuizHelper.getAnswerQuizForQuestion(question.id);
		}

		return questions;
	}
}