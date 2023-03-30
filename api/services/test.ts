import { TestHelper } from '../models/test/helper';
import { Test } from '../models/test/test';


export namespace TestService {
	export const getAllTests = (): Array<Test> => {
		return TestHelper.getAllTests();
	}
	export const createTest = (test: Test): void => {
		TestHelper.createTest(test);
	}
	export const getTestByID = (id: number): Test => {
		return TestHelper.getTestByID(id);
	}
}