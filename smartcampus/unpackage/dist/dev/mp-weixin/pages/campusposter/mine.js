"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_tab + _component_van_tabs)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    let index = common_vendor.ref(0);
    let index1 = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(index) == 0 ? 1 : "",
        b: common_vendor.o(($event) => common_vendor.isRef(index) ? index.value = 0 : index = 0),
        c: common_vendor.unref(index) == 1 ? 1 : "",
        d: common_vendor.o(($event) => common_vendor.isRef(index) ? index.value = 1 : index = 1),
        e: common_vendor.unref(index) == 2 ? 1 : "",
        f: common_vendor.o(($event) => common_vendor.isRef(index) ? index.value = 2 : index = 2),
        g: common_vendor.unref(index) == 0
      }, common_vendor.unref(index) == 0 ? {} : {}, {
        h: common_vendor.unref(index) == 1
      }, common_vendor.unref(index) == 1 ? {} : {}, {
        i: common_vendor.unref(index) == 2
      }, common_vendor.unref(index) == 2 ? {} : {}, {
        j: common_vendor.p({
          title: "我的发布",
          titleStyle: "font-size:26rpx"
        }),
        k: common_vendor.unref(index1) == 0 ? 1 : "",
        l: common_vendor.o(($event) => common_vendor.isRef(index1) ? index1.value = 0 : index1 = 0),
        m: common_vendor.unref(index1) == 1 ? 1 : "",
        n: common_vendor.o(($event) => common_vendor.isRef(index1) ? index1.value = 1 : index1 = 1),
        o: common_vendor.unref(index1) == 0
      }, common_vendor.unref(index1) == 0 ? {} : {}, {
        p: common_vendor.unref(index1) == 1
      }, common_vendor.unref(index1) == 1 ? {} : {}, {
        q: common_vendor.p({
          title: "我的接受",
          titleStyle: "font-size:26rpx;"
        }),
        r: common_vendor.p({
          swipeable: true,
          animated: true,
          color: "rgb(0,157,255)"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-33c8d6d9"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/campusposter/mine.vue"]]);
wx.createComponent(Component);
