<template>
	<view>
		<view class="table-container">
		  <view class="table-header">
		    <view class="table-cell">
		      <strong>缴费房间号：66-666</strong>
		    </view>
		    
		  </view>
		  <view class="table-row">
		    <view class="table-cell">
		      缴费金额：25
		    </view>
		    <view class="table-cell">
		      <view class="uni-form-item uni-column">
		          
		          <radio-group name="yuan1" class="howmuch">
		              <label>
		                  <radio value="yuan" class="money" /><text>10元</text>
		              </label>
		              <label>
		                  <radio value="yuan" class="money" /><text>20元</text>
		              </label>
					  <label>
					      <radio value="yuan" class="money" /><text>50元</text>
					  </label>
					  <label>
					      <radio value="yuan" class="money" /><text>100元</text>
					  </label>
		          </radio-group>
		      </view>

		    </view>
		   
		  </view>
		  <view class="table-row">
		   		 
		  </view>
		</view>
          
		  
		  
		  
		  
		   <view class="zhifu">
				<text>微信支付</text>
				<label class="radio"><radio value="r2" /></label>
				
			</view>
			
			
			<view class="checkout">
				
				<text class="checkout1">合计：</text>
				<text class="checkout2">25元</text>
				<button class="btn1">立即支付</button>
			</view>
	</view>
</template>

<script>
	
</script>

<style lang="scss">
.table-header {
  display: flex;
  // border: 2rpx solid #ccc;
  font-size: 40rpx;
  background-color: rgb(225, 223, 223); /* 设置背景颜色 */
 
}
.table-cell {
  padding: 16rpx;
  height: 4vh;
  text-align: left;
  line-height: 2vh;
  flex: 1;
  font-size: 27rpx;
  border: 1rpx solid rgba(171, 171, 171);
  margin-left: 20rpx;
  margin-right: 20rpx;
  
  
}

.howmuch .uni-radio .uni-radio-input {
    height: 20rpx; /* 调整选择圈的高度 */
    width: 20rpx;  /* 调整选择圈的宽度 */
}




.uni-column text {
    color: rgb(105, 188, 252); /* 设置字体颜色为红色 */
	margin-right: 40rpx;
}
.uni-form-item .title {
		padding: 20rpx 0;
	}
	
	
	
.zhifu {
    padding: 30rpx; /* 添加内边距 */
    border-bottom: 2rpx solid #ccc; /* 添加下方分隔线 */
}

.radio {
    float: right; /* 让按钮靠右 */
    font-size: 5rpx; /* 设置按钮的字体大小为12像素，实现按钮变小 */
    margin-right: 3rpx; /* 添加右侧间距 */
}
.checkout{
	// display: flex;
	// justify-content: flex-end;
	
	
	    display: flex;
	    justify-content: flex-end;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	   border-top: 1rpx solid rgb(237, 237, 237);
      padding-top: 20rpx; /* 为内部内容顶部添加 10 像素的内边距 */
	  padding-bottom: 10rpx;
	.checkout1{
		color: rgb(247, 122, 150);
		margin-right: 20rpx;
	}
	.checkout2{
		margin-right: 20rpx;
	}
	.btn1{
		margin: 0;
		color: rgb(253, 229, 229);
		border-radius: 10rpx;
		background-color: rgb(245, 46, 46) ;
		font-size: 21rpx; 
		margin-right: 20rpx;
	}
}

</style>
