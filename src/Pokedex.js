import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


  class Pokedex extends React.Component{
      render(){
          let Pokemon=this.props.pokemon;

          let title;
          
          if(this.props.isWinner==="true"){
              title="Winning Hand";
          }
          else{
              title="Losing Hand";
          }
          
          return <div class={title==="Winning Hand" ? "Pokedex-Winner" : "Pokedex-Loser"}>
              <h1>{title}</h1>
              <h3>Total Experience: {this.props.totalExp}</h3>
              <div class="Pokedex-cards">
              {Pokemon.map(m => 
                  <Pokecard id={m.id} name={m.name} type={m.type} exp={m.base_experience} />
              )}
          </div>
          </div>
      }
  }

  export default Pokedex;