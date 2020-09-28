import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculasEncontradas: [],
    peliculasFavoritas: []
  },
  mutations: {
    TRAER_PELICULAS(state, peliculas) {
      state.peliculasEncontradas = peliculas.Search
    },
    AGREGAR_FAVORITOS(state,id){
      state.peliculasFavoritas.push(id)
    }


  },
  actions: {
    traerPeliculas({
      commit
    }, payload) {
      axios.get(`http://www.omdbapi.com/?s=${payload}&apikey=7cbd9890`).then((res) => {
        commit("TRAER_PELICULAS", res.data)
        console.log(res.data)
      })
    }
  },
  modules: {}
})