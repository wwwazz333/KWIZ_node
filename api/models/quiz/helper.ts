import { Quiz } from './quiz';
import { database } from '../../config/database';


export namespace QuizHelper {
	export const getAllQuizs = (): Array<Quiz> => {
		return database.prepare('SELECT * FROM quiz').all();
	}


	export const createQuiz = (quiz: Quiz): void => {
		const res = database.prepare('INSERT INTO quiz(name, nbrQueston) VALUES(?, ?)')
			.run([quiz.name, quiz.nbrQuestion]);
	}
	export const getQuizByID = (id: number): Quiz => {
		return database.prepare('SELECT * FROM quiz WHERE id = ?')
			.get([id]);
	}
}