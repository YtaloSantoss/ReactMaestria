import './Game.css'

const Game = ({ veriyLetter }) => {
  return (
    <div>
      <h1>Game</h1>

      <button onClick={veriyLetter}>Começar o jogo</button>
    </div>
  )
}

export default Game