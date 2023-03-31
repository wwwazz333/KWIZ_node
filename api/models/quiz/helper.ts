import { Quiz } from './quiz';
import { database } from '../../config/database';
import Database, { RunResult } from 'better-sqlite3';


export namespace QuizHelper {
	export const getAllQuizs = (): Array<Quiz> => {
		return database.prepare('SELECT * FROM quiz').all();
	}


	export const createQuiz = (quiz: Quiz): Database.RunResult => {
		const res = database.prepare('INSERT INTO quiz(name, nbrQueston) VALUES(?, ?)')
			.run([quiz.name, quiz.nbrQuestion]);
		return res;
	}
	export const getQuizByID = (id: number): Quiz => {
		return database.prepare('SELECT * FROM quiz WHERE id = ?')
			.get([id]);
	}
}