import React from 'react';
import data from './games.json';
import { useParams } from 'react-router-dom';
/* import { features } from 'process'; */

export default function Game() {
    /*
    let time=Date.now();
    let prevScroll = 0;
    */
    let par = useParams();
    document.getElementById("body")!.style.overflowY = "hidden";

    let obj = data.Games.find(o => o.id === par.gameId);

    let check = (obj?.newGame===true

        ?<p className='newOrNot'>
            <div>
                <p>&#x2713;</p><br/>
                <p>NEW GAME</p>
            </div>
        </p>

        :<p className='newOrNot'>
            <div>
                <p>&#x1F56E;</p><br/>
                <p>CLASSIC</p>
            </div>
        </p>
    )

    return(
        <div id="game" /*onScrollCapture={ (e) => { scrollGame(e.currentTarget)} }*/ >
            {check}
            <div className='gameBackg' style={ {backgroundImage: "url(/media/"+obj?.imgFolder+"/back.png)" }}>
                <div style={{height: "75vh"}}>
                    <div className="scroll-down"></div>
                </div>                
            <div className="scrollAndTitle">
                <h1 className='gameTitle'>{obj?.name}</h1>
                <p>{obj?.price}</p>
            </div>

            <div className='gameDetails'>
                <div className='gameDesc'>
                    {obj?.description.map((desc: string) => <p>{desc}</p>)}
                </div>

                <div className='genreAndFeatures'>
                    {obj?.genre.map((genre :string) => <p>{genre}</p>)}
                    <ul>
                        {obj?.features.map((feature: string) => <li>{feature}</li>)}
                    </ul>
                </div>

                <div className='installGame'>
                    <button onClick={()=>console.log("Yes")}>Install now</button>
                </div>
            </div>
            </div>
        </div>
    )

    /*
    function scrollGame(e: HTMLDivElement) {
        if (Date.now()-time>=100) {
            let newScroll=e.scrollTop;

            if (newScroll<e.clientHeight && newScroll>prevScroll) {
                e.scrollTo({
                    top: e.clientHeight,
                    left: 0,
                    behavior: "auto"
                });
            } else
            
            if (newScroll>e.clientHeight && newScroll<prevScroll) {
                e.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto"
                });
            }
            prevScroll=newScroll;
        }
        time=Date.now();
    }
    */
}