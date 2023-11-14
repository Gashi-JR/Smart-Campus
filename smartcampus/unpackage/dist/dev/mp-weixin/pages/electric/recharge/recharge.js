"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_common = require("../../../utils/common.js");
const _sfc_main = {
  __name: "recharge",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_common.urlTobase64)("icons", "微信支付", "svg")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8607525f"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/electric/recharge/recharge.vue"]]);
wx.createPage(MiniProgramPage);
