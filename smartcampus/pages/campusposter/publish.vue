<template>
	<view style="width: 100%;">
		<view class="row" style="align-items: flex-start;">
			<text class="text">物品描述</text>
			<textarea class="input" v-model="content" placeholder="请输入内容" style="height: 18vh;" />
		</view>
		<view class="row">
			<text class="text">取货地址</text>
			<input class="input" v-model="getAddr" placeholder="请输入内容" />
		</view>

		<view class="row">
			<text class="text">送件地址</text>
			<input class="input" v-model="takeAddr" placeholder="请输入内容" />
		</view>

		<view class="row">
			<text class="text">送件时间</text>
			<view class="example-body">
				<uni-datetime-picker class="input" type="datetime" v-model="takeTime" />

			</view>
		</view>

		<view class="row">
			<text class="text">联系方式</text>
			<input class="input" v-model="context" placeholder="请输入内容" />
		</view>

		<view class="row" style="align-items: flex-start;">
			<text class="text">代取信息</text>
			<textarea class="input" style="height: 10vh;" v-model="info" placeholder="请输入内容" />
		</view>
		<view class="btn">
			<button class="mini-btn" type="primary" size="mini"
				style="background-color: rgb(7,193,96);margin: 0;margin-right: 120rpx;" @click="handlePublish">完成</button>
			<button class="mini-btn" type="default" size="mini" style="color: rgb(215, 44, 44);margin: 0; "
				@click="handleCancel">取消</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import Notify from '../../wxcomponents/vant-weapp/dist/notify/notify'
	let content = ref('')
	let takeAddr = ref('')
	let getAddr = ref('')
	let takeTime = ref('')
	let context = ref('')
	let info = ref('')
	const handlePublish = () => {
		if (content.value != '' && takeAddr.value != '' && getAddr.value != '' && takeTime.value != '' && context.value !=
			'' && info.value != '') {
			console.log({
				content: content.value,
				takeAddr: takeAddr.value,
				getAddr: getAddr.value,
				takeTime: takeTime.value,
				context: context.value,
				info: info.value
			});
			Notify({
				type: 'success',
				message: '发布成功',
				selector: '.notify'
			});
		} else {
			Notify({
				type: 'danger',
				message: '请输入完整信息',
				selector: '.notify'
			});
		}
	}
	const handleCancel = () => {
		console.log('cancel');
		console.log(takeTime.value);
		content.value = ''
		takeAddr.value = ''
		getAddr.value = ''
		takeTime.value = ''
		context.value = ''
		info.value = ''
	}
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 40rpx;
		padding-right: 40rpx;
		margin: 20rpx auto;
		width: 80%;
	}

	.example-body {
		flex: 1;
		margin-left: 40rpx;

	}


	.text {
		font-size: 28rpx;
	}

	.input {
		border: 2rpx solid rgb(226, 229, 234);
		flex: 1;
		margin-left: 40rpx;
		border-radius: 10rpx;
		padding: 20rpx;
		font-size: 28rpx;
		height: 3vh;
		line-height: 3vh;
	}

	.btn {
		display: flex;
		align-items: center;
		padding-left: 228rpx;
		margin-top: 7vh;
	}
</style>