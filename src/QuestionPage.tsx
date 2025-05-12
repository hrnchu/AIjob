interface QuestionPageProps {
  question: {
    text: string;
    options: string[];
  };
  onAnswer: (index: number) => void;
}

export default function QuestionPage({ question, onAnswer }: QuestionPageProps) {
  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
