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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"MoralisAuth\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    // \"message\" and \"signature\" are needed for authorization\n                    // we described them in \"credentials\" above\n                    const { message , signature  } = credentials;\n                    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n                        apiKey: process.env.MORALIS_API_KEY\n                    });\n                    const { address , profileId  } = (await moralis__WEBPACK_IMPORTED_MODULE_2___default().Auth.verify({\n                        message,\n                        signature,\n                        network: \"evm\"\n                    })).raw;\n                    const user = {\n                        address,\n                        profileId,\n                        signature\n                    };\n                    // returning the user object and creating  a session\n                    console.log(user);\n                    return user;\n                } catch (e) {\n                    console.error(e);\n                    return null;\n                }\n            }\n        }), \n    ],\n    // adding user info to the user session object\n    callbacks: {\n        async jwt ({ token , user  }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFDakM7QUFDSDtBQUU5QixpRUFBZUMsZ0RBQVEsQ0FBQztJQUNwQkUsU0FBUyxFQUFFO1FBQ1BILHNFQUFtQixDQUFDO1lBQ2hCSSxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsV0FBVyxFQUFFO2dCQUNUQyxPQUFPLEVBQUU7b0JBQ0xDLEtBQUssRUFBRSxTQUFTO29CQUNoQkMsSUFBSSxFQUFFLE1BQU07b0JBQ1pDLFdBQVcsRUFBRSxLQUFLO2lCQUNyQjtnQkFDREMsU0FBUyxFQUFFO29CQUNQSCxLQUFLLEVBQUUsV0FBVztvQkFDbEJDLElBQUksRUFBRSxNQUFNO29CQUNaQyxXQUFXLEVBQUUsS0FBSztpQkFDckI7YUFDSjtZQUNDLE1BQU1FLFNBQVMsRUFBQ04sV0FBVyxFQUFFO2dCQUMzQixJQUFJO29CQUNGLHlEQUF5RDtvQkFDekQsMkNBQTJDO29CQUMzQyxNQUFNLEVBQUVDLE9BQU8sR0FBRUksU0FBUyxHQUFFLEdBQUdMLFdBQVc7b0JBRTFDLE1BQU1ILG9EQUFhLENBQUM7d0JBQUVXLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7cUJBQUUsQ0FBQyxDQUFDO29CQUU3RCxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFLEdBQUcsQ0FDN0IsTUFBTWhCLDBEQUFtQixDQUFDO3dCQUFFSSxPQUFPO3dCQUFFSSxTQUFTO3dCQUFFVyxPQUFPLEVBQUUsS0FBSztxQkFBRSxDQUFDLENBQ2xFLENBQUNDLEdBQUc7b0JBRUwsTUFBTUMsSUFBSSxHQUFHO3dCQUFFTixPQUFPO3dCQUFFQyxTQUFTO3dCQUFFUixTQUFTO3FCQUFFO29CQUM5QyxvREFBb0Q7b0JBQ3BEYyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE9BQU9BLElBQUksQ0FBQztnQkFDZCxFQUFFLE9BQU9HLENBQUMsRUFBRTtvQkFDVkYsT0FBTyxDQUFDRyxLQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDO29CQUNqQixPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDO1lBQ0gsQ0FBQztTQUNOLENBQUM7S0FDTDtJQUNELDhDQUE4QztJQUM5Q0UsU0FBUyxFQUFFO1FBQ1AsTUFBTUMsR0FBRyxFQUFDLEVBQUVDLEtBQUssR0FBRVAsSUFBSSxHQUFFLEVBQUU7WUFDdkJBLElBQUksSUFBSSxDQUFDTyxLQUFLLENBQUNQLElBQUksR0FBR0EsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBT08sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxNQUFNQyxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFRCxLQUFLLEdBQUUsRUFBRTtZQUM5QkMsT0FBTyxDQUFDUixJQUFJLEdBQUdPLEtBQUssQ0FBQ1AsSUFBSSxDQUFDO1lBQzFCLE9BQU9RLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQ0o7Q0FDSixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tanktbWFyYWlscy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IE1vcmFsaXMgZnJvbSAnbW9yYWxpcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICBuYW1lOiAnTW9yYWxpc0F1dGgnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcweDAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2lnbmF0dXJlJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJzB4MCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvLyBcIm1lc3NhZ2VcIiBhbmQgXCJzaWduYXR1cmVcIiBhcmUgbmVlZGVkIGZvciBhdXRob3JpemF0aW9uXG4gICAgICAgICAgICAgICAgICAvLyB3ZSBkZXNjcmliZWQgdGhlbSBpbiBcImNyZWRlbnRpYWxzXCIgYWJvdmVcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgc2lnbmF0dXJlIH0gPSBjcmVkZW50aWFscztcblxuICAgICAgICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHByb2ZpbGVJZCB9ID0gKFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBNb3JhbGlzLkF1dGgudmVyaWZ5KHsgbWVzc2FnZSwgc2lnbmF0dXJlLCBuZXR3b3JrOiAnZXZtJyB9KVxuICAgICAgICAgICAgICAgICAgKS5yYXc7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7IGFkZHJlc3MsIHByb2ZpbGVJZCwgc2lnbmF0dXJlIH07XG4gICAgICAgICAgICAgICAgICAvLyByZXR1cm5pbmcgdGhlIHVzZXIgb2JqZWN0IGFuZCBjcmVhdGluZyAgYSBzZXNzaW9uXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgLy8gYWRkaW5nIHVzZXIgaW5mbyB0byB0aGUgdXNlciBzZXNzaW9uIG9iamVjdFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICAgICAgICB1c2VyICYmICh0b2tlbi51c2VyID0gdXNlcik7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIgPSB0b2tlbi51c2VyO1xuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICAgIH0sXG4gICAgfSxcbn0pOyJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiTmV4dEF1dGgiLCJNb3JhbGlzIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibWVzc2FnZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2lnbmF0dXJlIiwiYXV0aG9yaXplIiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiYWRkcmVzcyIsInByb2ZpbGVJZCIsIkF1dGgiLCJ2ZXJpZnkiLCJuZXR3b3JrIiwicmF3IiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJlIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();