<template>
	<view class="container">
		<view class="info-container">
			<view class="input-item">
				<text class="label-text">姓名</text>
				<input type="text" v-model="name" :class="{'name':true,'focus':focus==0}" @focus="handleFocus(0)"
					@blur="focus=-1" />
			</view>
			<view class="input-item">
				<text class="label-text">学号</text>
				<input type="text" v-model="id" :class="{'name':true,'focus':focus==1}" @focus="handleFocus(1)"
					@blur="focus=-1" />
			</view>
			<view class="input-item">
				<text class="label-text">班级</text>
				<input type="text" v-model="classId" :class="{'name':true,'focus':focus==2}" @focus="handleFocus(2)"
					@blur="focus=-1" />
			</view>
		</view>

		<button class="bind-btn" @click="bind">绑定</button>
		<van-notify id="van-notify" />
	</view>
</template>

<script setup>
	import Notify from '@/wxcomponents/vant-weapp/dist/notify/notify.js';
	import {
		getCurrentInstance,
		ref
	} from 'vue';
	import http from '../../utils/http';
	let name = ref("")
	let id = ref("")
	let classId = ref("")
	let focus = ref(-1)


	const handleFocus = (index) => {
		focus.value = index
	}

	const bind = async () => {
		if ((name.value.length > 0) && (id.value.length > 0) && (classId.value.length > 0)) {
			if ((name.value.length <= 20) && (id.value.length <= 20) && (classId.value.length <= 20)) {
				let res = await http("/user/bind", "POST", {
					openid: uni.getStorageSync('openId'),
					name: name.value,
					id: id.value,
					classId: classId.value
				})
				if (res.code === true) {
					uni.setStorageSync('user', res.data);
					uni.reLaunch({
					  url: '/pages/index/index'
					});
				} else
					uni.showToast({
						icon: "exception",
						duration: 2000,
						title: "绑定失败，请检查网络"
					})
			} else {
				Notify({
					type: 'danger',
					message: '字段长度超过20'
				});
			}

		} else {
			Notify({
				type: 'danger',
				message: '字段不能为空'
			});
		}

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

	.focus {
		border-color: rgb(0, 130, 211) !important;
	}
</style>