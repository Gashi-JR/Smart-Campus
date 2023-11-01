"use strict";
const common_vendor = require("../../common/vendor.js");
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          color: "rgb(84,165,255)",
          round: true,
          size: "small",
          block: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/204/GGschool/smartcampus/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
