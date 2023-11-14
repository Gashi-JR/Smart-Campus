<template>
	<view>
		<van-tabs swipeable animated color="rgb(0,157,255)" border>
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
	import {
		ref
	} from 'vue';
	import urlToBase64 from '../../utils/common.js';
	import fixNotice from './fixNotice.vue'
	import fixApply from './fixApply.vue'
	import myFix from './myFix.vue'
</script>



<style lang="scss" scoped>


</style>