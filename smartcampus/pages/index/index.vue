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
			<view class="feature_item">
				<view class="feature_icon"
					style="width: 110rpx;height: 110rpx;border-radius: 10rpx;background-color:rgb(57,122,255) ;margin-bottom: 5vh;">
					<image class="location" src="/static/icons/闪电.svg"></image>
				</view>

				用电查询

			</view>

			<view style="height: 80rpx;width: 4rpx;background-color:rgb(210,210,210);margin-top: 1vh;">

			</view>
			<view class="feature_item">
				<view class="feature_icon"
					style="width: 110rpx;height: 110rpx;border-radius: 50%;background-color:rgb(255,139,43) ;margin-bottom: 5vh;">

					<image class="location" src="/static/icons/纸飞机.svg"></image>
				</view>
				校园取物
			</view>

			<view style="height: 80rpx;width: 4rpx;background-color:rgb(210,210,210);margin-top: 1vh;">

			</view>
			<view class="feature_item">
				<view class="feature_icon"
					style="width: 110rpx;height: 110rpx;border-radius: 10rpx;background-color:rgb(57,122,255) ;margin-bottom: 5vh;">
					<image class="location" src="/static/icons/无需安装.svg"></image>
				</view>
				网上保修
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