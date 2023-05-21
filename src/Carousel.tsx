import React, { useState, useEffect } from "react";
import "./index.css";
import data from './games.json';

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

let featured = data.Featured;

export const CarouselItem = ({children}: {children: game}) => {
    return (
        <div className="carousel-item" 
        style={{width: "100vw", backgroundImage: "url(/media/" + children.imgFolder + "/back.png"}}>
            <div className="bannerInfo" style={{ backgroundColor: "#131313e4", width: "100%", height: "100%" }}>
                <p style={{ fontSize: "0.6em"}}>RECOMMENDED FOR YOU</p>
                <h1>{children.name}</h1>
                <section><h5>{children.genre[0]}</h5></section>
                <div>
                    <button>
                        INSTALL GAME
                    </button>
                    <button>
                        ADD TO FAVOURITES
                    </button>
                </div>
            </div>
        </div>
    );
};

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [pause, setPause] = useState(false);
    const featuredSize = featured.length-1;

    let games: Array<any> = [];
    featured.forEach((ft) => games.push(data.Games.find(g => g.id === ft)));

    function changeFeatured(newIndex: number) {
        let index=newIndex;

        if (index > featuredSize) {
            index=0;
        } else if (index < 0) {
            index=featuredSize;
        }

        setActiveIndex(index);
    }

    useEffect(() => {
      const interval = setInterval(() => {
        if(!pause) changeFeatured(activeIndex + 1);
      }, 3000);

      return () => {
        if (interval) clearInterval(interval);
      };
    });

    return (
        <div className="carousel"
         onMouseEnter={() => {setPause(true)}}
         onMouseLeave={() => {setPause(false)}}>

            <div className="inner" style={{ transform: `translateX(-${ activeIndex * 100 }%)`}}>
                {games.map((data: any) => <CarouselItem children={data} key={data.id}/>)}
            </div>

            <button id="prevFeatured" onClick={ () => {changeFeatured(activeIndex - 1)} }>
                {"<"}
            </button>

            <button id="nextFeatured" onClick={ () => {changeFeatured(activeIndex + 1)} }>
                {">"}
            </button>
        </div>
    )
}