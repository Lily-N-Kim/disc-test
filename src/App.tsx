import React, { useState, useEffect, useRef } from "react";
import {
  Share2,
  RotateCcw,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Download,
  Loader2,
} from "lucide-react";
// --- 커스텀 캐릭터 SVG 컴포넌트 ---
// TypeScript(TS) 환경에서 에러가 나지 않도록 ': any' 타입을 명시적으로 추가했습니다.
const CharD = ({ className, style }: any) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 50 C20 15, 100 15, 100 50 C100 90, 80 110, 60 110 C40 110, 20 90, 20 50 Z"
      fill="#20D572"
      stroke="#1e293b"
      strokeWidth="2.5"
    />
    <path
      d="M60 20 C 55 0, 40 15, 45 25"
      stroke="#1e293b"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <ellipse
      cx="40"
      cy="55"
      rx="12"
      ry="16"
      fill="white"
      stroke="#1e293b"
      strokeWidth="2.5"
    />
    <ellipse
      cx="75"
      cy="55"
      rx="12"
      ry="16"
      fill="white"
      stroke="#1e293b"
      strokeWidth="2.5"
    />
    <circle cx="45" cy="55" r="5" fill="#1e293b" />
    <circle cx="80" cy="55" r="5" fill="#1e293b" />
    <circle cx="47" cy="53" r="2" fill="white" />
    <circle cx="82" cy="53" r="2" fill="white" />
    <circle cx="57.5" cy="70" r="2" fill="#1e293b" />
    <path
      d="M 50 80 Q 57.5 85 65 80"
      stroke="#1e293b"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const CharI = ({ className, style }: any) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 45 C20 10, 100 10, 100 45 C100 60, 95 65, 105 85 C115 110, 5 110, 15 85 C25 65, 20 60, 20 45 Z"
      fill="#FFD600"
      stroke="#1e293b"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <circle cx="40" cy="50" r="10" fill="#1e293b" />
    <circle cx="43" cy="47" r="3" fill="white" />
    <circle cx="80" cy="50" r="10" fill="#1e293b" />
    <circle cx="83" cy="47" r="3" fill="white" />
    <ellipse cx="25" cy="60" rx="6" ry="4" fill="#FF9D9D" opacity="0.9" />
    <ellipse cx="95" cy="60" rx="6" ry="4" fill="#FF9D9D" opacity="0.9" />
    <circle cx="60" cy="60" r="2" fill="#1e293b" />
    <path
      d="M 50 70 Q 60 82 70 70"
      stroke="#1e293b"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const CharS = ({ className, style }: any) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 40 30 C 40 10, 80 10, 80 30 C 100 30, 110 50, 100 80 C 90 110, 30 110, 20 80 C 10 50, 20 30, 40 30 Z"
      fill="#1D63FF"
      stroke="#1e293b"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M 35 65 C 35 75, 50 75, 50 65 Z"
      fill="white"
      stroke="#1e293b"
      strokeWidth="2.5"
    />
    <circle cx="42.5" cy="68" r="3.5" fill="#1e293b" />
    <path
      d="M 70 65 C 70 75, 85 75, 85 65 Z"
      fill="white"
      stroke="#1e293b"
      strokeWidth="2.5"
    />
    <circle cx="77.5" cy="68" r="3.5" fill="#1e293b" />
    <circle cx="60" cy="80" r="2" fill="#1e293b" />
    <line
      x1="53"
      y1="90"
      x2="67"
      y2="90"
      stroke="#1e293b"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const CharC = ({ className, style }: any) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 110 C20 110, 10 70, 20 40 C30 10, 90 10, 100 40 C110 70, 100 110, 60 110 Z"
      fill="#FF73FA"
      stroke="#1e293b"
      strokeWidth="2.5"
    />
    <path
      d="M 60 20 C 60 5, 75 5, 75 15"
      fill="none"
      stroke="#1e293b"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="40" cy="60" r="11" fill="#1e293b" />
    <circle cx="43" cy="57" r="3" fill="white" />
    <circle cx="80" cy="60" r="11" fill="#1e293b" />
    <circle cx="83" cy="57" r="3" fill="white" />
    <circle cx="60" cy="72" r="2" fill="#1e293b" />
    <line
      x1="55"
      y1="82"
      x2="65"
      y2="82"
      stroke="#1e293b"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// --- 장식용 기호 SVG ---
