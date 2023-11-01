"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_tabbar_item = common_vendor.resolveComponent("van-tabbar-item");
  const _component_van_tabbar = common_vendor.resolveComponent("van-tabbar");
  (_component_van_tabbar_item + _component_van_tabbar)();
}
if (!Math) {
  (home + publish + mine)();
}
const home = () => "./home.js";
const publish = () => "./publish.js";
const mine = () => "./mine.js";
const _sfc_main = {
  __name: "campusposter",
  setup(__props) {
    let active = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => common_vendor.isRef(active) ? active.value = 0 : active = 0),
        b: common_vendor.o(($event) => common_vendor.isRef(active) ? active.value = 1 : active = 1),
        c: common_vendor.o(($event) => common_vendor.isRef(active) ? active.value = 2 : active = 2),
        d: common_vendor.p({
          active: common_vendor.unref(active)
        }),
        e: common_vendor.unref(active) == 0
      }, common_vendor.unref(active) == 0 ? {} : {}, {
        f: common_vendor.unref(active) == 1
      }, common_vendor.unref(active) == 1 ? {} : {}, {
        g: common_vendor.unref(active) == 2
      }, common_vendor.unref(active) == 2 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/campusposter/campusposter.vue"]]);
wx.createPage(MiniProgramPage);
