<template>
    <div class="discoursHimmler">
        <div>
            <p>Il est Reichsführer-SS, le maître absolu de la SS, Chef der Deutschen Polizei
                 (chef de toutes les polices allemandes, dont la Gestapo) et, à partir de 1943, ministre de l'Intérieur 
                 du Reich et Chef der Heeresrüstung und Befehlshaber des Ersatzheers (responsable de l'équipement militaire 
                 de l'Armée de terre et commandant en chef de l'Armée de terre de réserve). Criminel de guerre, il est qualifié 
                 par certains auteurs allemands de « meurtrier du siècle »</p>
        </div>
    </div>
</template>

<style lang="scss">
    .discoursHimmler {
        width: 100%;
        height: 100vh;
        background-image: url("../assets/himmler2.png");
        background-size: cover;
        position: relative;
        z-index: -2;

        div {
            position: absolute;
            bottom: 0;
            background: rgba(51, 49, 48, 0.79);
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                font-family: "MetropolisLight";
                font-style: normal;
                font-size: 18px;
                line-height: 33px;
                color: #FFFFFF;
                width: 90%;
            }
        }
    }
</style>