<template>
	<view>
		<van-tabs swipeable animated color="rgb(0,157,255)" border>
			<van-tab title="申请报修">
				<view class="container">
					<view class="input-group">
						<text class="text">申请人：</text>
						<input v-model="applicant" placeholder="请输入申请人姓名" />
					</view>
					<view class="input-group">
						<text class="text"><text class="important">*</text>联系电话：</text>
						<input v-model="contactNumber" type="number" placeholder="请输入联系电话" />
					</view>
					<view class="input-group">
						<text class="text"><text class="important">*</text>报修地点：</text>
						<input v-model="repairLocation" placeholder="请输入报修地点" />
					</view>
					<view class="input-group">

						<radio-group>
							<text class="text">响应等级：</text>
							<label v-for="item in radioGroup" :key="item">
								<radio :name="item" :label="item" />{{item}}
							</label>
						</radio-group>
					</view>
					<view class="input-group">
						<text class="text"><text class="important">*</text>故障项目：</text>
						<input v-model="faultItem" placeholder="请输入故障项目" />
					</view>
					<view class="textarea">
						<text class="deilts">故障描述：</text>
						<textarea class="fault-description" v-model="faultDescription" placeholder="请输入故障描述"></textarea>
					</view>

					<view class="upload">
						<text class="text">上传图片：<text class="smalltext">(最多上传3张)</text></text>
						<view class="PhotoContainer">
							<image class="logo" :src="urlToBase64('icons','addPhoto','svg')"></image>
						</view>
					</view>
					<view class="explain">
						<text class="">
							注释:\n
							1、填写前请仔细阅读<text class="important">报修须知</text>\n
							2、报修地点请输入详细具体的地址\n
							3支持图片上传，图片最多上传3张\n
						</text>
					</view>
					<view class="button-group">
						<button class="button" @click="submitForm">提 交</button>
					</view>
				</view>
			</van-tab>
			<van-tab title="报修须知">
				<text class="text-lg font-bold mb-2 custom-tex yellow">请仔细阅读如下须知:</text>
				<text class="text-bold mb-4 custom-text ">
					提示: 为了您的报修及时得到处理，请自行阅读如下须知，判断您要报修的问题属于以下哪类问题，谢谢您的配合!
				</text>
				<text class="break-after custom-text">
					<text class="font-bold no-break custom-tex fontcolor">五金: </text>
					下水道堵、厕所堵、门锁坏、窗、桌椅、洗手盆下水管漏水、天花板坏、床板坏
				</text>
				<!-- 其它部分省略 -->
				<text class="text-bold mt-4 mb-2 custom-text">提示: 为了让维修师傅更好地了解现场情况，请您在报修时，拍摄现场照片并上传，谢谢您的配合！</text>
			</van-tab>
			<van-tab title="我的工单">
				<view class="listform">
				<view class="list">
					<!-- 上部分 -->
					<view class="top-part">
						<view class="text-container">
							<image class="file" :src="urlToBase64('icons','file','svg')"></image>
							<text class="listNumber">单号：003</text>

							<text class="status">等待检修</text>
							<image class="file" :src="urlToBase64('icons','right','svg')"></image>
						</view>
						<text class="time">2022-05-12 08:00</text>


					</view>

					<!-- 下部分 -->
					<view class="bottom-part">
						<view class="text-container">
							<text  class="fixPerson"><text class="gray">报修人：</text>张三</text> 
							<text class="fixPerson"><text class="gray">保修类型：</text>损坏设备</text> 
						</view>
						<view class="text-container">
						<text class="fixClass"><text class="gray">保修地点：</text>办公室301\n</text> 
					</view>
					<view class="text-container">
						<text class="fixClass"><text class="gray">电话：</text>1388888888</text>
					</view>
					</view>
				</view>
				<view class="list">
					<!-- 上部分 -->
					<view class="top-part">
						<view class="text-container">
							<image class="file" :src="urlToBase64('icons','file','svg')"></image>
							<text class="listNumber">单号：003</text>
				
							<text class="status">等待检修</text>
							<image class="file" :src="urlToBase64('icons','right','svg')"></image>
						</view>
						<text class="time">2022-05-12 08:00</text>
				
				
					</view>
				
					<!-- 下部分 -->
					<view class="bottom-part">
						<view class="text-container">
							<text  class="fixPerson"><text class="gray">报修人：</text>张三</text> 
							<text class="fixPerson"><text class="gray">保修类型：</text>损坏设备</text> 
						</view>
						<view class="text-container">
						<text class="fixClass"><text class="gray">保修地点：</text>办公室301\n</text> 
					</view>
					<view class="text-container">
						<text class="fixClass"><text class="gray">电话：</text>1388888888</text>
					</view>
					</view>
				</view>
				<view class="list">
					<!-- 上部分 -->
					<view class="top-part">
						<view class="text-container">
							<image class="file" :src="urlToBase64('icons','file','svg')"></image>
							<text class="listNumber">单号：003</text>
				
							<text class="status">等待检修</text>
							<image class="file" :src="urlToBase64('icons','right','svg')"></image>
						</view>
						<text class="time">2022-05-12 08:00</text>
				
				
					</view>
				
					<!-- 下部分 -->
					<view class="bottom-part">
						<view class="text-container">
							<text  class="fixPerson"><text class="gray">报修人：</text>张三</text> 
							<text class="fixPerson"><text class="gray">保修类型：</text>损坏设备</text> 
						</view>
						<view class="text-container">
						<text class="fixClass"><text class="gray">保修地点：</text>办公室301\n</text> 
					</view>
					<view class="text-container">
						<text class="fixClass"><text class="gray">电话：</text>1388888888</text>
					</view>
					</view>
				</view>
				</view>
			</van-tab>
		</van-tabs>

		<view v-show="activeTab === 0"> <!-- 申请报修界面 -->
			<!-- 界面内容 -->
		</view>

		<view v-show="activeTab === 1"> <!-- 报修须知界面 -->
			<!-- 界面内容 -->
		</view>

		<view v-show="activeTab === 2"> <!-- 我的工单界面 -->
			<!-- 界面内容 -->
		</view>
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
	const radioGroup = ['一般', '紧急'];

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
</script>



