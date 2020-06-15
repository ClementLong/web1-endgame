<template>
    <div class="photo_noactivate photo_activate">
        <img v-on:click="ok" src="../assets/croix.svg">
        <div class="power">
            <h1>Prise de Pouvoir 1933-1934</h1>
            <p>D’abord freiné par la prospérité des années 1920, le parti nazi est ensuite servi par les conséquences de
                 la crise de 1929. Hitler cultive l’ambiguïté pour puiser des voix dans tous les groupes sociaux : 
                 chômeurs, ouvriers, petits bourgeois, enseignants, grande bourgeoisie d’affaires. 
                 Le 30 janvier 1933, il devient chancelier du Reich et, le 2 août 1934, président. 
                 Entre ces deux dates, il a réduit à néant toute forme d’opposition (camps de concentration), 
                 pris les premières mesures antisémites et doublé les institutions de la république d'organes et 
                 d’agents nazis.</p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        ok: function (){
            
        }
    }
}
</script>

<style lang="scss">
.photo_noactivate {
    position: fixed;
    z-index: -100;
    opacity: 0;
}

.photo_activate {
    z-index: 100;
    opacity: 100;
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("../assets/hitler_photo.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    img {
        cursor: pointer;
        height: 50px;
        width: 50px;
        position: fixed;
        top: 5px;
        right: 5px;
    }
}

.power {
    background: rgba(33, 33, 33, 0.76);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 70%;
    width: 35%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1 {
        font-family: "MetropolisBold";
        font-style: normal;
        font-size: 36px;
        line-height: 49px;
        color: #FF0000;
    }

    p {
        font-family: "Metropolis";
        font-style: normal;
        font-size: 21px;
        line-height: 29px;
        color: #FFFFFF;
    }
}
</style>