"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_http = require("../../../utils/http.js");
const _sfc_main = {
  __name: "posterdetail",
  setup(__props) {
    let data = common_vendor.ref(null);
    let user = common_vendor.ref(null);
    let orderId = common_vendor.ref(0);
    common_vendor.onLoad(async (option) => {
      console.log(option.id);
      orderId.value = option.id;
      user.value = common_vendor.index.getStorageSync("user");
      getData(option.id);
    });
    const getData = async (id) => {
      let res = await utils_http.http(`/deliverOrder/${id}`, "GET", {}, false);
      data.value = res.data;
      console.log(res.data);
    };
    const handleAccept = async () => {
      let res = await utils_http.http(`/deliverOrder/accept/${user.value.id}/${orderId.value}`, "PUT", {}, false);
      console.log(res.code);
      if (res.code === true) {
        common_vendor.index.showToast({
          icon: "success",
          title: "接受成功"
        });
        common_vendor.index.navigateBack();
        common_vendor.index.$emit("toMine");
      } else {
        common_vendor.index.showToast({
          icon: "error",
          title: "接受失败，请检查网络"
        });
      }
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      return common_vendor.e({
        a: common_vendor.t((_a = common_vendor.unref(data)) == null ? void 0 : _a.thingDesc),
        b: common_vendor.t((_b = common_vendor.unref(data)) == null ? void 0 : _b.contactInfo),
        c: common_vendor.t((_c = common_vendor.unref(data)) == null ? void 0 : _c.pickAddress),
        d: common_vendor.t((_d = common_vendor.unref(data)) == null ? void 0 : _d.deliveryAddress),
        e: common_vendor.t((_e = common_vendor.unref(data)) == null ? void 0 : _e.fatchInfo),
        f: common_vendor.t((_f = common_vendor.unref(data)) == null ? void 0 : _f.deliveryTime),
        g: common_vendor.unref(user) != null && common_vendor.unref(user).id != ((_g = common_vendor.unref(data)) == null ? void 0 : _g.clientId) && ((_h = common_vendor.unref(data)) == null ? void 0 : _h.accepterId) != common_vendor.unref(user).id
      }, common_vendor.unref(user) != null && common_vendor.unref(user).id != ((_i = common_vendor.unref(data)) == null ? void 0 : _i.clientId) && ((_j = common_vendor.unref(data)) == null ? void 0 : _j.accepterId) != common_vendor.unref(user).id ? {
        h: common_vendor.o(handleAccept)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c28a889c"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/campusposter/posterdetail/posterdetail.vue"]]);
wx.createPage(MiniProgramPage);
