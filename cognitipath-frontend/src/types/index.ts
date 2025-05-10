export interface User {
  user_id: string;
  name: string;
  email: string;
  preferred_language: string;
  performance: Performance[];
}

export interface Performance {
  topic: string;
  accuracy: number;
  difficulty: string;
}

export interface Note {
  note_id: string;
  user_id: string;
  raw_text: string;
  summary: string;
  translated_text: {
    raw: string;
    summary: string;
  };
  timestamp: Date;
}

export interface Quiz {
  quiz_id: string;
  note_id: string;
  questions: Question[];
}

export interface Question {
  type: 'MCQ' | 'FITB';
  question: string;
  options: string[];
  answer: string;
}

export interface Flashcard {
  flashcard_id: string;
  note_id: string;
  qa_pairs: QAPair[];
}

export interface QAPair {
  question: string;
  answer: string;
} 