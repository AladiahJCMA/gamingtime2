import React from 'react';
import { Link } from 'react-router-dom';

interface game {
    id: string,
    name: string,
    price: string,
    imgFolder: string,
    newGame: boolean,
    description: Array<string>,
    genre: Array<string>,
    features: Array<string>
}

export default function GamePreview(gameParam: game): JSX.Element {
    return(
        <article className="gamePrev">
            <Link to={"/game/"+gameParam.id}>
                <img src={"/media/"+gameParam.imgFolder+"/main.png"} alt="" className="gameImg" onDragStart={()=> {return false}}>
                </img>
            </Link>
            <div className="infoAndBuy">
                <div className="gameInfo">
                    <h3>{gameParam.name}</h3>
                    <p>Price:&nbsp;{gameParam.price}</p>
                </div>
                <button className="buyGame" value={"#"+gameParam.id} onClick={()=> {console.log("a")}}>Buy now</button>
            </div>
        </article>
    )
}