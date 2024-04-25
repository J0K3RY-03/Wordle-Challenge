import Square from "./Square.jsx";

const Rows = ({rowId, id}) => {
    console.log(rowId, id, 'row')
    return (
        <div className={'flex row'}>
            <Square  />
        </div>
    )
}

export default Rows;