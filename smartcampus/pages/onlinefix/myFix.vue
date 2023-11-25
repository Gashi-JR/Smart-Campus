<template>
	<view class="container">
		<view style="margin-bottom: 20rpx;" @click="toFixDetail">
			<MyfixCard id="003" :status="false" time="2033-03-10 20:30:19" hoster="陈小陈" addr="c区16栋399" phone="12345678907"
				type="五金"></MyfixCard>
		</view>
		<view style="margin-top: 20rpx;margin-bottom: 20rpx;">
			<MyfixCard id="003" :status="true" time="2033-03-10 20:30:19" hoster="陈小陈" addr="c区16栋399" phone="12345678907"
				type="五金"></MyfixCard>
		</view>
		<view style="margin-top: 20rpx;margin-bottom: 20rpx;">
			<MyfixCard id="003" :status="true" time="2033-03-10 20:30:19" hoster="陈小陈" addr="c区16栋399" phone="12345678907"
				type="五金"></MyfixCard>
		</view>

	</view>
</template>

<script setup>
	import MyfixCard from '@/components/MyfixCard/MyfixCard.vue'
	const toFixDetail=()=>{
		uni.navigateTo({
			url:'/pages/onlinefix/myfixdetail/myfixdetail'
		})
	}
	
	
</script>

<style lang="scss" scoped>
	.container {
		background-color: rgb(246, 246, 246);
	}
</style>