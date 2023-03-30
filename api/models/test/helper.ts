import { Test } from './test';
import { database } from '../../config/database';


export namespace TestHelper {
	export const getAllTests = (): Array<Test> => {
		return database.prepare('SELECT * FROM test').all();
	}


	export const createTest = (test: Test): void => {
		const res = database.prepare('INSERT INTO test(name) VALUES(?)')
			.run([test.name]);
	}
	export const getTestByID = (id: number): Test => {
		return database.prepare('SELECT * FROM test WHERE id = ?')
			.get([id]);
	}
}