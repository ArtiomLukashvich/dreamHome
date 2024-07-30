"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/logo.png
var logo = __webpack_require__(3476);
// EXTERNAL MODULE: ./components/Title.jsx
var Title = __webpack_require__(9248);
;// CONCATENATED MODULE: external "react-icons/im"
const im_namespaceObject = require("react-icons/im");
;// CONCATENATED MODULE: ./components/footer/Footer.jsx







const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-55be2d72-0"
})`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr 50px;
	padding-bottom: 20px;
	justify-items: center;
	div:last-child {
		grid-column-start: 1;
		grid-column-end: 4;
		align-self: end;
	}
`;
const FirstContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-55be2d72-1"
})`
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		width: 50%;
		line-height: 1.5;
		font-size: 16px;
		text-align: center;
		margin-top: 20px;
	}
`;
const List = external_styled_components_default().ul.withConfig({
    componentId: "sc-55be2d72-2"
})`
	list-style: none;
	li:first-child {
		font-weight: bold;
		font-size: 20px;
		margin-bottom: 10px;
	}
	li {
		margin-bottom: 5px;
	}
`;
const Socials = external_styled_components_default().ul.withConfig({
    componentId: "sc-55be2d72-3"
})`
	list-style: none;
	display: flex;
	flex-direction: row;

	li {
		cursor: pointer;
		margin: 10px 20px;
		text-align: center;
		:first-child {
			margin-left: 0;
		}
	}
`;
const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FirstContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo/* default */.Z,
                        width: 100,
                        height: 60,
                        alt: "logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Dream Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Dream Home is a gated community with a great location. Located downtown, you’re within walking distance of Parks."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(List, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                        children: "Contact Us"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Deam home villas San Diego, CA, USA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "025-777-3067"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "info@dreamhome.com"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Title/* default */.Z, {
                            children: "Follow us"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Socials, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(im_namespaceObject.ImInstagram, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(im_namespaceObject.ImPlay, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(im_namespaceObject.ImTwitter, {})
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "\xa9 2022 Dandelion | All Rights Reserved"
            })
        ]
    });
};
/* harmony default export */ const footer_Footer = (Footer);

// EXTERNAL MODULE: ./components/Nav.jsx
var Nav = __webpack_require__(5918);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./components/features/housesSlice.js
var housesSlice = __webpack_require__(8866);
;// CONCATENATED MODULE: ./components/wishList/ListItem.jsx







const RemoveIcon = external_styled_components_default()(ai_.AiFillDelete).withConfig({
    componentId: "sc-dfcf2c2c-0"
})`
	font-size: 30px;
	position: absolute;
	right: 10px;
	bottom: 10px;
	padding: 5px;
	border: 1px solid #fff;
	border-radius: 50%;
`;
const ListItem = ({ item  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: item.img,
                    width: 120,
                    height: 120,
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: item.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            " ",
                            item.price
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RemoveIcon, {
                onClick: (e)=>{
                    e.preventDefault();
                    dispatch((0,housesSlice/* removeItemFromWishList */.If)(item.id));
                }
            })
        ]
    });
};
/* harmony default export */ const wishList_ListItem = (ListItem);

;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: ./components/wishList/WishList.jsx








const WishList_Wrapper = external_styled_components_default().ul.withConfig({
    componentId: "sc-43ca17fb-0"
})`
	list-style: none;
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: 400px;
	background-color: #2c2b2b;
	overflow-y: auto;
	z-index: 12;
	border-radius: 10px;
	padding: 10px;
	transition-delay: 0.5s;
	li {
		position: relative;
		display: flex;
		border-bottom: 1px solid #fff;
		cursor: pointer;
		:not(:first-child) {
			margin-top: 10px;
		}
		p {
			margin: 10px 40px;
			font-size: 20px;
		}
	}
`;
const CloseList = external_styled_components_default()(ai_.AiFillCloseCircle).withConfig({
    componentId: "sc-43ca17fb-1"
})`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 25px;
	z-index: 15;
`;
const FavoriteIcon = external_styled_components_default().div.withConfig({
    componentId: "sc-43ca17fb-2"
})`
	width: 50px;
	height: 50px;
	position: fixed;
	text-align: center;
	border-radius: 50%;
	cursor: pointer;
	bottom: 20px;
	right: 20px;
	font-size: 40px;
	background-color: #2c2b2b;
	line-height: 1.5;
`;
const WishList = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { showWishList , wishList  } = (0,external_react_redux_.useSelector)((state)=>state.houses);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showWishList ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WishList_Wrapper, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CloseList, {
                    onClick: ()=>{
                        dispatch((0,housesSlice/* setCloseWishList */.On)());
                    }
                }),
                wishList.length !== 0 ? wishList?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(wishList_ListItem, {
                            item: item
                        })
                    }, item.id)) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Wish list is empty"
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(FavoriteIcon, {
            onClick: ()=>dispatch((0,housesSlice/* setOpenWishList */.F)()),
            children: /*#__PURE__*/ jsx_runtime_.jsx(md_namespaceObject.MdFavorite, {})
        })
    });
};
/* harmony default export */ const wishList_WishList = (WishList);

;// CONCATENATED MODULE: ./components/Layout.jsx




function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(wishList_WishList, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
        ]
    });
};

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./components/store/store.js


const store = (0,toolkit_.configureStore)({
    reducer: {
        houses: housesSlice/* default */.ZP
    }
});

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,483], () => (__webpack_exec__(4220)));
module.exports = __webpack_exports__;

})();