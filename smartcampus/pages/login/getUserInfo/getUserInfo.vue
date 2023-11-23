<template>
	<view>
		<view class="row">
			<text>头像</text>
			<button class="btn" open-type="chooseAvatar" @chooseavatar="getAvatar">
				<image :src="img" mode="widthFix" style="	width: 7vh;
		height: 7vh;border-radius: 50%;"></image>
			</button>
		</view>
		<view class="row">
			<text>昵称</text>
			<input type="nickname" style="flex: 1;margin-left: 100rpx;" v-model="nickname" />
		</view>
		<view style="font-size: 24rpx;color: red;padding: 20rpx;">信息只能修改一次，请妥善保存。</view>
		<van-button type="primary" style="font-size: 28rpx;position: fixed;bottom: 50vh;width: 200rpx;left: 42%;"
			@click="handleSave">保存</van-button>

	</view>
</template>

<script setup>
	import urlTobase64 from '@/utils/common.js'
	import {
		ref
	} from 'vue';
	import http from '../../../utils/http';
	import url from '@/utils/ip.js'
	let avatar = ref('https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg')
	let img = ref('https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg')
	let nickname = ref('微信用户')


	const getAvatar = async (e) => {
		avatar.value = uni.getFileSystemManager().readFileSync(e.detail.avatarUrl, 'base64')
		let res = await http("/avatar/upload", "POST", {
			filestr: avatar.value,
			dataurl: 'data:image/jpg;base64'
		})
		if (res.code === true) {
			avatar.value = res.data.url
			img.value = url + res.data.url
		} else
			uni.showToast({
				icon: "exception",
				duration: 2000,
				title: "上传失败"
			})
	}

	const handleSave = async () => {
		let res = await http("/user/upload", "POST", {
			openid: uni.getStorageSync('openId'),
			nickname: nickname.value,
			avatarUrl: avatar.value
		})
		if (res.code === true)
			uni.navigateTo({
				url: '/pages/login/UserBinding'
			})
		else
			uni.showToast({
				icon: "exception",
				duration: 2000,
				title: "保存失败，请检查网络"
			})
	}
</script>

<style lang="scss" scoped>
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28rpx;
		padding: 20rpx;
		border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
	}

	.btn {
		padding: 0;
		margin: 0;
		border-radius: 50%;
		width: 7vh;
		height: 7vh;
	}
</style>