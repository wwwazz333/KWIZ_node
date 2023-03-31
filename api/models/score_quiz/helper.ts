import { ScoreQuiz } from './score_quiz';
import { database } from '../../config/database';


export namespace ScoreQuizHelper {
	export const getAllScoreQuizs = (): Array<ScoreQuiz> => {
		return database.prepare('SELECT * FROM scoreQuiz').all();
	}


	export const createScoreQuiz = (scoreQuiz: ScoreQuiz): void => {
		const res = database.prepare('INSERT INTO scoreQuiz(name, score, quizId) VALUES(?)')
			.run([scoreQuiz.name, scoreQuiz.score, scoreQuiz.quizId]);
	}
	export const getScoreQuizByID = (id: number): ScoreQuiz => {
		return database.prepare('SELECT * FROM scoreQuiz WHERE id = ?')
			.get([id]);
	}
}