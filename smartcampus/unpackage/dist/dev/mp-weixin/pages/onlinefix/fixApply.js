"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_van_uploader = common_vendor.resolveComponent("van-uploader");
  _component_van_uploader();
}
const _sfc_main = {
  __name: "fixApply",
  setup(__props) {
    const applicant = common_vendor.ref("");
    const contactNumber = common_vendor.ref("");
    const repairLocation = common_vendor.ref("");
    const faultItem = common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
    const submitForm = () => {
    };
    const afterRead = (event) => {
      event.detail;
    };
    return (_ctx, _cache) => {
      return {
        a: applicant.value,
        b: common_vendor.o(($event) => applicant.value = $event.detail.value),
        c: contactNumber.value,
        d: common_vendor.o(($event) => contactNumber.value = $event.detail.value),
        e: repairLocation.value,
        f: common_vendor.o(($event) => repairLocation.value = $event.detail.value),
        g: faultItem.value,
        h: common_vendor.o(($event) => faultItem.value = $event.detail.value),
        i: common_vendor.p({
          afterRead,
          previewSize: "100rpx",
          maxCount: "3"
        }),
        j: common_vendor.o(submitForm)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c3ebfe5f"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/onlinefix/fixApply.vue"]]);
wx.createComponent(Component);
