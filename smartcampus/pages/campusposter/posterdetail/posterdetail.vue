<template>
	<view class="box">
		<view class="content">
			描述:这是一个大小为0.5mx0.5m的包裹,在中央食堂菜鸟驿站，请联系手机号为:133xxxXXXxxxxx/qq号为192xxxxxxxx的拿到取件码。

		</view>

		<text class="txt">委托人联系方式:xxxxxx</text>
		<text class="txt">委托地址: xxxxxx</text>
		<text class="txt">送达地址: xxxxxx</text>
		<text class="txt">代取信息: xxxxxx</text>
		<text class="txt">要求送达时间: xxxxxx</text>

		<button plain class="btn">接受委托</button>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.box {
		padding: 60rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		font-size: 26rpx;

		.content {
			border: 2rpx solid black;
			padding: 40rpx;
			height: 20vh;
			margin-top: 4vh;
		}

		.txt {
			margin-top: 4vh;
		}

		.btn {
			margin-top: 10vh;
			font-size: 26rpx;
			padding: 15rpx;
			width: 240rpx;
			border: 2rpx solid rgb(175, 175, 175);
		}
	}
</style>