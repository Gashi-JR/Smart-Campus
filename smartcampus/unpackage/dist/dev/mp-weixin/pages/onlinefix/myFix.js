"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MyfixCard();
}
const MyfixCard = () => "../../components/MyfixCard/MyfixCard.js";
const _sfc_main = {
  __name: "myFix",
  setup(__props) {
    const toFixDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/onlinefix/myfixdetail/myfixdetail"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          id: "003",
          status: false,
          time: "2033-03-10 20:30:19",
          hoster: "陈小陈",
          addr: "c区16栋399",
          phone: "12345678907",
          type: "五金"
        }),
        b: common_vendor.o(toFixDetail),
        c: common_vendor.p({
          id: "003",
          status: true,
          time: "2033-03-10 20:30:19",
          hoster: "陈小陈",
          addr: "c区16栋399",
          phone: "12345678907",
          type: "五金"
        }),
        d: common_vendor.p({
          id: "003",
          status: true,
          time: "2033-03-10 20:30:19",
          hoster: "陈小陈",
          addr: "c区16栋399",
          phone: "12345678907",
          type: "五金"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-39546b6b"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/onlinefix/myFix.vue"]]);
wx.createComponent(Component);
