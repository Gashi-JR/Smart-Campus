<template>
	<view class="container">
		<view class="info-container">
			<view class="input-item" >
				<text class="label-text">姓名</text>
				<input type="text" v-model="name" :class="{'name':true,'focus':focus==0}" @focus="handleFocus(0)" @blur="focus=-1" />
			</view>
			<view class="input-item">
				<text class="label-text">学号</text>
				<input type="text" v-model="studentId" :class="{'name':true,'focus':focus==1}" @focus="handleFocus(1)" @blur="focus=-1"/>
			</view>
			<view class="input-item">
				<text class="label-text">班级</text>
				<input type="text" v-model="className" :class="{'name':true,'focus':focus==2}" @focus="handleFocus(2)" @blur="focus=-1"/>
			</view>
		</view>

		<button class="bind-btn" @click="bind">绑定</button>
	</view>
</template>

<script setup>
	import {
		getCurrentInstance,
		ref
	} from 'vue';
	let name = ref("")
	let studentId = ref("")
	let className = ref("")
	let focus=ref(-1)
	

	const handleFocus=(index)=>{
	focus.value=index
	}
	
	
	
</script>

<style lang="scss" scoped>
	.container {
		padding: 25rpx;
	}

	.info-container {
		margin-top: 12vh;
		height: 30vh;
		border-radius: 50rpx;
		border: 2rpx solid rgb(199, 199, 199);
		padding-left: 25rpx;
				padding-right: 50rpx;
				padding-top: 5vh;
				padding-bottom: 5vh;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.input-item {
		display: flex;
		width: 100%;
		align-items: center;

		.name {
			border: 4rpx solid rgb(195, 195, 195);
			border-radius: 24rpx;
			height: 6vh;
			flex: 1;
			margin-left: 12rpx;
			padding-left: 20rpx;
				padding-right: 20rpx;
				font-size: 28rpx;
		}

		.label-text {
			margin-right: 10rpx;
			font-size: 50rpx;
		}
	}


	.bind-btn {
		width: 350rpx;
		height: 6.5vh;
		background-color: #0277be;
		font-size: 30rpx;
		line-height: 6.5vh;
		margin-top: 21vh;
	}
	.focus{
		border-color: rgb(0,130,211) !important;
	}
</style>