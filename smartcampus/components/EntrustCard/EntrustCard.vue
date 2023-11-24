<template>
	<view class="card">
		<view style="width:100%;margin-top:1vh; display: flex;justify-content: space-between;align-items: center;">
			<text style="font-size: 25rpx;color: rgba(0,0,0,0.6);margin-left: 20rpx;">{{props.title}}</text>
			<button class="btn" v-if="props.showBtn" @click.stop="props.click">{{props.btnTxt}}</button>
		</view>

		<view class="divider">
		</view>
		<view style="display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		padding-right: 20rpx;
		">
			<text style="margin-top: 2vh;margin-bottom: 1vh;font-size: 30rpx;">描述</text>
			<text style="font-size: 25rpx;color: rgba(0,0,0,0.6);margin-bottom: 2.5vh;">
				{{props.content}}</text>
			<view style="display: flex;justify-content: space-between;
			font-size: 24rpx;
			width: 100%;
			color: rgba(0,0,0,0.4);
			margin-bottom: 1.5vh;">
				<text class="txt" style="width: 48%;">取件地址:{{props.takeAddr}}</text>
				<text class="txt" style="width: 40%;">|&nbsp;交货地址:{{props.submitAddr}}</text>
			</view>
		</view>


	</view>
</template>

<script setup>
	const props = defineProps({
		title: String,
		showBtn: Boolean,
		content: String,
		takeAddr: String,
		submitAddr: String,
		btnTxt: String,
		click: Function
	})
</script>

<style lang="scss" scoped>
	.card {
		border: 2rpx solid rgb(188, 188, 188);
		border-radius: 10rpx;
		padding-left: 45rpx;
		padding-right: 45rpx;
		display: flex;
		flex-direction: column;
		height: 22vh;
		width: 600rpx;
		margin: 0 auto;
		justify-content: center;

		.btn {
			height: 2.5vh;
			font-size: 20rpx;
			background-color: white;
			padding: 0;
			margin: 0;
			line-height: 2.5vh;
			padding-left: 20rpx;
			padding-right: 20rpx;
		}
	}

	.divider {
		width: 100%;
		height: 0.1vh;
		background: rgb(230, 230, 230);
	}

	.txt {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>