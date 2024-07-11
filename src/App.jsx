import { useState } from "react";
import "./styles.css";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
export default function App() {
  const [num, setNum] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [winColor, setWinColor] = useState(false);
  const [secretNum, setSecretNumber] = useState(secretNumber);

  return (
    <div
      style={
        !winColor ? { backgroundColor: "#222" } : { backgroundColor: "#60b347" }
      }
    >
      <Header
        onSetNum={setNum}
        secretNum={secretNum}
        onSetSecretNumber={setSecretNumber}
        winColor={winColor}
        onSetMessage={setMessage}
        onSetScore={setScore}
        onSetWinColor={setWinColor}
      />
      <Main
        num={num}
        onSetNum={setNum}
        secretNum={secretNum}
        message={message}
        onSetMessage={setMessage}
        score={score}
        onSetScore={setScore}
        highScore={highScore}
        onSetHighScore={setHighScore}
        winColor={winColor}
        onSetWinColor={setWinColor}
      />
    </div>
  );
}

function Header({
  onSetNum,
  onSetSecretNumber,
  secretNum,
  winColor,
  onSetScore,
  onSetWinColor,
  onSetMessage,
}) {
  function handleAgain() {
    onSetScore(20);
    onSetMessage("Start guessing...");
    onSetWinColor(false);
    onSetNum(0);
    onSetSecretNumber(() => Math.trunc(Math.random() * 20) + 1);
  }
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={handleAgain}>
        Again!
      </button>
      <div className="number">{winColor ? secretNum : "?"}</div>
    </header>
  );
}

function Main({
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

function SectionLeft({
  num,
  onSetNum,
  secretNum,
  onSetMessage,
  onSetScore,
  score,
  highScore,
  onSetHighScore,
  winColor,
  onSetWinColor,
}) {
  function handleOnChange(e) {
    onSetNum(Number(e.target.value));
  }

  function handleClick() {
    if (num === secretNum) {
      onSetMessage("Congratulations Guess is correct!!");
      onSetHighScore(() => (highScore > score ? highScore : score));
      onSetWinColor(() => true);
    } else if (num < secretNum) {
      if (score > 1) {
        onSetScore(() => score - 1);
        onSetMessage("Too Low 📉");
      } else {
        onSetScore(0);
        onSetMessage("You Lost");
      }
    } else if (num > secretNum) {
      if (score > 1) {
        onSetScore(() => score - 1);
        onSetMessage("Too high 📈");
      } else {
        onSetScore(0);
        onSetMessage("You Lost");
      }
    }
  }
  return (
    <section className="left">
      <input
        type="number"
        className="guess"
        value={num}
        onChange={handleOnChange}
      />
      <button className="btn check" onClick={handleClick}>
        Check!
      </button>
    </section>
  );
}

function SectionRight({ message, score, highScore }) {
  return (
    <section className="right">
      <p className="message">{message}</p>
      <p className="label-score">
        💯 Score: <span className="score">{score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{highScore}</span>
      </p>
    </section>
  );
}
