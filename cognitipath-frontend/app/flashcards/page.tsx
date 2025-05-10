"use client";

import { useState } from "react";

export default function FlashcardsPage() {
  const flashcards = [
    { question: "What is CognitiPath?", answer: "CognitiPath is an AI-powered note summarizer and study tool." },
    { question: "What language is this app written in?", answer: "This app is written in TypeScript and React (Next.js)." },
    { question: "What is the main color of the sidebar?", answer: "A gradient from orange-500 to orange-200." },
  ];
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);
  const current = flashcards[index];

  const goNext = () => {
    setFlipped(false);
    setIndex(i => (i + 1) % flashcards.length);
  };
  const goPrev = () => {
    setFlipped(false);
    setIndex(i => (i - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="w-full max-w-6xl">
      <div className="mb-8">
        <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col min-h-[60px]">
          <span className="text-xl font-medium text-gray-900">Topic: Sample Flashcards</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div
          className="relative w-full max-w-xl h-64 cursor-pointer perspective"
          onClick={() => setFlipped(f => !f)}
        >
          <div className={`absolute inset-0 transition-transform duration-500 transform ${flipped ? 'rotate-y-180' : ''}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front */}
            <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col items-center justify-center w-full h-full backface-hidden">
              <span className="text-lg font-semibold mb-2 text-gray-900">Flashcard {index + 1}</span>
              <span className="text-base text-gray-900">{current.question}</span>
            </div>
            {/* Back */}
            <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col items-center justify-center w-full h-full absolute top-0 left-0 rotate-y-180 backface-hidden">
              <span className="text-lg font-semibold mb-2 text-gray-900">Answer</span>
              <span className="text-base text-gray-900">{current.answer}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <button onClick={goPrev} className="px-4 py-2 bg-orange-400 text-white rounded-lg shadow hover:bg-orange-500 transition">Previous</button>
          <button onClick={goNext} className="px-4 py-2 bg-orange-400 text-white rounded-lg shadow hover:bg-orange-500 transition">Next</button>
        </div>
      </div>
      <style jsx>{`
        .perspective { perspective: 1200px; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
} 