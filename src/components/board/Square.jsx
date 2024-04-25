import {useContext, useEffect, useState} from "react";
import {WordContext} from "./BoardContent.jsx";
import {WORDS} from '../../data/words.js'

const Square = () => {
    const word = useContext(WordContext)
    const [letter , setLetters] = useState([]);
    const [wordForWin, setWordForWin] = useState('');

    useEffect(() => {
        setWordForWin(word.toUpperCase());
        const tableOfLetters = word.toUpperCase().split('');
        setLetters(tableOfLetters);
    }, [word]);

    return (
        <div className="flex">
            {letter.map((letter, index) => (
                <SquareContent key={index} letter={letter}/>
            ))}
        </div>
    );
}

const SquareContent = ({letter}) => {
    console.log(letter)
    return (
        <div
            className={'flex justify-center items-center border' +
                ' rounded-md p-4 mr-1 w-[60px] h-[60px] text-2xl'}
        >
            {letter}
        </div>
    )
}

export default Square;