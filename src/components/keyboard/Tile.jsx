import Key from './Key.jsx';

const Tile = () => {
    return (
        <div className={'tile grid grid-cols-9 grid-rows-3 gap-x-1 gap-y-2'}>
            <Tile1/>
        </div>
    )
}

const Tile1 = () => {
    const tile1 =
        ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', '↵'];
    return (
        <>
            {tile1.map((letter, index) => (
                <Key key={index} letter={letter} keyId={index}/>
            ))}
        </>
    )
}

export default Tile;