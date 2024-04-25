import Rows from "./Rows.jsx";

const Grid = () => {
    const column = [1,2,3,4,5,6]
    return (
        <div className={'rowss'}>
            {column.map((row, index) => (
                <Rows key={index} rowId={index} id={index}/>
            ))}
        </div>
    )
}

export default Grid;