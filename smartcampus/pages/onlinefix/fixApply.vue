<template>
	<view class="container">
		<view class="input-group">
			<text class="text" style="margin-left: 15rpx;width: 187rpx;">申报人</text>
			<input v-model="applicant" placeholder="请输入申报人" placeholder-class="plh" class="input"/>
		</view>
		<view class="input-group">
			<text class="text"><text class="important">*</text>联系电话</text>
			<input v-model="contactNumber" type="number" placeholder="请输入联系电话" placeholder-class="plh" class="input"/>
		</view>
		<view class="input-group">
			<text class="text"><text class="important">*</text>报修地点</text>
			<input v-model="repairLocation" placeholder="请输入报修地点" placeholder-class="plh" class="input"/>
		</view>
		<view class="input-group">
			<text class="text" style="margin-left: 15rpx;">响应等级</text>
			<radio-group class="radio_group">
				<label class="radio">
					<radio value="一般" color="rgb(119,119,119)" /><text style="margin-bottom: 4rpx;">一般</text>
				</label>
				<label class="radio">
					<radio value="紧急" color="rgb(119,119,119)" /><text style="margin-bottom: 2rpx;">紧急</text>
				</label>
			</radio-group>
		</view>
		<view class="input-group">
			<text class="text"><text class="important">*</text>故障项目</text>
			<input v-model="faultItem" placeholder="请输入故障项目" placeholder-class="plh" class="input"/>
		</view>
		<view class="textarea input-group">
			<text class="text" style="margin-left: 15rpx;">故障描述</text>
			<textarea placeholder-class="plh" placeholder="请输入故障描述" class="txtarea input" ></textarea>
		</view>

		<view class="upload" style="margin-left: 15rpx;">
			<text class="text" style="width: 330rpx;margin-bottom: 2vh;">上传图片
				<text class="smalltext">(最多可上传3张)</text>
			</text>
			<van-uploader :after-read="afterRead" preview-size="100rpx" max-count="3"/>
		</view>

		<view class="explain">
			<text>
				注释:\n
			<text style="margin-right: -2rpx;">1、</text>	填写前请仔细阅读<text class="important">报修须知</text>\n
				2、报修地点请输入详细具体的地址\n
				3、支持图片上传，图片最多上传3张\n
			</text>
		</view>

		<button class="button" @click="submitForm">提 交</button>

	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import urlToBase64 from '../../utils/common.js';
	const applicant = ref('');
	const contactNumber = ref('');
	const repairLocation = ref('');
	const faultItem = ref('');
	const faultDescription = ref('');
	const activeRadio = ref('');

	const handleFileChange = (e) => {
		// 处理文件上传的逻辑
	};

	const submitForm = () => {
		// 提交表单的逻辑
	};

	const chang = (value) => {
		activeRadio.value = value; // 选中按钮的 value 值
		console.log(activeRadio.value);
	};
	const afterRead = (event) => {
		const {
			file
		} = event.detail;
		// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式

	}
</script>

<style scoped>
	/deep/.plh {
		color: rgb(208, 208, 219);
		font-size: 34rpx;
	}

	radio {
		transform: scale(0.7);
	}

	.radio {
		display: flex;
		align-items: center;
		font-size: 32rpx;
	}
.input{
	font-size: 34rpx;
	height: 6vh;
}

	.radio_group {
		display: flex;
		height: 5vh;
		width: 390rpx;
		justify-content: space-between;
		align-items: center;

	}

	.txtarea {
		border: 2rpx solid rgba(0, 0, 0, 0.2);
		height: 13.5vh;
		width: 570rpx;
		border-radius: 10rpx;
		margin: 20rpx;
	}

	.upload {
		margin-top: 2vh;
		display: flex;
		flex-direction: column;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}


	.smalltext {
		font-size: 25rpx;
			color: rgb(208, 208, 219);
	}

	.button {
		width: 500rpx;
		height: 6vh;
		font-size: 38rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		background-color: #299eff;
		margin-top: 1.5vh;
	}


	input,
	textarea,
	select {
		padding: 10rpx;
	}

	.input-group {
		border-bottom: 2rpx solid #cccccc;
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		padding-right: 20rpx;
		height: 6vh;
	}

	.text {
		text-align: left;
		width: 200rpx;
		font-size: 34rpx;
	}

	.important {
		color: red;
	}



	.textarea {
		display: flex;
		align-items: center;
		height: 17vh;
		border-bottom: 2rpx solid #cccccc;
	}


	.upload {
		height: 15vh;
	}

	.explain {
		margin-top: 4vh;
		padding-left: 20rpx;
		padding-right: 20rpx;
		font-size: 25rpx;
	}
</style>