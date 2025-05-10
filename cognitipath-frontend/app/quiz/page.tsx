"use client";

export default function QuizPage() {
  return (
    <div className="w-full max-w-6xl">
      <div className="mb-8">
        <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col min-h-[60px]">
          <span className="text-xl font-medium text-gray-900">Topic: Sample Quiz Topic</span>
        </div>
      </div>
      <div className="rounded-xl bg-white shadow-lg p-8 min-h-[350px] flex flex-col">
        <div className="text-lg font-semibold mb-6">
          <span className="text-2xl font-bold mb-4 text-gray-900">Quiz Questions</span>
        </div>
        <div className="mb-6">
          <span className="text-base text-gray-900">1. What is CognitiPath?</span>
          <div className="flex flex-col gap-2 ml-4">
            <label className="text-gray-900"><input type="radio" name="q1" /> An AI-powered note summarizer and study tool.</label>
            <label className="text-gray-900"><input type="radio" name="q1" /> A social media platform.</label>
            <label className="text-gray-900"><input type="radio" name="q1" /> A video streaming service.</label>
            <label className="text-gray-900"><input type="radio" name="q1" /> A food delivery app.</label>
          </div>
        </div>
        <div className="mb-6">
          <span className="text-base text-gray-900">2. Which technology is NOT used in CognitiPath?</span>
          <div className="flex flex-col gap-2 ml-4">
            <label className="text-gray-900"><input type="radio" name="q2" /> React</label>
            <label className="text-gray-900"><input type="radio" name="q2" /> FastAPI</label>
            <label className="text-gray-900"><input type="radio" name="q2" /> MongoDB</label>
            <label className="text-gray-900"><input type="radio" name="q2" /> Blockchain</label>
          </div>
        </div>
        {/* Add more questions as needed */}
        <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition self-end">Submit Quiz</button>
      </div>
    </div>
  );
} 