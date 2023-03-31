import { ScoreQuizHelper } from '../models/score_quiz/helper';
import { ScoreQuiz } from '../models/score_quiz/score_quiz';
export namespace ScoreQuizService {
	export const getAllScoreQuizs = (): Array<ScoreQuiz> => {
		return ScoreQuizHelper.getAllScoreQuizs();
	}

	export const createScoreQuiz = (score: ScoreQuiz): void => {
		ScoreQuizHelper.createScoreQuiz(score);
	}

	export const getScoreQuizByID = (id: number): ScoreQuiz => {
		return ScoreQuizHelper.getScoreQuizByID(id);
	}

}