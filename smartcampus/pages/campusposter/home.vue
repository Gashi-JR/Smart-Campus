<template>
	<view class="content">

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
		onLoad
	} from "@dcloudio/uni-app"
	let data = ref()

	const toDetail = (id) => {
		console.log(id);
		uni.navigateTo({
			url: '/pages/campusposter/posterdetail/posterdetail'
		});

	}

	const getData = async () => {
		let res = await http("/deliverOrder/acceptFind/1", "GET", {}, false)
		data.value = res.data
		console.log(res.data);
	}
	onLoad(async () => {
		console.log(222);
		let res = await http("/deliverOrder/acceptFind/1", "GET", {}, false)
		data.value = res.data
		console.log(res.data);
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