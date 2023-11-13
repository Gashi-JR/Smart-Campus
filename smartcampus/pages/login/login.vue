<template>
	<view class="container">
		<view class="img">
			<image class="logo" :src="urlTobase64('icons','微信','svg')"></image>
		</view>

		<view class="btn">
			<button class="login" @click="toBinding">微信登录</button>
		</view>


	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	let value = ref("")
	import urlTobase64 from '../../utils/common.js'

	const toBinding = () => {
		uni.navigateTo({
			url: '/pages/login/UserBinding'
		})
	}
</script>

<style lang="scss" scoped>
	.login {
		display: block;
		margin: 0;
		height: 6vh;
		width: 300rpx;
		font-size: 28rpx;
		line-height: 6vh;
		background-color: rgb(2,119,190);
	}

	.btn {
		margin-top: 15vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.img {
		border: 4rpx solid rgb(214, 214, 214);
		border-radius: 50rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		margin-top: 11vh;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 710rpx;
		height: 50vh;
		.logo{
			width: 100%;
		}
	}
</style>