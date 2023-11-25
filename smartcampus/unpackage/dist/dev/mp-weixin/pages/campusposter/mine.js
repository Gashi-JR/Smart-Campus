"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http = require("../../utils/http.js");
if (!Array) {
  const _easycom_EntrustCard2 = common_vendor.resolveComponent("EntrustCard");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_EntrustCard2 + _component_van_tab + _component_van_tabs + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_EntrustCard = () => "../../components/EntrustCard/EntrustCard.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_EntrustCard + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    let index = common_vendor.ref(0);
    let index1 = common_vendor.ref(0);
    let active = common_vendor.ref(0);
    let alertDialog = common_vendor.ref();
    let finishid = common_vendor.ref(null);
    let myaccept = common_vendor.ref(null);
    let myaccept_1 = common_vendor.ref(null);
    let myaccept_2 = common_vendor.ref(null);
    let mypublish = common_vendor.ref(null);
    let mypublish_0 = common_vendor.ref(null);
    let mypublish_1 = common_vendor.ref(null);
    let mypublish_2 = common_vendor.ref(null);
    let user = common_vendor.ref(null);
    common_vendor.index.$on("myAccept", () => {
      console.log("myAccept");
      active.value = 1;
    });
    common_vendor.onShow(() => {
      if (common_vendor.index.getStorageSync("user") == "") {
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
        common_vendor.index.showToast({
          title: "请先登录",
          icon: "error"
        });
      } else {
        user.value = common_vendor.index.getStorageSync("user");
      }
    });
    common_vendor.onMounted(() => {
      if (common_vendor.index.getStorageSync("user") == "") {
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
        common_vendor.index.showToast({
          title: "请先登录",
          icon: "error"
        });
      } else {
        user.value = common_vendor.index.getStorageSync("user");
        common_vendor.index.$emit("onReady");
        console.log(common_vendor._);
        getData();
      }
    });
    const getData = async () => {
      common_vendor.index.showLoading({});
      let res = await utils_http.http(`/deliverOrder/acceptFind/${user.value.id}`, "GET", {}, false);
      myaccept.value = res.data;
      console.log(res.data);
      let result = common_vendor._.groupBy(res.data, "status");
      myaccept_1.value = result["1"];
      myaccept_2.value = result["2"];
      let res1 = await utils_http.http(`/deliverOrder/clientFind/${user.value.id}`, "GET", {}, false);
      mypublish.value = res1.data;
      console.log(res1.data);
      let result1 = common_vendor._.groupBy(res1.data, "status");
      mypublish_0.value = result1["0"];
      mypublish_1.value = result1["1"];
      mypublish_2.value = result1["2"];
      common_vendor.index.hideLoading();
    };
    const toDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/campusposter/posterdetail/posterdetail?id=${id}`
      });
    };
    const cancelPublish = async (id) => {
      let res = await utils_http.http(`/deliverOrder/${id}`, "DELETE", {}, false);
      if (res.code) {
        common_vendor.index.showToast({
          title: "取消发布成功",
          icon: "success"
        });
        getData();
      } else {
        common_vendor.index.showToast({
          title: "取消失败",
          icon: "error"
        });
      }
    };
    const cancelAccept = async (id) => {
      let res = await utils_http.http(`/deliverOrder/cancelAccept/${user.value.id}/${id}`, "PUT", {}, false);
      if (res.code) {
        common_vendor.index.showToast({
          title: "取消接单成功",
          icon: "success"
        });
        getData();
      } else {
        common_vendor.index.showToast({
          title: "取消失败",
          icon: "error"
        });
      }
    };
    const finish = (id) => {
      finishid.value = id;
      alertDialog.value.open();
    };
    const dialogConfirm = async () => {
      let res = await utils_http.http(`/deliverOrder/finish/${finishid.value}`, "PUT", {}, false);
      if (res.code) {
        common_vendor.index.showToast({
          icon: "success"
        });
        alertDialog.value.close();
        getData();
      } else {
        common_vendor.index.showToast({
          title: "完成失败",
          icon: "error"
        });
      }
    };
    const dialogClose = () => {
      alertDialog.value.close();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(index) == 0 ? 1 : "",
        b: common_vendor.o(($event) => common_vendor.isRef(index) ? index.value = 0 : index = 0),
        c: common_vendor.unref(index) == 1 ? 1 : "",
        d: common_vendor.o(($event) => common_vendor.isRef(index) ? index.value = 1 : index = 1),
        e: common_vendor.unref(index) == 2 ? 1 : "",
        f: common_vendor.o(($event) => common_vendor.isRef(index) ? index.value = 2 : index = 2),
        g: common_vendor.unref(index) == 0
      }, common_vendor.unref(index) == 0 ? {
        h: common_vendor.f(common_vendor.unref(mypublish_0), (item, index2, i0) => {
          return {
            a: "33c8d6d9-2-" + i0 + ",33c8d6d9-1",
            b: common_vendor.p({
              title: "待接单",
              showBtn: true,
              content: item.thingDesc,
              takeAddr: item.pickAddress,
              submitAddr: item.deliveryAddress,
              btnTxt: "取消发布",
              click: () => {
                cancelPublish(item.id);
              }
            }),
            c: common_vendor.o(($event) => toDetail(item.id), index2),
            d: index2
          };
        })
      } : {}, {
        i: common_vendor.unref(index) == 1
      }, common_vendor.unref(index) == 1 ? {
        j: common_vendor.f(common_vendor.unref(mypublish_1), (item, index2, i0) => {
          return {
            a: "33c8d6d9-3-" + i0 + ",33c8d6d9-1",
            b: common_vendor.p({
              title: "已接单",
              showBtn: true,
              content: item.thingDesc,
              takeAddr: item.pickAddress,
              submitAddr: item.deliveryAddress,
              btnTxt: "完成委托",
              click: () => {
                finish(item.id);
              }
            }),
            c: common_vendor.o(($event) => toDetail(item.id), index2),
            d: index2
          };
        })
      } : {}, {
        k: common_vendor.unref(index) == 2
      }, common_vendor.unref(index) == 2 ? {
        l: common_vendor.f(common_vendor.unref(mypublish_2), (item, index2, i0) => {
          return {
            a: "33c8d6d9-4-" + i0 + ",33c8d6d9-1",
            b: common_vendor.p({
              title: "已结束",
              showBtn: false,
              content: item.thingDesc,
              takeAddr: item.pickAddress,
              submitAddr: item.deliveryAddress
            }),
            c: common_vendor.o(($event) => toDetail(item.id), index2),
            d: index2
          };
        })
      } : {}, {
        m: common_vendor.p({
          title: "我的发布",
          titleStyle: "font-size:26rpx"
        }),
        n: common_vendor.unref(index1) == 0 ? 1 : "",
        o: common_vendor.o(($event) => common_vendor.isRef(index1) ? index1.value = 0 : index1 = 0),
        p: common_vendor.unref(index1) == 1 ? 1 : "",
        q: common_vendor.o(($event) => common_vendor.isRef(index1) ? index1.value = 1 : index1 = 1),
        r: common_vendor.unref(index1) == 0
      }, common_vendor.unref(index1) == 0 ? {
        s: common_vendor.f(common_vendor.unref(myaccept_1), (item, index2, i0) => {
          return {
            a: "33c8d6d9-6-" + i0 + ",33c8d6d9-5",
            b: common_vendor.p({
              title: "待完成",
              showBtn: true,
              content: item.thingDesc,
              takeAddr: item.pickAddress,
              submitAddr: item.deliveryAddress,
              btnTxt: "取消接单",
              click: () => {
                cancelAccept(item.id);
              }
            }),
            c: common_vendor.o(($event) => toDetail(item.id), index2),
            d: index2
          };
        })
      } : {}, {
        t: common_vendor.unref(index1) == 1
      }, common_vendor.unref(index1) == 1 ? {
        v: common_vendor.f(common_vendor.unref(myaccept_2), (item, index2, i0) => {
          return {
            a: "33c8d6d9-7-" + i0 + ",33c8d6d9-5",
            b: common_vendor.p({
              title: "已完成",
              showBtn: false,
              content: item.thingDesc,
              takeAddr: item.pickAddress,
              submitAddr: item.deliveryAddress
            }),
            c: common_vendor.o(($event) => toDetail(item.id), index2),
            d: index2
          };
        })
      } : {}, {
        w: common_vendor.p({
          title: "我的接受",
          titleStyle: "font-size:26rpx;"
        }),
        x: common_vendor.p({
          swipeable: true,
          animated: true,
          color: "rgb(0,157,255)",
          active: common_vendor.unref(active)
        }),
        y: common_vendor.o(dialogConfirm),
        z: common_vendor.o(dialogClose),
        A: common_vendor.p({
          type: "error",
          cancelText: "取消",
          confirmText: "确定",
          title: "是否完成委托？",
          content: "请确保委托人的确完成委托!",
          ["before-close"]: true
        }),
        B: common_vendor.sr(alertDialog, "33c8d6d9-8", {
          "k": "alertDialog"
        }),
        C: common_vendor.p({
          type: "dialog"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-33c8d6d9"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/campusposter/mine.vue"]]);
wx.createComponent(Component);
