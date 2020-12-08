import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>
        <nav>
            <h1>
              <a href="/pokemons" title= "POKEDEX"><img class="logo-pokedex" src="https://user-images.githubusercontent.com/20692907/78142386-d6a7dc00-7467-11ea-81ca-c21b6b77d823.png" width="300px;"/></a>
            </h1>
          </nav>
          
      </header>
  );
}
}



export default Header;