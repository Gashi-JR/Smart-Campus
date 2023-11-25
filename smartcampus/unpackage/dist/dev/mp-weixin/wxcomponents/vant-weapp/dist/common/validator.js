"use strict";
function isObj(x) {
  const type = typeof x;
  return x !== null && (type === "object" || type === "function");
}
exports.isObj = isObj;
