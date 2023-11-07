"use strict";
const common_vendor = require("../common/vendor.js");
const urlTobase64 = (folder, fileName, format) => {
  let img = `/static/${folder}/${fileName}.${format}`, imgBase64 = common_vendor.wx$1.getFileSystemManager().readFileSync(img, "base64"), base64Url = `data:image/${format == "svg" ? "svg+xml" : format};base64,${imgBase64}`;
  return base64Url;
};
exports.urlTobase64 = urlTobase64;
