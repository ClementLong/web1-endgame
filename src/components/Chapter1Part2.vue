<template>
    <div class="hitlerWindows">
        <div class="hitler">
            <div>
                <img src="../assets/PortraitHitler.png"/>
                <h1>Adolf Hitler <br><em>1889-1945</em></h1>
            </div>
            <p>Né en <em>Autriche</em> et soldat pendant la Première Guerre mondiale, Hitler devient le <em>chef</em> du 
                parti <em>nazi</em> en <em>1921</em>. Après un putsch manqué (<em>1923</em>), il expose la doctrine national-socialiste
                 dans <em>Mein Kampf</em> et la met peu à peu en application après son arrivée au pouvoir en <em>1933</em>. 
                 Il transforme l’Allemagne en un <em>État totalitaire</em> dont il se proclame le « Guide » (<em>Führer</em>) 
                 et sa politique extérieure mène à la Seconde guerre mondiale, guerre totale marquée par la
                  domination allemande sur l’Europe et le <em>génocide des Juifs</em>.</p>
        </div>
    </div>
</template>

<style lang="scss">

.hitlerWindows {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/foule.png");
    background-size: cover;
}

.hitler {
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    div {
        display: flex;
        justify-content: space-evenly;
        width: 50%;
    }

    h1 {
        font-family: "MetropolisBold";
        font-style: normal;
        font-size: 36px;
        line-height: 49px;
        text-align: center;

        color: #FFFFFF;

        em {
            color: #454444;
            font-style: normal;
            font-family: "MetropolisBold";
        }
    }

    p {
        font-family: "Metropolis";
        font-size: 20px;
        line-height: 27px;
        text-align: left;
        color: #FFFFFF;
        width: 60%;

        em {
            font-family: "MetropolisBold";
            font-size: 20px;
            font-style: normal;
            line-height: 27px;
            text-align: left;
            color: #FFFFFF;
        }
    }
}

</style>