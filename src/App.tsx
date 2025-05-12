import { useState, useCallback } from 'react';
import { questions } from './questions';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = useCallback((answerIndex: number) => {
    setAnswers(prev => [...prev, answerIndex]);
    setStep(prev => prev + 1);
  }, []);

  const reset = useCallback(() => {
    setStep(0);
    setAnswers([]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">あなたの仕事、AIに奪われる？</h1>
      {step < questions.length ? (
        <QuestionPage
          question={questions[step]}
          onAnswer={handleAnswer}
        />
      ) : (
        <ResultPage answers={answers} onRetry={reset} />
      )}
    </div>
  );
}
