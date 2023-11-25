"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http = require("../../utils/http.js");
if (!Array) {
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  _easycom_uni_datetime_picker2();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  _easycom_uni_datetime_picker();
}
const _sfc_main = {
  __name: "publish",
  setup(__props) {
    let content = common_vendor.ref("");
    let takeAddr = common_vendor.ref("");
    let getAddr = common_vendor.ref("");
    let takeTime = common_vendor.ref("");
    let context = common_vendor.ref("");
    let info = common_vendor.ref("");
    let user = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      user.value = common_vendor.index.getStorageSync("user");
    });
    common_vendor.onShow(() => {
      user.value = common_vendor.index.getStorageSync("user");
    });
    const handlePublish = () => {
      if (common_vendor.index.getStorageSync("user") == "") {
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
        common_vendor.index.showToast({
          title: "请先登录",
          icon: "error"
        });
      } else {
        if (content.value != "" && takeAddr.value != "" && getAddr.value != "" && takeTime.value != "" && context.value != "" && info.value != "") {
          if (content.value <= 100 && takeAddr.value <= 20 && getAddr.value <= 20 && context.value <= 20 && info.value <= 100) {
            Publish();
          } else {
            common_vendor.index.showToast({
              title: "输入字段超出限制",
              icon: "error"
            });
          }
        } else {
          common_vendor.index.showToast({
            title: "请输入完整信息",
            icon: "error"
          });
        }
      }
    };
    const handleCancel = () => {
      console.log("cancel");
      console.log(takeTime.value);
      content.value = "";
      takeAddr.value = "";
      getAddr.value = "";
      takeTime.value = "";
      context.value = "";
      info.value = "";
    };
    const Publish = async () => {
      let res = await utils_http.http(`/deliverOrder/save`, "POST", {
        clientId: user.value.id,
        content: content.value,
        takeAddr: takeAddr.value,
        getAddr: getAddr.value,
        takeTime: takeTime.value,
        context: context.value,
        info: info.value
      }, false);
      console.log(res.code);
      if (res.code) {
        handleCancel();
        common_vendor.index.$emit("completePublish");
        common_vendor.index.showToast({
          icon: "success",
          title: "发布成功"
        });
      } else {
        common_vendor.index.showToast({
          icon: "error",
          title: "发布失败，请检查网络连接"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(content),
        b: common_vendor.o(($event) => common_vendor.isRef(content) ? content.value = $event.detail.value : content = $event.detail.value),
        c: common_vendor.unref(getAddr),
        d: common_vendor.o(($event) => common_vendor.isRef(getAddr) ? getAddr.value = $event.detail.value : getAddr = $event.detail.value),
        e: common_vendor.unref(takeAddr),
        f: common_vendor.o(($event) => common_vendor.isRef(takeAddr) ? takeAddr.value = $event.detail.value : takeAddr = $event.detail.value),
        g: common_vendor.o(($event) => common_vendor.isRef(takeTime) ? takeTime.value = $event : takeTime = $event),
        h: common_vendor.p({
          type: "datetime",
          modelValue: common_vendor.unref(takeTime)
        }),
        i: common_vendor.unref(context),
        j: common_vendor.o(($event) => common_vendor.isRef(context) ? context.value = $event.detail.value : context = $event.detail.value),
        k: common_vendor.unref(info),
        l: common_vendor.o(($event) => common_vendor.isRef(info) ? info.value = $event.detail.value : info = $event.detail.value),
        m: common_vendor.o(handlePublish),
        n: common_vendor.o(handleCancel)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5dc08a8f"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/campusposter/publish.vue"]]);
wx.createComponent(Component);
