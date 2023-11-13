"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    common_vendor.ref("");
    const toBinding = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/UserBinding"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_common.urlTobase64)("icons", "微信", "svg"),
        b: common_vendor.o(toBinding)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
