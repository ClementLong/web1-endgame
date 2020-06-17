<template>
  <div class="background">
    <div class="buttons">
      <router-link :to="{ name: 'chapitre', params: { number: currentChapitre }}">
        <CrossButtonSvg />
      </router-link>
      <infoSvg />
    </div>
    <div class="content">
      <div class="textContent">
        <ArticleText
          :title="articles[currentChapitre].title"
          :text="articles[currentChapitre].text"
        />
        <router-link :to="{ name: 'quizz', params: { number: currentChapitre }}">
          <StartButton class="quizzButton" msg="répondre au quizz" v-if="isClose" />
        </router-link>
      </div>
      <div class="mediaContent">
        <img src="@/assets/img/background-temporaire-chap1.png" />
      </div>
    </div>
  </div>
</template>

<script>
import StartButton from "@/components/start_button.vue";
import CrossButtonSvg from "@/components/CrossButtonSvg.vue";
import InfoSvg from "@/components/InfoSvg.vue";
import ArticleText from "@/components/partials/ArticleText.vue";
export default {
  components: {
    StartButton,
    CrossButtonSvg,
    InfoSvg,
    ArticleText
  },
  data() {
    return {
      currentChapitre: this.$route.params.number,
      isClose: true,
      articles: {
        "0": {
          title: "Et si vous aviez la même vue que les poissons ? ",
          text:
            "Au soleil couchant, un étonnant mirage se produit, un rayon vert apparaît à l’horizon. Il ne dure qu’une ou deux secondes et indique que la surface de l’eau est plus chaude que l’air. Ces couleurs fantôme demeurent cachées à moins que l’on sache où et comment regarder. C’est exactement ce que propose de faire le moniteur de plongée Padi Colwell, il va observer les profondeurs de la Mer de Corail sous un nouvel aspect. En plongeant avec des lumières bleues, il pourra observer le récif comme le voient les poissons. On ne s’attend pas à cela, tout un monde caché se révèle. Filtrée par des verres jaunes, la lumière ultra-violette éclaire un univers que seul les poissons perçoivent. Elle nous plonge au cœur d’un royaume secret. De nombreux animaux récifaux émettent des couleurs fluorescentes invisibles à nos yeux. Les ultras-violets révèlent des couleurs insoupçonnée, mais également des créatures cachées. Certains animaux sont invisibles à l’œil humain, mais visible pour les poissons. Les coraux brillent à leur façon, ils utilisent les couleurs fluorescentes pour nourrir les algues qu’ils abritent, d’autres ont les tentacules vivement colorés à la limite du psychédélique pour attirer les proies. De nombreux scientifiques affirment que l’on aura compris le cerveau humain avant de comprendre la Grande Barrière de Corail, une façon de dire qu’elle est trop riche pour que l’on décrypte un jour."
        },
        "1": {
          title: "Animal, minéral ou végétal ? ",
          text:
            "Les coraux sont constitués de milliers de petits organismes appelés polybes, principalement formé d’une bouche et d’un estomac.Le squelette des polypes est constitué à l’exterieur de ses tissus et se compose de carbonate de calcium tout comme la roche calcaire.Le corail est également composé de micro algues qui vivent dans les cellules des polypes.Il est donc à la fois animal, minéral et végétale!"
        },
        "2": {
          title: "L’incroyable “Triangle de Corail”",
          text:
            "Le Triangle de corail est l’épicentre de la biodiversité marine de la planète. Il possède plus de biodiversité que partout ailleurs dans le monde: 76% des espèces de coraux, et 56% des poissons de récifs coralliens dans la région Indo-Pacifique. L’épicentre de cette diversité corallienne se trouve dans la péninsule de Papouasie indonésienne. Il est fréquenté par la baleine bleue, les dauphins, les marsouins, et le dugong en voie de disparition."
        },
        "4": {
          title: "Le phénomène de Blanchissement",
          text:
            "Tous les coraux des mers chaudes vivant près de la surface abritent des symbiotiques microscopiques appelés les zooxanthelles.  Ce sont des algues qui utilisent les déchets métaboliques des coraux pour faire la photosynthèse. En échange d'un abri, et d'une exposition lumineuse suffisante, les zooxanthelles fournissent à leur hôte de l'oxygène, ainsi que les restes de nutriments produits n’ayant pas été consommés, dont le corail se nourrit. Or le corail, en situation de stress, peut expulser ses zooxanthelles.Les algues fournissent presque 90% de leur énergie grâce à la photosynthèse, c’est pourquoi le blanchiment mène à la mort de certaines espèces de coraux. Le phénomène a lieu en premier lieu à cause du changement de température des océans, de bactéries causant des maladies, de la pollution et de l’acidification des océans liées aux émissions de gaz à effet de serre dans l’atmosphère.Suite à un stress causé par divers facteurs, le corail ne reconnait plus la zooxanthelle comme son symbiote. Alors la symbiose entre les coraux et celle-ci s’arrêtent ce qui entrainent ainsi la perte de ces mico-algue et un blanchissement rapide de l’hôte corallien. Ce qu’on appelle le phénomène de Blanchissement !"
        },
        "5": {
          title: "Une autre concéquence",
          text:
            "L’inpact de la disparition des coraux ne se fait pas seulement resentir sur la biodiversité.En effet, ils occupent un rôle majeure dans la protection des côtes contre les vagues, tempêtes et marrées qui sont responsable de l’érosion des litoraux.Pour palier à ce manque, des millions d’euros sont inverstis mais l’mpact de ces nouvelles structures (marina, docks etc...) peuvent eux aussi à leur tour avoir un impact négatif sur les coraux survivant, les endommagents sur le long terme."
        },
        "6": {
          title: "Sauvez les Coraux",
          text:
            "Pour essayer d'aider l'écosystème à continuer de fournir les services écologiques nécessaires, des méthodes très récentes sont apparues, comme la restauration écologique active.Il faut considérer ces méthodes avec prudence car de nos jours il est impossible de recréer un récif comme ceux présents naturellement. Si nous ne voulons pas perdre </span>la richesse en biodiversité, il faut agir localement, mais surtout globalement.Limiter le réchauffement climatique à moins de 2 °C est l'urgence absolue. Chacun peut aussi agir en en parlant autour de soi, en essayant d'adopter un mode de vie plus respectueux de l'environnement et en faisant un petit geste : l'adoption d’un corail !Il est donc important d’agir immédiatement, en sensibilisant en premier lieu les populations qui en dépendent directement."
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
.quizzButton {
  text-transform: uppercase;
  margin-bottom: 24px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0px 16px;
}

.background {
  min-height: 92.3%;
  width: 100vw;
  backdrop-filter: blur(8px);
  background: $backgroundBoxes;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 999;
  overflow: scroll;

  @include tablet-up {
    min-height: 94.3%;
  }
}

.content {
  padding: 32px;

  .textContent {
    margin: 0 0 32px 0;
    @include flexbox(column, center, center);

    .articleText {
      text-align: left;
    }
  }
}

@include tablet-up {
  .content {
    padding: 48px 10vw 48px 10vw;
  }

  .quizzButton {
    margin-bottom: 48px;
  }
}

@include desktop-large {
  .quizzButton {
    margin: 48px 0;
  }
  .content {
    padding: 24px 5vw;
    height: 90%;
    @include flexbox(row, space-between, center);

    .textContent {
      margin: 0 32px 0 0;
      max-width: 40vw;
      @include flexbox(column, center, center);

      .articleText {
        text-align: left;
      }
    }

    .mediaContent {
      margin: 0 0 0 32px;

      img {
        min-width: 400px;
        max-width: 40vw;
      }
    }
  }
}

@include desktop-Xlarge {
  // .mediaContent {
  //   img {
  //     min-width: 800px;
  //   }
  // }

  .buttons {
    padding: 24px 32px 0px 24px;
  }
}
</style>
