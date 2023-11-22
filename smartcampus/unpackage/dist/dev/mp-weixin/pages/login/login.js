"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_http = require("../../utils/http.js");
const wxcomponents_vantWeapp_dist_toast_toast = require("../../wxcomponents/vant-weapp/dist/toast/toast.js");
require("../../wxcomponents/vant-weapp/dist/common/validator.js");
if (!Array) {
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _component_van_toast = common_vendor.resolveComponent("van-toast");
  (_easycom_uni_popup_dialog2 + _easycom_uni_popup2 + _component_van_toast)();
}
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    common_vendor.ref("");
    let alertDialog = common_vendor.ref();
    const toBinding = () => {
      alertDialog.value.open();
    };
    const dialogConfirm = () => {
      common_vendor.index.login({
        provider: "weixin",
        success: async (loginRes) => {
          console.log(loginRes.code);
          let res = await utils_http.http(`/user/login?code=${loginRes.code}`, "GET").catch((err) => {
            wxcomponents_vantWeapp_dist_toast_toast.Toast.fail("登录失败，请检查网络");
          });
          if (res.code && res.code === true) {
            common_vendor.index.setStorageSync("openId", res.data.openId);
            common_vendor.index.setStorageSync("sessionKey", res.data.sessionKey);
            alertDialog.value.close();
            common_vendor.index.navigateTo({
              url: "/pages/login/getUserInfo/getUserInfo"
            });
          }
        }
      });
    };
    const dialogClose = () => {
      alertDialog.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_common.urlTobase64)("icons", "微信", "svg"),
        b: common_vendor.o(toBinding),
        c: common_vendor.o(dialogConfirm),
        d: common_vendor.o(dialogClose),
        e: common_vendor.p({
          type: "error",
          cancelText: "取消",
          confirmText: "确定",
          title: "微信登录授权提示",
          content: "是否允许授权？",
          ["before-close"]: true
        }),
        f: common_vendor.sr(alertDialog, "e4e4508d-0", {
          "k": "alertDialog"
        }),
        g: common_vendor.p({
          type: "dialog"
        }),
        h: common_vendor.p({
          id: "van-toast"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
