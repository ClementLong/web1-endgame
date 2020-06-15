<template>
    <div class="blackText">
        <img src="../assets/PortraitHimmler.png">
        <p>Himmler donne l’ordre d’aménager un camp de concentration dans les anciennes casernes de l’artillerie 
            polonaise à Oswiecim, rebaptisé <em>Auschwitz</em>. Construit par des Juifs de la ville requis par les <em>nazis</em>, 
            le camp d’Auschwitz reçoit un premier transport de prisonniers polonais, le <em>14 juin 1940</em>.</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.blackText {
    width: 100%;
    height: 60vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;

    img {
        width: 20%;
    }

    em {
        font-family: "MetropolisBold";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 33px;
        text-align: left;
        width: 45%;
        color: red;
    }

    p {
        font-family: "Metropolis";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 33px;
        text-align: left;
        width: 45%;
        color: #ffffff;

        img {
            width: auto;
        }
    }
}
</style>