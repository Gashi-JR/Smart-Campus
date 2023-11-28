<template>
	<view class="container">
		<view class="input-group">
			<text class="text" style="margin-left: 15rpx;width: 187rpx;">申报人</text>
			<input v-model="applicant" placeholder="请输入申报人" placeholder-class="plh" class="input" />
		</view>
		<view class="input-group">
			<text class="text"><text class="important">*</text>联系电话</text>
			<input v-model="contactNumber" type="number" placeholder="请输入联系电话" placeholder-class="plh" class="input" />
		</view>
		<view class="input-group">
			<text class="text"><text class="important">*</text>报修地点</text>
			<input v-model="repairLocation" placeholder="请输入报修地点" placeholder-class="plh" class="input" />
		</view>
		<view class="input-group">
			<text class="text" style="margin-left: 15rpx;">响应等级</text>
			<radio-group class="radio_group" @change="onChange">
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
			<input v-model="faultItem" placeholder="请输入故障项目" placeholder-class="plh" class="input" />
		</view>
		<view class="textarea input-group">
			<text class="text" style="margin-left: 15rpx;">故障描述</text>
			<textarea placeholder-class="plh" placeholder="请输入故障描述" class="txtarea input"
				v-model="faultDescription"></textarea>
		</view>

		<view class="upload" style="margin-left: 15rpx;font-size: 34rpx;">
			<text class="text" style="width: 330rpx;margin-bottom: 2vh;">上传图片
				<text class="smalltext">(最多可上传3张)</text>
			</text>

			<uni-file-picker limit="3" v-model="fileLists" :image-styles="{
        width: 82,
        height: 82,
        }" :sourceType="['album', 'camera']" @select="select" @delete="del" />


		</view>

		<view class="explain">
			<text>
				注释:\n
				<text style="margin-right: -2rpx;">1、</text> 填写前请仔细阅读<text class="important">报修须知</text>\n
				2、报修地点请输入详细具体的地址\n
				3、支持图片上传，图片最多上传3张\n
			</text>
		</view>
		<!-- submitForm -->
		<button class="button" @click="submitForm">提 交</button>

	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue';
	import urlToBase64 from '../../utils/common.js';
	import http from '@/utils/http.js'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	const user = ref(null)

	let applicant = ref('');
	let contactNumber = ref('');
	let repairLocation = ref('');
	let faultItem = ref('');
	let faultDescription = ref('');
	let activeRadio = ref('');

	let fileLists = ref('')
	let img = ref([])
	let imgurl = ref('')
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
			user.value = uni.getStorageSync("user")
		}

	})
	onShow(() => {
		user.value = uni.getStorageSync("user")
	})
	const submitForm = async () => {
		uni.showLoading({})
		if (img.value != []) {
			for (const path of img.value) {
				imgurl.value += (' ' + await upload(path))
			}
		}
		if (applicant.value != '' && contactNumber.value != '' && repairLocation.value != '' && faultItem.value != '' &&
			faultDescription.value != '' && activeRadio.value != '') {
			if (faultDescription.value.length <= 100 &&
				repairLocation.value.length <= 10 &&
				applicant.value.length <= 10 &&
				contactNumber.value.length <= 15 &&
				activeRadio.value.length <= 5 &&
				faultItem.value.length <= 6
			) {
				postData()
			} else {
				uni.showToast({
					icon: 'error',
					title: '请输入合法字段'
				})
			}

		} else {
			uni.showToast({
				icon: 'error',
				title: '请完善信息'
			})
		}
		uni.hideLoading()
	};
	const postData = async () => {
		let res = await http('/fix/save', "POST", {
			faultDescription: faultDescription.value,
			repairLocation: repairLocation.value,
			applicant: applicant.value,
			contactNumber: contactNumber.value,
			activeRadio: activeRadio.value,
			faultItem: faultItem.value,
			time: getCurrentTimestampAsString(),
			studentId: user.value.id,
			imgurl: imgurl.value === '' ? null : imgurl.value
		})
		if (res.code) {
			clear()
			uni.$emit('toMyFix')
			uni.showToast({
				title: '申报成功',
				icon: 'success'
			})
		}
	}
	const onChange = (e) => {
		activeRadio.value = e.target.value; // 选中按钮的 value 值
		console.log(activeRadio.value);
	};
	const select = (e) => {
		console.log('选择文件：', e)


		if (e.errMsg === "getImageInfo:fail invalid") {
			uni.showToast({
				icon: 'error',
				title: '文件格式无效'
			})
		} else {
			const tempFilePaths = e.tempFilePaths;
			console.log(tempFilePaths);
			img.value = tempFilePaths
		}
	}
	const del = (e) => {
		img.value.splice(img.value.indexOf(e.tempFilePath), 1)
		console.log(img.value);
	}

	const upload = async (path) => {
		let res = await http("/avatar/upload", "POST", {
			filestr: uni.getFileSystemManager().readFileSync(path, 'base64'),
			dataurl: 'data:image/jpg;base64'
		})
		if (res.code === true) {
			return res.data.url
		} else {
			uni.showToast({
				icon: 'error',
				title: '图片上传失败'
			})
		}
	}

	const getCurrentTimestampAsString = () => {
		var date = new Date();
		var timestamp = Math.floor(date.getTime() / 1000); // 获取当前时间的时间戳，单位为秒
		var dateString = date.getFullYear() + '-' + formatNumber(date.getMonth() + 1) + '-' + formatNumber(date
			.getDate()) + ' ' + formatNumber(date.getHours()) + ':' + formatNumber(date.getMinutes()) + ':' + formatNumber(
			date
			.getSeconds());

		function formatNumber(num) {
			return num < 10 ? '0' + num : num;
		}

		return dateString;
	}

	const clear = () => {
		applicant.value = '';
		contactNumber.value = '';
		repairLocation.value = '';
		faultItem.value = '';
		faultDescription.value = '';
		activeRadio.value = '';
		img.value = []
		imgurl.value = ''
		fileLists.value = []
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

	.input {
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