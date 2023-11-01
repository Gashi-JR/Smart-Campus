
<template>
  <view class="container">
    <view class="info-container">
      <view class="input-item">
        <text class="label-text">姓名</text>
       <input type="text" v-model="name" class="name" />
      </view>
      <view class="input-item">
        <text class="label-text">学号</text>
        <input type="text" v-model="studentId" class="name"  />
      </view>
      <view class="input-item">
        <text class="label-text">班级</text>
        <input type="text" v-model="className" class="name"  />
      </view>
    </view>
	
    <button class="bind-btn" @click="bind">绑定</button>
  </view>
</template>

<style>
.container {
  padding: 20rpx;
}
.info-container {
	
  margin-top: 14vh;
  height: 46vh;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #cccccc;
}

.input-item {
	position:center;
	margin-top: 7vh;
	margin-left: 50rpx;
	margin-right: 50rpx;
	
  display: flex; /* 使用 flex 布局 */
  align-items: center;
  margin-bottom: 20rpx;
}
.name{
	border: 1px solid #000000;
	border-radius: 8px;
	
	height: 6vh;
	width: 425rpx;
	 margin-left: 8rpx;/* 设置输入框的宽度 */
	
	
}
.label-text {
  margin-right: 10rpx; /* 添加适当的右边距 */
  font-size: 28px;
}

.bind-btn {
  width: 350rpx;
  height: 80rpx;
  background-color: #0277be;
  color: #fff;
  font-size: 32rpx;
  line-height: 80rpx;
  text-align: center;
  border-radius: 10rpx;
  margin-top: 21vh;
}
</style>