import React, {useEffect, useState} from "react";
// import {calculate, Generations, Pokemon, Move, Field} from '@smogon/calc';
import {Pokemon, PokemonClient} from "pokenode-ts";

const api = new PokemonClient({
    cacheOptions: {maxAge: 8.64e8, exclude: {query: false}},
});

const CreateCharacter = () => {
    let [pokemonList, setPokemonList] = useState<Pokemon []>([]);
    let [currentPokemon, setCurrentPokemon] = useState<Pokemon>();

    // get current pokemon details from API
    const getPokemon = async (pokemonName: string) => {
        try {
            const data = await api.getPokemonByName(pokemonName);
            setCurrentPokemon(data);
            console.log("current pokemon: ", data);
        } catch (err) {
            console.log(err);
        }
    }

    // handle dropdown selection
    const handleChange = (e: any) => {
        console.log(e.type);
        // e.preventDefault();
        alert("you have chosen: " + e.target.value);

        getPokemon(e.target.value).then(() => console.log("updated current pokemon"));
    }

    // get pokemon from API
    useEffect(() => {
        const getAllPokemon = async () => {
            try {
                const data = await api.listPokemons(0, 1000);
                // list = data.results.map(({ name }) => name);
                console.log(data.results);
                setPokemonList(data.results as unknown as Pokemon[]);
            } catch (err) {
                console.log(err);
            }
        }
        getAllPokemon().then(() => console.log("updated list of all pokemon"));
    }, []);

    // Set Bulbasaur
    useEffect(() => {
        getPokemon("bulbasaur").then(() => console.log("set pokemon as Bulbasaur"));
    }, []);

    return (
        <div className="pokemonSheet">
            <div className="column1">
                <select id="pokemonList" onChange={handleChange}>
                    {pokemonList.map(({name,id}) => (
                    <option value={id}>{name}</option>)
                )}
                </select><br/>
                <img src={currentPokemon?.sprites.front_default || undefined} height="200px" alt={currentPokemon?.name}/>
                <h1>{currentPokemon?.name ?? "Choose a pokemon..."}</h1>
            </div>
            <div className="column1">Test</div>
        </div>
    )
}

export default CreateCharacter;
