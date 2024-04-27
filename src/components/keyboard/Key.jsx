import {useContext} from "react";
import {AppContext} from "../../App.jsx";

const Key = ({letter}) => {
    const {guessTheWord, pressEnter, backspace} = useContext(AppContext);
console.log(letter, 'how letter')
    const handleClickEnter = () => {
        if (letter === '↵'){
            pressEnter()
        } else if (letter === '←') {
            backspace()
        }
    }

    return (
        <button onClick={() => {
            guessTheWord(letter)
            handleClickEnter()
        }} className={'flex items-center' +
            ' justify-center border' +
            ' rounded-md' +
            ' p-4 mr-1' +
            ' w-[45px] h-[45px] text-1xl'}>
            {letter}
        </button>
    )
}

export default Key;