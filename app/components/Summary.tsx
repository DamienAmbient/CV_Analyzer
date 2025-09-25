import ScoreGauge from "./ScoreGauge";

const Category = ({ title, score }: { title: string; score: number }) => {
  const textColor =
    score > 70
      ? "text-green-600"
      : score > 49
        ? "text-yellow-600"
        : "text-red-600";
  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row items-center gap-2 justify-center">
          <p className="text-2xl">{title}</p>
        </div>
      </div>
      <p className="text-2xl">
        <span className={textColor}>{score}</span>
      </p>
    </div>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={feedback.overallScore}></ScoreGauge>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Resume Score</h2>
          <p className="text-sm text-gray-500">
            This score is calculated based on the varables listed below
          </p>
        </div>
      </div>

      <Category
        title="Tone & Style"
        score={feedback.toneAndStyle.score}
      ></Category>
      <Category title="Content" score={feedback.content.score}></Category>
      <Category title="Structure" score={feedback.structure.score}></Category>
      <Category title="Skills" score={feedback.skills.score}></Category>
    </div>
  );
};

export default Summary;
