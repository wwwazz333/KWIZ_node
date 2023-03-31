import { AnswerQuizHelper } from '../models/answer_quiz/helper';
import { AnswerQuiz } from '../models/answer_quiz/answer_quiz';

export namespace AnswerQuizService {
	export const getAllQuestionQuizs = (): Array<AnswerQuiz> => {
		return AnswerQuizHelper.getAllAnswerQuizs();
	}

	export const createQuestionQuiz = (answer: AnswerQuiz): void => {
		AnswerQuizHelper.createAnswerQuiz(answer);
	}

	export const getQuestionQuizByID = (id: number): AnswerQuiz => {
		return AnswerQuizHelper.getAnswerQuizByID(id);
	}

	export const getAnswerQuizForQuestion = (idQuestion: number): Array<AnswerQuiz> => {
		return AnswerQuizHelper.getAnswerQuizForQuestion(idQuestion);
	}
}