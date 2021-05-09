import React from "react";
import "./Pokecard.css";

const PokeApi="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

function reducetothree(number){
    return number<=999 ? `00${number}`.slice(-3) : number ;
}

class Pokecard extends React.Component{
    render(){
        let imgSrc=`${PokeApi}${reducetothree(this.props.id)}.png`;

        return<div class="Pokecard">
            <div class="Pokecard-title">
            <h2>{this.props.name}</h2>
            </div>
            <div class="Pokecard-image">
            <img src={imgSrc} alt=""/>
            </div>

            <div class="Pokecard-data">Type: {this.props.type}</div>
            <div class="Pokecard-data">Exp: {this.props.exp}</div>
        </div>
    }
}

export default Pokecard;