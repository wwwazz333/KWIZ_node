import { QuizHelper } from '../models/quiz/helper';
import { Quiz } from '../models/quiz/quiz';
export namespace QuizService {
	export const getAllQuiz = (): Array<Quiz> => {
		return QuizHelper.getAllQuizs();
	}

	export const createQuiz = (quiz: Quiz): void => {
		QuizHelper.createQuiz(quiz);
	}

	export const getQuizByID = (id: number): Quiz => {
		return QuizHelper.getQuizByID(id);
	}

}