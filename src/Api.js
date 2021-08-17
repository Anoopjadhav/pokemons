class myApi {
  constructor() {
    this.pokemons = ['Pikachu', 'Raichu', 'Bulbasaur'];
  }

  getPokemons() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.pokemons);
      }, 1000);
    });
  }
}

export default new myApi();
