<template>
	<view class="content">
		<image class="logo" src="/static/tu 2.png"></image>
		<view class="text-area">
			<image class="location" src="/static/icons/定位.svg"></image>
			<text class="title">林桂花江大学</text>
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from "vue";
	let title = ref("hallo")
	import {
		onLoad
	} from "@dcloudio/uni-app"
	onLoad(() => {
		console.log(11)
	})
</script>

<style lang="scss">
	.content {
		position: relative;
	}

	.logo {
		position: absolute;
		width: 100%;
		height: 350rpx;
		border-bottom-left-radius: 55rpx;
		border-bottom-right-radius: 55rpx;
		z-index: -1;
	}

	.text-area {
		position: absolute;
		/*绝对布局*/
		z-index: 1;
		/*置于上层*/
		right: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 15rpx;
	}

	.location {
		width: 50rpx;
		height: 50rpx;
	}

	.title {
		font-size: 30rpx;
		color: white;
		margin-left: 30rpx;
	}
</style>