<template>
    <div class="blackText2">
        <img src="../assets/detenus.png">
        <p>Les détenus arrivent de toute l'<em>Europe</em> en train, souvent après plusieurs journées passées dans des 
            wagons à bestiaux. Certains sont déjà <em>morts</em> à leur arrivée : de soif, de faim, de maladie ou 
            encore <em>d'asphyxie</em>. </p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.blackText2 {
    width: 100%;
    height: 60vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        width: 35%;
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