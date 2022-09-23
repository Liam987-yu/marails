"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/request-message";
exports.ids = ["pages/api/auth/request-message"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "(api)/./pages/api/auth/request-message.js":
/*!*******************************************!*\
  !*** ./pages/api/auth/request-message.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    domain: process.env.APP_DOMAIN,\n    chainId: 1,\n    statement: \"Please sign this message to confirm your identity.\",\n    uri: process.env.NEXTAUTH_URL,\n    timeout: 60\n};\nasync function handler(req, res) {\n    const { address , chain , network  } = req.body;\n    await moralis__WEBPACK_IMPORTED_MODULE_0___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    try {\n        console.log({\n            address,\n            chain,\n            network,\n            ...config\n        });\n        const message = await moralis__WEBPACK_IMPORTED_MODULE_0___default().Auth.requestMessage({\n            address,\n            chain,\n            network,\n            ...config\n        });\n        res.status(200).json(message);\n    } catch (error) {\n        res.status(400).json({\n            error\n        });\n        console.error(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9yZXF1ZXN0LW1lc3NhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRTlCLE1BQU1DLE1BQU0sR0FBRztJQUNYQyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVO0lBQzlCQyxPQUFPLEVBQUMsQ0FBQztJQUNUQyxTQUFTLEVBQUUsb0RBQW9EO0lBQy9EQyxHQUFHLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxZQUFZO0lBQzdCQyxPQUFPLEVBQUUsRUFBRTtDQUNkO0FBRWMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxJQUFJO0lBRTVDLE1BQU1qQixvREFBYSxDQUFDO1FBQUVtQixNQUFNLEVBQUVoQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2dCLGVBQWU7S0FBRSxDQUFDLENBQUM7SUFFN0QsSUFBSTtRQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztZQUNSUixPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsT0FBTztZQUNQLEdBQUdmLE1BQU07U0FDUixDQUFDO1FBQ04sTUFBTXNCLE9BQU8sR0FBRyxNQUFNdkIsa0VBQTJCLENBQUM7WUFDOUNjLE9BQU87WUFDUEMsS0FBSztZQUNMQyxPQUFPO1lBQ1AsR0FBR2YsTUFBTTtTQUNaLENBQUM7UUFFRlksR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0osT0FBTyxDQUFDLENBQUM7SUFDbEMsRUFBRSxPQUFPSyxLQUFLLEVBQUU7UUFDWmYsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLO1NBQUUsQ0FBQyxDQUFDO1FBQ2hDUCxPQUFPLENBQUNPLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tanktbWFyYWlscy8uL3BhZ2VzL2FwaS9hdXRoL3JlcXVlc3QtbWVzc2FnZS5qcz8yZWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3JhbGlzIGZyb20gJ21vcmFsaXMnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gICAgZG9tYWluOiBwcm9jZXNzLmVudi5BUFBfRE9NQUlOLFxuICAgIGNoYWluSWQ6MSxcbiAgICBzdGF0ZW1lbnQ6ICdQbGVhc2Ugc2lnbiB0aGlzIG1lc3NhZ2UgdG8gY29uZmlybSB5b3VyIGlkZW50aXR5LicsXG4gICAgdXJpOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwsXG4gICAgdGltZW91dDogNjAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBhZGRyZXNzLCBjaGFpbiwgbmV0d29yayB9ID0gcmVxLmJvZHk7XG5cbiAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyh7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICBuZXR3b3JrLFxuICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IE1vcmFsaXMuQXV0aC5yZXF1ZXN0TWVzc2FnZSh7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICBuZXR3b3JrLFxuICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihtZXNzYWdlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yIH0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIk1vcmFsaXMiLCJjb25maWciLCJkb21haW4iLCJwcm9jZXNzIiwiZW52IiwiQVBQX0RPTUFJTiIsImNoYWluSWQiLCJzdGF0ZW1lbnQiLCJ1cmkiLCJORVhUQVVUSF9VUkwiLCJ0aW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFkZHJlc3MiLCJjaGFpbiIsIm5ldHdvcmsiLCJib2R5Iiwic3RhcnQiLCJhcGlLZXkiLCJNT1JBTElTX0FQSV9LRVkiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIkF1dGgiLCJyZXF1ZXN0TWVzc2FnZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/request-message.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/request-message.js"));
module.exports = __webpack_exports__;

})();