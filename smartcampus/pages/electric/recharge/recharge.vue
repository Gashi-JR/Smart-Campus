<template>
	<view>
		<view class="table-container">
			<view class="table-header">
				<view class="table-cell" style="background-color:rgb(225, 223, 223) ;">
					缴费房间号：66-666
				</view>

			</view>
			<view class="table-row">
				<view class="table-cell">
					缴费金额：{{sum}}
				</view>
				<view class="table-cell">
					<view class="uni-form-item uni-column">

						<radio-group name="yuan" class="howmuch" @change="onChange">
							<label>
								<radio :value="10" class="money" /><text>10元</text>
							</label>
							<label>
								<radio :value="20" class="money" /><text>20元</text>
							</label>
							<label>
								<radio :value="50" class="money" /><text>50元</text>
							</label>
							<label>
								<radio :value="100" class="money" /><text>100元</text>
							</label>
						</radio-group>
					</view>

				</view>

			</view>
		</view>





		<view class="zhifu">
			<view style="display: flex;align-items: center;">
				<image style="width: 35rpx;margin-right: 20rpx;
			  height: 35rpx;
			" :src="urlToBase64('icons','微信支付','svg')">
				</image>
				<text style="font-size: 27rpx;">微信支付</text>
			</view>

			<label class="radio">
				<radio value="r2" style="		transform: scale(0.8);" />
			</label>

		</view>


		<view class="checkout">
			<text class="checkout1">合计：</text>
			<text class="checkout2">25元</text>
			<button class="btn1">立即充值</button>
		</view>
	</view>
</template>

<script setup>
	import urlToBase64 from '@/utils/common.js'
	import {
		ref
	} from 'vue';
	let sum = ref(0)
	const onChange = (e) => {
		sum.value = e.target.value
	}
</script>

<style lang="scss" scoped>
	radio {
		transform: scale(0.6);
	}

	.table-cell {
		padding: 16rpx;
		height: 4vh;
		text-align: left;
		line-height: 2vh;
		flex: 1;
		font-size: 27rpx;
		border: 1rpx solid rgba(171, 171, 171);
		margin-left: 20rpx;
		margin-right: 20rpx;
		display: flex;
		align-items: center
	}






	.uni-column text {
		color: rgb(105, 188, 252);
		/* 设置字体颜色为红色 */
		margin-right: 40rpx;
	}

	.uni-form-item .title {
		padding: 20rpx 0;
	}



	.zhifu {
		padding: 30rpx;
		border-bottom: 2rpx solid rgba(0, 0, 0, 0.08);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}



	.checkout {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		bottom: 3vh;
		left: 0;
		width: 100%;
		border-top: 2rpx solid rgb(237, 237, 237);
		padding-top: 20rpx;
		padding-bottom: 10rpx;

		.checkout1 {
			color: rgb(245, 46, 46);
			font-size: 40rpx;
		}

		.checkout2 {
			margin-right: 40rpx;
			font-size: 24rpx;
		}

		.btn1 {
			margin: 0;
			color: white;
			border-radius: 15rpx;
			border: 2rpx solid rgb(130, 115, 115);
			background-color: rgb(245, 46, 46);
			font-size: 24rpx;
			margin-right: 20rpx;
			height: 4.5vh;
			width: 170rpx;
			line-height: 4.2vh;
		}
	}
</style>