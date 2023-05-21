// import { useState } from 'react';
import React from 'react';
import data from './games.json';
import GamePreview from './GamePreview';
import { Link, Outlet, useOutletContext, useParams } from 'react-router-dom';
import { Carousel } from './Carousel';

export default function Catalog(): JSX.Element {
    let gId = useParams();
    let details;
    let catalog;
    if(gId.gameId){
        catalog = <Link to={"/"}>
            <Carousel/>
            <div id="catalog" className={"catDisabled"}>
                {data.Games.map((data) => <GamePreview {...data} key={data.id}/>)}
            </div>
        </Link>;

        details = <div className='gameOverCat'>
            <Outlet />
        </div>;
    } else {
        catalog = <>
            <Carousel/>
            <div id="catalog" className={"catEnabled"}>
                {data.Games.map((data) => <GamePreview {...data} key={data.id}/>)}
            </div>
        </>;

        details = "";
    }
    document.getElementById("body")!.style.overflowY = "scroll";
    return(
        <>
            {catalog}
            {details}
        </>
    )
}

export function useState() {
    return useOutletContext<Function>();
}