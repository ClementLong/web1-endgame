<template>
  <div id="nav">
    <div class="menu">
      <router-link class="link_home" to="/">Accueil</router-link>
      <div class="media_controler">
        <img
          class="icon_play"
          src="../../assets/ux-kit/control/pause_icon.svg"
          alt="play"
          @click="toggleSound"
        />
        <img class="icon_sound" src="../../assets/ux-kit/control/sound-on_icon.svg" alt="sound" />
      </div>
      <router-link class="link_about" to="/team">À propos</router-link>
      <router-link class="link_control" to="/">
        <p>Contrôles</p>
        <img src="../../assets/ux-kit/desktop/controle/arrow-ios-down.svg" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      sound_icon: "../../assets/ux-kit/control/play_icon.svg"
    };
  },

  methods: {
    toggleSound() {
      this.sound_icon = !this.sound_icon;
      // return require("../../assets/ux-kit/control/play_icon.svg");
    }
  }
};
</script>

<style scoped lang="scss">
#nav {
  position: relative;

  .menu {
    padding: 0 30px;
    width: 100%;
    height: 45px;
    background: $backgroundBoxes;
    backdrop-filter: blur(4px);
    @include flexbox(row, space-between, center);

    @include tablet-up {
      padding: 0 60px;
      @include flexbox(row, flex-start, center);
    }
    @include desktop-up {
      padding: 0 80px;
    }

    a {
      font-size: rem(13px);
      font-weight: 500;
      color: white;

      @include tablet-up {
        font-size: rem(16px);
        margin-right: 56px;
      }
      // &.router-link-exact-active {
      //   // #nav a.router-link-exact-active
      //   // Cette class est ajouté automatiquement par le routeur au lien qui correspond à la page courante
      // }
    }

    .link_home {
      color: $yellow;
      font-weight: 600;
    }

    .link_about {
      color: $white;
    }

    .link_control {
      color: $white;
      display: none;

      @include tablet-up {
        @include flexbox(row, center, center);
        p {
          margin-right: 4px;
        }
      }
    }

    .media_controler {
      width: 70px;
      @include flexbox(row, space-between, center);

      @include tablet-up {
        position: absolute;
        right: 60px;
      }
    }
  }
}
</style>
