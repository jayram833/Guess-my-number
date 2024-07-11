import SectionLeft from "./SectionLeft"
import SectionRight from "./SectionRight"
export default function Main({
    num,
    onSetNum,
    secretNum,
    message,
    onSetMessage,
    score,
    onSetScore,
    highScore,
    onSetHighScore,
    winColor,
    onSetWinColor,
  }) {
    return (
      <main>
        <SectionLeft
          num={num}
          onSetNum={onSetNum}
          secretNum={secretNum}
          onSetMessage={onSetMessage}
          score={score}
          onSetScore={onSetScore}
          highScore={highScore}
          onSetHighScore={onSetHighScore}
          winColor={winColor}
          onSetWinColor={onSetWinColor}
        />
        <SectionRight message={message} score={score} highScore={highScore} />
      </main>
    );
  }