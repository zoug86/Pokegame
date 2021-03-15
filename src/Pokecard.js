import React, { Component } from 'react';
import './Pokecard.css';

let paddingZeros = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {

    render() {
        const { id, name, type, base_experience } = this.props;

        return (
            <div className="Pokecard-container">
                <h2 className="Pokecard-name">{name}</h2>
                <img alt="pokemon" className="Pokecard-img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddingZeros(id)}.png`} />
                <p className="Pokecard-type">Type: {type} </p>
                <p className="Pokecard-experience">Exp: {base_experience} </p>
            </div>

        )
    }
}

export default Pokecard;