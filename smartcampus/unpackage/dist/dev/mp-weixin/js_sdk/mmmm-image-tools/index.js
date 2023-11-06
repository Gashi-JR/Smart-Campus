"use strict";
const common_vendor = require("../../common/vendor.js");
function getLocalFilePath(path) {
  if (path.indexOf("_www") === 0 || path.indexOf("_doc") === 0 || path.indexOf("_documents") === 0 || path.indexOf("_downloads") === 0) {
    return path;
  }
  if (path.indexOf("file://") === 0) {
    return path;
  }
  if (path.indexOf("/storage/emulated/0/") === 0) {
    return path;
  }
  if (path.indexOf("/") === 0) {
    var localFilePath = plus.io.convertAbsoluteFileSystem(path);
    if (localFilePath !== path) {
      return localFilePath;
    } else {
      path = path.substr(1);
    }
  }
  return "_www/" + path;
}
function pathToBase64(path) {
  return new Promise(function(resolve, reject) {
    if (typeof window === "object" && "document" in window) {
      if (typeof FileReader === "function") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", path, true);
        xhr.responseType = "blob";
        xhr.onload = function() {
          if (this.status === 200) {
            let fileReader = new FileReader();
            fileReader.onload = function(e) {
              resolve(e.target.result);
            };
            fileReader.onerror = reject;
            fileReader.readAsDataURL(this.response);
          }
        };
        xhr.onerror = reject;
        xhr.send();
        return;
      }
      var canvas = document.createElement("canvas");
      var c2x = canvas.getContext("2d");
      var img = new Image();
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        c2x.drawImage(img, 0, 0);
        resolve(canvas.toDataURL());
        canvas.height = canvas.width = 0;
      };
      img.onerror = reject;
      img.src = path;
      return;
    }
    if (typeof plus === "object") {
      plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function(entry) {
        entry.file(function(file) {
          var fileReader = new plus.io.FileReader();
          fileReader.onload = function(data) {
            resolve(data.target.result);
          };
          fileReader.onerror = function(error) {
            reject(error);
          };
          fileReader.readAsDataURL(file);
        }, function(error) {
          reject(error);
        });
      }, function(error) {
        reject(error);
      });
      return;
    }
    if (typeof common_vendor.wx$1 === "object" && common_vendor.wx$1.canIUse("getFileSystemManager")) {
      common_vendor.wx$1.getFileSystemManager().readFile({
        filePath: path,
        encoding: "base64",
        success: function(res) {
          resolve("data:image/png;base64," + res.data);
        },
        fail: function(error) {
          reject(error);
        }
      });
      return;
    }
    reject(new Error("not support"));
  });
}
exports.pathToBase64 = pathToBase64;
