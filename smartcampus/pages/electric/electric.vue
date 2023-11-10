<template>
  <div>
    <div class="container">
      <input v-model="searchVal" type="text" class="search" />
      <button plain class="btn" @click="search">查询</button>
      <button plain class="btn">充值</button>
    </div>
    <div><span style="color: rgb(243, 138, 138); font-size: 13px;">提示：请输入需要查询的对应宿舍号</span></div>

    
  </div>
  
  <div class="table-container">
      <div class="table-header">
        <div class="table-cell">
          <strong>日期</strong>
        </div>
        <div class="table-cell">
          <strong>电量记录</strong>
        </div>
        <div class="table-cell">
          <strong>电费余额</strong>
        </div>
      </div>
      <div v-for="(item, index) in tableData" :key="index" class="table-row">
        <div class="table-cell">
          {{ item.date }}
        </div>
        <div class="table-cell">
          {{ item.electricityRecord }}
        </div>
        <div class="table-cell">
          {{ item.remainingBalance }}
        </div>
      </div>
    </div>
</template>

<script setup>
const tableData = [
  { date: '2023-11-01', electricityRecord: '100 kWh', remainingBalance: '$50' },
  { date: '2023-11-02', electricityRecord: '95 kWh', remainingBalance: '$45' },
  { date: '2023-11-03', electricityRecord: '110 kWh', remainingBalance: '$55' },
  { date: '2023-11-04', electricityRecord: '98 kWh', remainingBalance: '$48' },
  { date: '2023-11-05', electricityRecord: '102 kWh', remainingBalance: '$52' },
  { date: '2023-11-06', electricityRecord: '105 kWh', remainingBalance: '$54' },
  { date: '2023-11-07', electricityRecord: '97 kWh', remainingBalance: '$47' },
  { date: '2023-11-08', electricityRecord: '101 kWh', remainingBalance: '$51' },
  { date: '2023-11-09', electricityRecord: '106 kWh', remainingBalance: '$56' },
  { date: '2023-11-10', electricityRecord: '99 kWh', remainingBalance: '$49' }
];
</script>

<style lang="scss">
.search {
  border: 5rpx solid rgb(65, 143, 215);
  width: 434rpx;
  height: 5vh;
  border-radius: 20rpx; /* 设置圆角 */
  margin: 10rpx; /* 设置周围边距 */
  box-shadow: 0 5rpx 20rpx 0 rgba(0, 0, 0, 0.186);
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
  align-items: center; /* 垂直居中对齐 */
}
.search {
  margin-right: 10rpx; /* 设置右边距以增加输入框和按钮之间的间距 */
}
.btn {
  margin-left: 10rpx; /* 设置左边距以增加按钮之间的间距 */
}
.uni-group {
  display: flex;
  align-items: center;
}


.table-container {
  display: flex;
  flex-direction: column;
  margin: 10px; /* 添加外边距 */
}

.table-header {
  display: flex;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: rgb(225, 223, 223); /* 设置背景颜色 */
}

.table-row {
  display: flex;
  border-left: 1px solid #ccc; /* 左边框线 */
  border-right: 1px solid #ccc; /* 右边框线 */
}

.table-cell {
  padding: 8px;
  text-align: center;
  flex: 1;
}
</style>
