export default function SectionLeft({
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