const Decor = () => (
  <>
    <div className="absolute top-10 left-[10%] text-[#FFD600] text-5xl font-black rotate-12 opacity-60 select-none">
      +
    </div>
    <div className="absolute top-32 right-[10%] text-[#FF73FA] text-4xl font-black -rotate-12 opacity-60 select-none">
      ×
    </div>
    <div className="absolute bottom-20 left-[15%] text-[#20D572] text-5xl font-black rotate-45 opacity-60 select-none">
      ÷
    </div>
    <div className="absolute bottom-40 right-[15%] text-[#1D63FF] text-4xl font-black rotate-12 opacity-60 select-none">
      =
    </div>
  </>
);

// --- 데이터 정의 ---
const QUESTIONS = [
  ["단호한", "적극적인", "얌전한", "눈치 있는"],
  ["공격적인", "감성적인", "협조적인", "한결같은"],
  ["직접적인", "활발한", "동의하는", "정밀한"],
  ["거친", "관계 지향적인", "부드러운", "완벽을 선호하는"],
  ["대담한", "충동적인", "친절한", "신중한"],
  ["경쟁심 강한", "표현하는", "지원하는", "엄밀한"],
  ["위험을 감수하는", "말하기 좋아하는", "온화하고 완만한", "사실에 기반을 둔"],
  ["논쟁을 즐기는", "재미를 추구하는", "인내심 있는", "타당하고 논리적인"],
  ["용감한", "즉흥적인", "안정적인", "계획된"],
  ["책임을 지는", "낙관하는", "평화로운", "성실한"],
  ["솔직한", "쾌활한", "충실한", "진지한"],
  ["독립적인", "열정적인", "경청하는", "수준 높은"],
];

const RESULT_TYPES = [
  {
    id: "D",
    title: "주도형 (Dominance)",
    subtitle: "목표 지향적인 개척자",
    desc: "자신의 의견을 강하게 주장하는 편이며, 경쟁과 성공에 동기 부여됩니다. 빠르고 단호하게 결정을 내리며 문제 해결에 적극적으로 나섭니다.",
    color: "#20D572",
    bgClass: "bg-[#20D572]",
    textClass: "text-[#0da052]",
    icon: CharD,
  },
  {
    id: "i",
    title: "사교형 (Influence)",
    subtitle: "긍정적인 분위기 메이커",
    desc: "속해 있는 사회로부터 인정을 받기 원하며, 다양한 활동과 관계에서 동기 부여를 받습니다. 열정적이고 설득력이 뛰어나며 팀에 활력을 불어넣습니다.",
    color: "#FFD600",
    bgClass: "bg-[#FFD600]",
    textClass: "text-[#b39600]",
    icon: CharI,
  },
  {
    id: "S",
    title: "안정형 (Steadiness)",
    subtitle: "따뜻한 지원가",
    desc: "인내심이 있고 다른 사람을 돕는 것을 즐깁니다. 일관되고 예측 가능한 환경을 선호하며, 팀의 화합과 안정을 중요하게 생각합니다.",
    color: "#1D63FF",
    bgClass: "bg-[#1D63FF]",
    textClass: "text-[#1D63FF]",
    icon: CharS,
  },
  {
    id: "C",
    title: "신중형 (Conscientiousness)",
    subtitle: "논리적인 분석가",
    desc: "전문적인 지식을 얻고 또 보여주며, 양질의 작업을 이행할 수 있는 상황에서 동기 부여받습니다. 정확하고 세부적인 사항에 주의를 기울입니다.",
    color: "#FF73FA",
    bgClass: "bg-[#FF73FA]",
    textClass: "text-[#d63ed0]",
    icon: CharC,
  },
];

