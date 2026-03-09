"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=f(function(R,a){
var N=require('@stdlib/stats-base-dists-beta-cdf/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/constants-float64-pinf/dist');function F(e,r,t){return u(e)||u(r)||u(t)||r<=0||t<=0?NaN:e<=0?0:e===y?1:N(e/(1+e),r,t)}a.exports=F
});var s=f(function(g,o){
var d=require('@stdlib/utils-constant-function/dist'),C=require('@stdlib/stats-base-dists-beta-cdf/dist').factory,n=require('@stdlib/math-base-assert-is-nan/dist'),D=require('@stdlib/constants-float64-pinf/dist');function I(e,r){var t;if(n(e)||n(r)||e<=0||r<=0)return d(NaN);return t=C(e,r),q;function q(i){return n(i)?NaN:i<=0?0:i===D?1:t(i/(1+i))}}o.exports=I
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=c(),m=s();P(v,"factory",m);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
