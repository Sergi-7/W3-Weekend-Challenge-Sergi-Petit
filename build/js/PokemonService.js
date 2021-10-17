class PokemonService {
  async getPokemonData(limit, offset) {
    const getUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}}`;
    const response = await fetch(getUrl);
    const pokemonData = await response.json();
    return pokemonData;
  }

  async getPokemonInfo(url) {
    const pokemon = await fetch(url);
    const pokemonInfo = await pokemon.json();
    return pokemonInfo;
  }
}

export default PokemonService;
