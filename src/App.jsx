import Board from "./components/board/Board.jsx";
import Keyboard from "./components/keyboard/Keyboard.jsx";
import {createContext, useState} from "react";
import {WORDS} from "./data/words.js";

const AppContext = createContext();

function App() {
    const random = Math.floor(Math.random() * WORDS.length -1);
    const [word, setWord] = useState(WORDS[random].toUpperCase());
    const [completedRows , setCompletedRows] = useState([]);
    const [guessWord , setGuessWord] = useState('');
    const [currentRow, setCurrentRow] = useState(0);
    const [showModal, setShowModal] = useState(false);
console.log(word)

    const guessTheWord = (letter) => {
        if (guessWord.length === 5) return;
        setGuessWord(prev => prev.concat(letter));
    }

    const pressEnter = () => {
        if(guessWord.length<5) return
        console.log(guessWord, word, 'GUESS WORD')
        if(guessWord === word) alert('Bien jouer tu as trouver le mot ! refresh pour' +
            ' recommencer pas eu le temps pour la modale')
        console.log('HELOO2222')

        console.log('Pressed Enter' + currentRow)
        setCurrentRow(currentRow +1)
        setCompletedRows([...completedRows ,currentRow])
        setGuessWord('')
        if(currentRow >= 5) {
            return alert('Tu as perdu, refresh pour recommencer (pas le temps pour la modale :( )')
        }

    }

    const backspace = () => {
        setGuessWord(guessWord.slice(0 , guessWord.length-1))
    }


    return (
      <main className={'relative flex flex-col justify-center items-center py-8'}>
          <AppContext.Provider value={{
              pressEnter,
              guessTheWord,
              backspace,
              word,
              completedRows,
              guessWord,
              currentRow
          }}>
              <Board/>
              <Keyboard/>
          </AppContext.Provider>
      </main>
  )
}

export {AppContext};
export default App
