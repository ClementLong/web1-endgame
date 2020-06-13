<template>
  <div>
    <div class="secondPage">
      <naver />
      <div class="information">
        <h2
          class="information__secondTitle"
        >Bienvenu dans les abysses, scroll vers le bas si tu es pret à découvrir les mysteres des profondeurs !</h2>
        <h2
          class="information__secondTitle"
        >Ce périple interactif te feras découvrir un monde insoupçonné.</h2>
        <h2 class="information__secondTitle">
          La ou la lumiere s'arrete,
          <br />la vie commence..
        </h2>
        <div class="btn-scroll">
          <h2 class>{{info}}</h2>

          <img alt />
        </div>
      </div>
    </div>
    <div class="secondPageBackground">
      <div class="o-h-f">
        <div data-scroll>
          <h3 class="scaner">
            Des qu’une alerte apparait, n’hesite pas a clicker
            <br />dessus pour l’identifier
          </h3>
        </div>
        <div class="bubble">
          <img src="@/img/bublle.svg" alt />
          <img src="@/img/bublle.svg" alt />
        </div>
        <div>
          <h3 class="scaner">Attention des espèces sont en approche !</h3>
          <br />
          <h3 class="scaner">
            Click sur le point rouge pour en
            <br />decouvrir plus
          </h3>
          <img src="@/img/scaner.svg" alt class="scan" />
        </div>
        <p class="profond">150m</p>
      </div>
      <div class="three-h">
        <div>
          <h2 class="secondPage-title">
            Te voila au premier palier,celui
            <br />des 150 metres!
          </h2>
          <div>
            <p>Infos sur profondeur</p>
            <button>
              <img src="@/img/Polygon.svg" alt />
            </button>
          </div>
        </div>
        <div class="bubble">
          <img src="@/img/bublle.svg" alt />
          <img src="@/img/bublle.svg" alt />
        </div>
        <div>
          <h2 class="secondPage-title">L'océan nous protège du réchauffement climatique</h2>
          <p>
            Eh oui parce qu’il fait frais là dedans. Rien que sa surface de 3 mètres avale autant de chaleur que toute notre atmosphère.
            L’océan nous empêche clairement de cuire sur le barbeuk de la surface terrestre, il absorbe presque la totalité du carbone et la moitié du CO2 produit par l’homme.
          </p>
        </div>
        <div>
          <img src alt />
          <img src alt />
        </div>
        <div>
          <h3 class="scaner">
            De nouvelles especes!
            <br />N’oublie pas de clicker pour plus
            <br />d’informations
          </h3>
          <router-link to="/clown" tag="button">
            <img src="@/img/scaner.svg" alt class="scan" />
          </router-link>
        </div>
        <p class="profond">300m</p>
      </div>
      <div class="five-h">
        <div>
          <h2 class="secondPage-title">Et hop ! Te voila deja au palier des 300</h2>
          <p>Petit à petit la lumière dissparait et fait place à l’obscurité</p>
          <div>
            <p>Infos sur profondeur</p>
            <button>
              <img src="@/img/Polygon.svg" alt />
            </button>
          </div>
        </div>
        <div class="bubble">
          <img src="@/img/bublle.svg" alt />
          <img src="@/img/bublle.svg" alt />
        </div>
        <div>
          <h2
            class="secondPage-title"
          >En dehors des insectes, un quart des espèces vivantes se trouve dans l'océan</h2>
          <p>Sans compter des nombreuses espèces terrestres qui dépendent directement de la faune maritime comme les oiseaux.</p>
        </div>
        <img src alt />
        <div>
          <h3 class="scaner">Tu sais quoi faire !</h3>
          <img src="@/img/scaner.svg" alt class="scan" />
        </div>
        <p class="profond">500m</p>
      </div>
      <div class="one-t">
        <div>
          <h2 class="secondPage-title">
            il est possible que tu entende des sons, ne ten fais pas
            <br />c’est comme ca que certaines especes communiques entres
          </h2>
          <div>
            <p>Infos sur profondeur</p>
            <button>
              <img src="@/img/Polygon.svg" alt />
            </button>
          </div>
        </div>
        <div class="bubble">
          <img src="@/img/bublle.svg" alt />
          <img src="@/img/bublle.svg" alt />
        </div>
        <div>
          <h2 class="secondPage-title">L'océan est plus important que les forêts</h2>
          <p>
            On a tendance à croire que les forêts sont les poumons de la terre, qu’elles nous permettent de respirer. C’est pas totalement faux, mais pas totalement vrai non plus. En vérité c’est surtout l’océan qui nous permet de vivre sur la planète.
            Il apporte ainsi à lui seul 50% de l’oxygène qu’on respire et ça c’est grâce à la photosynthèse du phytoplancton qui produit notre oxygène.
          </p>
        </div>
        <div>
          <h3 class="scaner">Click sur le point rouge pour en decouvrir plus</h3>
          <img src="@/img/scaner.svg" alt class="scan" />
        </div>
        <p class="profond">1000m</p>
      </div>
      <div class="two-t">
        <div>
          <h2 class="secondPage-title">
            1000 metres? tu commences
            <br />à etre bien bas !
            Garde le courage, il te reste encore + 9000 metres :)
          </h2>
          <div>
            <p>Infos sur profondeur</p>
            <button>
              <img src="@/img/Polygon.svg" alt />
            </button>
          </div>
        </div>
        <img src="@/img/nautil.svg" alt />
        <div>
          <h2 class="secondPage-title">Il y a 20 millions de tonnes d'or dans l'océan</h2>
          <p>
            il y a peu de chance qu’on mette la main dessus, tout simplement parce que cet or est dilué en micro morceaux imperceptib
            Mais on peut dire d’une certaine façon qu’on se baigne dans de l’or.
          </p>
        </div>
        <div>
          <h3 class="scaner">Click sur le point rouge pour en decouvrir plus</h3>
          <img src="@/img/scaner.svg" alt class="scan" />
        </div>
        <p class="profond">2000m</p>
      </div>
      <div class="three-t">
        <div>
          <h2 class="secondPage-title">
            2000 metres?
            La temperature de l’eau est tombée à 4 degres. Elle ne bougera plus beaucoup
          </h2>
          <div>
            <p>Infos sur profondeur</p>
            <button>
              <img src="@/img/Polygon.svg" alt />
            </button>
          </div>
        </div>
        <div>
          <h2
            class="secondPage-title"
          >On estime que 95% des sols océaniques n'ont jamais été vus par l'homme</h2>
          <p>
            En gros on connaît mieux la surface des autres planètes de notre galaxie que celle de nos océans.
            Ce qui veut dire qu’il y a autant, voire plus de mystères dans le fond de nos océans que sur Jupiter
          </p>
        </div>
        <div>
          <h3 class="scaner">Click sur le point rouge pour en decouvrir plus</h3>
          <img src="@/img/scaner.svg" alt class="scan" />
        </div>
        <p class="profond">3000m</p>
      </div>
      <div class="four-t">
        <div>
          <h2 class="secondPage-title">Te voila au premier palier, celui des 150 metres !</h2>
          <div>
            <p>Infos sur profondeur</p>
            <button>
              <img src="@/img/Polygon.svg" alt />
            </button>
          </div>
        </div>
        <div>
          <h2
            class="secondPage-title"
          >“Le 14 avril 1912, le Titanic a coulé jusqu'à son dernier lieu de repos à une profondeur de 3 800 mètres”</h2>
          <p></p>
        </div>
        <div>
          <h3 class="scaner">Click sur le point rouge pour en decouvrir plus</h3>
          <img src="@/img/scaner.svg" alt />
        </div>
        <p class="profond">4000m</p>
      </div>
      <div class="five-t">
        <div>
          <h2 class="secondPage-title">
            Te voila au palier des 4000 metres connu sous le nom
            <br />de La zone abyssale
          </h2>
          <p>
            La température ici est proche du point de congélation et très
            peu d'animaux peuvent survivre à la pression extrême
          </p>
          <div>
            <p>Infos sur profondeur</p>
            <button>
              <img src="@/img/Polygon.svg" alt />
            </button>
          </div>
        </div>
        <div>
          <h2
            class="secondPage-title"
          >“On a recensé dans l'océan un son toujours inexpliqué à ce jour”</h2>
          <p>
            On l’appelle « Upsweep » et impossible de savoir d’où ça vient. Étant donné qu’il est identique à chaque occurrence,
            cela exclut la possibilité d’un chant de baleine.
          </p>
        </div>
        <div>
          <h3 class="scaner">Click sur le point rouge pour en decouvrir plus</h3>
          <img src="@/img/scaner.svg" width="100px" alt class="scan" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
import naver from "../components/partials/Header.vue";

export default {
  name: "secondPage",
  components: {
    naver
  },
  data() {
    return {
      info: null
    };
  },

  mounted() {
    ScrollOut({
      scope: this.$el,
      threshold: 0.5,
      targets: [".bubble", ".scaner", ".scan", ".profond"]
    });
  },
  destroyed() {
    ScrollOut.teardown();
  }
};
</script>

<style lang="css" scoped>
</style>