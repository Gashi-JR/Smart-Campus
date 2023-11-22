"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _component_van_notify = common_vendor.resolveComponent("van-notify");
  const _component_van_tabbar_item = common_vendor.resolveComponent("van-tabbar-item");
  const _component_van_tabbar = common_vendor.resolveComponent("van-tabbar");
  (_component_van_notify + _component_van_tabbar_item + _component_van_tabbar)();
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
    console.log();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_common.urlTobase64)("icons", "home (1)", "svg"),
        b: common_vendor.unref(utils_common.urlTobase64)("icons", "home", "svg"),
        c: common_vendor.o(($event) => common_vendor.isRef(active) ? active.value = 0 : active = 0),
        d: common_vendor.unref(utils_common.urlTobase64)("icons", "纸飞机_发布 (1)", "svg"),
        e: common_vendor.unref(utils_common.urlTobase64)("icons", "纸飞机_发布", "svg"),
        f: common_vendor.o(($event) => common_vendor.isRef(active) ? active.value = 1 : active = 1),
        g: common_vendor.unref(utils_common.urlTobase64)("icons", "个人 (1)", "svg"),
        h: common_vendor.unref(utils_common.urlTobase64)("icons", "个人", "svg"),
        i: common_vendor.o(($event) => common_vendor.isRef(active) ? active.value = 2 : active = 2),
        j: common_vendor.p({
          active: common_vendor.unref(active)
        }),
        k: common_vendor.unref(active) == 0
      }, common_vendor.unref(active) == 0 ? {} : {}, {
        l: common_vendor.unref(active) == 1,
        m: common_vendor.unref(active) == 2
      }, common_vendor.unref(active) == 2 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/campusposter/campusposter.vue"]]);
wx.createPage(MiniProgramPage);
