<template>
	<view class="content">
		<image class="logo" :src="urlTobase64('bg','tu 2','png')"></image>
		<view class="text-area">
			<image class="logout location" @click="Logout" :src="user===null?'':urlTobase64('icons','退出','svg')"></image>
			<view style="display: flex;align-items: center;">
				<image class="location" :src="urlTobase64('icons','定位','svg')"></image>
				<text class="title">林桂花江大学</text>
			</view>

		</view>
		<view class="profile">
			<image :src="user?.avatar.includes('https')?user?.avatar:(ip+user?.avatar)" mode="widthFix"
				style="width: 110rpx;height: 110rpx;border-radius: 50%;margin-right: 30rpx;"
				v-if="user!=null&&user?.openId.length!=0">
			</image>
			<image :src="urlTobase64('bg','logo','png')" mode="widthFix"
				style="width: 110rpx;height: 110rpx;border-radius: 50%;margin-right: 30rpx;" v-if="user===null">
			</image>
			<view style="display: flex;flex-direction: column;justify-content: space-between;">
				<view class="btn">
					<view style="color: white;font-size: 27rpx;" v-if="user!=null&&user?.openId.length!=0">
						{{user.nickname}}
					</view>
					<van-button color="rgb(84,165,255)" round size="small" block @click="toLogin"
						v-if="user===null">立即登录</van-button>
				</view>
				<text style="color: white;font-size: 25rpx;" v-if="user===null">登录查看更多内容</text>
				<text style="color: white;font-size: 25rpx;" v-if="user!=null&&user?.openId.length!=0">欢迎来到智慧校园！</text>
			</view>
		</view>

		<image class="water" :src="urlTobase64('bg','图图 水','png')"></image>
		<view class="tab">
			<view style="height: 45rpx;width: 7rpx;background-color:rgb(83,132,239) ;">
			</view>
			<text style="font-size: 28rpx;margin-left:12rpx ;">公共应用</text>
		</view>

		<view class="feature">
			<view class="feature_item" @click="toElec">
				<view class="feature_icon"
					style="width: 110rpx;height: 110rpx;border-radius: 10rpx;background-color:rgb(57,122,255) ;margin-bottom: 5vh;">
					<image class="location" :src="urlTobase64('icons','闪电','svg')"></image>
				</view>

				用电查询

			</view>

			<view style="height: 80rpx;width: 4rpx;background-color:rgb(210,210,210);margin-top: 1vh;">

			</view>
			<view class="feature_item" @click="toCampusPoster">
				<view class="feature_icon"
					style="width: 110rpx;height: 110rpx;border-radius: 50%;background-color:rgb(255,139,43) ;margin-bottom: 5vh;">

					<image class="location" :src="urlTobase64('icons','纸飞机','svg')"></image>
				</view>
				校园取物
			</view>

			<view style="height: 80rpx;width: 4rpx;background-color:rgb(210,210,210);margin-top: 1vh;">

			</view>
			<view class="feature_item" @click="toOnlineFix">
				<view class="feature_icon"
					style="width: 110rpx;height: 110rpx;border-radius: 10rpx;background-color:rgb(57,122,255) ;margin-bottom: 5vh;">
					<image class="location" :src="urlTobase64('icons','无需安装','svg')"></image>
				</view>
				网上报修
			</view>

		</view>
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="error" cancelText="取消" confirmText="确定" title="退出登录" content="是否退出登录？"
				@confirm="dialogConfirm" @close="dialogClose" :before-close="true"></uni-popup-dialog>
		</uni-popup>
	</view>

</template>

<script setup>
	import urlTobase64 from '../../utils/common.js'
	import {
		onMounted,
		ref
	} from "vue";
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	import ip from '@/utils/ip.js'
	const user = ref(null)
	let alertDialog = ref()
	onLoad(() => {
		console.log(user.value)
	})
	onMounted(() => {
		user.value = uni.getStorageSync("user")
	})
	onShow(() => {
		user.value = uni.getStorageSync("user")
	})
	const toElec = () => {
		uni.navigateTo({
			url: '/pages/electric/electric'
		});
	}
	const toOnlineFix = () => {
		uni.navigateTo({
			url: '/pages/onlinefix/onlinefix'
		});
	}

	const toCampusPoster = () => {
		uni.navigateTo({
			url: '/pages/campusposter/campusposter'
		});
	}
	const toLogin = () => {
		uni.navigateTo({
			url: '/pages/login/login'
		});
	}
	const Logout = () => {
		alertDialog.value.open()
	}
	const dialogConfirm = () => {
		uni.removeStorageSync('user')
		uni.removeStorageSync('openId')
		uni.removeStorageSync('sessionKey')
		uni.reLaunch({
			url: '/pages/index/index'
		});
	}
	const dialogClose = () => {
		alertDialog.value.close()
	}
</script>

<style lang="scss" scoped>
	.content {
		position: relative;
		height: 100vh;

		.logo {
			position: absolute;
			width: 100%;
			height: 29%;
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
			width: 100%;
			display: flex;
			justify-content: space-between;

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

		.logout {
			margin-left: 40rpx;
		}

		.profile {
			position: absolute;
			top: 7%;
			display: flex;
			padding-left: 50rpx;
		}

		.btn {
			width: 170rpx;
		}

		.water {
			position: absolute;
			border-radius: 40rpx;
			height: 25%;
			width: 550rpx;
			top: 22%;
			box-shadow: 0 10rpx 0 0 rgb(141, 177, 252);
			left: 100rpx;
		}

		.tab {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 57%;
			left: 50rpx;
		}

		.feature {

			position: absolute;
			left: 10%;
			top: 70%;
			display: flex;
			width: 80%;
			justify-content: space-around;
			align-items: flex-start;

			.feature_item {
				font-size: 25rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.feature_icon {
					display: flex;
					justify-content: center;
					align-items: center;
				}

			}
		}

	}
</style>