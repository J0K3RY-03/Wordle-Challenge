import Key from './Key.jsx';

const Tile = () => {
    return (
        <div className={'tile flex flex-col justify-center items-center'}>
            <Tile1/>
            <Tile2/>
            <Tile3/>
        </div>
    )
}

const Tile1 = () => {
    const tile1 =
        ['A','B','C','D','E','F','G','H'];
    return (
        <div className={'flex mb-3'}>
            {tile1.map((letter, index) => (
                <Key key={index} letter={letter} keyId={index}/>
            ))}
        </div>
    )
}

const Tile2 = () => {
    const tile2 =
        ['I','J','K','L','M','N','O','P','Q','R','S'];
    return (
        <div className={'flex mb-3'}>
            {tile2.map((letter, index) => (
                <Key key={index} letter={letter} keyId={index}/>
            ))}
        </div>
    )
}

const Tile3 = () => {
    const tile3 =
        ['←','T', 'U', 'V', 'W', 'X', 'Y', 'Z', '↵'];
    return (
        <div className={'flex'}>
            {tile3.map((letter, index) => (
                <Key key={index} letter={letter} keyId={index}/>
            ))}
        </div>
    )
}

export default Tile;