"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref("hallo");
    common_vendor.onLoad(() => {
      console.log(11);
    });
    const toOnlineFix = () => {
      common_vendor.index.navigateTo({
        url: "/pages/onlinefix/onlinefix"
      });
    };
    const toCampusPoster = () => {
      common_vendor.index.navigateTo({
        url: "/pages/campusposter/campusposter"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_common.urlTobase64)("bg", "tu 2", "png"),
        b: common_vendor.unref(utils_common.urlTobase64)("icons", "定位", "svg"),
        c: common_vendor.unref(utils_common.urlTobase64)("bg", "logo", "png"),
        d: common_vendor.p({
          color: "rgb(84,165,255)",
          round: true,
          size: "small",
          block: true
        }),
        e: common_vendor.unref(utils_common.urlTobase64)("bg", "图图 水", "png"),
        f: common_vendor.unref(utils_common.urlTobase64)("icons", "闪电", "svg"),
        g: common_vendor.unref(utils_common.urlTobase64)("icons", "纸飞机", "svg"),
        h: common_vendor.o(toCampusPoster),
        i: common_vendor.unref(utils_common.urlTobase64)("icons", "无需安装", "svg"),
        j: common_vendor.o(toOnlineFix)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
