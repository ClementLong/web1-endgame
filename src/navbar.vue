<template>
  <div class="navBar" @click="closeOverlay">
    <img src="./assets/logowitz.png" alt="Sound" class="navBar__Witz" />
    <div class="navBar__container">
      <div>
        
      </div>
            <div
        class="navBar__containerVolumeLogo"
        @click="toggleMute"
        :class="isMute ? 'isMute' : null"
        v-show="page !== 4">
        
        <img src="./assets/Audio.png" alt="Witz" class="navBar__Sound" />
      </div>
      <nav class="navBar__timeLine">
        <div @click="changePage(scroll * 10)" :class="page === 1 ? 'isSelected' : null">
          <p>I Discours d'Hitler devant le Reichstag  </p>
        </div>
        <div @click="changePage(scroll * 20)" :class="page === 2 ? 'isSelected' : null">
          <p>II Discours d'Himmler  devant le Reichstag </p>
        </div>
        <div @click="changePage(scroll * 30)" :class="page === 3 ? 'isSelected' : null">
          <p>III Le début de l'enfer </p>
        </div>
        <div @click="changePage(scroll * 40)" :class="page === 4 ? 'isSelected' : null">
          <p>IV Les portes de l'enfer  </p>
        </div>
      </nav>
    </div>
  </div>
</template>


<script>



</script>

<style lang="scss" scoped>

.navBar__container {
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: row;;
  bottom: 0px;
  left: 0;
  height: 90px;
  width: 100%;
  background-color: rgba(40, 38, 38, 0.95);
  transition: height 0.3s;
  overflow: hidden;
  border-top: 0.5px solid ;
  box-shadow: 10px 0px 15px ;
  & p {
    clip-path: polygon(0% 0, 0% 0, 0% 0%, 0% 100%);
  }
  &:hover {
    transform: none;
    height: 150px;
     & nav div {
      & p {
        font-size: 18px;
        overflow-wrap: break-word;
        clip-path: none;
        transform: none;
        opacity: 3;
        left: 15px;
        top: 40px;
        width: 150px;
        user-select: none;
      }
      &.isSelected p {
        font-size: 1.02rem;
        opacity: 1;
        &:hover {
          text-decoration: none;
          cursor: default;
        }
      }
    }
  }
}

.navBar__Witz {
  z-index: 11;
  position: fixed;
  bottom: 12px;
  left: 12px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: transform 0.1s;
  opacity: 0.8;
  user-select: none;
  &:hover {
    transform: scale(1.3);
    opacity: 1;
    & img{
      width: 100%;
      height: 100%;
    }
  }
}
.navBar__timeLine {
  z-index: 5;
  height: 3px;
  width: 100%;
  background-color: #FFFF;
  margin-left:55px ;
  margin-right: 55px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  & div {
    background-color:red ;
    right: 200%;
    width: 15px;
    height: 15px;
    opacity: 0.9;
    margin-top: -5px;
    border-radius: 50%;
    border: 1px solid ;
    &.isSelected {
      background-color: rgba(40, 38, 38, 0.95);
    }
  }
}
.navBar__containerVolumeLogo {
  position: fixed;
  z-index: 2;
  right: 17px;
  bottom: 12px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  opacity: 0.8;
  user-select: none;
  & img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(1.3);
    opacity: 1;
  }
}
//   &.isMute::after {
//     content: "";
//     position: absolute;
//     display: block;
//     width: 30px;
//     height: 2px;
//     background-color: red;
//     border: 0.1px solid red;
//     transform: translateY(-12px) translatex(-7px) rotate(-45deg);
//   }
// }
    
  
  </style>