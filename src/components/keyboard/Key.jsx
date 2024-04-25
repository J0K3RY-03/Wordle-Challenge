const Key = ({letter, keyId}) => {
    return (
        <div className={'flex items-center justify-center border rounded-md p-4 mr-1' +
            ' w-[45px] h-[45px] text-1xl'}>
            {letter}
        </div>
    )
}

export default Key;