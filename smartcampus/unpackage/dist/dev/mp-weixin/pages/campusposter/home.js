"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http = require("../../utils/http.js");
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
    let data = common_vendor.ref();
    const toDetail = (id) => {
      console.log(id);
      common_vendor.index.navigateTo({
        url: "/pages/campusposter/posterdetail/posterdetail"
      });
    };
    const getData = async () => {
      let res = await utils_http.http("/deliverOrder/acceptFind/1", "GET", {}, false);
      data.value = res.data;
      console.log(res.data);
    };
    common_vendor.onLoad(async () => {
      console.log(222);
      let res = await utils_http.http("/deliverOrder/acceptFind/1", "GET", {}, false);
      data.value = res.data;
      console.log(res.data);
    });
    onPullDownRefresh(() => {
      getData();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data), (item, index, i0) => {
          return {
            a: "2ebcc0d9-0-" + i0,
            b: common_vendor.p({
              title: "委托人",
              showBtn: false,
              content: item.thingDesc,
              takeAddr: item.pickAddress,
              submitAddr: item.deliveryAddress
            }),
            c: common_vendor.o(($event) => toDetail(item.id), index),
            d: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2ebcc0d9"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/campusposter/home.vue"]]);
wx.createComponent(Component);
