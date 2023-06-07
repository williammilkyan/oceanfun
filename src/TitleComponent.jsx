import ocean from "/images/ocean.jpg";

export function TitleComponent ({showbg, onClick}) {
    const title = '';
    const background = <img className='background' alt='ocean'
    src={ocean}/>;
    







    return (
        <div>
            <button onClick={onClick} >Enter Ocean</button>
            <h1>{title === ''? 'Click an animal for a fun fact!' : title}</h1>
            {showbg && background}
        <p id='fact'></p>
        </div>
    )
}