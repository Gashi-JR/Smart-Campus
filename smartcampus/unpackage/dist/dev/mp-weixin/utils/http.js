"use strict";
const common_vendor = require("../common/vendor.js");
const url_all = {
  "DEV": "http://10.34.92.248:8080",
  // 开发
  "PRO": "http://10.33.50.45:8080"
  // 生产
};
let BASEURL = url_all["DEV"];
const http = (path, method, data = {}, headers = {}) => {
  const token = common_vendor.index.getStorageSync("token");
  if (token != "") {
    return tokenRequest(path, method, data, headers, token);
  } else {
    return noTokenRequest(path, method, data, headers);
  }
};
function noTokenRequest(path, method, data = {}, headers = {}) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASEURL + path,
      method,
      data,
      header: headers,
      success(response) {
        console.log(response.data);
        resolve(response.data);
      },
      fail(err) {
        console.error(err);
        reject(err);
      },
      complete() {
      }
    });
  });
}
function tokenRequest(path, method, data, headers, token) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASEURL + path,
      method,
      data,
      header: {
        ...headers,
        "token": token
      },
      success(response) {
        console.log("%c响应拦截：", " background:green", response);
        if (response.data.code === 40101)
          ;
        console.log(response.data);
        resolve(response.data);
      },
      fail(err) {
        console.error(err);
        reject(err);
      },
      complete() {
      }
    });
  });
}
exports.http = http;
