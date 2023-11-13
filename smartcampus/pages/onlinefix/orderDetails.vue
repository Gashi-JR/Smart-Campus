<template >
	<view class="top-part">
		<view class="text-container">
			<image class="file" :src="urlToBase64('icons','file01','svg')"></image>
			<text class="listNumber">单号：003</text>
	
			<text class="status">等待检修</text>
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
</template>

<script setup>
	import urlToBase64 from '../../utils/common.js';
</script>

<style lang="scss">
	.text-container {
	
		display: flex;
		justify-content: space-between;
	margin-top: 2vh;
	background-color:#259bf3 ;
		align-items: center;
		height:9vh;
	}
	
	
	.file {
	
		height: 3.5vh;
		width: 60rpx;
		fill:#ffffff;
		
	}
	
	.listNumber {
		margin-top: -1vh;
		margin-left: 20rpx;
		height: 2vh;
		flex: 1;
		color:#ffffff;
		/* 让文本填充可用空间 */
	
	}
	
	.status {
		margin-right: 20rpx;
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
	.details{
		margin-top: 2vh;
	}
	.tags{
		margin-top: 2vh;
		border: 1px solid #ccc;
		display:  flex;
		flex-direction:  row;
		align-items:  center;
		height:7vh;
		
	}
	.tags text{
		margin-left: 10rpx;
	}
	.blue{
		margin-left: 20rpx;
		height:5vh;
		width:10rpx;
		background-color:#623EE3 ;
		border-radius: 20px;
	}
	.info{
		margin-top: 2vh;
		border: 1px solid #ccc;
		padding:10rpx;
		height:60vh;
	}
	.properties{
		/* margin-bottom: 100rpx; */
		margin-left: 20rpx;
		
	}
	.gray{
		color:#808080;
	}
	.textview{
display:  flex;
 justify-content:  space-between;
 align-items:  center;
	margin-bottom: 3vh;	
	}
</style>