"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  test: () => tries,
  tries: () => tries
});
module.exports = __toCommonJS(src_exports);
function tries(callback) {
  let errorCaptured = null;
  const data = {};
  try {
    callback(data);
  } catch (error) {
    errorCaptured = error;
  }
  return {
    data,
    // Inclut l'objet data dans le retour
    catch: function(errorType, catchCallback) {
      if (errorCaptured instanceof errorType) {
        catchCallback(errorCaptured, data);
      }
      return this;
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  test,
  tries
});
