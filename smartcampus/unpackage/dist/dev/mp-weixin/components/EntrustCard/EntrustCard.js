"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "EntrustCard",
  props: {
    title: String,
    showBtn: Boolean,
    content: String,
    takeAddr: String,
    submitAddr: String,
    btnTxt: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(props.title),
        b: props.showBtn
      }, props.showBtn ? {
        c: common_vendor.t(props.btnTxt)
      } : {}, {
        d: common_vendor.t(props.content),
        e: common_vendor.t(props.takeAddr),
        f: common_vendor.t(props.submitAddr)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2db31b7e"], ["__file", "D:/weixinkaifa/Smart-Campus/smartcampus/components/EntrustCard/EntrustCard.vue"]]);
wx.createComponent(Component);
