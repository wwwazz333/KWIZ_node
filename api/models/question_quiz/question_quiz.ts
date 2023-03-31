import { AnswerQuiz } from "../answer_quiz/answer_quiz";

export interface QuestionQuiz {
	id: number;
	question: string;
	quizId: number;
	answers: Array<AnswerQuiz>;
}