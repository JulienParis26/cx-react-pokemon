import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from './Header.js'

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemons:[]
    }
  }

  componentDidMount(){

    const id = this.props.match.params.id;
    fetch(`http://localhost:4242/pokemons/${id}`)
    .then(res => res.json())
    .then(data => this.setState({ pokemons: data },() => console.log(data)));
  }

  render() {
    const { pokemons } = this.state;
    return (  
      <div>
        <Header/>
        <div className="row">
          {pokemons.map(element => {return (
            <div className="col btn btn-light" key={element.id}>
              <img class="image-pokemon" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.numero}.png`} />
              <p class="text-pokemon">Numéro: {element.numero}</p>
              <p class="text-pokemon">Nom: {element.nom}</p>
              <p class="text-pokemon">Type: {element.type1} {element.type2}</p>
              <p class="text-pokemon">Espece: {element.espece}</p>
              <p class="text-pokemon">Taille: {element.taille}</p>
              <p class="text-pokemon">Poids: {element.poids}</p>
              <p class="text-pokemon">Couleur: {element.couleur}</p>
              <p class="text-pokemon">Forme: {element.forme}</p>
              <p class="text-pokemon">Attaques: {pokemons.map(attaques => <div>{attaques.nom}</div>)}</p>
              
             

              <form method="get" action="/pokemons">
                <button class="button-pokemon" type="submit" className="button-pokemon">retour</button>
              </form>
          </div>
          )
        })}
      </div>
    </div>
  );
}
}

export default Pokemon;