<template>
  <div class="tatoo">
    <LargeInformations
      :title="title"
      :descriptionFirst="descriptionFirst"
      :descriptionSecond="descriptionSecond"
      :descriptionThird="descriptionThird"
      :SecondTitle="SecondTitle"
      :descriptionFourth="descriptionFourth"
      :img="img"
    ></LargeInformations>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../assets/img/backgroundTatouage4.svg"),
      title: "Tatouages",

      descriptionFirst:
        "Selon la mythologie Maori, la pratique du tatouage a pour origine une histoire d’amour entre un jeune guerrier maori du nom de Mataora et une jeune princesse Niwareka du clan des Turehu dont la demeure est dans le monde du dessous, le monde des esprits appelés Rarohenga.",
      descriptionSecond:
        "Homme et femme ne portaient pas les mêmes tatouages. Ceux des femmes se limitent aux extremités du corps comme les mains, les pieds, les lèvres. Seules les femmes de haut rang (femme de chef) pouvaient avoir les cuisses et les fesses tatouées. Les hommes eux ont le corps entièrement tatoué. ",
      descriptionThird:
        "Plus l’homme était tatoué, plus son prestige était grand. Être tatoué était un signe de force, de pouvoir et de richesse pour l’individu. On pouvait observer les tatouages les plus élaborés sur les guerriers ou les chefs. Les individus non tatoués étaient méprisés tandis que ceux qui étaient entièrement tatoués de la tête au pied pouvaient jouir d’un grand prestige.",
      SecondTitle: "La signification du tatouage"
    };
  }
};
</script>

<style lang="scss" scoped></style>
