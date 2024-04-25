import Board from "./components/board/Board.jsx";
import Keyboard from "./components/keyboard/Keyboard.jsx";

function App() {

  return (
      <main className={'flex flex-col justify-center items-center py-8'}>
          <Board/>
          <Keyboard/>
      </main>
  )
}

export default App
