<template>
    <div class="whiteText2">
        <img src="../assets/convoi.png">
        <p>Le premier convoi de Juifs du Reich grand-allemand en provenance de <em>Vienne</em> et à destination directe 
        d' <em>Auschwitz</em> arriva le <em>18 juillet 1942</em>. De la fin octobre 1942 jusqu'en janvier 1945, plus de 
        <em>71 000</em> Juifs qui restaient dans le Reich grand-allemand furent <em>déportés</em> à Auschwitz-Birkenau.</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.whiteText2 {
    width: 100%;
    height: 60vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;

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