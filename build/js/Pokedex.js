class Pokedex {
  urlApi = "https://pokedex-sergi.herokuapp.com/pokemon";

  async Pokemon() {
    const response = await fetch(this.urlApi);
    const pokemon = await response.json();
    return pokemon;
  }

  updateGentleman(id, name) {
    fetch(`${this.urlApi}${id}`),
      {
        method: "PUT",
        body: JSON.stringify(name),
        headers: {
          "Content-Type": "application/json",
        },
      };
  }

  async deletePokemon(id) {
    const response = await fetch(`${this.urlApi}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
    throw new Error("Can't delete this pokemon");
  }

  async createPokemon(pokemon) {
    const response = await fetch(this.urlApi, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newPokemon = await response.json();
    return newPokemon;
  }
}

export default Pokedex;
