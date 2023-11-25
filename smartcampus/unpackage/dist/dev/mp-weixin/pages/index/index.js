"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_ip = require("../../utils/ip.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_component_van_button + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const user = common_vendor.ref(null);
    let alertDialog = common_vendor.ref();
    common_vendor.onLoad(() => {
      console.log(user.value);
    });
    common_vendor.onMounted(() => {
      user.value = common_vendor.index.getStorageSync("user");
    });
    common_vendor.onShow(() => {
      user.value = common_vendor.index.getStorageSync("user");
    });
    const toElec = () => {
      common_vendor.index.navigateTo({
        url: "/pages/electric/electric"
      });
    };
    const toOnlineFix = () => {
      common_vendor.index.navigateTo({
        url: "/pages/onlinefix/onlinefix"
      });
    };
    const toCampusPoster = () => {
      common_vendor.index.navigateTo({
        url: "/pages/campusposter/campusposter"
      });
    };
    const toLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    const Logout = () => {
      alertDialog.value.open();
    };
    const dialogConfirm = () => {
      common_vendor.index.removeStorageSync("user");
      common_vendor.index.removeStorageSync("openId");
      common_vendor.index.removeStorageSync("sessionKey");
      common_vendor.index.reLaunch({
        url: "/pages/index/index"
      });
    };
    const dialogClose = () => {
      alertDialog.value.close();
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      return common_vendor.e({
        a: common_vendor.unref(utils_common.urlTobase64)("bg", "tu 2", "png"),
        b: common_vendor.o(Logout),
        c: user.value === null ? "" : common_vendor.unref(utils_common.urlTobase64)("icons", "退出", "svg"),
        d: common_vendor.unref(utils_common.urlTobase64)("icons", "定位", "svg"),
        e: user.value != null && ((_a = user.value) == null ? void 0 : _a.openId.length) != 0
      }, user.value != null && ((_b = user.value) == null ? void 0 : _b.openId.length) != 0 ? {
        f: ((_c = user.value) == null ? void 0 : _c.avatar.includes("https")) ? (_d = user.value) == null ? void 0 : _d.avatar : common_vendor.unref(utils_ip.url) + ((_e = user.value) == null ? void 0 : _e.avatar)
      } : {}, {
        g: user.value === null
      }, user.value === null ? {
        h: common_vendor.unref(utils_common.urlTobase64)("bg", "logo", "png")
      } : {}, {
        i: user.value != null && ((_f = user.value) == null ? void 0 : _f.openId.length) != 0
      }, user.value != null && ((_g = user.value) == null ? void 0 : _g.openId.length) != 0 ? {
        j: common_vendor.t(user.value.nickname)
      } : {}, {
        k: user.value === null
      }, user.value === null ? {
        l: common_vendor.o(toLogin),
        m: common_vendor.p({
          color: "rgb(84,165,255)",
          round: true,
          size: "small",
          block: true
        })
      } : {}, {
        n: user.value === null
      }, user.value === null ? {} : {}, {
        o: user.value != null && ((_h = user.value) == null ? void 0 : _h.openId.length) != 0
      }, user.value != null && ((_i = user.value) == null ? void 0 : _i.openId.length) != 0 ? {} : {}, {
        p: common_vendor.unref(utils_common.urlTobase64)("bg", "图图 水", "png"),
        q: common_vendor.unref(utils_common.urlTobase64)("icons", "闪电", "svg"),
        r: common_vendor.o(toElec),
        s: common_vendor.unref(utils_common.urlTobase64)("icons", "纸飞机", "svg"),
        t: common_vendor.o(toCampusPoster),
        v: common_vendor.unref(utils_common.urlTobase64)("icons", "无需安装", "svg"),
        w: common_vendor.o(toOnlineFix),
        x: common_vendor.o(dialogConfirm),
        y: common_vendor.o(dialogClose),
        z: common_vendor.p({
          type: "error",
          cancelText: "取消",
          confirmText: "确定",
          title: "退出登录",
          content: "是否退出登录？",
          ["before-close"]: true
        }),
        A: common_vendor.sr(alertDialog, "1cf27b2a-1", {
          "k": "alertDialog"
        }),
        B: common_vendor.p({
          type: "dialog"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
