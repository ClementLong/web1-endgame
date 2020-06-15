<template>
  <div class="sliderContainer">
    <div class="slider">
      <div class="slider__slides">
        <img :src="img1" alt="" class="slider__slide" />
        <img :src="img2" alt="" class="slider__slide" />
        <img :src="img3" alt="" class="slider__slide" />
        <img :src="img4" alt="" class="slider__slide" />
        <img :src="img5" alt="" class="slider__slide" />
        <img :src="img6" alt="" class="slider__slide" />
        <img :src="img7" alt="" class="slider__slide" />
      </div>
    </div>
    <div class="slider__arrow slider__arrow--left">&lt;</div>
    <div class="slider__arrow slider__arrow--right">&gt;</div>
    <h1 class="sliderContainer__title">{{ title }}</h1>
    <p class="sliderContainer__description">{{ description }}</p>
  </div>
</template>

<script>
let position = 0;

const $leftArrow = document.querySelector(".slider__arrow--left");
const $rightArrow = document.querySelector(".slider__arrow--right");
const $slides = document.querySelector(".slider__slides");
const sliderWidth = document.querySelector(".slider").offsetWidth;

$slides.appendChild(document.querySelector(".slider__slide").cloneNode()); // Duplication de la première slide, clone placé à la fin par appendChild
const sliderLength = document.querySelectorAll(".slider__slide").length; // Nombre de slides

$leftArrow.addEventListener("click", left);
$rightArrow.addEventListener("click", right);

function left() {
  // Si on essaie d'aller à gauche alors qu'on est à la première slide
  if (position === 0) {
    position = sliderLength - 1; // On passe à la fin du slider
    jump(left); // On passe la fonction left elle-même à jump(), pour qu'elle soit rappelée quand le saut sera fini (et cette fois elle passera dans le else)
  } else {
    position--;
    move();
  }
}

function right() {
  position++;
  move();

  // Si après le mouvement on est à la fin, on passe au début
  if (position === sliderLength - 1) {
    setTimeout(function() {
      position = 0;
      jump();
    });
  }
}

function move() {
  $slides.style.transform = "translateX(" + position * sliderWidth * -1 + "px)";
}

// Pour sauter, on enlève la transition, on move(), et on remet la transition
// requestAnimationFrame est nécessaire pour attendre que le navigateur prenne en compte le changement de CSS (la transition)
function jump(callback) {
  $slides.style.transition = "none";
  window.requestAnimationFrame(function() {
    move();

    window.requestAnimationFrame(function() {
      $slides.style.transition = "transform 0.3s";

      // Si un callback a été passé, on l'utilise
      if (callback) {
        callback();
      }
    });
  });
}

export default {
  props: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
    img6: String,
    img7: String,

    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.slider-container {
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 600px;
  width: 400px;
  background-color: black;
}

.slider {
  --sliderWidth: 174px;
  width: var(--sliderWidth);
  overflow: hidden;
  position: relative;
}

.slider__slides {
  display: flex;
  transition: transform 0.3s;
  margin-top: 51px;
}

.slider__arrow {
  position: absolute;
  top: 25%;
  transform: translateY(-50%);
  width: 30px;
  text-align: center;
  line-height: 30px;
  color: white;
  font-size: 40px;
}

.slider__arrow:hover {
  cursor: pointer;
}

.slider__arrow--right {
  right: 350px;
}

.slider__arrow--left {
  left: 50px;
}

.titre {
  color: white;
  position: absolute;
  top: 45%;
}
.paragraph {
  color: white;
  position: absolute;
  top: 55%;
  right: 40vh;
  left: 4vh;
}
</style>
