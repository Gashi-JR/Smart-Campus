<template>
	<view class="content">
		<EntrustCard title="委托人" :showBtn="true" content="快递为XXX，大小大概为XXXXX" takeAddr="xxxxxx" submitAddr="xxxxxxxx"
			style="margin-top: 1vh;margin-bottom: 2vh;" btnTxt="取消发布">
		</EntrustCard>
		<EntrustCard title="委托人" :showBtn="false" content="快递为XXX，大小大概为XXXXX" takeAddr="xxxxxx" submitAddr="xxxxxxxx"
			style="margin-top: 1vh;margin-bottom: 2vh;" btnTxt="取消接单">
		</EntrustCard>
		<view class="" @click="toDetail">
			<EntrustCard title="委托人" :showBtn="false" content="快递为XXX，大小大概为XXXXX" takeAddr="xxxxxx" submitAddr="xxxxxxxx"
				style="margin-top: 1vh;margin-bottom: 2vh;" btnTxt="取消发布">
			</EntrustCard>
		</view>

	</view>
</template>

<script setup>
	import entrustcard from '/components/EntrustCard/EntrustCard.vue'
	const toDetail = () => {
		uni.navigateTo({
			url: '/pages/campusposter/posterdetail/posterdetail'
		});

	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>