import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"Player 1"} symbol={"X"} />
          <Player name={"Player "} symbol={"0"} />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
