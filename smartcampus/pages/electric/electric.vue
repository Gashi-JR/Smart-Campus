<template>
	<view>
		<view class="container">
			<input v-model="searchVal" type="text" :class="{'search':true,'focus':focus==1,'unfocus':focus==0}"
				@focus="handleFocus(1)" @blur="focus=0" />
			<button plain class="btn" @click="search">查询</button>
			<button plain class="btn" @click="toRecharge">充值</button>
		</view>
		<view style="padding-left: 27rpx; margin-bottom: 3vh;"><text
				style="color: rgb(243, 138, 138); font-size: 25rpx;">提示：请输入需要查询的对应宿舍号</text></view>



	</view>

	<view class="table-container">
		<view class="table-header">
			<view class="table-cell">
				<strong>日期</strong>
			</view>
			<view class="table-cell">
				<strong>电量记录</strong>
			</view>
			<view class="table-cell">
				<strong>电费余额</strong>
			</view>
		</view>
		<view v-for="(item, index) in tableData" :key="index" class="table-row">
			<view class="table-cell">
				{{ item.date }}
			</view>
			<view class="table-cell">
				{{ item.electricityRecord }}
			</view>
			<view class="table-cell">
				{{ item.remainingBalance }}
			</view>
		</view>
	</view>




	<view style="padding: 20rpx;
	margin-top: 10vh;">
		<uni-section title="默认样式" type="line" padding>
			<uni-pagination :total="50" title="标题文字" />
		</uni-section>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import uniPagination from '../../uni_modules/uni-pagination/components/uni-pagination/uni-pagination.vue'
	const tableData = [{
			date: '2023-11-01',
			electricityRecord: '100 kWh',
			remainingBalance: '$50'
		},
		{
			date: '2023-11-02',
			electricityRecord: '95 kWh',
			remainingBalance: '$45'
		},
		{
			date: '2023-11-03',
			electricityRecord: '110 kWh',
			remainingBalance: '$55'
		},
		{
			date: '2023-11-04',
			electricityRecord: '98 kWh',
			remainingBalance: '$48'
		},
		{
			date: '2023-11-05',
			electricityRecord: '102 kWh',
			remainingBalance: '$52'
		},
		{
			date: '2023-11-06',
			electricityRecord: '105 kWh',
			remainingBalance: '$54'
		},
		{
			date: '2023-11-07',
			electricityRecord: '97 kWh',
			remainingBalance: '$47'
		},
		{
			date: '2023-11-07',
			electricityRecord: '97 kWh',
			remainingBalance: '$47'
		},
		{
			date: '2023-11-10',
			electricityRecord: '99 kWh',
			remainingBalance: '$49'
		}
	];





	let current = ref(3)
	let total = ref(10)
	let pageSize = ref(10)
	let focus = ref(0)


	const handleFocus = (index) => {
		focus.value = index
	}

	onMounted(() => {
		setTimeout(() => {
			current.value = 5
		}, 3000)
	})

	const toRecharge = () => {
		uni.navigateTo({
			url: '/pages/electric/recharge/recharge'
		})
	}
</script>

<style lang="scss">
	.search {

		width: 434rpx;
		height: 5vh;
		border-radius: 25rpx;
		/* 设置圆角 */
		margin: 10rpx;
		/* 设置周围边距 */
		box-shadow: 0 5rpx 20rpx 0 rgba(0, 0, 0, 0.186);
		margin-bottom: 0.2vh;
		padding-left: 15rpx;
		padding-right: 15rpx;
		font-size: 30rpx;
	}

	.unfocus {
		border: 4rpx solid rgb(170, 170, 170);
	}

	.focus {
		border: 4rpx solid rgb(65, 143, 215);
	}

	.btn {
		width: 119rpx;
		height: 5.5vh;
		line-height: 5vh;
		font-size: 27rpx;
		border-radius: 20rpx;
		border: 5rpx solid rgb(186, 186, 186) !important;

	}

	.container {
		display: flex;
		align-items: center;
		/* 垂直居中对齐 */
		margin-top: 32rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
	}

	.search {
		margin-right: 10rpx;
		/* 设置右边距以增加输入框和按钮之间的间距 */
	}

	.btn {
		margin-left: 10rpx;
		/* 设置左边距以增加按钮之间的间距 */
	}

	.uni-group {
		display: flex;
		align-items: center;
	}


	.table-container {
		display: flex;
		flex-direction: column;
		margin: 20rpx;
		/* 添加外边距 */
	}

	.table-header {
		display: flex;
		// border: 2rpx solid #ccc;
		font-size: 28rpx;
		background-color: rgb(225, 223, 223);
		/* 设置背景颜色 */
	}

	.table-row {
		display: flex;
		border-left: 2rpx solid #ccc;
		/* 左边框线 */
		border-right: 2rpx solid #ccc;
		/* 右边框线 */
	}

	.table-cell {
		padding: 16rpx;
		height: 2vh;
		text-align: center;
		line-height: 2vh;
		flex: 1;
		font-size: 27rpx;
		border: 1rpx solid rgba(216, 216, 216, 0.4);
	}




	.example-body {
		display: block;

	}

	.btn-view {
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		text-align: center;
		background-color: #fff;
		justify-content: center;
		align-items: center;

	}

	.btn-flex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

	}

	.button {
		margin: 40rpx;
		width: 300rpx;
		font-size: 28rpx;
		color: #333;

	}
</style>