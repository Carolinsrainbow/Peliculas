<template>
  <div class="home">
    <!-- Buscador -->
    <input
      type="text"
      placeholder="Ingresa una película"
      v-model="peliculaBuscada"
    />
    <button @click="buscar">Buscar</button>

    <Encontradas></Encontradas>
  </div>
</template>

<script>
// @ is an alias to /src
import Encontradas from "@/components/Encontradas.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Encontradas,
  },
  data() {
    return {
      peliculaBuscada: "",
    };
  },
  methods: {
    ...mapActions(["traerPeliculas"]),
    buscar() {
      this.traerPeliculas(this.peliculaBuscada);
    },
  },
};
</script>
