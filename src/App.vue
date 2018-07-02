<template>
	<div class="appContainer">
		<v-header></v-header>
		<transition >
			<router-view></router-view>
		</transition>
		
		
		<v-footer></v-footer>
	</div>
</template>

<script>
	import vheader from './components/index/header.vue'
	import vfooter from './components/index/footer.vue'
	export default {
		components: {
			'v-header':vheader,
			'v-footer':vfooter
		}
	}
</script>

<style scoped>
	.appContainer {
		overflow-x: hidden;
	}
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	v-enter-active,.v-leave-active {
		transition: all 1s ease;
	}
</style>