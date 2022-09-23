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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account , chain  } = await connectAsync({\n            connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.MetaMaskConnector()\n        });\n        const userData = {\n            address: account,\n            chain: chain.id,\n            network: \"evm\"\n        };\n        const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"/api/auth/request-message\", userData, {\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        });\n        const message = data.message;\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\n         * instead of using signIn(..., redirect: \"/user\")\n         * we get the url from callback and push it to the router to avoid page refreshing\n         */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"/Users/mjy/Documents/mjy-marails/pages/signin.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(),\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"/Users/mjy/Documents/mjy-marails/pages/signin.jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mjy/Documents/mjy-marails/pages/signin.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4RDtBQUNyQjtBQUNxQztBQUN0QztBQUNkO0FBRTFCLFNBQVNRLE1BQU0sR0FBRztJQUNkLE1BQU0sRUFBRUMsWUFBWSxHQUFFLEdBQUdOLGlEQUFVLEVBQUU7SUFDckMsTUFBTSxFQUFFTyxlQUFlLEdBQUUsR0FBR0wsb0RBQWEsRUFBRTtJQUMzQyxNQUFNLEVBQUVNLFdBQVcsR0FBRSxHQUFHVCxpREFBVSxFQUFFO0lBQ3BDLE1BQU0sRUFBRVUsZ0JBQWdCLEdBQUUsR0FBR1IscURBQWMsRUFBRTtJQUM3QyxNQUFNLEVBQUVTLElBQUksR0FBRSxHQUFHUCxzREFBUyxFQUFFO0lBRTVCLE1BQU1RLFVBQVUsR0FBRyxVQUFZO1FBQzNCLElBQUlILFdBQVcsRUFBRTtZQUNiLE1BQU1ELGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFFRCxNQUFNLEVBQUVLLE9BQU8sR0FBRUMsS0FBSyxHQUFFLEdBQUcsTUFBTVAsWUFBWSxDQUFDO1lBQUVRLFNBQVMsRUFBRSxJQUFJakIsd0VBQWlCLEVBQUU7U0FBRSxDQUFDO1FBRXJGLE1BQU1rQixRQUFRLEdBQUc7WUFBRUMsT0FBTyxFQUFFSixPQUFPO1lBQUVDLEtBQUssRUFBRUEsS0FBSyxDQUFDSSxFQUFFO1lBQUVDLE9BQU8sRUFBRSxLQUFLO1NBQUU7UUFFdEUsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNZixpREFBVSxDQUFDLDJCQUEyQixFQUFFVyxRQUFRLEVBQUU7WUFDckVNLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2FBQ3JDO1NBQ0osQ0FBQztRQUVGLE1BQU1DLE9BQU8sR0FBR0gsSUFBSSxDQUFDRyxPQUFPO1FBRTVCLE1BQU1DLFNBQVMsR0FBRyxNQUFNZCxnQkFBZ0IsQ0FBQztZQUFFYSxPQUFPO1NBQUUsQ0FBQztRQUVyRCw2REFBNkQ7UUFDN0QsTUFBTSxFQUFFRSxHQUFHLEdBQUUsR0FBRyxNQUFNMUIsdURBQU0sQ0FBQyxhQUFhLEVBQUU7WUFBRXdCLE9BQU87WUFBRUMsU0FBUztZQUFFRSxRQUFRLEVBQUUsS0FBSztZQUFFQyxXQUFXLEVBQUUsT0FBTztTQUFFLENBQUM7UUFDMUc7OztTQUdDLEdBQ0RoQixJQUFJLENBQUNjLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELHFCQUNJLDhEQUFDRyxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyxxQkFBbUI7Ozs7O29CQUFLOzBCQUM1Qiw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFLElBQU1uQixVQUFVLEVBQUU7MEJBQUUsMkJBQXlCOzs7OztvQkFBUzs7Ozs7O1lBQ3JFLENBQ1I7QUFDTixDQUFDO0FBRUQsaUVBQWVOLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21qeS1tYXJhaWxzLy4vcGFnZXMvc2lnbmluLmpzeD8wNTNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFNYXNrQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9tZXRhTWFzayc7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29ubmVjdCwgdXNlU2lnbk1lc3NhZ2UsIHVzZURpc2Nvbm5lY3QgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBTaWduSW4oKSB7XG4gICAgY29uc3QgeyBjb25uZWN0QXN5bmMgfSA9IHVzZUNvbm5lY3QoKTtcbiAgICBjb25zdCB7IGRpc2Nvbm5lY3RBc3luYyB9ID0gdXNlRGlzY29ubmVjdCgpO1xuICAgIGNvbnN0IHsgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcbiAgICBjb25zdCB7IHNpZ25NZXNzYWdlQXN5bmMgfSA9IHVzZVNpZ25NZXNzYWdlKCk7XG4gICAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGhhbmRsZUF1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgYXdhaXQgZGlzY29ubmVjdEFzeW5jKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGFjY291bnQsIGNoYWluIH0gPSBhd2FpdCBjb25uZWN0QXN5bmMoeyBjb25uZWN0b3I6IG5ldyBNZXRhTWFza0Nvbm5lY3RvcigpIH0pO1xuXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0geyBhZGRyZXNzOiBhY2NvdW50LCBjaGFpbjogY2hhaW4uaWQsIG5ldHdvcms6ICdldm0nIH07XG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2F1dGgvcmVxdWVzdC1tZXNzYWdlJywgdXNlckRhdGEsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcblxuICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBzaWduTWVzc2FnZUFzeW5jKHsgbWVzc2FnZSB9KTtcblxuICAgICAgICAvLyByZWRpcmVjdCB1c2VyIGFmdGVyIHN1Y2Nlc3MgYXV0aGVudGljYXRpb24gdG8gJy91c2VyJyBwYWdlXG4gICAgICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywgeyBtZXNzYWdlLCBzaWduYXR1cmUsIHJlZGlyZWN0OiBmYWxzZSwgY2FsbGJhY2tVcmw6ICcvdXNlcicgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpbnN0ZWFkIG9mIHVzaW5nIHNpZ25JbiguLi4sIHJlZGlyZWN0OiBcIi91c2VyXCIpXG4gICAgICAgICAqIHdlIGdldCB0aGUgdXJsIGZyb20gY2FsbGJhY2sgYW5kIHB1c2ggaXQgdG8gdGhlIHJvdXRlciB0byBhdm9pZCBwYWdlIHJlZnJlc2hpbmdcbiAgICAgICAgICovXG4gICAgICAgIHB1c2godXJsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5XZWIzIEF1dGhlbnRpY2F0aW9uPC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aCgpfT5BdXRoZW50aWNhdGUgdmlhIE1ldGFtYXNrPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjsiXSwibmFtZXMiOlsiTWV0YU1hc2tDb25uZWN0b3IiLCJzaWduSW4iLCJ1c2VBY2NvdW50IiwidXNlQ29ubmVjdCIsInVzZVNpZ25NZXNzYWdlIiwidXNlRGlzY29ubmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiU2lnbkluIiwiY29ubmVjdEFzeW5jIiwiZGlzY29ubmVjdEFzeW5jIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwicHVzaCIsImhhbmRsZUF1dGgiLCJhY2NvdW50IiwiY2hhaW4iLCJjb25uZWN0b3IiLCJ1c2VyRGF0YSIsImFkZHJlc3MiLCJpZCIsIm5ldHdvcmsiLCJkYXRhIiwicG9zdCIsImhlYWRlcnMiLCJtZXNzYWdlIiwic2lnbmF0dXJlIiwidXJsIiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsImRpdiIsImgzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/metaMask");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.jsx"));
module.exports = __webpack_exports__;

})();