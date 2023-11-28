<template>
	<view class="box">
		<view class="content">
			{{data?.thingDesc}}
		</view>

		<text class="txt">委托人联系方式:&nbsp;{{data?.contactInfo}}</text>
		<text class="txt">委托地址:&nbsp;{{data?.pickAddress}}</text>
		<text class="txt">送达地址:&nbsp; {{data?.deliveryAddress}}</text>
		<text class="txt">代取信息:&nbsp; {{data?.fatchInfo}}</text>
		<text class="txt">要求送达时间:&nbsp; {{data?.deliveryTime}}</text>

		<button plain class="btn" @click="handleAccept"
			v-if="(user!=null&&user.id!=data?.clientId)&&data?.accepterId!=user.id">接受委托</button>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import http from '@/utils/http.js'
	import {
		onLoad
	} from "@dcloudio/uni-app"
	let data = ref(null)
	let user = ref(null)
	let orderId = ref(0)
	onLoad(async (option) => {
		console.log(option.id);
		orderId.value = option.id
		user.value = uni.getStorageSync('user')
		getData(option.id)
	})

	const getData = async (id) => {
		let res = await http(`/deliverOrder/${id}`, "GET", {}, false)
		data.value = res.data
		console.log(res.data);
	}
	const handleAccept = async () => {
		let res = await http(`/deliverOrder/accept/${user.value.id}/${orderId.value}`, "PUT", {}, false)
		console.log(res.code);
		if (res.code === true) {
			uni.showToast({
				icon: 'success',
				title: '接受成功'
			})
			uni.navigateBack()
			uni.$emit('toMine')
		} else {
			uni.showToast({
				icon: 'error',
				title: '接受失败，请检查网络'
			})
		}
	}
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
			width: 87.5%;
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