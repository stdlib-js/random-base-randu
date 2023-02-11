// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";var l="mt19937",f=!0,c={};function h(m){var a,p,h;if(a={name:l,copy:f},arguments.length){if(!r(m))throw new TypeError(d("0PP4K",m));if(o(m,"name")&&(a.name=m.name),o(m,"state")){if(a.state=m.state,void 0===a.state)throw new TypeError(d("0PP7q","state",a.state))}else if(o(m,"seed")&&(a.seed=m.seed,void 0===a.seed))throw new TypeError(d("0PP7q","seed",a.seed));if(o(m,"copy")&&(a.copy=m.copy,!n(a.copy)))throw new TypeError(d("0PP30","copy",a.copy))}if(void 0===(h=c[a.name]))throw new Error(d("0PP7r",a.name));return p=void 0===a.state?void 0===a.seed?h.factory():h.factory({seed:a.seed}):h.factory({state:a.state,copy:a.copy}),e(x,"NAME","randu"),t(x,"seed",j),t(x,"seedLength",u),s(x,"state",v,g),t(x,"stateLength",y),t(x,"byteLength",b),e(x,"toJSON",w),e(x,"PRNG",p),e(x,"MIN",p.normalized.MIN),e(x,"MAX",p.normalized.MAX),x;function j(){return p.seed}function u(){return p.seedLength}function y(){return p.stateLength}function b(){return p.byteLength}function v(){return p.state}function g(e){p.state=e}function w(){var e={type:"PRNG"};return e.name=x.NAME+"-"+p.NAME,e.state=i(p.state),e.params=[],e}function x(){return p.normalized()}}c.minstd=m,c["minstd-shuffle"]=a,c.mt19937=p;var j=h();e(j,"factory",h);export{j as default,h as factory};
//# sourceMappingURL=index.mjs.map
