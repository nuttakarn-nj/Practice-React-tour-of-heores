import React from 'react';
import './dashboard.css';

import Hero from './heroes';
import HeroDetail from './hero_detail.js';



export default class Dashboard extends React.Component {

    constructor(){
            super();
            this.state = {
            }
    }

    onSelect(hero) {
        this.setState({ selectedHero: hero, classDetail: "block", });
    }

    gotoDetail(){
        window.location.href = "/heroDetail";
    }


    render(){

        //heroes from heroes.js
        //console.log(heroesString);
        const heroesString = localStorage.getItem("heroes");

        //console.log(heroesArray);
        const heroesArray = JSON.parse(heroesString);
  
        return (
            <div>
                <h3>Top Heroes</h3>

                <div className="grid grid-pad">
                    <button onClick={ () => this.gotoDetail()}><h4>{heroesArray[0].name}</h4></button>
                    <button onClick={ () => this.gotoDetail()}><h4>{heroesArray[1].name}</h4></button>
                    <button onClick={ () => this.gotoDetail()}><h4>{heroesArray[2].name}</h4></button>
                    <button onClick={ () => this.gotoDetail()} ><h4>{heroesArray[3].name}</h4></button>
                </div>
         
                <div>
                    <Hero_search />
                </div>
            </div>
        );
    }
}

class Hero_search extends React.Component {
    render(){
        return(
            <div id="search-component">
                <h4>Hero Search</h4>
                <input id="search-box" />
            </div>
        )
    }
}
