import Square from "./Square.jsx";

const Rows = ({rowId, id}) => {
    console.log(rowId, id, 'row')
    return (
        <div className={'flex mb-2 row'}>
            <Square  />
        </div>
    )
}

export default Rows;