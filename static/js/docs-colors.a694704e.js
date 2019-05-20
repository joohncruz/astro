(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/colors.mdx":function(e,t,a){"use strict";a.r(t);var n=a("./node_modules/react/index.js"),o=a.n(n),r=a("./node_modules/@mdx-js/tag/dist/index.js"),c=(a("./src/index.css"),a("./docs/css/colors-collection.css"),[100,200,300,400,500,600,700,800,900,1e3]),s=function(e,t){return e<t?"var(--color-moon-1000)":"var(--color-space-100)"},l=function(e){var t=e.family,a=e.tint,n=e.textColor;return o.a.createElement("div",{className:"color-palette__swatch",style:{backgroundColor:"var(--color-".concat(t,"-").concat(a,")"),color:n}},o.a.createElement("span",null,a))},i=function(e){var t=e.family,a=e.lightTextStart;return o.a.createElement("div",{className:"color-palette"},c.map(function(e){return o.a.createElement(l,{key:"".concat(t).concat(e),family:t,tint:e,textColor:s(e,a)})}))},m=function(e){var t=e.gradient,a=e.darkText,n=void 0!==a&&a;return o.a.createElement("div",{className:"gradient-collection__swatch",style:{backgroundImage:"var(--gradient-".concat(t,")"),color:n?"var(--color-moon-900)":"var(--color-space-100)"}},o.a.createElement("span",null,t))},p=function(e){var t=e.children;return o.a.createElement("div",{className:"gradient-collection"},t)};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}i.__docgenInfo={description:"",methods:[],displayName:"ColorPalette"},m.__docgenInfo={description:"",methods:[],displayName:"GradientSwatch",props:{darkText:{defaultValue:{value:"false",computed:!1},required:!1}}},p.__docgenInfo={description:"",methods:[],displayName:"GradientCollection"},a.d(t,"default",function(){return b});var b=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=h(this,g(t).call(this,e))).layout=null,a}var a,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components;u(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"colors"}},"colors"),o.a.createElement(r.MDXTag,{name:"h4",components:t,props:{id:"bringing-our-concepts-and-the-very-essence-of-our-design-to-life-our-color-palette-provides-hierarchy-affordance-emotion-and-feedback-to-the-platforms-experience-color-should-be-used-in-meaningful-and-concrete-ways-in-order-to-create-visual-and-usability-patterns"}},"Bringing our concepts and the very essence of our design to life, our color palette provides hierarchy, affordance, emotion and feedback to the platform\u2019s experience. Color should be used in meaningful and concrete ways in order to create visual and usability patterns."),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"tints"}},"tints"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Colors have their variations that may be used depending on the contextual need."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Instead of declaring a hexadecimal code like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"#fff"),", you may access all our colors via variables named in this pattern: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"var(--color-space-100)")," (which is white, if you look in the Space palette below). If you need the darkest shade of green, for example, use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"var(--color-earth-1000)")," and so forth."),o.a.createElement(r.MDXTag,{name:"p",components:t},"If you do that, you should also convert the variables in your build to hexadecimal code, since CSS variables have ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://caniuse.com/#feat=css-variables"}},"limited browser support"),". We recommend the plugin ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/MadLittleMods/postcss-css-variables"}},"PostCSS CSS Variables"),"."),o.a.createElement("br",null),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"earth"}},"earth"),o.a.createElement(i,{family:"earth",lightTextStart:500}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"venus"}},"venus"),o.a.createElement(i,{family:"venus",lightTextStart:400}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"uranus"}},"uranus"),o.a.createElement(i,{family:"uranus",lightTextStart:400}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"moon"}},"moon"),o.a.createElement(i,{family:"moon",lightTextStart:400}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"mars"}},"mars"),o.a.createElement(i,{family:"mars",lightTextStart:400}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"sun"}},"sun"),o.a.createElement(i,{family:"sun",lightTextStart:600}),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"space"}},"space"),o.a.createElement(i,{family:"space",lightTextStart:500}),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"gradients"}},"gradients"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Based on our brand guideline, they are normally used in main actions and macrostructures of the platform."),o.a.createElement(r.MDXTag,{name:"h3",components:t,props:{id:"usage-1"}},"Usage"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Instead of declaring a gradient code like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"linear-gradient(47.32deg, #d991e0 0%, #00c6d4 60.06%, #00ea60 100%)"),", you may access all our gradients via variables named in this pattern: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"var(--gradient-nebulosa)"),". If you need the Andromeda gradient, for example, use ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"var(--gradient-andromeda)")," and so forth."),o.a.createElement(r.MDXTag,{name:"p",components:t},"If you do that, you should also convert the variables in your build to hexadecimal code, since CSS variables have ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://caniuse.com/#feat=css-variables"}},"limited browser support"),". We recommend the plugin ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/MadLittleMods/postcss-css-variables"}},"PostCSS CSS Variables"),"."),o.a.createElement(p,null,o.a.createElement(m,{gradient:"nebulosa"}),o.a.createElement(m,{gradient:"andromeda"}),o.a.createElement(m,{gradient:"sombrero"}),o.a.createElement(m,{gradient:"milky-way"}),o.a.createElement(m,{gradient:"hoag",darkText:!0}),o.a.createElement(m,{gradient:"centaurus"}),o.a.createElement(m,{gradient:"whirlpool"}),o.a.createElement(m,{gradient:"cartwheel"}),o.a.createElement(m,{gradient:"black-hole"}),o.a.createElement(m,{gradient:"mayall"})))}}])&&f(a.prototype,n),c&&f(a,c),t}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./docs/css/colors-collection.css":function(e,t,a){}}]);
//# sourceMappingURL=docs-colors.dfe23e475133a0ef032f.js.map