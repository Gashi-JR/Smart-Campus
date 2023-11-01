"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return {
    a: _ctx.name,
    b: common_vendor.o(($event) => _ctx.name = $event.detail.value),
    c: _ctx.studentId,
    d: common_vendor.o(($event) => _ctx.studentId = $event.detail.value),
    e: _ctx.className,
    f: common_vendor.o(($event) => _ctx.className = $event.detail.value),
    g: common_vendor.o((...args) => _ctx.bind && _ctx.bind(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/204/GGschool/smartcampus/pages/login/UserBinding.vue"]]);
wx.createPage(MiniProgramPage);
