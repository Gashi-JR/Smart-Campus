<template>
	<view>
		<van-tabs swipeable animated color="rgb(0,157,255)" border>
			<van-tab title="申请报修">
			<fixApply></fixApply>
			</van-tab>
			<van-tab title="报修须知">
			<fix-notice></fix-notice>
			</van-tab>
			<van-tab title="我的工单">
				<view class="listform">
				<view class="list">
					<!-- 上部分 -->
					<view class="top-part">
						<view class="text-container">
							<image class="file" :src="urlToBase64('icons','file','svg')"></image>
							<text class="listNumber">单号：003</text>

							<text class="status">等待检修</text>
							<image class="file" :src="urlToBase64('icons','right','svg')"></image>
						</view>
						<text class="time">2022-05-12 08:00</text>


					</view>

					<!-- 下部分 -->
					<view class="bottom-part">
						<view class="text-container">
							<text  class="fixPerson"><text class="gray">报修人：</text>张三</text> 
							<text class="fixPerson"><text class="gray">保修类型：</text>损坏设备</text> 
						</view>
						<view class="text-container">
						<text class="fixClass"><text class="gray">保修地点：</text>办公室301\n</text> 
					</view>
					<view class="text-container">
						<text class="fixClass"><text class="gray">电话：</text>1388888888</text>
					</view>
					</view>
				</view>
				<view class="list">
					<!-- 上部分 -->
					<view class="top-part">
						<view class="text-container">
							<image class="file" :src="urlToBase64('icons','file','svg')"></image>
							<text class="listNumber">单号：003</text>
				
							<text class="status">等待检修</text>
							<image class="file" :src="urlToBase64('icons','right','svg')"></image>
						</view>
						<text class="time">2022-05-12 08:00</text>
				
				
					</view>
				
					<!-- 下部分 -->
					<view class="bottom-part">
						<view class="text-container">
							<text  class="fixPerson"><text class="gray">报修人：</text>张三</text> 
							<text class="fixPerson"><text class="gray">保修类型：</text>损坏设备</text> 
						</view>
						<view class="text-container">
						<text class="fixClass"><text class="gray">保修地点：</text>办公室301\n</text> 
					</view>
					<view class="text-container">
						<text class="fixClass"><text class="gray">电话：</text>1388888888</text>
					</view>
					</view>
				</view>
				<view class="list">
					<!-- 上部分 -->
					<view class="top-part">
						<view class="text-container">
							<image class="file" :src="urlToBase64('icons','file','svg')"></image>
							<text class="listNumber">单号：003</text>
				
							<text class="status">等待检修</text>
							<image class="file" :src="urlToBase64('icons','right','svg')"></image>
						</view>
						<text class="time">2022-05-12 08:00</text>
				
				
					</view>
				
					<!-- 下部分 -->
					<view class="bottom-part">
						<view class="text-container">
							<text  class="fixPerson"><text class="gray">报修人：</text>张三</text> 
							<text class="fixPerson"><text class="gray">保修类型：</text>损坏设备</text> 
						</view>
						<view class="text-container">
						<text class="fixClass"><text class="gray">保修地点：</text>办公室301\n</text> 
					</view>
					<view class="text-container">
						<text class="fixClass"><text class="gray">电话：</text>1388888888</text>
					</view>
					</view>
				</view>
				</view>
			</van-tab>
		</van-tabs>

	
	</view>
</template>


<script setup>
	import {
		ref
	} from 'vue';
	import urlToBase64 from '../../utils/common.js';
import fixNotice from './fixNotice.vue'
import fixApply from './fixApply.vue'


</script>



<style lang="scss" scoped>

	.list {
		border-bottom: 2rpx solid #cccccc;
		border-top: 2rpx solid #cccccc;
		height: 32vh;
		margin-bottom: 5vh;

	}

	.top-part {
		border-bottom: 2rpx solid #cccccc;
		margin-left: 20rpx;
		margin-top: 1vh;
		display: flex;

		flex-direction: column;
		align-items: flex-start;
	}

	.info {}

	.text-container {

		display: flex;
		justify-content: space-between;

		align-items: center;
	}


	.file {

		height: 3.5vh;
		width: 60rpx;
	}

	.listNumber {
		margin-top: -1vh;
		margin-left: 20rpx;
		height: 2vh;
		flex: 1;
		/* 让文本填充可用空间 */

	}

	.status {
		margin-left: 260rpx;
		width: 170rpx;
		height: 5vh;
		border-radius: 20px;
		background-color: #ffd7d7;
		 display: flex;
		justify-content: center; /* 水平居中 */
		  align-items: center; 
		color: #aa4a4a;
		 border: 1px solid #ccc;

	}

	.time {
		color: #808080;
		margin-top: 10rpx;
		margin-left:5rpx;
	}
	.fixPerson{
		
		margin-top: 20px;
	}
	.fixClass{
		
		margin-top: 20px;
	}
	.gray{
		color:#808080;
	}
</style>