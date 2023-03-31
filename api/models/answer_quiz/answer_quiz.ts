export interface AnswerQuiz {
	id: number;
	answer: string;
	questionId: number;
	isCorrect: boolean;
}