<template>
	<div class="outer-wrapper">
		<div class="wrapper">
			<IntroductionTitle />
			<Disclaimer />
			<StartArticle use="Utilisez simplement votre doigt pour naviguer."/>
		</div>
	</div>
</template>

<script>

import Disclaimer from "@/components/Disclaimer.vue";
import IntroductionTitle from "@/components/IntroductionTitle.vue";
import StartArticle from "@/components/StartArticle.vue";

export default {
	name: "Home",
		components: {
		Disclaimer,
		IntroductionTitle,
		StartArticle,
	}
};
</script>

<style scoped lang="scss">

.wrapper {
	display: flex;
	flex-direction: row;
	width: 300vw;
	transform: rotate(90deg) translateY(-100vh);
	transform-origin: top left;
	background-image: url("tmp-background.jpg");
	background-position: center;
}

.outer-wrapper {
	width: 100vh;
	height: 100vw;
	transform: rotate(-90deg) translateX(-100vh);
	transform-origin: top left;
	overflow-y: scroll;
	overflow-x: hidden;
	position: absolute;
	scrollbar-width: none;
	-ms-overflow-style: none;
}

*::-webkit-scrollbar {
	display: none;
    -webkit-appearance: none;
    width: 0;
    height: 0;
}



</style>