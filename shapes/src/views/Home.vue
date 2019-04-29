<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="wrap">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="link">
      <router-link :to="{name: 'square'}">square</router-link>
      <router-link :to="{name: 'rectangle'}">rectangle</router-link>
      <router-link :to="{name: 'circle'}">circle</router-link>
      <router-link :to="{name: 'oval'}">oval</router-link>
      <router-link :to="{name: 'triangle-up'}">triangle-up</router-link>
      <router-link :to="{name: 'triangle-down'}">triangle-down</router-link>
      <router-link :to="{name: 'triangle-left'}">triangle-left</router-link>
      <router-link :to="{name: 'triangle-right'}">triangle-right</router-link>
      <router-link :to="{name: 'triangle-topleft'}">triangle-topleft</router-link>
      <router-link :to="{name: 'triangle-topright'}">triangle-topright</router-link>
      <router-link :to="{name: 'triangle-bottomleft'}">triangle-bottomleft</router-link>
      <router-link :to="{name: 'triangle-bottomright'}">triangle-bottomright</router-link>
      <router-link :to="{name: 'curvedarrow'}">curvedarrow</router-link>
      <router-link :to="{name: 'trapezoid'}">trapezoid</router-link>
      <router-link :to="{name: 'parallelogram'}">parallelogram</router-link>
      <router-link :to="{name: 'star-six'}">star-six</router-link>
      <router-link :to="{name: 'star-five'}">star-five</router-link>
      <router-link :to="{name: 'pentagon'}">pentagon</router-link>
      <router-link :to="{name: 'hexagon'}">hexagon</router-link>
      <router-link :to="{name: 'octagon'}">octagon</router-link>
      <router-link :to="{name: 'heart'}">heart</router-link>
      <router-link :to="{name: 'infinity'}">infinity</router-link>
      <router-link :to="{name: 'diamond'}">diamond</router-link>
      <router-link :to="{name: 'diamond-shield'}">diamond-shield</router-link>
      <router-link :to="{name: 'diamond-narrow'}">diamond-narrow</router-link>
      <router-link :to="{name: 'cut-diamond'}">cut-diamond</router-link>
      <router-link :to="{name: 'egg'}">egg</router-link>
      <router-link :to="{name: 'pacman'}">pacman</router-link>
      <router-link :to="{name: 'talkbubble'}">talkbubble</router-link>
      <router-link :to="{name: 'burst-12'}">burst-12</router-link>
      <router-link :to="{name: 'burst-8'}">burst-8</router-link>
      <router-link :to="{name: 'yin-yang'}">yin-yang</router-link>
      <router-link :to="{name: 'badge-ribbon'}">badge-ribbon</router-link>
      <router-link :to="{name: 'space-invader'}">space-invader</router-link>
      <router-link :to="{name: 'tv'}">tv</router-link>
      <router-link :to="{name: 'chevron'}">chevron</router-link>
      <router-link :to="{name: 'magnifying-glass'}">magnifying-glass</router-link>
      <router-link :to="{name: 'facebook-icon'}">facebook-icon</router-link>
      <router-link :to="{name: 'moon'}">moon</router-link>
      <router-link :to="{name: 'flag'}">flag</router-link>
      <router-link :to="{name: 'cone'}">cone</router-link>
      <router-link :to="{name: 'cross'}">cross</router-link>
      <router-link :to="{name: 'base'}">base</router-link>
      <router-link :to="{name: 'pointer'}">pointer</router-link>
      <router-link :to="{name: 'lock'}">lock</router-link>

    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style scoped>
  .wrap {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .link > a {
    margin: 5px;
  }
</style>
