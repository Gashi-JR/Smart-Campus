"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "info"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
