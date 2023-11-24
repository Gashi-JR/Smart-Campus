<template>
	<view class="container">
		<view class="img">
			<image class="logo" :src="urlTobase64('icons','微信','svg')"></image>
		</view>

		<view class="btn">
			<button class="login" @click="toBinding">微信登录</button>
		</view>
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="error" cancelText="取消" confirmText="确定" title="微信登录授权提示" content="是否允许授权？"
				@confirm="dialogConfirm" @close="dialogClose" :before-close="true"></uni-popup-dialog>
		</uni-popup>
		<van-toast id="van-toast" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	let value = ref("")
	let alertDialog = ref()
	import urlTobase64 from '../../utils/common.js'
	import http from '@/utils/http.js'
	import Toast from '@/wxcomponents/vant-weapp/dist/toast/toast.js'

	const toBinding = () => {

		alertDialog.value.open()

	}

	const dialogConfirm = () => {
		uni.login({
			provider: 'weixin',
			success: async (loginRes) => {
				console.log(loginRes.code);
				let res = await http(`/user/login?code=${loginRes.code}`, "GET").catch((err) => {
					Toast.fail('登录失败，请检查网络');
				})

				if (res.code && res.code === true) {
					uni.setStorageSync('openId', res.data.openId);
					uni.setStorageSync('sessionKey', res.data.sessionKey);
					alertDialog.value.close()
					toInfoPage(res.data.openId)
				}
			}
		});

	}
	const dialogClose = () => {
		alertDialog.value.close()
	}
	const toInfoPage = async (openid) => {
		let res = await http(`/user/info?openid=${openid}`, "GET").catch((err) => {
			Toast.fail('请检查网络');
		})
		if (res.code && res.code === true) {
			if (res.data.flag === 0) {
				alertDialog.value.close()
				uni.navigateTo({
					url: '/pages/login/getUserInfo/getUserInfo'
				})
			} else {
				if (res.data.sno != null) {
					uni.setStorageSync('user',res.data)
					uni.navigateBack({
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/UserBinding'
					})
				}
			}
		}
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
		background-color: rgb(2, 119, 190);
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

		.logo {
			width: 100%;
		}
	}
</style>