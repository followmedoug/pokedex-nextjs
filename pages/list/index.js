import React from "react";
import ListItem from "../../components/ListItem";
import ListPokemon from "../../components/List";
import WrapperFlex from "../../components/WrapperFlex";
import ListItemDescription from "../../components/ListItemDescription";

export async function getStaticProps(context) {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/2")
    .then((serverResponse) => {
      if (serverResponse.ok) {
        return serverResponse.json();
      }
    })
    .then((objectResponse) => {
      return objectResponse.pokemon_entries;
    });

  return {
    props: { pokemons },
  };
}

export default function List(props) {
  const { pokemons } = props;
  return (
    <>
      <ListPokemon>
        {pokemons.map((pokemon) => (
          <ListItem key={pokemon.entry_number}>
            <WrapperFlex column>
              <WrapperFlex
                backgroundColor="#E8E8E8"
                style={{ borderRadius: "4px 4px 0 0" }}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
                />
              </WrapperFlex>
              <ListItemDescription text={pokemon.pokemon_species.name} />
            </WrapperFlex>
          </ListItem>
        ))}
      </ListPokemon>
    </>
  );
}
