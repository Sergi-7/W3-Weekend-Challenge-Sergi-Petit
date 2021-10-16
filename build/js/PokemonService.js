class PokemonService {
  urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

  async getPokemonData() {
    const response = await fetch(this.urlApi);
    const pokemonData = await response.json();
    return pokemonData;
  }
}

export default PokemonService;
