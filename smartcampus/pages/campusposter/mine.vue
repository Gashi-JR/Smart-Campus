<template>
	<view>
		<van-tabs swipeable animated color="rgb(0,157,255)">
			<van-tab title="我的发布" title-style="font-size:26rpx" style="padding: 20rpx;">
				<view class="outter">
					<view :class="{'inner':true,'inner_active':index==0}" @click="index=0">待接单</view>
					<view :class="{'inner':true,'inner_active':index==1}" @click="index=1"
						style="border-right: 2rpx solid rgb(188, 188, 188); border-left: 2rpx solid rgb(188, 188, 188);">
						已接单
					</view>

					<view :class="{'inner':true,'inner_active':index==2}" @click="index=2">已结束</view>
				</view>

				<view class="window" v-if="index==0">aaasa</view>
				<view class="window" v-if="index==1">aaaa</view>
				<view class="window" v-if="index==2">aaaaaaa</view>

			</van-tab>
			<van-tab title="我的接受" title-style="font-size:26rpx;">


				<view class="outter">
					<view :class="{'inner':true,'inner_active':index1==0}" @click="index1=0">待完成</view>
					<view :class="{'inner':true,'inner_active':index1==1}" @click="index1=1"
						style=" border-left: 2rpx solid rgb(188, 188, 188);">
						已完成
					</view>


				</view>

				<view class="window" v-if="index1==0">aaasa</view>
				<view class="window" v-if="index1==1">aaaa</view>



			</van-tab>
		</van-tabs>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	let index = ref(0)
	let index1 = ref(0)
</script>

<style lang="scss" scoped>
	.outter {
		width: 70%;
		height: 2.5vh;
		margin: 0 auto;
		display: flex;
		background: white;
		border: 2rpx solid rgb(188, 188, 188);
		border-radius: 20rpx;
		overflow: hidden;

		.inner {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 23rpx;
		}

		.inner_active {
			background-color: rgb(119, 119, 119);
			color: white;
		}
	}

	.window {
		padding: 20rpx;
	}
</style>