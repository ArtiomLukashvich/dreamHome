"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 3476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.1a23d4f4.png","height":124,"width":160,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Adr//wDeAAADLurrURPGkF8D9+TkAvXX5QH4y7IAAADSAdr//wcN5uVJFbtrPfsUOLrzKlBGE71faQL0ylUAAQC1AeXq7E8XtmU0A7evn/laf96IToAJbdbLVRK7NhXvQ8WOAe3WzFEStjQW3XL/vh+nXjcE5aPw4mr87BynOi8C9cqyAe3UyEYPzo4p6UmX2xe3Y0IC9Ljz6U/cxxe1URIB9svAAeng3GcTw3w8/wIK6v4MGwD/AQT3AvryGQTss+8B+NqDCsxjnGaldocAAAAASUVORK5CYII="});

/***/ }),

/***/ 5918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3476);






const Navbar = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-38b22477-0"
})`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: transparent;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 1;
	padding: 10px;
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-38b22477-1"
})`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	user-select: none;
`;
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
    componentId: "sc-38b22477-2"
})`
	list-style: none;
	display: flex;
	flex-direction: row;
`;
const LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
    componentId: "sc-38b22477-3"
})`
	user-select: none;
	position: relative;
	cursor: pointer;
	padding: 0 20px 20px 20px;
	:hover {
		::after {
			content: '';
			position: absolute;
			text-align: center;
			top: 8px;
			left: 0px;
			width: 8px;
			height: 8px;
			background-color: #ff9505;
			border-radius: 50%;
			transition: all 4s ease 2s;
		}
	}
`;
const Nav = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Navbar, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Logo, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: _public_logo_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                alt: "logo",
                                width: 45,
                                height: 30
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Dream Home"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Navigation, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
                            href: "/",
                            children: "About Us"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/",
                            target: "_blank",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkItem, {
                                children: "Other Projects"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ 9248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h3.withConfig({
    componentId: "sc-609b58fc-0"
})`
	color: #ff9505;
	font-weight: 600;
	font-size: 32px;
	user-select: none;
`;
const Title = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 8866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ setOpenWishList),
/* harmony export */   "If": () => (/* binding */ removeItemFromWishList),
/* harmony export */   "Il": () => (/* binding */ addItemWishList),
/* harmony export */   "On": () => (/* binding */ setCloseWishList),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "tk": () => (/* binding */ setFilterItems),
/* harmony export */   "yj": () => (/* binding */ getHouseItems)
/* harmony export */ });
/* unused harmony exports initialState, setHouseItems */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    houses: [],
    filter: "all",
    filtered: [],
    wishList: [],
    showWishList: false
};
//! correct mark of favorite on house items
const getHouseItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("posts/getHouseItems", async (_, { rejectWithValue , dispatch  })=>{
    const response = await fetch("http://localhost:3000/api/houseItems");
    const data = await response.json();
    dispatch(setHouseItems(data));
});
const housesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "houses",
    initialState,
    reducers: {
        setHouseItems: (state, action)=>{
            return {
                ...state,
                houses: action.payload,
                filter: "all",
                filtered: action.payload
            };
        },
        setFilterItems: (state, action)=>{
            if (action.payload === "all") {
                return {
                    ...state,
                    filter: action.payload,
                    filtered: state.houses
                };
            }
            if (isNaN(action.payload)) {
                const newItems = state.houses.filter((item)=>item.typeOfHouse === action.payload);
                return {
                    ...state,
                    filter: action.payload,
                    filtered: newItems
                };
            } else {
                const newItems1 = state.houses.filter((item)=>item.description.bedrooms === +action.payload);
                return {
                    ...state,
                    filter: action.payload,
                    filtered: newItems1
                };
            }
        },
        addItemWishList: (state, action)=>{
            const toggleFavorite = state.filtered.find((item)=>item.id === action.payload.id);
            toggleFavorite.favorite = !toggleFavorite.favorite;
            toggleFavorite.favorite ? state.wishList.push(action.payload) : state.wishList = state.wishList.filter((item)=>item.id !== action.payload.id);
        },
        removeItemFromWishList: (state, action)=>{
            const toggleFavorite = state.filtered.find((item)=>item.id === action.payload);
            toggleFavorite.favorite = false;
            state.wishList = state.wishList.filter((item)=>item.id !== action.payload);
        },
        setOpenWishList: (state)=>{
            return {
                ...state,
                showWishList: true
            };
        },
        setCloseWishList: (state)=>{
            return {
                ...state,
                showWishList: false
            };
        }
    },
    extraReducers: {
        [getHouseItems.fulfilled]: ()=>console.log("getHouseItems >>> fulfilled"),
        [getHouseItems.pending]: ()=>console.log("getHouseItems >>> pending"),
        [getHouseItems.rejected]: ()=>console.log("getHouseItems >>> rejected")
    }
});
const { setHouseItems , setFilterItems , addItemWishList , removeItemFromWishList , setOpenWishList , setCloseWishList ,  } = housesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (housesSlice.reducer);


/***/ })

};
;