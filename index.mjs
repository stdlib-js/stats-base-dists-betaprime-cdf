// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s,{factory as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-beta-cdf@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function d(t,n,i){return e(t)||e(n)||e(i)||n<=0||i<=0?NaN:t<=0?0:t===r?1:s(t/(1+t),n,i)}function o(t,s){var d;return e(t)||e(s)||t<=0||s<=0?i(NaN):(d=n(t,s),function(t){if(e(t))return NaN;if(t<=0)return 0;if(t===r)return 1;return d(t/(1+t))})}t(d,"factory",o);export{d as default,o as factory};
//# sourceMappingURL=index.mjs.map
