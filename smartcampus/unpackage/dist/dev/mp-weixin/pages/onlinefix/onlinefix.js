"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_tab + _component_van_tabs)();
}
if (!Math) {
  (fixApply + fixNotice)();
}
const fixNotice = () => "./fixNotice.js";
const fixApply = () => "./fixApply.js";
const _sfc_main = {
  __name: "onlinefix",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "申请报修"
        }),
        b: common_vendor.p({
          title: "报修须知"
        }),
        c: common_vendor.unref(utils_common.urlTobase64)("icons", "file", "svg"),
        d: common_vendor.unref(utils_common.urlTobase64)("icons", "right", "svg"),
        e: common_vendor.unref(utils_common.urlTobase64)("icons", "file", "svg"),
        f: common_vendor.unref(utils_common.urlTobase64)("icons", "right", "svg"),
        g: common_vendor.unref(utils_common.urlTobase64)("icons", "file", "svg"),
        h: common_vendor.unref(utils_common.urlTobase64)("icons", "right", "svg"),
        i: common_vendor.p({
          title: "我的工单"
        }),
        j: common_vendor.p({
          swipeable: true,
          animated: true,
          color: "rgb(0,157,255)",
          border: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ecd7de3b"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/onlinefix/onlinefix.vue"]]);
wx.createPage(MiniProgramPage);
