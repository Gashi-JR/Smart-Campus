"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_tab + _component_van_tabs)();
}
const _sfc_main = {
  __name: "onlinefix",
  setup(__props) {
    const applicant = common_vendor.ref("");
    const contactNumber = common_vendor.ref("");
    const repairLocation = common_vendor.ref("");
    const faultItem = common_vendor.ref("");
    const faultDescription = common_vendor.ref("");
    common_vendor.ref("");
    const radioGroup = ["一般", "紧急"];
    const submitForm = () => {
    };
    return (_ctx, _cache) => {
      return {
        a: applicant.value,
        b: common_vendor.o(($event) => applicant.value = $event.detail.value),
        c: contactNumber.value,
        d: common_vendor.o(($event) => contactNumber.value = $event.detail.value),
        e: repairLocation.value,
        f: common_vendor.o(($event) => repairLocation.value = $event.detail.value),
        g: common_vendor.f(radioGroup, (item, k0, i0) => {
          return {
            a: item,
            b: item,
            c: common_vendor.t(item),
            d: item
          };
        }),
        h: faultItem.value,
        i: common_vendor.o(($event) => faultItem.value = $event.detail.value),
        j: faultDescription.value,
        k: common_vendor.o(($event) => faultDescription.value = $event.detail.value),
        l: common_vendor.unref(utils_common.urlTobase64)("icons", "addPhoto", "svg"),
        m: common_vendor.o(submitForm),
        n: common_vendor.p({
          title: "申请报修"
        }),
        o: common_vendor.p({
          title: "报修须知"
        }),
        p: common_vendor.unref(utils_common.urlTobase64)("icons", "file", "svg"),
        q: common_vendor.unref(utils_common.urlTobase64)("icons", "right", "svg"),
        r: common_vendor.unref(utils_common.urlTobase64)("icons", "file", "svg"),
        s: common_vendor.unref(utils_common.urlTobase64)("icons", "right", "svg"),
        t: common_vendor.unref(utils_common.urlTobase64)("icons", "file", "svg"),
        v: common_vendor.unref(utils_common.urlTobase64)("icons", "right", "svg"),
        w: common_vendor.p({
          title: "我的工单"
        }),
        x: common_vendor.p({
          swipeable: true,
          animated: true,
          color: "rgb(0,157,255)",
          border: true
        }),
        y: _ctx.activeTab === 0,
        z: _ctx.activeTab === 1,
        A: _ctx.activeTab === 2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ecd7de3b"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/onlinefix/onlinefix.vue"]]);
wx.createPage(MiniProgramPage);
