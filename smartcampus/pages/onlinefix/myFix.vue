<template>
	<view class="container">
		<view style="margin-bottom: 20rpx;" @click="toFixDetail(item.id)" v-for="item in data" :key="item.id">
			<MyfixCard :id="`00${item.id}`" :status="Boolean(item.status)" :time="item.createTime" :hoster="item.name"
				:addr="item.errorPos" :phone="item.phone" :type="item.faultItem"></MyfixCard>
		</view>


	</view>
</template>

<script setup>
	import MyfixCard from '@/components/MyfixCard/MyfixCard.vue'
	import {
		ref,
		onMounted,
		watch
	} from 'vue';
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	import _ from 'lodash'
	import http from '@/utils/http.js'
	const toFixDetail = (id) => {
		uni.navigateTo({
			url: `/pages/onlinefix/myfixdetail/myfixdetail?id=${id}`
		})
	}
	let user = ref(null)
	let data = ref([])
	onShow(() => {
		if (uni.getStorageSync('user') == "") {
			uni.redirectTo({
				url: '/pages/login/login'
			})
			uni.showToast({
				title: "请先登录",
				icon: 'error'
			})
		} else {
			user.value = uni.getStorageSync('user')
			getData()
		}

	})

	onMounted(() => {
		if (uni.getStorageSync('user') == "") {
			uni.redirectTo({
				url: '/pages/login/login'
			})
			uni.showToast({
				title: "请先登录",
				icon: 'error'
			})
		} else {
			user.value = uni.getStorageSync('user')
			getData()
		}

	})
	const getData = async () => {
		uni.showLoading({})
		let res = await http(`/fix/my_fix/${user.value.id}`, "GET", {}, false)
		data.value = _.sortBy(res.data, item => -Date.parse(item.createTime))
		uni.hideLoading()
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: rgb(246, 246, 246);
	}
</style>