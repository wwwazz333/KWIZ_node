import { QuestionQuizHelper } from '../models/question_quiz/helper';
import { QuestionQuiz } from '../models/question_quiz/question_quiz';
export namespace QuestionQuizService {
	export const getAllQuestionQuizs = (): Array<QuestionQuiz> => {
		return QuestionQuizHelper.getAllQuestionQuizs();
	}

	export const getAllQuestionQuizForQuiz = (idQuiz:number): Array<QuestionQuiz> => {
		return QuestionQuizHelper.getAllQuestionQuizForQuiz(idQuiz);
	}

	export const createQuestionQuiz = (question: QuestionQuiz): void => {
		QuestionQuizHelper.createQuestionQuiz(question);
	}

	export const getQuestionQuizByID = (id: number): QuestionQuiz => {
		return QuestionQuizHelper.getQuestionQuizByID(id);
	}
}