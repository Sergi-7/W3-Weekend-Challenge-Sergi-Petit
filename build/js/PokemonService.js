class PokemonService {
  urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

  async getPokemonData() {
    const response = await fetch(this.urlApi);
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
