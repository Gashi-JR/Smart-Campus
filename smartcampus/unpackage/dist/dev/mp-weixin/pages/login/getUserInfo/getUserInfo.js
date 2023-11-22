"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_http = require("../../../utils/http.js");
const utils_ip = require("../../../utils/ip.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = {
  __name: "getUserInfo",
  setup(__props) {
    let avatar = common_vendor.ref("");
    let img = common_vendor.ref("https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg");
    let nickname = common_vendor.ref("微信用户");
    const getAvatar = async (e) => {
      avatar.value = common_vendor.index.getFileSystemManager().readFileSync(e.detail.avatarUrl, "base64");
      let res = await utils_http.http("/avatar/upload", "POST", {
        filestr: avatar.value,
        dataurl: "data:image/jpg;base64"
      });
      if (res.code === true)
        img.value = utils_ip.url + res.data.url;
    };
    const handleSave = async () => {
      await utils_http.http("/user/upload", "POST", {});
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(img),
        b: common_vendor.o(getAvatar),
        c: common_vendor.unref(nickname),
        d: common_vendor.o(($event) => common_vendor.isRef(nickname) ? nickname.value = $event.detail.value : nickname = $event.detail.value),
        e: common_vendor.o(handleSave),
        f: common_vendor.p({
          type: "primary"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bea91fe7"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/login/getUserInfo/getUserInfo.vue"]]);
wx.createPage(MiniProgramPage);
