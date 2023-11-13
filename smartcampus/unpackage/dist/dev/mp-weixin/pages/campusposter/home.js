"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_EntrustCard2 = common_vendor.resolveComponent("EntrustCard");
  _easycom_EntrustCard2();
}
const _easycom_EntrustCard = () => "../../components/EntrustCard/EntrustCard.js";
if (!Math) {
  _easycom_EntrustCard();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const toDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/campusposter/posterdetail/posterdetail"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "委托人",
          showBtn: true,
          content: "快递为XXX，大小大概为XXXXX",
          takeAddr: "xxxxxx",
          submitAddr: "xxxxxxxx",
          btnTxt: "取消发布"
        }),
        b: common_vendor.p({
          title: "委托人",
          showBtn: false,
          content: "快递为XXX，大小大概为XXXXX",
          takeAddr: "xxxxxx",
          submitAddr: "xxxxxxxx",
          btnTxt: "取消接单"
        }),
        c: common_vendor.p({
          title: "委托人",
          showBtn: false,
          content: "快递为XXX，大小大概为XXXXX",
          takeAddr: "xxxxxx",
          submitAddr: "xxxxxxxx",
          btnTxt: "取消发布"
        }),
        d: common_vendor.o(toDetail)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2ebcc0d9"], ["__file", "D:/weixinkaifa/Smart-Campus/smartcampus/pages/campusposter/home.vue"]]);
wx.createComponent(Component);