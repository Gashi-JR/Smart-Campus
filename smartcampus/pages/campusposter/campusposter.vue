<template>
	<view style="height:90vh; overflow: scroll;">
		<van-tabbar :active="active">
			<van-tabbar-item @click="active=0">
				<image slot="icon" :src="urlTobase64('icons','home (1)','svg')" mode="aspectFit"
					style="width: 30px; height: 18px;" />
				<image slot="icon-active" :src="urlTobase64('icons','home','svg')" mode="aspectFit"
					style="width: 30px; height: 18px;" />
				主页
			</van-tabbar-item>
			<van-tabbar-item @click="active=1">
				<image slot="icon" :src="urlTobase64('icons','纸飞机_发布 (1)','svg')" mode="aspectFit"
					style="width: 30px; height: 18px;" />
				<image slot="icon-active" :src="urlTobase64('icons','纸飞机_发布','svg')" mode="aspectFit"
					style="width: 30px; height: 18px;" />
				发布
			</van-tabbar-item>
			<van-tabbar-item @click="active=2">
				<image slot="icon" :src="urlTobase64('icons','个人 (1)','svg')" mode="aspectFit"
					style="width: 30px; height: 18px;" />
				<image slot="icon-active" :src="urlTobase64('icons','个人','svg')" mode="aspectFit"
					style="width: 30px; height: 18px;" />
				个人
			</van-tabbar-item>
		</van-tabbar>

		<view class="">
			<home v-if="active==0"></home>
			<publish v-show="active==1"></publish>
			<mine v-if="active==2"></mine>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import home from './home.vue'
	import publish from './publish.vue'
	import mine from './mine.vue'
	import urlTobase64 from '../../utils/common.js'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	let active = ref(0)
	uni.$on('toMine', () => {
		uni.$once('onReady', () => {
			uni.$emit('myAccept')
		});
		active.value = 2
	});

	uni.$on('completePublish', () => {
		active.value = 2
	})
	onLoad((options) => {

	})
	onShow(() => {

	})
</script>

<style lang="scss" scoped>

</style>