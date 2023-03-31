export interface AnswerQuiz {
	id: number;
	answer: string;
	questionId: number| bigint;
	isCorrect: boolean;
}