<style lang="scss" scoped>
	.custom-text {
		display: block;
		margin-bottom: 0.5em;
	}

	.break-after {
		white-space: pre-wrap;
	}

	.no-break {
		white-space: nowrap;
	}

	.yellow {
		color: #F5DD84;
	}

	.fontcolor {
		color: #FF8787;
	}

	.smalltext {
		font-size: 0.8em;
		color: #808080;
	}

	.container {
		padding: 20rpx;
	}

	// .input-group {
	// 	margin-bottom: 20rpx;
	// }

	.button-group {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 15%;
		margin-top: 20rpx;
		height: 7vh;
		width: 70%;

	}

	.button {

		line-height: 140%;
		width: 100%;
		height: 100%;
		color: #ffffff;
		background-color: #299eff;
	}

	input,
	textarea,
	select,
	button {
		width: 100%;
		padding: 10rpx;
	}

	.input-group {
		border-bottom: 2rpx solid #cccccc;
		display: flex;
		align-items: center;
		height: 8vh;

	}

	.text {

		text-align: right;

		width: 250rpx;
	}

	.important {
		color: #ff0000;
	}

	.fault-description {
		/*  设置故障描述视图的样式  */
		width: 70%;
		/*  设置宽度  */
		height: 10vh;
		/*  设置高度  */
		border: 1px solid #ccc;
		/*  设置边框样式  */
		padding: 10px;
		/*  设置内边距  */
		resize: both;
		/*  设置文本区域可调整大小  */
		overflow: auto;
		flex: 1;
		/*  设置文本区域溢出时的显示方式  */
	}

	.fault-description textarea {
		/*  设置文本区域的样式  */
		width: 100%;
		/*  设置宽度  */
		height: 20vh;
		/*  设置高度  */
		display: none;
		/*  隐藏文本区域  */
	}

	.textarea {
		display: flex;
		align-items: center;
		height: 20vh;
		border-bottom: 2rpx solid #cccccc;
	}

	.deilts {
		height: 5vh;
		width: 23%;
	}

	.upload {

		height: 20vh;
	}

	.PhotoContainer {
		margin-left: 30rpx;
		height: 15vh;
		width: 27%;
		background-color: #f7f7f7;
		position: relative;
		margin-top: 3vh;
		border: 1.5px dashed #808080;
	}

	.logo {
		height: 5vh;
		width: 60%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

	}

	.explain {
		margin-top: 5vh;
	}

	.list {
		border-bottom: 2rpx solid #cccccc;
		border-top: 2rpx solid #cccccc;
		height: 32vh;
		margin-bottom: 5vh;

	}

	.top-part {
		border-bottom: 2rpx solid #cccccc;
		margin-left: 20rpx;
		margin-top: 1vh;
		display: flex;

		flex-direction: column;
		align-items: flex-start;
	}

	.info {}

	.text-container {

		display: flex;
		justify-content: space-between;

		align-items: center;
	}


	.file {

		height: 3.5vh;
		width: 60rpx;
	}

	.listNumber {
		margin-top: -1vh;
		margin-left: 20rpx;
		height: 2vh;
		flex: 1;
		/* 让文本填充可用空间 */

	}

	.status {
		margin-left: 260rpx;
		width: 170rpx;
		height: 5vh;
		border-radius: 20px;
		background-color: #ffd7d7;
		 display: flex;
		justify-content: center; /* 水平居中 */
		  align-items: center; 
		color: #aa4a4a;
		 border: 1px solid #ccc;

	}

	.time {
		color: #808080;
		margin-top: 10rpx;
		margin-left:5rpx;
	}
	.fixPerson{
		
		margin-top: 20px;
	}
	.fixClass{
		
		margin-top: 20px;
	}
	.gray{
		color:#808080;
	}
</style>