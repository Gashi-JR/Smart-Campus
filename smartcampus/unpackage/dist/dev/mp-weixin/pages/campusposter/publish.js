"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  _easycom_uni_datetime_picker2();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  _easycom_uni_datetime_picker();
}
const _sfc_main = {
  __name: "publish",
  setup(__props) {
    common_vendor.ref("adada");
    let datetimesingle = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.isRef(datetimesingle) ? datetimesingle.value = $event : datetimesingle = $event),
        b: common_vendor.p({
          type: "datetime",
          modelValue: common_vendor.unref(datetimesingle)
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5dc08a8f"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/campusposter/publish.vue"]]);
wx.createComponent(Component);
