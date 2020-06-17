<template>
    <div class="title">
        <h1>{{ chapter }}</h1>
        <h2>{{ title_chapter }}</h2>
        <h3>{{ date }}</h3>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
  props: {
    chapter: String,
    title_chapter: String,
    date: String
  }
}
</script>

<style lang="scss">
    .title {
        width: 45%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-family: 'EbrimaBold';
        font-style: normal;
        font-weight: bold;
        font-size: 144px;
        line-height: 150px;
        text-align: center;
        color: #FFFFFF;
        width: 100%;
    }

    h2 {
        font-family: 'MetropolisBold';
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 61px;
        text-align: center;
        color: #FFFFFF;
        width: 100%;
    }

    h3 {
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        color: #FFFFFF;
        width: 100%;
    }

    .line {
        width: 160px;
        height: 6px;
        background: white;
        margin-top: 5px;
    }
</style>