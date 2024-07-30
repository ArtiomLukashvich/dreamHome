"use strict";
(() => {
var exports = {};
exports.id = 128;
exports.ids = [128];
exports.modules = {

/***/ 8032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _data_houseItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(377);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    res.status(200).json(_data_houseItems__WEBPACK_IMPORTED_MODULE_0__.houseItems);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377], () => (__webpack_exec__(8032)));
module.exports = __webpack_exports__;

})();