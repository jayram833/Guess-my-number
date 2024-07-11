export default function Header({
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
  
  