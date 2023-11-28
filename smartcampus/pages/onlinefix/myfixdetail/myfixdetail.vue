<template>
	<view class="container">
		<view class="top-part">
			<view class="text-container">
				<image class="file" :src="urlToBase64('icons','file01','svg')"></image>
				<text class="listNumber">单号：00{{data.id}}</text>

				<text :class="data.status===0?'status_false':'status_true'">{{data.status===0?"等待维修":"维修完成"}}</text>
			</view>
		</view>


		<view class="details">
			<view class="tags">
				<view class="blue"></view>
				<text class="text">保修单信息</text>
			</view>
			<view class="info">
				<view class="textview">
					<text class="properties"><text class="gray">报修人：</text>{{data.name}}\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">联系电话：</text>{{data.phone}}\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">保修类型：</text>{{data.faultItem}}\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">报修内容：</text>{{data.errorDesc}}\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">报修地址：</text>{{data.errorPos}}\n</text>
				</view>
				<view class="textview">
					<text class="properties"><text class="gray">维修员信息：</text>张师傅\n</text>
				</view>
				<view class="textview" style="display: flex;flex-direction: column;align-items: flex-start;">
					<text class="properties"><text class="gray">上传照片：</text><text v-if="data.imgUrl===null">未提交</text>\n</text>

					<view
						style="display: flex;flex-direction: column;align-items: center;justify-content: flex-start;width:90%;margin: 25rpx;align-self: center;"
						v-if="data.imgUrl!=null">
						<image :src="ip+img" mode="aspectFit" v-for="(img,index) in imgs" :key="index" style="margin: 20rpx;"
							@click="clickImg(ip+img)">
						</image>
					</view>
				</view>

			</view>
		</view>
	</view>

</template>

<script setup>
	import urlToBase64 from '@/utils/common.js';
	import {
		onMounted,
		ref
	} from 'vue';
	import http from '@/utils/http.js'
	import ip from '@/utils/ip.js'
	import {
		onLoad
	} from "@dcloudio/uni-app"
	let data = ref(null)
	let orderId = ref(0)
	let imgs = ref([])
	onLoad(async (option) => {
		console.log(option.id);
		orderId.value = option.id
		getData(option.id)
	})

	const getData = async (id) => {
		let res = await http(`/fix/${id}`, "GET", {}, false)
		data.value = res.data
		if (data.value.imgUrl != null) {
			let arr = data.value.imgUrl.split(" ").slice(1)
			imgs.value = arr
		}

	}
	const clickImg = (url) => {


		uni.previewImage({
			urls: imgs.value.map(item => ip + item), //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
			current: url, // 当前显示图片的http链接，默认是第一个
			success: function(res) {},
			fail: function(res) {},
			complete: function(res) {},
		})
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: rgb(246, 246, 246);
	}

	.text-container {
		display: flex;
		justify-content: space-between;
		padding-left: 20rpx;
		padding-right: 20rpx;
		background-color: #259bf3;
		align-items: center;
		height: 6vh;
	}


	.file {
		height: 40rpx;
		width: 40rpx;
	}

	.listNumber {
		margin-top: -0.5vh;
		margin-left: 20rpx;
		height: 2vh;
		flex: 1;
		color: #ffffff;


	}

	.status_false {
		background-color: rgb(245, 146, 151);
		font-weight: bold;
		padding: 10rpx;
		padding-left: 34rpx;
		padding-right: 34rpx;
		border-radius: 50rpx;
		color: rgb(205, 39, 45);
		font-size: 25rpx;
	}

	.status_true {
		background-color: rgb(230, 251, 229);
		font-weight: bold;
		padding: 10rpx;
		padding-left: 34rpx;
		padding-right: 34rpx;
		border-radius: 50rpx;
		color: rgb(102, 158, 99);
		font-size: 25rpx;
	}

	.details {
		margin-top: 2vh;
	}

	.tags {
		margin-top: 0.7vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 6.3vh;
		background-color: white;

	}

	.tags text {
		margin-left: 10rpx;
	}

	.blue {
		margin-left: 20rpx;
		height: 3vh;
		width: 8rpx;
		background-color: rgb(107, 168, 221);
	}

	.info {
		margin-top: 0.7vh;

		padding: 10rpx;
		height: 60vh;
		background-color: white;
	}

	.properties {
		/* margin-bottom: 100rpx; */
		margin-left: 20rpx;

	}

	.gray {
		color: #808080;
	}

	.textview {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3vh;
	}
</style>