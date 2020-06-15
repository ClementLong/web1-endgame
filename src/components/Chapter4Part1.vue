<template>
    <div class="entree">
        <div>
            <p>A la descente du train, les déportés doivent laisser sur place tous leurs biens personnels. 
                Les vêtements, chaussures, prothèses, lunettes et autres objets sont récupérés.</p>
        </div>
    </div>
</template>

<style lang="scss">

.entree {
    width: 100%;
    height: 100vh;
    background-image: url("../assets/entree.png");
    background-size: cover;

    div {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        p {
            width: 60%;
            font-family: "Metropolis";
            font-style: normal;
            font-size: 24px;
            line-height: 33px;
            text-align: left;
            color: #FFFFFF;
        }
    }
}

</style>