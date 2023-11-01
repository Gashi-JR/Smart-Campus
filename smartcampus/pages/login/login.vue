
<template>
  <view class="login-container">
	  <view class="container">
	  <image class="logo" src="/static/_233.png"></image>
	  </view>
    <view class="login-header">
      <text class="title">登录</text>
    </view>
    <view class="input-container">
      <!-- <van-cell-group>
        <van-field
          value="{{ value }}"
          placeholder="请输入用户名"
          border="{{ false }}"
          bind:change="onChange"
        />
      </van-cell-group> -->
      <text class="password-label">密码</text>
      <input class="password-input" type="password" placeholder="请输入密码" />
    </view>
    <view class="login-button-container">
      <button class="login-button" @click="login">微信授权登录</button>
	  <!-- <van-button type="danger">危险按钮</van-button> -->
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    login() {
      // 这里是登录逻辑，需要实现具体的方法来验证用户名和密码是否正确。
      // 可以调用后端接口进行验证，并将结果返回给小程序。
    }
  } 
}
</script>  

<style lang="scss">
	.login-container {
	  background-color: #ffffff;
	}
	
	.input-container {
	  margin-top: 20px;
	}
	
	.label {
	  font-size: 16px;
	  margin-bottom: 8px;
	}
	
	.text-input {
	  width: 100%;
	  height: 40px;
	  padding: 8px;
	  background-color: #ffffff;
	  border-radius: 8px;
	  border: 1px solid #cccccc;
	}
	.container {
	     position: relative;
	     height: 25vh; /* 可根据实际情况调整高度 */
	   }
	.logo {
		 position: absolute;
		     top: 50%;
		     left: 50%;
		     transform: translate(-50%, -50%);
		     width: 100px; /* 根据实际情况调整宽度 */
		     height: 100px; /* 根据实际情况调整高度 */
	}
	
</style>