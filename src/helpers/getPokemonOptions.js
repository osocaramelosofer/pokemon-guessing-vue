import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

const getPokemonOptions = () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = getPokemonNames(mixedPokemons.splice(0, 4));

  return pokemons;
};

const getPokemonNames = async ([a, b, c, d] = []) => {
  // Arreglo de promesas
  // con este arreglo aun no estamos llamado a las promesas
  const promisesArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];

  // promise.all
  // nos regresa todas las promesas resueltas y desestructuramos para obtener cada promesa
  const [p1, p2, p3, p4] = await Promise.all(promisesArr);

  // regresar un arreglo de los 4 pokemons
  // retornamos un arreglo con promesas
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

export default getPokemonOptions;
