
// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from "react"

// data
import { wordsList } from './data/words'

// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  //stages estágios do jogo
  const [gameStage, setGameStage] = useState(stages[0].name)
  //wordsList
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  //letras acertos
  const [guessedLetters, setGuessedLetters] = useState([])
  // letras erros 
  const [wrongLetters, setWrongLetters] = useState([])
  // tentativas chances 
  const [guesses, setGuesses] = useState(3)
  // pontuação
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)

    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return { word, category }
  }

  // starts the secret word game
  const startGame = () => {
    // pick word e pick category
    const { word, category } = pickWordAndCategory()

    //  create an array of lettets
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)


    setGameStage(stages[1].name)
  }

  //process the letter input
  const veriyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  useEffect(() => {
    if (guesses <= 0) {

      setGameStage(stages[2].name)
    }
  }, [guesses])

  console.log(guessedLetters)
  console.log(wrongLetters)


  // restarts the  game
  const retry = () => {
    setGameStage(stages[0].name)
  }


  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" &&
        <Game
          veriyLetter={veriyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );

}

export default App;
