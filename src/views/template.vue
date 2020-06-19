<template>
<div>
    <a href="/" class="logo-home">
        <svg width="907" height="856" viewBox="0 0 907 856" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M887.8 420.974L475.9 9.37418C472.934 6.40259 469.412 4.04505 465.534 2.43651C461.656 0.827966 457.498 0 453.3 0C449.102 0 444.944 0.827966 441.066 2.43651C437.188 4.04505 433.666 6.40259 430.7 9.37418L18.8 420.974C6.8 432.974 0 449.274 0 466.274C0 501.574 28.7 530.274 64 530.274H107.4V823.974C107.4 841.674 121.7 855.974 139.4 855.974H389.3V631.974H501.3V855.974H767.2C784.9 855.974 799.2 841.674 799.2 823.974V530.274H842.6C859.6 530.274 875.9 523.574 887.9 511.474C912.8 486.474 912.8 445.974 887.8 420.974V420.974Z" fill="white"/>
        </svg>
    </a>
    <router-link class="circle" v-bind:to="link" data-key="32"><img src="../img/home/circle.png" alt="Circle" /></router-link>
</div>
    

</template>

<script>
export default {
    name: 'template',
    props: {
        link: String
    },

created() {
     window.addEventListener('mousemove', function(){
       const nextArrow = document.querySelector('.next-arrow')
       const router = document.querySelector('.circle')
    nextArrow.addEventListener('click', function() {
        router.click()
    })
    })

},
}
setInterval(function(){ 
    let router =  document.querySelector('.circle')
    window.addEventListener('keydown', function(event) {
    if (event.keyCode === 32)
     router.click()
})
    }, 10);
</script>
 
<style lang="scss">
    .logo-home {
        position: absolute;
        left: 20px;
        top: 0px;
        height: 24px;
        display: block;
        
        svg {
            width: 24px;
            height: 24px;
        }
    }

    .circle {
        position: absolute;
        top: 70%;
        left: calc((100% - 66px) / 2);
        z-index: 10;
        opacity:0;
        pointer-events:none;
    }
 
    .legend {
        color: white;
        font-size: 1.5em;
        font-family: "Domestic Manners" , "Arial";
    }
        
        .title {
            color: white;
            text-align: center;
            font-family: "Athene" , arial;
            h1 {
                font-size: 8em;
                font-family: "Athene", "Arial";
            }

            h2 {
                font-size: 4em;
                font-family: "Athene", "Arial";
            }

            h3 {
                font-size: 2em;
            }
        }

    .DMfont {
        font-family: "Domestic Manners" , "Arial";
        color:white;
    }

    .OOGfont {

        font-family: "Over Obsessed Girlfriend" , arial;
        color:white;
    }

    .Afont {
        font-family: "Athene" , arial;
        color:white;
    }
.clip {
    width:100vw;
    height:100vh;
    
}
.next-arrow {
    width:50px;
    position:absolute;
    opacity:0.5;
    margin-right: 10%;
    margin-left:92%;
    top:48%;
}
.next-arrow:hover {
    background-color:black;
    opacity:1;
}
</style>