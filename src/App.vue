<template>
  <div id="app">
    <Loader />
    <Notification />
    <PosterBG :poster="posterBg"/>
    <Header />
    <MoviesList :list="moviesList" @changePoster="onChangePoster"/>
    <MoviesPagintaion
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
      />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from './components/moviesList.vue';
import PosterBG from './components/PosterBG.vue';
import MoviesPagintaion from './components/MoviesPagination.vue';
import Loader from './components/Loader.vue';
import Header from './components/Header.vue';
import Notification from './components/Notification.vue';

export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBG,
    MoviesPagintaion,
    Loader,
    Header,
    Notification,
  },
  data: () => ({
    posterBg: '',
  }),
  watch: {
    '$route.query': {
      handler: 'onPageQueryChange',
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions('movies', ['changeCurrentPage']),
    onPageQueryChange({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
    },
  },
  computed: {
    ...mapGetters('movies', ['moviesList', 'currentPage', 'moviesPerPage', 'moviesLength']),
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
