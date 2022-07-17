exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 587:
/***/ ((module) => {

// Exports
module.exports = {
	"cart_car": "CartCar_cart_car__0SF7_",
	"car_wrapper": "CartCar_car_wrapper__N6sCa",
	"favorite": "CartCar_favorite__sMsGX",
	"heart": "CartCar_heart__jlKgz",
	"description": "CartCar_description__VCAIO",
	"vin": "CartCar_vin__5K4Eo",
	"group_img": "CartCar_group_img__Yo83g",
	"img": "CartCar_img__QXnn7",
	"img_repeat": "CartCar_img_repeat__ZdZj8",
	"info": "CartCar_info__RVyZe",
	"price": "CartCar_price__HbTKr",
	"group_info": "CartCar_group_info__DDTwb",
	"engine": "CartCar_engine__d7NMm",
	"kpp": "CartCar_kpp__tVH3Y",
	"autoProbeg": "CartCar_autoProbeg__iT90d",
	"autoColor": "CartCar_autoColor__FoGJU",
	"autoPacket": "CartCar_autoPacket__Xxz55",
	"additional": "CartCar_additional__8VL5C",
	"additional_options": "CartCar_additional_options__XpO1A",
	"small_group_info": "CartCar_small_group_info__VmcES",
	"drop": "CartCar_drop__veySH",
	"btn_buy": "CartCar_btn_buy__7zlZY",
	"btn_wait": "CartCar_btn_wait__ACEo_"
};


/***/ }),

/***/ 118:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "Header_search__LD7Gl",
	"svg": "Header_svg__Iwnnb",
	"favorite": "Header_favorite__m3WV_",
	"img_car": "Header_img_car__bwIbo",
	"btn": "Header_btn__rlfmy",
	"number": "Header_number__BDKnj"
};


/***/ }),

/***/ 110:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__OVLM4",
	"wrapper": "Home_wrapper__XaPDZ",
	"group_select": "Home_group_select__SAdzY",
	"group_select_wrapper": "Home_group_select_wrapper__6wkEn",
	"arrow_btn": "Home_arrow_btn__zk_64",
	"select_input": "Home_select_input__4XnS6",
	"__select": "Home___select__lQY0J",
	"__select__content": "Home___select__content__KTkoO",
	"reset": "Home_reset__xujju",
	"__select__label": "Home___select__label__kGBm6",
	"zooming": "Home_zooming__ell68",
	"spinner": "Home_spinner__9Z5oi",
	"spinner_wrapper": "Home_spinner_wrapper__uLd88"
};


/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ CartCar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(587);
/* harmony import */ var _CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const CartCar = ({ elem  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `mb-5 col-24 col-lg-12 col-xl-8 ${(_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().cart_car)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().car_wrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description),
                    children: [
                        elem.classifieds.description + " " + elem.feedData.equipmentVariantName,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: elem.feedData.modelYear
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().vin),
                    children: elem.vin
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().group_img),
                    children: elem.photobank.imgs.map((img)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        backgroundImage: `url(${img.url})`
                                    },
                                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().img)
                                }),
                                elem.photobank.imgs.length == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        backgroundImage: `url(${img.url})`
                                    },
                                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().img_repeat)
                                })
                            ]
                        }))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().info),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().group_info)}  ${(_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().small_group_info)}`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().engine),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "d-flex",
                                            children: [
                                                elem.feedData.engine.engineCapacity,
                                                " \u043B",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().drop),
                                                    children: "/"
                                                }),
                                                elem.feedData.engine.enginePower,
                                                " \u043B\u0441",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().drop),
                                                    children: "/"
                                                }),
                                                elem.feedData.engine.engineName.split("-")[1]
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().kpp),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "\u041A\u043F\u043F"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: elem.feedData.equipmentVariantTransmissionType
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${(_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().group_info)} ${(_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().small_group_info)} mt-2`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().autoProbeg),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "\u041F\u0440\u043E\u0431\u0435\u0433"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                elem.feedData.autoProbeg,
                                                " \u043A\u043C"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().autoColor),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "\u0426\u0432\u0435\u0442"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: elem.feedData.colorByClassifierName
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `${(_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().group_info)} ${(_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().small_group_info)} mt-2`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().autoPacket),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "\u041F\u0430\u043A\u0435\u0442\u044B"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().additional_options),
                                        children: [
                                            elem.feedData.baseOptions[0].universalOptions?.uniOptionName,
                                            "..."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().additional),
                                        children: [
                                            "( + \u0435\u0449\u0451 ",
                                            elem.feedData.baseOptions.length,
                                            " \u043F\u0430\u043A\u0435\u0442\u0430)"
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().price),
                            children: [
                                elem.feedData.autoPrice.toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2
                                }).replaceAll(",", " "),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "\u20BD"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: elem.setCarStatus.status === "\u041F\u0440\u043E\u0434\u0430\u043D" ? (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_wait) : (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().btn_buy),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: elem.setCarStatus.status === "\u041F\u0440\u043E\u0434\u0430\u043D" ? "\u0412 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0435" : "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_CartCar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().favorite)
                })
            ]
        })
    }, elem._id);
};


/***/ }),

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MainContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/Header.module.scss
var Header_module = __webpack_require__(118);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./app/components/Header.tsx


const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "navbar navbar-expand-xl",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarTogglerDemo03",
                        "aria-controls": "navbarTogglerDemo03",
                        "aria-expanded": "false",
                        "aria-label": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Header_module_default()).search
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarTogglerDemo03",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "navbar-nav me-auto mb-2 mb-lg-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            "aria-current": "page",
                                            href: "#",
                                            children: "\u0412\u0441\u0435 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u0438"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            href: "#",
                                            children: "Trade-In"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            href: "#",
                                            children: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Carmart"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            href: "#",
                                            children: "\u041A\u0410\u0421\u041A\u041E"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "nav-link",
                                            href: "#",
                                            children: "FAQ"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: `nav-item ${(Header_module_default()).svg}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: `nav-link ${(Header_module_default()).favorite}`,
                                            href: "#"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: `nav-item ${(Header_module_default()).svg}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: `nav-link ${(Header_module_default()).img_car}`,
                                            href: "#"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Header_module_default()).number,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "8 812"
                                    }),
                                    "50-11-900"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Header_module_default()).btn,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "\u041E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0437\u0432\u043E\u043D\u043E\u043A"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./app/components/MainContainer.tsx


const MainContainer = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_MainContainer = (MainContainer);


/***/ })

};
;