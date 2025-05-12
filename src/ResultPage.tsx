interface ResultPageProps {
  answers: number[];
  onRetry: () => void;
}

const getScore = (answers: number[]) => {
  let score = 0;
  if (answers[0] === 2) score += 30;
  if (answers[1] === 0 || answers[1] === 3) score += 30;
  if (answers[2] >= 2) score -= 20;
  if (answers[3] === 1 || answers[3] === 3) score -= 10;
  return Math.min(100, Math.max(0, score));
};

const getAdvice = (score: number) => {
  if (score >= 70) return "AI時代の影響を強く受ける可能性があります。AI活用スキルの習得と対人能力の強化が鍵です。";
  if (score >= 40) return "一部の業務が代替される可能性がありますが、適応次第で生き残れます。共感・連携が強みになります。";
  return "AIでは代替しづらい価値を持っています。今後も必要とされる医師です。";
};

export default function ResultPage({ answers, onRetry }: ResultPageProps) {
  const score = getScore(answers);
  const advice = getAdvice(score);
  const shareText = `あなたのAI代替率は${score}%！ #AI診断 #医師キャリア`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">診断結果</h2>
      <p className="text-xl font-semibold mb-2">AIに奪われる確率：{score}%</p>
      <p className="mb-6">{advice}</p>
      <div className="flex justify-center gap-4 mb-6">
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          結果をX（旧Twitter）でシェア
        </a>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          もう一度診断する
        </button>
      </div>
    </div>
  );
}
