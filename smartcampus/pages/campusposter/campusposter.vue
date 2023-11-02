<template>
	<view>
		<van-tabbar :active="active">
			<van-tabbar-item @click="active=0">
				<image slot="icon" src="/static/icons/home (1).svg" mode="aspectFit" style="width: 30px; height: 18px;" />
				<image slot="icon-active" src="/static/icons/home.svg" mode="aspectFit" style="width: 30px; height: 18px;" />
				主页
			</van-tabbar-item>
			<van-tabbar-item @click="active=1">
				<image slot="icon" src="/static/icons/纸飞机_发布 (1).svg" mode="aspectFit" style="width: 30px; height: 18px;" />
				<image slot="icon-active" src="/static/icons/纸飞机_发布.svg" mode="aspectFit" style="width: 30px; height: 18px;" />
				发布
			</van-tabbar-item>
			<van-tabbar-item @click="active=2">
				<image slot="icon" src="/static/icons/个人 (1).svg" mode="aspectFit" style="width: 30px; height: 18px;" />
				<image slot="icon-active" src="/static/icons/个人.svg" mode="aspectFit" style="width: 30px; height: 18px;" />
				个人
			</van-tabbar-item>
		</van-tabbar>

		<view class="">
			<home v-if="active==0"></home>
			<publish v-if="active==1"></publish>
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
	let active = ref(2)
</script>

<style lang="scss" scoped>

</style>