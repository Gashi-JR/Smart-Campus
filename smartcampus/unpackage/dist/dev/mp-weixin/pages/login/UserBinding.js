"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "UserBinding",
  setup(__props) {
    let name = common_vendor.ref("");
    let studentId = common_vendor.ref("");
    let className = common_vendor.ref("");
    let focus = common_vendor.ref(-1);
    const handleFocus = (index) => {
      focus.value = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(focus) == 0 ? 1 : "",
        b: common_vendor.o(($event) => handleFocus(0)),
        c: common_vendor.o(($event) => common_vendor.isRef(focus) ? focus.value = -1 : focus = -1),
        d: common_vendor.unref(name),
        e: common_vendor.o(($event) => common_vendor.isRef(name) ? name.value = $event.detail.value : name = $event.detail.value),
        f: common_vendor.unref(focus) == 1 ? 1 : "",
        g: common_vendor.o(($event) => handleFocus(1)),
        h: common_vendor.o(($event) => common_vendor.isRef(focus) ? focus.value = -1 : focus = -1),
        i: common_vendor.unref(studentId),
        j: common_vendor.o(($event) => common_vendor.isRef(studentId) ? studentId.value = $event.detail.value : studentId = $event.detail.value),
        k: common_vendor.unref(focus) == 2 ? 1 : "",
        l: common_vendor.o(($event) => handleFocus(2)),
        m: common_vendor.o(($event) => common_vendor.isRef(focus) ? focus.value = -1 : focus = -1),
        n: common_vendor.unref(className),
        o: common_vendor.o(($event) => common_vendor.isRef(className) ? className.value = $event.detail.value : className = $event.detail.value),
        p: common_vendor.o((...args) => _ctx.bind && _ctx.bind(...args))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1df429a4"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/login/UserBinding.vue"]]);
wx.createPage(MiniProgramPage);
