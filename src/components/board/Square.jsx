import {AppContext} from "../../App.jsx";
import {useContext, useEffect, useState} from "react";

const Square = ({rowId, indexId}) => {
    const [letter, setLetter] = useState('')
    const {guessWord , word , currentRow , completedRows} = useContext(AppContext);
    const [completed , setCompleted] = useState(true)
    const [colors, setColors] = useState({bg: 'bg-blue', color:'white'});
    const changeColors = () => {
        const arrayOfWord = word.split('');
        if (arrayOfWord.includes(letter)){
            if (arrayOfWord[indexId] === letter){
               return setColors({bg:'green' , color:'black'});
            }
            return setColors({bg:'orange', color:'black'})
        }
        return setColors({bg:"red" , color:"black"})
    }

    useEffect(() => {
        if (currentRow === rowId) {
            setLetter(guessWord[indexId]);
        }

        if(completedRows.includes(rowId) && completed){
            changeColors()
            setCompleted(false)
        }
    }, [changeColors, completed, completedRows, currentRow, guessWord, indexId, rowId]);

    const style ={
        backgroundColor: colors.bg,
        color: colors.color
    }

    return (
        <div style={style} className="flex justify-center items-center border border-white-100 w-[50px] h-[50px]">
            <p>{letter}</p>
        </div>
    );
}

export default Square;