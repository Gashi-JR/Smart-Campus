"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http = require("../../utils/http.js");
const _sfc_main = {
  __name: "electric",
  setup(__props) {
    const tableData = common_vendor.ref(null);
    common_vendor.onMounted(() => {
    });
    const getData = async () => {
      common_vendor.index.showLoading({});
      let res = await utils_http.http(`/dor/info`, "POST", {
        dormitoryId: searchVal.value
      }, false);
      common_vendor.index.hideLoading({});
      if (res.code) {
        console.log(res.data);
        tableData.value = common_vendor._.sortBy(res.data, (item) => -Date.parse(item.recordTime));
      } else {
        common_vendor.index.showToast({
          title: "查询失败",
          icon: "error"
        });
      }
    };
    const dorId = /^(2[5-9]|3[0-2])#([1-6][0-2][0-9])$/;
    let focus = common_vendor.ref(0);
    let searchVal = common_vendor.ref("");
    const handleFocus = (index) => {
      focus.value = index;
    };
    const handleSearch = () => {
      if (dorId.test(searchVal.value)) {
        console.log(dorId.test(searchVal.value));
        getData();
      } else {
        console.log(dorId.test(searchVal.value));
        common_vendor.index.showToast({
          icon: "error",
          title: "提示:25#101"
        });
      }
    };
    const toRecharge = () => {
      common_vendor.index.navigateTo({
        url: "/pages/electric/recharge/recharge"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(focus) == 1 ? 1 : "",
        b: common_vendor.unref(focus) == 0 ? 1 : "",
        c: common_vendor.o(($event) => handleFocus(1)),
        d: common_vendor.o(($event) => common_vendor.isRef(focus) ? focus.value = 0 : focus = 0),
        e: common_vendor.unref(searchVal),
        f: common_vendor.o(($event) => common_vendor.isRef(searchVal) ? searchVal.value = $event.detail.value : searchVal = $event.detail.value),
        g: common_vendor.o(handleSearch),
        h: common_vendor.o(toRecharge),
        i: common_vendor.f(tableData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.recordTime),
            b: common_vendor.t(item.dumpEnergy),
            c: common_vendor.t(item.surplus),
            d: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/electric/electric.vue"]]);
wx.createPage(MiniProgramPage);
