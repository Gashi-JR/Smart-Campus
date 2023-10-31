<template>
	<view class="content">
		<image class="logo" src="/static/tu 2.png"></image>
		<view class="text-area">

			<image class="location" src="/static/icons/定位.svg"></image>
			<text class="title">林桂花江大学</text>
		</view>
		<view class="profile">

			<image src="../../static/logo.png" mode="widthFix"
				style="width: 110rpx;height: 110rpx;border-radius: 50%;margin-right: 30rpx;"></image>
			<view style="display: flex;flex-direction: column;justify-content: space-between;">
				<view class="btn">
					<van-button color="rgb(84,165,255)" round size="small" block>立即登录</van-button>
				</view>
				<text style="color: white;font-size: 25rpx;">登录查看更多内容</text>
			</view>

		</view>

		<image class="water" src="/static/图图 水.png"></image>
		<view class="tab">
			<view style="height: 45rpx;width: 7rpx;background-color:rgb(83,132,239) ;">
			</view>
			<text style="font-size: 28rpx;margin-left:12rpx ;">公共应用</text>
		</view>

		<view class="feature">
			<view style="width: 110rpx;height: 110rpx;border-radius: 10rpx;background-color:rgb(57,122,255) ;">
			</view>
			<view style="height: 80rpx;width: 4rpx;background-color:rgb(210,210,210);">

			</view>
			<view style="width: 110rpx;height: 110rpx;border-radius: 50%;background-color:rgb(255,139,43) ;">

			</view>
			<view style="height: 80rpx;width: 4rpx;background-color:rgb(210,210,210);">

			</view>
			<view style="width: 110rpx;height: 110rpx;border-radius: 10rpx;background-color:rgb(57,122,255) ;">

			</view>
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
height:1220rpx ;

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

		.profile {
			position: absolute;
			top: 100rpx;
			display: flex;
			padding-left: 50rpx;
		}

		.btn {
			width: 170rpx;
		}

		.water {
			position: absolute;
			border-radius: 40rpx;
			height: 300rpx;
			width: 550rpx;
			top: 270rpx;
			box-shadow: 0 10rpx 0 0 rgb(141, 177, 252);
			left: 100rpx;
		}

		.tab {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 680rpx;
			left: 50rpx;
		}

		.feature {

			position: absolute;
			left: 10%;
			//top: 900rpx;
			bottom: 0;
			display: flex;
			width: 80%;
			justify-content: space-around;
			align-items: center;
		}

	}
</style>