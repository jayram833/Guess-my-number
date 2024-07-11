import { useState } from "react";
import "./styles.css";
import Main from "./Main"
import Header from "./Header"
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



