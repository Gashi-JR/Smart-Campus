<template>
	<view class="content" >

		<view @click="toDetail(item.id)" v-for="(item,index) in data" :key="index"
			style="margin-top: 1vh;margin-bottom: 2vh;">
			<EntrustCard title="委托人" :showBtn="false" :content="item.thingDesc" :takeAddr="item.pickAddress"
				:submitAddr="item.deliveryAddress">
			</EntrustCard>
		</view>

	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import entrustcard from '/components/EntrustCard/EntrustCard.vue'
	import http from '@/utils/http.js'
	import {
		onLoad,
		onPullDownRefresh
	} from "@dcloudio/uni-app"
	let data = ref()

	const toDetail = (id) => {
		console.log(uni.getStorageSync('user'));
		if (uni.getStorageSync('user') == "") {
			uni.navigateTo({
				url: '/pages/login/login'
			})
			uni.showToast({
				title: "请先登录",
				icon: 'error'
			})
		} else {
			uni.navigateTo({
				url: `/pages/campusposter/posterdetail/posterdetail?id=${id}`
			});
		}
	}

	const getData = async () => {
		let res = await http("/deliverOrder/all", "GET", {}, false)
		data.value = res.data
		console.log(res.data);
	}
	onLoad(async () => {
		console.log(222);
		getData()
	})
	onMounted(() => {
		getData()
	})
	onPullDownRefresh(() => {
		getData()
	})
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>