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
exports.id = "pages/listar-equipes";
exports.ids = ["pages/listar-equipes"];
exports.modules = {

/***/ "./axiosConfig.ts":
/*!************************!*\
  !*** ./axiosConfig.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:3000/api\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9heGlvc0NvbmZpZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxHQUFHLEdBQUdELG9EQUFZLENBQUM7SUFDdkJHLE9BQU8sRUFBRSwyQkFBMkI7Q0FDckMsQ0FBQztBQUVGLGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrYXRob24tZnJvbnRlbmQvLi9heGlvc0NvbmZpZy50cz8xMmUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./axiosConfig.ts\n");

/***/ }),

/***/ "./pages/listar-equipes.tsx":
/*!**********************************!*\
  !*** ./pages/listar-equipes.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _axiosConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axiosConfig */ \"./axiosConfig.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosConfig__WEBPACK_IMPORTED_MODULE_2__]);\n_axiosConfig__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst ListarEquipesPage = ()=>{\n    const { 0: equipes , 1: setEquipes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchEquipes = async ()=>{\n            try {\n                const { data  } = await _axiosConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/teams\");\n                setEquipes(data);\n            } catch (error) {\n                console.error(\"Erro ao buscar equipes:\", error);\n            }\n        };\n        fetchEquipes();\n    }, []);\n    const handleDelete = async (id)=>{\n        try {\n            await _axiosConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](`/teams/${id}`);\n            setEquipes((prevEquipes)=>prevEquipes.filter((equipe)=>equipe.id !== id));\n        } catch (error) {\n            console.error(\"Erro ao excluir equipe:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-black\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-800 p-8 rounded shadow-md w-full max-w-3xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-6 text-center text-white\",\n                    children: \"Lista de Equipes\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\hackathon\\\\hackathon-frontend\\\\pages\\\\listar-equipes.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: equipes.map((equipe)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-between items-center bg-gray-700 p-4 rounded mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-white\",\n                                    children: equipe.nome\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\hackathon\\\\hackathon-frontend\\\\pages\\\\listar-equipes.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleDelete(equipe.id),\n                                    className: \"bg-red-500 text-white p-2 rounded hover:bg-red-600 transition\",\n                                    children: \"Excluir\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\hackathon\\\\hackathon-frontend\\\\pages\\\\listar-equipes.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, equipe.id, true, {\n                            fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\hackathon\\\\hackathon-frontend\\\\pages\\\\listar-equipes.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\hackathon\\\\hackathon-frontend\\\\pages\\\\listar-equipes.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\hackathon\\\\hackathon-frontend\\\\pages\\\\listar-equipes.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\hackathon\\\\hackathon-frontend\\\\pages\\\\listar-equipes.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListarEquipesPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0YXItZXF1aXBlcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDbEI7QUFFakMsTUFBTUksaUJBQWlCLEdBQWEsSUFBTTtJQUN4QyxNQUFNLEtBQUNDLE9BQU8sTUFBRUMsVUFBVSxNQUFJSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUUxQ0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTU0sWUFBWSxHQUFHLFVBQVk7WUFDL0IsSUFBSTtnQkFDRixNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHLE1BQU1MLHdEQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN4Q0csVUFBVSxDQUFDRSxJQUFJLENBQUMsQ0FBQztZQUNuQixFQUFFLE9BQU9FLEtBQUssRUFBRTtnQkFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMseUJBQXlCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1lBQ2xELENBQUM7UUFDSCxDQUFDO1FBQ0RILFlBQVksRUFBRSxDQUFDO0lBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU1LLFlBQVksR0FBRyxPQUFPQyxFQUFVLEdBQUs7UUFDekMsSUFBSTtZQUNGLE1BQU1WLDhEQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUVVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQ1AsVUFBVSxDQUFDUyxDQUFBQSxXQUFXLEdBQUlBLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDQyxDQUFBQSxNQUFNLEdBQUlBLE1BQU0sQ0FBQ0osRUFBRSxLQUFLQSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVFLEVBQUUsT0FBT0gsS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHlCQUF5QixFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0gsQ0FBQztJQUVELHFCQUNFLDhEQUFDUSxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3REFBd0Q7a0JBQ3JFLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxvREFBb0Q7OzhCQUNqRSw4REFBQ0MsSUFBRTtvQkFBQ0QsU0FBUyxFQUFDLGdEQUFnRDs4QkFBQyxrQkFBZ0I7Ozs7OzZCQUFLOzhCQUNwRiw4REFBQ0UsSUFBRTs4QkFDQWhCLE9BQU8sQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDTCxNQUFXLGlCQUN2Qiw4REFBQ00sSUFBRTs0QkFBaUJKLFNBQVMsRUFBQyxnRUFBZ0U7OzhDQUM1Riw4REFBQ0ssTUFBSTtvQ0FBQ0wsU0FBUyxFQUFDLFlBQVk7OENBQUVGLE1BQU0sQ0FBQ1EsSUFBSTs7Ozs7NkNBQVE7OENBQ2pELDhEQUFDQyxRQUFNO29DQUNMQyxPQUFPLEVBQUUsSUFBTWYsWUFBWSxDQUFDSyxNQUFNLENBQUNKLEVBQUUsQ0FBQztvQ0FDdENNLFNBQVMsRUFBQywrREFBK0Q7OENBQzFFLFNBRUQ7Ozs7OzZDQUFTOzsyQkFQRkYsTUFBTSxDQUFDSixFQUFFOzs7O3FDQVFiLENBQ0w7Ozs7OzZCQUNDOzs7Ozs7cUJBQ0Q7Ozs7O2lCQUNGLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVULGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0aG9uLWZyb250ZW5kLy4vcGFnZXMvbGlzdGFyLWVxdWlwZXMudHN4PzllM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vYXhpb3NDb25maWcnO1xyXG5cclxuY29uc3QgTGlzdGFyRXF1aXBlc1BhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlcXVpcGVzLCBzZXRFcXVpcGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRXF1aXBlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoJy90ZWFtcycpO1xyXG4gICAgICAgIHNldEVxdWlwZXMoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgZXF1aXBlczonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaEVxdWlwZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGkuZGVsZXRlKGAvdGVhbXMvJHtpZH1gKTtcclxuICAgICAgc2V0RXF1aXBlcyhwcmV2RXF1aXBlcyA9PiBwcmV2RXF1aXBlcy5maWx0ZXIoZXF1aXBlID0+IGVxdWlwZS5pZCAhPT0gaWQpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZXhjbHVpciBlcXVpcGU6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ibGFja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHAtOCByb3VuZGVkIHNoYWRvdy1tZCB3LWZ1bGwgbWF4LXctM3hsXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi02IHRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5MaXN0YSBkZSBFcXVpcGVzPC9oMT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7ZXF1aXBlcy5tYXAoKGVxdWlwZTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2VxdWlwZS5pZH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLWdyYXktNzAwIHAtNCByb3VuZGVkIG1iLTJcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2VxdWlwZS5ub21lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoZXF1aXBlLmlkKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZCBob3ZlcjpiZy1yZWQtNjAwIHRyYW5zaXRpb25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEV4Y2x1aXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RhckVxdWlwZXNQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsIkxpc3RhckVxdWlwZXNQYWdlIiwiZXF1aXBlcyIsInNldEVxdWlwZXMiLCJmZXRjaEVxdWlwZXMiLCJkYXRhIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJkZWxldGUiLCJwcmV2RXF1aXBlcyIsImZpbHRlciIsImVxdWlwZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJtYXAiLCJsaSIsInNwYW4iLCJub21lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/listar-equipes.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/listar-equipes.tsx"));
module.exports = __webpack_exports__;

})();