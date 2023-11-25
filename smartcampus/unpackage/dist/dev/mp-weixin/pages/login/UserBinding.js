"use strict";
const common_vendor = require("../../common/vendor.js");
const wxcomponents_vantWeapp_dist_notify_notify = require("../../wxcomponents/vant-weapp/dist/notify/notify.js");
const utils_http = require("../../utils/http.js");
require("../../wxcomponents/vant-weapp/dist/common/color.js");
if (!Array) {
  const _component_van_notify = common_vendor.resolveComponent("van-notify");
  _component_van_notify();
}
const _sfc_main = {
  __name: "UserBinding",
  setup(__props) {
    let name = common_vendor.ref("");
    let id = common_vendor.ref("");
    let classId = common_vendor.ref("");
    let focus = common_vendor.ref(-1);
    const handleFocus = (index) => {
      focus.value = index;
    };
    const bind = async () => {
      if (name.value.length > 0 && id.value.length > 0 && classId.value.length > 0) {
        if (name.value.length <= 20 && id.value.length <= 20 && classId.value.length <= 20) {
          let res = await utils_http.http("/user/bind", "POST", {
            openid: common_vendor.index.getStorageSync("openId"),
            name: name.value,
            id: id.value,
            classId: classId.value
          });
          if (res.code === true) {
            common_vendor.index.setStorageSync("user", res.data);
            common_vendor.index.reLaunch({
              url: "/pages/index/index"
            });
          } else
            common_vendor.index.showToast({
              icon: "exception",
              duration: 2e3,
              title: "绑定失败，请检查网络"
            });
        } else {
          wxcomponents_vantWeapp_dist_notify_notify.Notify({
            type: "danger",
            message: "字段长度超过20"
          });
        }
      } else {
        wxcomponents_vantWeapp_dist_notify_notify.Notify({
          type: "danger",
          message: "字段不能为空"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(focus) == 0 ? 1 : "",
        b: common_vendor.o(($event) => handleFocus(0)),
        c: common_vendor.o(($event) => common_vendor.isRef(focus) ? focus.value = -1 : focus = -1),
        d: common_vendor.unref(name),
        e: common_vendor.o(($event) => common_vendor.isRef(name) ? name.value = $event.detail.value : name = $event.detail.value),
        f: common_vendor.unref(focus) == 1 ? 1 : "",
        g: common_vendor.o(($event) => handleFocus(1)),
        h: common_vendor.o(($event) => common_vendor.isRef(focus) ? focus.value = -1 : focus = -1),
        i: common_vendor.unref(id),
        j: common_vendor.o(($event) => common_vendor.isRef(id) ? id.value = $event.detail.value : id = $event.detail.value),
        k: common_vendor.unref(focus) == 2 ? 1 : "",
        l: common_vendor.o(($event) => handleFocus(2)),
        m: common_vendor.o(($event) => common_vendor.isRef(focus) ? focus.value = -1 : focus = -1),
        n: common_vendor.unref(classId),
        o: common_vendor.o(($event) => common_vendor.isRef(classId) ? classId.value = $event.detail.value : classId = $event.detail.value),
        p: common_vendor.o(bind),
        q: common_vendor.p({
          id: "van-notify"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1df429a4"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/login/UserBinding.vue"]]);
wx.createPage(MiniProgramPage);
