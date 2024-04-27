import Square from "./Square.jsx";

const Rows = ({id}) => {
    const rows = [1,2,3,4,5];
    return (
        <div className={'flex mb-2 row'}>
            {rows.map((row, index) =>
                <Square key={index} rowId={id} indexId={index}/>
            )}
        </div>
    )
}

export default Rows;