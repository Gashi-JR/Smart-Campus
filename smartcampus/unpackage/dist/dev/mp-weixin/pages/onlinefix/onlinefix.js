"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_tab + _component_van_tabs)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "申请报修"
    }),
    b: common_vendor.p({
      title: "报修须知"
    }),
    c: common_vendor.p({
      title: "我的工单"
    }),
    d: common_vendor.p({
      swipeable: true,
      animated: true,
      color: "rgb(0,157,255)",
      border: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/weixinkaifa/Smart-Campus/smartcampus/pages/onlinefix/onlinefix.vue"]]);
wx.createPage(MiniProgramPage);
