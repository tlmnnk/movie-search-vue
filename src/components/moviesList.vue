<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem :movie="movie" @mouseover.native="onMouseOver(movie.Poster)"/>
        </BCol>
      </template>
      <template v-else>
        <div>Empty movie list</div>
      </template>
    </BRow>
  </BContainer>
</template>

<script>
import MovieItem from './MovieItem.vue';

export default {
  name: 'MoviesList',
  components: {
    MovieItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      return !!Object.keys(this.list).length;
    },
  },
  methods: {
    onMouseOver(poster) {
      this.$emit('changePoster', poster);
    },
  },
};
</script>

<style scoped>
  .list-title {
    margin-bottom: 30px;
    font-size: 50px;
    color: #fff;
  }
</style>
