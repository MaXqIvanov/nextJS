"use strict";
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "v0": () => (/* binding */ getCurrentCar),
/* harmony export */   "vF": () => (/* binding */ getModelsCar)
/* harmony export */ });
/* unused harmony export getServices */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const getModelsCar = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("cars/getCars", async (params, state)=>{
    const response = await fetch("https://api.carmart.ru/cars/temp?page=1&perPage=18&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand%5B0%5D");
    const models = response.json();
    return models;
});
const getCurrentCar = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("cars/getCurrentCar", async (params, state)=>{
    const response = await fetch(`https://api.carmart.ru/cars/temp?page=1&perPage=18&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand%5B0%5D=${params.models}`);
    const cars = response.json();
    return cars;
});
const carsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cars",
    initialState: {
        models: [],
        cars: [],
        loading: false
    },
    reducers: {
        getServices (state, action) {}
    },
    extraReducers: {
        [getModelsCar.pending]: (state, action)=>{},
        [getModelsCar.fulfilled]: (state, { payload  })=>{
            console.log(payload);
            state.models = payload.meta.filters.brand;
        },
        [getModelsCar.rejected]: (state, action)=>{},
        [getCurrentCar.pending]: (state, action)=>{
            console.log("this is pending");
            console.log(state.loading);
            state.loading = true;
            console.log(state.loading);
        },
        [getCurrentCar.fulfilled]: (state, { payload  })=>{
            state.cars = payload.list;
            state.loading = false;
        },
        [getCurrentCar.rejected]: (state, action)=>{
            state.loading = false;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carsSlice.reducer);
const { getServices  } = carsSlice.actions;


/***/ }),

/***/ 73:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YS": () => (/* binding */ wrapper),
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* unused harmony export makeStore */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);



const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    cars: _carsSlice__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
});
const makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
        reducer: rootReducer
    });
const store = makeStore();
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore);


/***/ })

};
;