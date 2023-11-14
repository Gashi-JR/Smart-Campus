"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_common = require("../../../utils/common.js");
const _sfc_main = {
  __name: "myfixdetail",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_common.urlTobase64)("icons", "file01", "svg")
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e76c9901"], ["__file", "G:/fronter/STUDY/UNIAPP/smartcampus/smartcampus/pages/onlinefix/myfixdetail/myfixdetail.vue"]]);
wx.createPage(MiniProgramPage);
