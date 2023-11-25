"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_card = common_vendor.resolveComponent("uni-card");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_component_uni_card + _component_uni_section)();
}
if (!Math) {
  uniPagination();
}
const uniPagination = () => "../../uni_modules/uni-pagination/components/uni-pagination/uni-pagination.js";
const _sfc_main = {
  __name: "electric",
  setup(__props) {
    const tableData = [
      { date: "2023-11-01", electricityRecord: "100 kWh", remainingBalance: "$50" },
      { date: "2023-11-02", electricityRecord: "95 kWh", remainingBalance: "$45" },
      { date: "2023-11-03", electricityRecord: "110 kWh", remainingBalance: "$55" },
      { date: "2023-11-04", electricityRecord: "98 kWh", remainingBalance: "$48" },
      { date: "2023-11-05", electricityRecord: "102 kWh", remainingBalance: "$52" },
      { date: "2023-11-06", electricityRecord: "105 kWh", remainingBalance: "$54" },
      { date: "2023-11-07", electricityRecord: "97 kWh", remainingBalance: "$47" },
      { date: "2023-11-07", electricityRecord: "97 kWh", remainingBalance: "$47" },
      { date: "2023-11-10", electricityRecord: "99 kWh", remainingBalance: "$49" }
    ];
    let current = common_vendor.ref(3);
    common_vendor.ref(10);
    common_vendor.ref(10);
    common_vendor.onMounted(() => {
      setTimeout(() => {
        current.value = 5;
      }, 3e3);
    });
    const toRecharge = () => {
      common_vendor.index.navigateTo({
        url: "/pages/electric/recharge/recharge"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: _ctx.searchVal,
        b: common_vendor.o(($event) => _ctx.searchVal = $event.detail.value),
        c: common_vendor.o((...args) => _ctx.search && _ctx.search(...args)),
        d: common_vendor.o(toRecharge),
        e: common_vendor.f(tableData, (item, index, i0) => {
          return {
            a: common_vendor.t(item.date),
            b: common_vendor.t(item.electricityRecord),
            c: common_vendor.t(item.remainingBalance),
            d: index
          };
        }),
        f: common_vendor.p({
          ["is-full"]: true,
          ["is-shadow"]: false
        }),
        g: common_vendor.p({
          total: 50,
          title: "标题文字"
        }),
        h: common_vendor.p({
          title: "默认样式",
          type: "line",
          padding: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/electric/electric.vue"]]);
wx.createPage(MiniProgramPage);
