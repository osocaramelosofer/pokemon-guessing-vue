<template>
  <h1 v-if="!pokemon">Por favor espere ...</h1>
  <div v-else>
    <h1>quien es este pokemon?</h1>

    <!-- es buena practica mandar los atributos asi con kebab-case, y recibirlos en los componentes como lowerCamelCase -->
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame" class="fade-in">juego nuevo</button>
    </template>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOpions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      message: "",
      showAnswer: false,
    };
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOpions();
      this.pokemon = this.pokemonArr[Math.floor(Math.random() * 4)];
    },
    checkAnswer(selectedPokemonId) {
      this.showPokemon = true;
      this.showAnswer = true

      if (selectedPokemonId === this.pokemon.id) {
        this.message = `Correcto! el pokemon es ${this.pokemon.name}`
      }
      else{
        this.message = `Incorrecto, el pokemon era ${this.pokemon.name}`
      }
    },
    newGame(){
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArr()
    }
  },
  mounted() {
    this.mixPokemonArr();
  },
};
</script>

<style>
</style>