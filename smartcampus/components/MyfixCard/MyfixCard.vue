<template>
	<view style="height: 24vh;overflow: hidden;">
		<view class="list" style="background-color: white;">
			<!-- 上部分 -->
			<view class="top-part">
				<view class="text-container">
					<view style="display: flex;margin-bottom: 0.5vh;">
						<image style="width: 35rpx;
	      	height: 35rpx;
					" :src="urlToBase64('icons','file','svg')">
						</image>
						<text class="listNumber">单号：{{props.id}}</text>
					</view>

					<view style="font-size: 26rpx;color: rgb(167, 167, 167);">{{props.time}}</view>
				</view>

				<view style="display: flex;align-items: center;">
					<view :class="props.status?'status_true':'status_false'">{{props.status?'维修完成':'等待维修'}}</view>
					<image class="file" :src="urlToBase64('icons','right','svg')"></image>
				</view>

			</view>

			<!-- 下部分 -->
			<view class="bottom-part">
				<view style="display: flex;justify-content: space-between;">
					<text><text class="gray" style="margin-right: 45rpx;">报修人：</text>{{props.hoster}}</text>
					<text><text class="gray" style="margin-right: 45rpx;">报修类型：</text>{{props.type}}</text>
				</view>
				<view>
					<text><text class="gray" style="margin-right: 18rpx;">报修地点：</text>{{props.addr}}</text>
				</view>
				<view>
					<text><text class="gray" style="margin-right: 70rpx;">电话：</text>{{props.phone}}</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script setup>
	import urlToBase64 from '@/utils/common.js'
	const props = defineProps({
		id: String,
		status: Boolean,
		time: String,
		hoster: String,
		addr: String,
		phone: String,
		type: String
	})
</script>

<style lang="scss" scoped>
	.list {


		height: 24vh;
		margin-bottom: 5vh;
		display: flex;
		flex-direction: column;
	}

	.top-part {
		border-bottom: 2rpx solid #cccccc;
		border-top: 2rpx solid #cccccc;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 30rpx;
		padding-right: 20rpx;

		.text-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			height: 100%;
		}
	}

	.bottom-part {
		flex: 2.5;
		font-size: 27rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding-left: 15rpx;
		padding-right: 40rpx;
	}

	.file {
		width: 45rpx;
		height: 45rpx;
	}

	.gray {
		color: rgb(167, 167, 167);
	}

	.status_false {
		background-color: rgb(255, 214, 216);
		font-weight: bold;
		padding: 10rpx;
		padding-left: 34rpx;
		padding-right: 34rpx;
		border-radius: 50rpx;
		color: rgb(179, 31, 33);
		font-size: 25rpx;
	}

	.status_true {
		background-color: rgb(230, 251, 229);
		font-weight: bold;
		padding: 10rpx;
		padding-left: 34rpx;
		padding-right: 34rpx;
		border-radius: 50rpx;
		color: rgb(102, 158, 99);
		font-size: 25rpx;
	}

	.listNumber {
		margin-left: 20rpx;
		font-size: 27rpx;
		margin-top: 4rpx;
		font-weight: bold;
	}
</style>