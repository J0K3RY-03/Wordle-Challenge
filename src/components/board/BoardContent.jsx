import Rows from "./Rows.jsx";
import {useState} from "react";
import Grid from "./Grid.jsx";
import {WORDS} from "../../data/words.js";
import React, {useContext, createContext, useEffect} from "react";

const WordContext = createContext(null);

const WordContextProvider = ({children}) => {
    const [word, setWord] = useState('');

    useEffect(() => {
        const getRandomWord = () => {
            const random = Math.floor(Math.random() * WORDS.length);
            setWord(WORDS[random]);
        }

        getRandomWord()
    }, [])

    const data = word;

    return (
        <WordContext.Provider value={data}>
            {children}
        </WordContext.Provider>
    )
}

const BoardContent = () => {

    return (
        <div className={'max-w-fit mx-auto flex'}>
            <WordContextProvider>
                <Grid/>
            </WordContextProvider>
        </div>
    )
}

export {WordContext, WordContextProvider};
export default BoardContent;
