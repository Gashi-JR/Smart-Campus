<template>
	<view>
		<van-tabs swipeable animated color="rgb(0,157,255)" :active="active">
			<van-tab title="我的发布" title-style="font-size:26rpx" style="padding: 20rpx;">
				<view class="outter">
					<view :class="{'inner':true,'inner_active':index==0}" @click="index=0">待接单</view>
					<view :class="{'inner':true,'inner_active':index==1}" @click="index=1"
						style="border-right: 2rpx solid rgb(188, 188, 188); border-left: 2rpx solid rgb(188, 188, 188);">
						已接单
					</view>

					<view :class="{'inner':true,'inner_active':index==2}" @click="index=2">已结束</view>
				</view>
				<!-- 待接单 -->
				<view class="window" v-if="index==0">
					<view class="content">

						<view @click.stop="toDetail(item.id)" v-for="(item,index) in mypublish_0" :key="index"
							style="margin-top: 1vh;margin-bottom: 2vh;">
							<EntrustCard title="待接单" :showBtn="true" :content="item.thingDesc" :takeAddr="item.pickAddress"
								:submitAddr="item.deliveryAddress" btnTxt="取消发布" :click="()=>{cancelPublish(item.id)}">
							</EntrustCard>
						</view>

					</view>
				</view>

				<!-- 已接单 -->
				<view class="window" v-if="index==1">
					<view class="content">

						<view @click.stop="toDetail(item.id)" v-for="(item,index) in mypublish_1" :key="index"
							style="margin-top: 1vh;margin-bottom: 2vh;">
							<EntrustCard title="已接单" :showBtn="true" :content="item.thingDesc" :takeAddr="item.pickAddress"
								:submitAddr="item.deliveryAddress" btnTxt="完成委托" :click="()=>{
									finish(item.id)
									}">
							</EntrustCard>
						</view>

					</view>
				</view>

				<!-- 已结束 -->
				<view class="window" v-if="index==2">
					<view class="content">

						<view @click.stop="toDetail(item.id)" v-for="(item,index) in mypublish_2" :key="index"
							style="margin-top: 1vh;margin-bottom: 2vh;">
							<EntrustCard title="已结束" :showBtn="false" :content="item.thingDesc" :takeAddr="item.pickAddress"
								:submitAddr="item.deliveryAddress">
							</EntrustCard>
						</view>

					</view>
				</view>

			</van-tab>
			<van-tab title="我的接受" title-style="font-size:26rpx;">


				<view class="outter" style="margin-top: 2vh;">
					<view :class="{'inner':true,'inner_active':index1==0}" @click="index1=0">待完成</view>
					<view :class="{'inner':true,'inner_active':index1==1}" @click="index1=1"
						style=" border-left: 2rpx solid rgb(188, 188, 188);">
						已完成
					</view>


				</view>

				<!-- 待完成 -->
				<view class="window" v-if="index1==0">
					<view class="content">

						<view @click="toDetail(item.id)" v-for="(item,index) in myaccept_1" :key="index"
							style="margin-top: 1vh;margin-bottom: 2vh;">
							<EntrustCard title="待完成" :showBtn="true" :content="item.thingDesc" :takeAddr="item.pickAddress"
								:submitAddr="item.deliveryAddress" btnTxt="取消接单" :click="()=>{cancelAccept(item.id)}">
							</EntrustCard>
						</view>

					</view>
				</view>

				<!-- 已完成 -->
				<view class="window" v-if="index1==1">
					<view class="content">

						<view @click="toDetail(item.id)" v-for="(item,index) in myaccept_2" :key="index"
							style="margin-top: 1vh;margin-bottom: 2vh;">
							<EntrustCard title="已完成" :showBtn="false" :content="item.thingDesc" :takeAddr="item.pickAddress"
								:submitAddr="item.deliveryAddress">
							</EntrustCard>
						</view>

					</view>
				</view>



			</van-tab>
		</van-tabs>
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="error" cancelText="取消" confirmText="确定" title="是否完成委托？" content="请确保委托人的确完成委托!"
				@confirm="dialogConfirm" @close="dialogClose" :before-close="true"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script setup>
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
	let index = ref(0)
	let index1 = ref(0)
	let active = ref(0)
	let alertDialog = ref()
	let finishid = ref(null)

	let myaccept = ref(null)
	let myaccept_1 = ref(null)
	let myaccept_2 = ref(null)

	let mypublish = ref(null)
	let mypublish_0 = ref(null)
	let mypublish_1 = ref(null)
	let mypublish_2 = ref(null)
	let user = ref(null)

	uni.$on('myAccept', () => {
		console.log('myAccept');
		active.value = 1
	});

	onShow(() => {

		user.value = uni.getStorageSync('user')

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
			uni.$emit('onReady')
			console.log(_);
			getData()
		}
	})

	const getData = async () => {
		uni.showLoading({})
		let res = await http(`/deliverOrder/acceptFind/${user.value.id}`, "GET", {}, false)
		myaccept.value = res.data
		console.log(res.data);
		let result = _.groupBy(res.data, 'status')
		myaccept_1.value = result['1']
		myaccept_2.value = result['2']


		let res1 = await http(`/deliverOrder/clientFind/${user.value.id}`, "GET", {}, false)
		mypublish.value = res1.data
		console.log(res1.data);
		let result1 = _.groupBy(res1.data, 'status')
		mypublish_0.value = result1['0']
		mypublish_1.value = result1['1']
		mypublish_2.value = result1['2']

		uni.hideLoading()
	}

	const toDetail = (id) => {

		uni.navigateTo({
			url: `/pages/campusposter/posterdetail/posterdetail?id=${id}`
		});

	}

	const cancelPublish = async (id) => {
		let res = await http(`/deliverOrder/${id}`, "DELETE", {}, false)
		if (res.code) {
			uni.showToast({
				title: '取消发布成功',
				icon: 'success'
			})
			getData()
		} else {
			uni.showToast({
				title: '取消失败',
				icon: 'error'
			})
		}
	}
	const cancelAccept = async (id) => {
		let res = await http(`/deliverOrder/cancelAccept/${user.value.id}/${id}`, "PUT", {}, false)
		if (res.code) {
			uni.showToast({
				title: '取消接单成功',
				icon: 'success'
			})
			getData()
		} else {
			uni.showToast({
				title: '取消失败',
				icon: 'error'
			})
		}
	}

	const finish = (id) => {
		finishid.value = id
		alertDialog.value.open()
	}
	const dialogConfirm = async () => {
		let res = await http(`/deliverOrder/finish/${finishid.value}`, "PUT", {}, false)
		if (res.code) {
			uni.showToast({
				icon: 'success'
			})
			alertDialog.value.close()
			getData()

		} else {
			uni.showToast({
				title: '完成失败',
				icon: 'error'
			})
		}
	}
	const dialogClose = () => {
		alertDialog.value.close()
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.outter {
		width: 70%;
		height: 2.5vh;
		margin: 0 auto;
		display: flex;
		background: white;
		border: 2rpx solid rgb(188, 188, 188);
		border-radius: 20rpx;
		overflow: hidden;

		.inner {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 23rpx;
		}

		.inner_active {
			background-color: rgb(119, 119, 119);
			color: white;
		}
	}

	.window {
		padding: 20rpx;
	}
</style>