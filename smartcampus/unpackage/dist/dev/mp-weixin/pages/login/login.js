"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    login() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.login && $options.login(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/204/GGschool/smartcampus/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
