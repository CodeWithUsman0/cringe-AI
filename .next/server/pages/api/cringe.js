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
exports.id = "pages/api/cringe";
exports.ids = ["pages/api/cringe"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/cringe.ts":
/*!*****************************!*\
  !*** ./pages/api/cringe.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nasync function handler(req, res) {\n    const prompt = req.query.prompt;\n    if (!prompt) {\n        return res.status(400).json({\n            error: \"Prompt missing\"\n        });\n    }\n    if (prompt.length > 100) {\n        return res.status(400).json({\n            error: \"Prompt too long\"\n        });\n    }\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `Create a cringy motivational quote based on the following topic.\\n\n    Topic: ${prompt}\\n\n    Cringy motivational quote:`,\n        max_tokens: 500,\n        temperature: 1,\n        presence_penalty: 0,\n        frequency_penalty: 0\n    });\n    const quote = completion.data.choices[0].text;\n    res.status(200).json({\n        quote\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JpbmdlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUE2RTtBQUU1QjtBQUVqRCxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdENHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUVBLE1BQU1DLFNBQVMsSUFBSU4sNkNBQVNBLENBQUNDO0FBRWQsZUFBZU0sUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU1DLFNBQVNGLElBQUlHLEtBQUssQ0FBQ0QsTUFBTTtJQUUvQixJQUFJLENBQUNBLFFBQVE7UUFDWCxPQUFPRCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBaUI7SUFDeEQsQ0FBQztJQUVELElBQUlKLE9BQU9LLE1BQU0sR0FBRyxLQUFLO1FBQ3ZCLE9BQU9OLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFrQjtJQUN6RCxDQUFDO0lBRUQsTUFBTUUsYUFBYSxNQUFNVixPQUFPVyxnQkFBZ0IsQ0FBQztRQUMvQ0MsT0FBTztRQUNQUixRQUFRLENBQUM7V0FDRixFQUFFQSxPQUFPOzhCQUNVLENBQUM7UUFDM0JTLFlBQVk7UUFDWkMsYUFBYTtRQUNiQyxrQkFBa0I7UUFDbEJDLG1CQUFtQjtJQUNyQjtJQUVBLE1BQU1DLFFBQVFQLFdBQVdRLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtJQUU3Q2pCLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRVU7SUFBTTtBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWdwdDMvLi9wYWdlcy9hcGkvY3JpbmdlLnRzPzdiNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tICdvcGVuYWknXG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICBjb25zdCBwcm9tcHQgPSByZXEucXVlcnkucHJvbXB0O1xuXG4gIGlmICghcHJvbXB0KSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiUHJvbXB0IG1pc3NpbmdcIiB9KTtcbiAgfVxuXG4gIGlmIChwcm9tcHQubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiUHJvbXB0IHRvbyBsb25nXCIgfSk7XG4gIH1cblxuICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICBwcm9tcHQ6IGBDcmVhdGUgYSBjcmluZ3kgbW90aXZhdGlvbmFsIHF1b3RlIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgdG9waWMuXFxuXG4gICAgVG9waWM6ICR7cHJvbXB0fVxcblxuICAgIENyaW5neSBtb3RpdmF0aW9uYWwgcXVvdGU6YCxcbiAgICBtYXhfdG9rZW5zOiA1MDAsXG4gICAgdGVtcGVyYXR1cmU6IDEsXG4gICAgcHJlc2VuY2VfcGVuYWx0eTogMCxcbiAgICBmcmVxdWVuY3lfcGVuYWx0eTogMCxcbiAgfSk7XG5cbiAgY29uc3QgcXVvdGUgPSBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0O1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcXVvdGUgfSk7XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJvbXB0IiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJsZW5ndGgiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwibWF4X3Rva2VucyIsInRlbXBlcmF0dXJlIiwicHJlc2VuY2VfcGVuYWx0eSIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicXVvdGUiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/cringe.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cringe.ts"));
module.exports = __webpack_exports__;

})();