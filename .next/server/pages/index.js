"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 75:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_CartCar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _app_components_MainContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var _store_carsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(146);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(110);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7__);








const Home = ({ models , cars  })=>{
    // console.log(models);
    // console.log(cars);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: visibleOption , 1: setVisibleOption  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const selectModel = (value)=>{
        setVisibleOption(false);
        router.push(`/${value}`);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_MainContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `mt-2 ${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main)}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-24",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onMouseLeave: ()=>setVisibleOption(false),
                                className: `col-24 col-lg-12 col-xl-8 ${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().group_select)}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().group_select_wrapper),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            onChange: ()=>setVisibleOption(!visibleOption),
                                            id: "singleSelect0",
                                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().select_input),
                                            type: "checkbox",
                                            name: "singleSelect",
                                            checked: true
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            htmlFor: "singleSelect0",
                                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().__select__label),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "\u041C\u0430\u0440\u043A\u0430"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().arrow_btn)
                                                })
                                            ]
                                        }),
                                        visibleOption && models.map((elem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                onChange: ()=>selectModel(elem),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        id: elem,
                                                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().select_input),
                                                        type: "checkbox",
                                                        name: "singleSelect"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: elem,
                                                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_7___default().__select__label),
                                                        children: elem
                                                    })
                                                ]
                                            }, elem))
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-24 mt-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row",
                                    children: cars && cars.map((elem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_components_CartCar__WEBPACK_IMPORTED_MODULE_3__/* .CartCar */ .b, {
                                            elem: elem
                                        }, elem.id))
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
const getServerSideProps = _store_store__WEBPACK_IMPORTED_MODULE_6__/* .wrapper.getServerSideProps */ .YS.getServerSideProps((store)=>async (ctx)=>{
        await store.dispatch((0,_store_carsSlice__WEBPACK_IMPORTED_MODULE_5__/* .getModelsCar */ .vF)());
        const { models  } = store.getState().cars;
        await store.dispatch((0,_store_carsSlice__WEBPACK_IMPORTED_MODULE_5__/* .getCurrentCar */ .v0)({
            models: models[2]
        }));
        const { cars  } = store.getState().cars;
        return {
            props: {
                models,
                cars
            }
        };
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [73,56], () => (__webpack_exec__(75)));
module.exports = __webpack_exports__;

})();