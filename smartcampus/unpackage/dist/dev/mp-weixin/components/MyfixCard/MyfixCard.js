"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  __name: "MyfixCard",
  props: {
    id: String,
    status: Boolean,
    time: String,
    hoster: String,
    addr: String,
    phone: String,
    type: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_common.urlTobase64)("icons", "file", "svg"),
        b: common_vendor.t(props.id),
        c: common_vendor.t(props.time),
        d: common_vendor.t(props.status ? "维修完成" : "等待维修"),
        e: common_vendor.n(props.status ? "status_true" : "status_false"),
        f: common_vendor.unref(utils_common.urlTobase64)("icons", "right", "svg"),
        g: common_vendor.t(props.hoster),
        h: common_vendor.t(props.type),
        i: common_vendor.t(props.addr),
        j: common_vendor.t(props.phone)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a65616a3"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/components/MyfixCard/MyfixCard.vue"]]);
wx.createComponent(Component);
