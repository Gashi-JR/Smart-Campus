<template>
	<view class="container">
		<view class="top-part">
			<view class="text-container">
				<image class="file" :src="urlToBase64('icons','file01','svg')"></image>
				<text class="listNumber">单号：003</text>

				<text class="status_false">等待检修</text>
			</view>
		</view>


		<view class="details">
			<view class="tags">
				<view class="blue"></view>
				<text class="text">保修单信息</text>
			</view>
			<view class="info">
				<view class="textview">
					<text class="properties"><text class="gray">报修人：</text>陈小陈\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">联系电话：</text>12345678\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">保修类型：</text>五金\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">报修内容：</text>宿舍凳子坏了\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">报修地址：</text>c区16栋339\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">维修员信息：</text>张师傅\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">上传照片：</text>未提交\n</text>
				</view>

			</view>
		</view>
	</view>

</template>

<script setup>
	import urlToBase64 from '@/utils/common.js';
</script>

<style lang="scss" scoped>
	.container {
		background-color: rgb(246, 246, 246);
	}

	.text-container {
		display: flex;
		justify-content: space-between;
		padding-left: 20rpx;
		padding-right: 20rpx;
		background-color: #259bf3;
		align-items: center;
		height: 6vh;
	}


	.file {
		height: 40rpx;
		width: 40rpx;
	}

	.listNumber {
		margin-top: -0.5vh;
		margin-left: 20rpx;
		height: 2vh;
		flex: 1;
		color: #ffffff;


	}

	.status_false {
		background-color: rgb(245, 146, 151);
		font-weight: bold;
		padding: 10rpx;
		padding-left: 34rpx;
		padding-right: 34rpx;
		border-radius: 50rpx;
		color: rgb(205, 39, 45);
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

	.details {
		margin-top: 2vh;
	}

	.tags {
		margin-top: 0.7vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 6.3vh;
		background-color: white;

	}

	.tags text {
		margin-left: 10rpx;
	}

	.blue {
		margin-left: 20rpx;
		height: 3vh;
		width: 8rpx;
		background-color: rgb(107, 168, 221);
	}

	.info {
		margin-top: 0.7vh;

		padding: 10rpx;
		height: 60vh;
		background-color: white;
	}

	.properties {
		/* margin-bottom: 100rpx; */
		margin-left: 20rpx;

	}

	.gray {
		color: #808080;
	}

	.textview {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3vh;
	}
</style>