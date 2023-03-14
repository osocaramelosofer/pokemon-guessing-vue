<template>
  <div>
    <h1>quien es este pokemon?</h1>
    <PokemonPicture :pokemonId="4" :showPokemon="false"/>
    <PokemonOptions />
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOpions from "@/helpers/getPokemonOptions"

console.log(getPokemonOpions())

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
}
</script>

<style>

</style>