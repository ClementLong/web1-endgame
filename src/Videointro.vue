<template>
    <div>
        <div class="container" >
            <div class="containerVideo">
                <video class="video" src="./assets/Auschwitz.mp4" controls loop >Auschwitz
                </video>
            </div>
            <div class="divButton"> 
                <router-link to="/index">
                    <button class="buttonSkip"> <a> Skip ▼ </a> </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
 
.container {
    position: relative;
}

.video {
    z-index: 30;
    width: 100%;
    height: auto;
}
.divButton {
  position: absolute;
  top:0 ;
  bottom: -77%;
  left: 90%;
  right: 0;
  text-align: center;
}

.divButton::before{
    content: ' ';
    display: block;
    
    height: 50%;
    
}

 .buttonSkip {
    font-family: "Ebrima";
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 23px;
    background-color:initial ;
    max-height: 100px;
    opacity: 0.7;
    transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  cursor: pointer;


    & a {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    opacity: 0.9;
    }
    & img {
        height: 70px;
    }
 }

 </style>