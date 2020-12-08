import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from './Header.js'

class PokemonList extends Component {
  constructor() {
    super();
    this.state = {
      pokemons:[]
    }
  }

  componentDidMount(){

    fetch(`http://localhost:4242/pokemons/`)
    .then(res => res.json())
    .then(data => this.setState({ pokemons: data },() => console.log(data)));
  }


  render() {
    const { pokemons } = this.state;
    return (
      <main>
        <Header/>
       
        <div>
          <p>
            <p class="button-add">add a new pokemon</p>
          </p>
          {pokemons.map(element => {return (
            <div className="pokemon-container" key={element.id}>
              <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.numero}.png`} alt={`${element.name}` } className="imglist"></img>
              <p class="text-name">{element.nom}</p>
              <p class="text-body">TYPE: {element.type1}</p>
              <Link to={`/pokemons/${element.id}`}>
              <input type="button" className ="button-list" formAction="#" value="PLUS D'INFORMATIONS"/>
              <div>
              </div>
            </Link>
          </div>)
        })}
      </div>
    </main>
  );
}
}

export default PokemonList;