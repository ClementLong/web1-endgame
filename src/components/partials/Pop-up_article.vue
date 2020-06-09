<template>
    <div class="container">
        <div class="innerContainer">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopUpArticle',
    props: {
        title: String,
        text: String
    }
}
</script>

<style scoped lang="scss">
    .container {
        @include background-boxes;
        width: 240px;
        height: 320px;
        overflow: auto;

            &::-webkit-scrollbar {
            width: 12px;
            height: 100px;
            margin-right: 12px;

                &-track {
                    background-color: $white;
                    border-radius: 10px;
                }

                &-thumb {
                    background-color: $blue;
                    border-radius: 10px;
                }
            }

        .innerContainer {
            padding: 16px;
        }

        h1 {
            font-size: rem($mobileH2);
            color: $white;
            font-weight: 600;
            padding:8px 0px 20px 0px;
        }

        p {
            font-size: rem($mobileP);
            color: $white;
            line-height:1.5;
            text-align: left;
        }
    }
</style>