const COL_THEMES = [
  { pastel: "bg-[#e8fbf1]", solid: "bg-[#20D572]", text: "text-slate-800" }, // D
  { pastel: "bg-[#fffbe6]", solid: "bg-[#FFD600]", text: "text-slate-800" }, // i
  { pastel: "bg-[#ebf2ff]", solid: "bg-[#1D63FF]", text: "text-white" }, // S
  { pastel: "bg-[#ffecfc]", solid: "bg-[#FF73FA]", text: "text-slate-800" }, // C
];

export default function App() {
  const [step, setStep] = useState("intro");
  const [answers, setAnswers] = useState<{ [key: number]: number[] }>({});
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [finalTypeIndex, setFinalTypeIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const testContainerRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleStart = () => {
    window.scrollTo(0, 0);
    setStep("test");
  };

  const handleSelect = (qIndex: number, adjIndex: number) => {
    setAnswers((prev) => {
      const current = prev[qIndex] || [];
      const existingPos = current.indexOf(adjIndex);

      if (existingPos !== -1) {
        return { ...prev, [qIndex]: current.slice(0, existingPos) };
      } else if (current.length < 4) {
        const newArr = [...current, adjIndex];

        if (newArr.length === 4) {
          setTimeout(() => {
            const nextUnanswered = QUESTIONS.findIndex((_, idx) => {
              const ans = idx === qIndex ? newArr : prev[idx] || [];
              return ans.length < 4;
            });
            if (nextUnanswered !== -1) {
              const el = document.getElementById(`question-${nextUnanswered}`);
              if (el)
                el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, 300);
        }
        return { ...prev, [qIndex]: newArr };
      }
      return prev;
    });
  };

  const handleResetRow = (qIndex: number) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: [] }));
  };

  const calculateResult = () => {
    let newScores = [0, 0, 0, 0];
    QUESTIONS.forEach((_, qIndex) => {
      const ranks = answers[qIndex] || [];
      ranks.forEach((wordIndex, rankIndex) => {
        newScores[wordIndex] += 4 - rankIndex;
      });
    });

    setScores(newScores);
    const maxScore = Math.max(...newScores);
    const maxIdx = newScores.indexOf(maxScore);
    setFinalTypeIndex(maxIdx);

    window.scrollTo(0, 0);
    setStep("result");
  };

  const isTestComplete =
    Object.keys(answers).length === QUESTIONS.length &&
    Object.values(answers).every((arr) => arr.length === 4);
  const answeredCount = Object.values(answers).filter(
    (arr) => arr.length === 4
  ).length;

  const handleDownloadImage = async () => {
    if (!resultRef.current) return;
    try {
      setIsDownloading(true);
      showToast("이미지를 생성하고 있습니다. 잠시만 기다려주세요...");

      await new Promise((resolve) => setTimeout(resolve, 150));

      if (!(window as any).html2canvas) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const canvas = await (window as any).html2canvas(resultRef.current, {
        scale: 2,
        backgroundColor: "#f8fafc",
        useCORS: true,
        logging: false,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `DiSC_테스트_결과_${RESULT_TYPES[finalTypeIndex].id}형.png`;
      link.click();

      showToast("결과가 성공적으로 저장되었습니다!");
    } catch (error) {
      showToast("이미지 저장에 실패했습니다. 다시 시도해 주세요.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setScores([0, 0, 0, 0]);
    window.scrollTo(0, 0);
    setStep("intro");
  };

  const renderIntro = () => (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative overflow-hidden animate-in fade-in zoom-in duration-500">
      <Decor />

      <div className="relative w-full max-w-sm h-48 mb-8">
        <CharD
          className="absolute top-0 left-4 w-28 h-28 transform -rotate-12 drop-shadow-sm animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <CharI
          className="absolute top-8 right-4 w-32 h-32 transform rotate-12 drop-shadow-sm animate-bounce"
          style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
        />
        <CharS
          className="absolute bottom-0 left-1/4 w-32 h-32 transform -rotate-6 drop-shadow-sm animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "1s" }}
        />
        <CharC
          className="absolute -bottom-6 right-1/4 w-24 h-24 transform rotate-6 drop-shadow-sm animate-bounce"
          style={{ animationDuration: "2.8s", animationDelay: "0.2s" }}
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight z-10">
        나는{" "}
        <span className="text-white bg-slate-800 px-3 py-1 rounded-xl shadow-[3px_3px_0_0_#20D572] transform inline-block -rotate-2">
          어떻게
        </span>
        <br />
        일하는 사람일까?
      </h1>

      <p className="text-slate-700 font-bold mb-10 max-w-sm leading-relaxed z-10 bg-white/90 p-5 rounded-2xl border-2 border-slate-800 shadow-[3px_3px_0_0_#1e293b]">
        총 12개의 문항이 제공됩니다.
        <br />
        4가지 단어 중 <strong>가장 나다운 순서대로</strong>
        <br /> 1순위부터 4순위까지 터치해 주세요!
      </p>

      <button
        onClick={handleStart}
        className="z-10 bg-[#FFD600] text-slate-800 font-black text-xl py-4 px-12 rounded-full border-2 border-slate-800 shadow-[3px_3px_0_0_#1e293b] transition-transform active:translate-y-1 active:translate-x-1 active:shadow-none flex items-center gap-2 hover:bg-yellow-300"
      >
        테스트 시작
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>
    </div>
  );

  const renderTest = () => (
    <div className="pb-36 px-4 max-w-2xl mx-auto" ref={testContainerRef}>
      <div className="sticky top-0 z-10 bg-[#f8fafc]/90 backdrop-blur-md py-4 mb-6 flex justify-between items-center border-b-2 border-slate-300">
        <h2 className="font-black text-xl text-slate-800">
          DiSC 행동성향 테스트
        </h2>
        <div className="font-black bg-white border-2 border-slate-800 px-4 py-1.5 rounded-full shadow-[2px_2px_0_0_#1e293b] text-sm">
          {answeredCount} / 12
        </div>
      </div>

      <div className="bg-white border-2 border-slate-800 px-5 py-4 rounded-2xl mb-8 flex gap-3 items-start shadow-[3px_3px_0_0_#1e293b]">
        <AlertCircle
          size={28}
          className="shrink-0 mt-0.5 text-[#FF73FA]"
          strokeWidth={2.5}
        />
        <div className="flex flex-col gap-1">
          <p className="font-black text-lg text-slate-800">
            가장 먼저 손이 가는 단어부터 터치!
          </p>
          <p className="text-sm font-bold text-slate-600">
            나를 제일 잘 나타내는 단어부터 <strong>1순위 → 4순위</strong> 순서로
            선택합니다. 다시 누르면 취소됩니다.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {QUESTIONS.map((words, qIndex) => {
          const currentAnswers = answers[qIndex] || [];
          const isComplete = currentAnswers.length === 4;

          return (
            <div
              key={qIndex}
              id={`question-${qIndex}`}
              className={`p-5 md:p-6 rounded-3xl border-2 transition-all duration-300 ${
                isComplete
                  ? "border-slate-300 bg-slate-50 opacity-70"
                  : "border-slate-800 bg-white shadow-[4px_4px_0_0_#1e293b]"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-black text-xl px-3 py-1.5 rounded-xl border-2 border-slate-800 ${
                      isComplete
                        ? "bg-slate-200 text-slate-500 border-slate-300"
                        : "bg-slate-800 text-white shadow-[2px_2px_0_0_#20D572]"
                    }`}
                  >
                    Q{qIndex + 1}
                  </span>
                </div>
                {currentAnswers.length > 0 && (
                  <button
                    onClick={() => handleResetRow(qIndex)}
                    className="text-xs font-bold text-slate-800 flex items-center gap-1 bg-white border-2 border-slate-800 hover:bg-slate-100 px-3 py-2 rounded-xl shadow-[2px_2px_0_0_#1e293b] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all"
                  >
                    <RotateCcw size={14} strokeWidth={2.5} /> 다시
                  </button>
                )}
              </div>

              <div className="text-sm font-black mb-5 h-6 flex items-center">
                {currentAnswers.length === 0 && (
                  <span className="text-[#1D63FF] flex items-center gap-2">
                    <ChevronRight size={18} strokeWidth={3} /> 1순위 단어를
                    선택하세요!
                  </span>
                )}
                {currentAnswers.length > 0 && currentAnswers.length < 4 && (
                  <span className="text-[#FF73FA] flex items-center gap-2">
                    <ChevronRight size={18} strokeWidth={3} />{" "}
                    {currentAnswers.length + 1}순위 단어를 선택하세요!
                  </span>
                )}
                {currentAnswers.length === 4 && (
                  <span className="text-[#20D572] flex items-center gap-2">
                    <CheckCircle2 size={18} strokeWidth={3} /> 모두 선택완료!
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {words.map((word, adjIndex) => {
                  const rankPos = currentAnswers.indexOf(adjIndex);
                  const isSelected = rankPos !== -1;
                  const theme = COL_THEMES[adjIndex];

                  return (
                    <button
                      key={adjIndex}
                      onClick={() => handleSelect(qIndex, adjIndex)}
                      className={`relative w-full py-4 px-2 rounded-2xl text-center font-black text-[1rem] transition-all duration-200 border-2 border-slate-800 ${
                        isSelected
                          ? `${theme.solid} ${theme.text} shadow-[inset_0px_-3px_0px_rgba(0,0,0,0.15)] scale-[0.98]`
                          : isComplete
                          ? "bg-white text-slate-400 border-slate-200 cursor-not-allowed"
                          : `${theme.pastel} text-slate-800 hover:scale-[1.02] shadow-[2px_2px_0_0_#1e293b] hover:shadow-[3px_3px_0_0_#1e293b]`
                      }`}
                    >
                      {word}
                      {isSelected && (
                        <div
                          className={`absolute -top-3 -right-2 bg-white text-slate-800 text-xs font-black px-2 py-1 rounded-full border-2 border-slate-800 shadow-[2px_2px_0_0_#1e293b]`}
                        >
                          {rankPos + 1}순위
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t-2 border-slate-200 z-20">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <div className="flex-1 bg-white border-2 border-slate-800 h-5 rounded-full overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-500 bg-[#FFD600] border-r-2 border-slate-800"
              style={{ width: `${(answeredCount / 12) * 100}%` }}
            ></div>
          </div>
          <button
            onClick={calculateResult}
            disabled={!isTestComplete}
            className={`flex-shrink-0 font-black py-3 px-6 rounded-2xl border-2 transition-all flex items-center gap-2 ${
              isTestComplete
                ? "bg-slate-800 border-slate-800 text-white hover:bg-slate-700 shadow-[3px_3px_0_0_#20D572] active:translate-y-1 active:translate-x-1 active:shadow-none"
                : "bg-slate-100 border-slate-300 text-slate-400 cursor-not-allowed"
            }`}
          >
            결과 확인
            {isTestComplete && <CheckCircle2 size={20} strokeWidth={2.5} />}
          </button>
        </div>
      </div>
    </div>
  );

  const renderResult = () => {
    const result = RESULT_TYPES[finalTypeIndex];
    const ResultIcon = result.icon;

    return (
      <div className="pb-20 px-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 mt-4">
        <div
          ref={resultRef}
          className="bg-[#f8fafc] py-10 px-4 sm:px-8 relative rounded-3xl"
        >
          <div className="text-center mb-8 w-full block">
            <div className="inline-block text-slate-800 font-black text-sm mb-4 bg-white px-5 pt-2 pb-1.5 rounded-full border-2 border-slate-800 shadow-[2px_2px_0_0_#1e293b]">
              나의 업무 스타일은?
            </div>

            <div className="relative mb-6 mt-2 block">
              <div className="relative inline-block">
                <ResultIcon
                  className={`w-44 h-44 drop-shadow-md mx-auto ${
                    isDownloading ? "" : "animate-bounce"
                  }`}
                  style={isDownloading ? {} : { animationDuration: "2s" }}
                />
                <div
                  className={`absolute -bottom-2 -right-4 ${result.bgClass} text-slate-800 text-sm font-black px-4 pt-[6px] pb-[4px] rounded-full border-2 border-slate-800 shadow-[3px_3px_0_0_#1e293b] transform rotate-6 inline-block`}
                >
                  TYPE {result.id}
                </div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black mt-2 text-slate-800 text-center">
              {result.title}
            </h2>
            <p className="text-lg text-slate-600 font-bold mt-2 text-center">
              {result.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-800 shadow-[4px_4px_0_0_#1e293b] mb-8 relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 w-full h-2 ${result.bgClass} border-b-2 border-slate-800`}
            ></div>
            <h3 className="font-black text-slate-800 mb-3 text-lg mt-1 block text-left">
              <span className="bg-slate-800 text-white px-3 pt-[6px] pb-[4px] rounded-lg text-sm inline-block">
                특징 요약
              </span>
            </h3>
            <p className="text-slate-700 font-bold leading-relaxed break-keep text-base text-left">
              {result.desc}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-800 shadow-[4px_4px_0_0_#1e293b]">
            <h3 className="font-black text-slate-800 mb-6 text-center text-lg">
              내 안에 숨은 4가지 성향 점수
            </h3>
            <div className="space-y-5">
              {RESULT_TYPES.map((type, idx) => {
                const score = scores[idx];
                const percent = (score / 48) * 100;

                return (
                  <div
                    key={type.id}
                    className={`flex items-center text-sm sm:text-base font-black`}
                  >
                    <div className="w-12 text-center flex-shrink-0 text-slate-800 flex justify-center items-center">
                      {type.id}
                    </div>
                    <div className="flex-1 h-6 bg-slate-50 rounded-full border-2 border-slate-800 overflow-hidden mx-1 relative">
                      <div
                        className={`absolute top-0 left-0 h-full border-r-2 border-slate-800 transition-all duration-1000 ease-out ${type.bgClass}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="w-12 text-center flex-shrink-0 text-slate-800 flex justify-center items-center">
                      {score}점
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs font-bold text-center text-slate-400 mt-6 block">
              * 총 12문항, 항목별 만점 48점
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={handleRestart}
            className="flex-1 bg-white border-2 border-slate-800 text-slate-800 font-black text-base py-4 px-6 rounded-2xl hover:bg-slate-50 flex items-center justify-center gap-2 shadow-[3px_3px_0_0_#1e293b] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all"
          >
            <RotateCcw size={20} strokeWidth={2.5} />
            다시 하기
          </button>
          <button
            onClick={handleDownloadImage}
            disabled={isDownloading}
            className={`flex-1 ${
              isDownloading ? "bg-slate-300" : "bg-slate-800 hover:bg-slate-700"
            } text-white font-black text-base py-4 px-6 rounded-2xl border-2 border-slate-800 flex items-center justify-center gap-2 shadow-[3px_3px_0_0_#20D572] active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all`}
          >
            {isDownloading ? (
              <>
                <Loader2 size={20} className="animate-spin" strokeWidth={2.5} />
                저장 중...
              </>
            ) : (
              <>
                <Download size={20} strokeWidth={2.5} />
                결과 이미지 저장
              </>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-[#FFD600] selection:text-slate-800">
      <main className="container mx-auto py-8">
        {step === "intro" && renderIntro()}
        {step === "test" && renderTest()}
        {step === "result" && renderResult()}
      </main>

      {toastMessage && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-top-4">
          <div className="bg-slate-800 border-2 border-slate-800 text-white px-5 py-3 rounded-2xl shadow-[3px_3px_0_0_#20D572] flex items-center gap-2 text-sm font-black">
            <CheckCircle2
              size={20}
              className="text-[#20D572]"
              strokeWidth={2.5}
            />
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
}
