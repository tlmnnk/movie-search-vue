<template>
  <div id="app">
    <PosterBG :poster="posterBg"/>
    <MoviesList :list="moviesList" @changePoster="onChangePoster"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from './components/moviesList.vue';
import PosterBG from './components/PosterBG.vue';

export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBG,
  },
  data: () => ({
    posterBg: '',
  }),
  methods: {
    ...mapActions('movies', ['fetchMovies']),
    onChangePoster(poster) {
      this.posterBg = poster;
    },
  },
  computed: {
    ...mapGetters('movies', ['moviesList']),
  },
};
</script>

<style>
#app {
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
