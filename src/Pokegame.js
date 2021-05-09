import React from "react";
import Pokedex from "./Pokedex";

let team1=[
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];

  class Pokegame extends React.Component{
      render(){
        
        const len=team1.length;
        let team2=[];

        while(team1.length>len/2)
        {
            let index=Math.floor(Math.random()*team1.length);
            let item=team1.splice(index,1)[0];
            team2.push(item);
        }
        
        let exp1=team1.reduce((exp,currentvalue) => exp+currentvalue.base_experience,0 );

        let exp2=team2.reduce((exp,currentvalue) => exp+currentvalue.base_experience,0 );

          return <div>
              <h1>Pokegame</h1>
              <div><Pokedex pokemon={team1} isWinner={exp1>exp2 ? "true" : "false"} totalExp={exp1}/></div>
                
                <div><Pokedex pokemon={team2} isWinner={exp2>exp1 ? "true" : "false"} totalExp={exp2}/></div>
          </div>
      }
  }

  export default Pokegame;