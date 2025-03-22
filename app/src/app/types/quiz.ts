export interface Question {
    number: number;
    text: string;
    options: string[];
    correctAnswer: string;
  }
  
  export interface QuizResult {
    questionNumber: number;
    questionOptions: string[];
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
  }
  