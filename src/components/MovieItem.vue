<template>
  <div class="movie-item mb-3">
    <div class="movie-item-poster" :style="posterBG"></div>
    <div class="movie-info-wrap d-flex flex-column justify-content-between">
      <div class="movie-item-info">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="movie-item-controls row no-gutters">
        <div class="col pr-2">
          <BButton size="md" block variant="outline-light">Edit</Bbutton>
        </div>
        <div class="col pl-2">
          <BButton size="md" block variant="outline-light">Remove</Bbutton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movie: {
      type: Object,
      requred: true,
    },
  },
  computed: {
    posterBG() {
      return {
        'background-image': `url(${this.movie.Poster})`,
      };
    },
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  height: 400px;
  border-radius: 5px;
  transition: all 2.s ease;
  overflow: hidden;
  cursor: pointer;
}
.movie-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}
.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, .7);
  transform: scale(1.02);
}
.movie-info-wrap {
  padding: 20px 10px;
  height: 100%;
  opacity: 0;
  transition: all .2s ease;
}
.movie-title {
  font-size: 20px;
  color: #fff;
}
.movie-year {
  font-size: 16px;
  color: #fff;
}
.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, .7);
}
</style>
