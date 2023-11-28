<template>
	<view>
		<van-tabs swipeable animated color="rgb(0,157,255)" border :active="active">
			<van-tab title="申请报修">
				<fixApply></fixApply>
			</van-tab>
			<van-tab title="报修须知">
				<fix-notice></fix-notice>
			</van-tab>
			<van-tab title="我的工单">
				<my-fix></my-fix>
			</van-tab>
		</van-tabs>


	</view>
</template>


<script setup>
	import urlToBase64 from '../../utils/common.js';
	import fixNotice from './fixNotice.vue'
	import fixApply from './fixApply.vue'
	import myFix from './myFix.vue'
	import {
		ref,
		onMounted
	} from 'vue';
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"

	let active = ref(0)

	uni.$on('toMyFix', () => {
		active.value = 2
	})



	onMounted(() => {
		
	})
</script>



<style lang="scss" scoped>


</style>