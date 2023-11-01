
<template>
  <view class="login-container">
	  <view class="container">
	  <image class="logo" src="/static/icons/微信.svg"></image>
	  </view>
    
    <view class="login-button-container">
      <van-button class="login" type="info">微信登录</van-button>
	  <!-- <van-button type="danger">危险按钮</van-button> -->
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
let value=ref("")

</script>  

<style lang="scss">
	.login-container {
	  background-color: #ffffff;
	}
	.login{
		position: absolute;
		top: 50%;
		left: 58%;
		height:9vh;
		width:300rpx;
		
		transform: translate(-50%, -50%);
	}
	.login-button-container{
		margin-top: 2vh;
		margin-left: 20rpx;
		margin-right: 20rpx;
		 position: relative;
		 height: 10vh; 
	}
	
	.input-container {
	  margin-top: 20px;
	}
	
	.label {
	  font-size: 16px;
	  margin-bottom: 8px;
	}
	
	.text-input {
	  width: 100%;
	  height: 40px;
	  padding: 8px;
	  background-color: #ffffff;
	  border-radius: 8px;
	  border: 1px solid #cccccc;
	}
	.container {
		margin-top: 20vh;
		margin-left: 20rpx;
		margin-right: 20rpx;
	     position: relative;
		 
	     height: 50vh; /* 可根据实际情况调整高度 */
		 border: 3rpx solid gray;
		 border-radius: 20rpx;
	   }
	.logo {
		 position: absolute;
		     top: 50%;
		     left: 50%;
		     transform: translate(-50%, -50%);
		     width: 500rpx; /* 根据实际情况调整宽度 */
		     height: 80vh; /* 根据实际情况调整高度 */
	}
	
</style>