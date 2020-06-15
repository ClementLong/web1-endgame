<template>
    <div class="whiteText">
        <img src="../assets/hitlerSalut.png">
        <p><img src="../assets/up-chevron1.svg"> Nous avons des centaines de milliers d'enfants de paysans et des classes laborieuses très intelligents. Nous devons 
            les <em>éduquer</em> - en fait nous avons déjà commencé - et nous souhaitons qu'un jour, eux et non les représentants d'une 
            <em>race étrangère</em>, puisse occuper les positions dominantes de l'Etat en même temps que nos classes éduquées. Et surtout, 
            la culture allemande, comme en témoigne son nom seul, est <em>allemande et non juive</em>, et c'est pourquoi sa direction et sa 
            gestion seront confiées à des membres de notre nation. <img src="../assets/up-chevron2.svg"></p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.whiteText {
    width: 100%;
    height: 60vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        width: 40%;
    }

    em {
        font-family: "MetropolisBold";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 33px;
        text-align: left;
        width: 45%;
        color: #565555;
    }

    p {
        font-family: "Metropolis";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 33px;
        text-align: left;
        width: 45%;
        color: #565555;

        img {
            width: auto;
        }
    }
}
</style>