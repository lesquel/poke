import{r as p}from"./index.ed373d49.js";/* empty css                       */function i(a){const[x,t]=p.useState({carga:!0,data:null}),s=async()=>{let n=await(await fetch(a)).json();t({carga:!1,data:n})};return p.useEffect(()=>{s()},[a]),x}var l={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=p,f=Symbol.for("react.element"),h=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,u=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function d(a,x,t){var s,r={},n=null,_=null;t!==void 0&&(n=""+t),x.key!==void 0&&(n=""+x.key),x.ref!==void 0&&(_=x.ref);for(s in x)m.call(x,s)&&!v.hasOwnProperty(s)&&(r[s]=x[s]);if(a&&a.defaultProps)for(s in x=a.defaultProps,x)r[s]===void 0&&(r[s]=x[s]);return{$$typeof:f,type:a,key:n,ref:_,props:r,_owner:u.current}}o.Fragment=h;o.jsx=d;o.jsxs=d;l.exports=o;var e=l.exports;function b({url:a}){const{carga:x,data:t}=i(a);return x?e.jsx("h1",{children:"Cargando"}):e.jsxs("p",{children:[e.jsx("b",{children:"Generacion"}),e.jsx("br",{}),e.jsx("span",{children:t.generation.name})]})}function j({url:a}){const{carga:x,data:t}=i(a);return x?e.jsx("div",{className:`Card bg-zinc-800 min-w-[220px] md:w-[80%] min-h-[220px] rounded-lg text-white px-4 pb-4 m-5 relative\r
            [&:hover>*>*]:[transition:all_.2s_ease]\r
            [&:hover>div>img]:scale-[2] [&:hover>div>img]:-translate-y-3.5 [&:hover>div>h1]:text-left\r
            [transition:box-shadow_.2s_ease-in]\r
            hover:[transition:box-shadow_.2s_ease-in]\r
            [box-shadow:10px_10px_0px_0px_#fef08a,20px_20px_0px_0px_#27272a]\r
            hover:[box-shadow:-10px_-10px_0px_0px_#fef08a,-20px_-20px_0px_0px_#27272a]`,children:e.jsx("h3",{className:"text-center text-3xl",children:"Cargando"})}):e.jsxs("div",{className:`Card bg-zinc-800 min-w-[220px] md:w-[80%] min-h-[220px] rounded-lg text-white px-4 pb-4 m-5 relative\r
         [&:hover>*>*]:[transition:all_.2s_ease]\r
         [&:hover>div>img]:scale-[2] [&:hover>div>img]:-translate-y-3.5 [&:hover>div>h1]:text-left\r
         [transition:box-shadow_.2s_ease-in]\r
         hover:[transition:box-shadow_.2s_ease-in]\r
         [box-shadow:10px_10px_0px_0px_#fef08a,20px_20px_0px_0px_#27272a]\r
         hover:[box-shadow:-10px_-10px_0px_0px_#fef08a,-20px_-20px_0px_0px_#27272a]`,children:[e.jsx("div",{children:e.jsx("img",{className:"md:w-[150px] m-auto",src:t.sprites.front_default,alt:""})}),e.jsxs("div",{className:"py-3 Fredericka",children:[e.jsx("h1",{className:"text-center px-2 mb-4 text-xl sm:text-xl lg:text-3xl font-bold Frijole uppercase text-[#fff] [text-shadow:1.5px_1.5px_0px_#fff] [overflow-wrap:break-word]",children:t.name}),e.jsx(b,{url:t.species.url})]})]},t.id)}function y(){const[a,x]=p.useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"),{carga:t,data:s}=i(a);return t?e.jsx("div",{className:"fixed bg-zinc-800 bg-opacity-30 w-[100%] h-[100vh] top-0 left-0 flex items-center justify-center",children:e.jsxs("h3",{className:"text-yellow-200 text-6xl",children:[e.jsx("samp",{className:"animate-bounce",children:"C"}),e.jsx("span",{className:"animate-bounce",children:"a"}),e.jsx("span",{className:"animate-bounce",children:"r"}),e.jsx("span",{className:"animate-bounce",children:"g"}),e.jsx("span",{className:"animate-bounce",children:"a"}),e.jsx("span",{className:"animate-bounce",children:"n"}),e.jsx("span",{className:"animate-bounce",children:"d"}),e.jsx("span",{className:"animate-bounce",children:"o"})]})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bts flex justify-evenly",children:[e.jsx("button",{className:`bg-zinc-800 text-white py-3 px-5 md:px-10 m-4 [text-shadow:1px_1px_0_#fef08a,1px_1px_0_#fff] text-sm md:text-xl Frijole\r
                hover:[box-shadow:-5px_-5px_0px_0px_#fef08a,-10px_-10px_0px_0px_#27272a,5px_5px_0px_0px_#fef08a,10px_10px_0px_0px_#27272a]\r
                hover:[transition:box-shadow_.2s_ease]\r
                `,disabled:!s.previous,onClick:()=>x(s.previous),children:"Anterior"}),e.jsx("button",{className:`bg-zinc-800 text-white py-3 px-5 md:px-10 m-4 [text-shadow:1px_1px_0_#fef08a,1px_1px_0_#fff] text-sm md:text-xl Frijole\r
                hover:[box-shadow:-5px_-5px_0px_0px_#fef08a,-10px_-10px_0px_0px_#27272a,5px_5px_0px_0px_#fef08a,10px_10px_0px_0px_#27272a]\r
                hover:[transition:box-shadow_.2s_ease]\r
                `,disabled:!s.next,onClick:()=>x(s.next),children:"Siguiente"})]}),e.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10 my-8",children:s.results.map((r,n)=>e.jsx(j,{url:r.url},n))}),e.jsxs("div",{className:"bts flex justify-evenly",children:[e.jsx("button",{className:`bg-zinc-800 text-white py-3 px-5 md:px-10 m-4 [text-shadow:1px_1px_0_#fef08a,1px_1px_0_#fff] text-sm md:text-xl Frijole\r
                hover:[box-shadow:-5px_-5px_0px_0px_#fef08a,-10px_-10px_0px_0px_#27272a,5px_5px_0px_0px_#fef08a,10px_10px_0px_0px_#27272a]\r
                hover:[transition:box-shadow_.2s_ease]\r
                `,disabled:!s.previous,onClick:()=>x(s.previous),children:"Anterior"}),e.jsx("button",{className:`bg-zinc-800 text-white py-3 px-5 md:px-10 m-4 [text-shadow:1px_1px_0_#fef08a,1px_1px_0_#fff] text-sm md:text-xl Frijole\r
                hover:[box-shadow:-5px_-5px_0px_0px_#fef08a,-10px_-10px_0px_0px_#27272a,5px_5px_0px_0px_#fef08a,10px_10px_0px_0px_#27272a]\r
                hover:[transition:box-shadow_.2s_ease]\r
                `,disabled:!s.next,onClick:()=>x(s.next),children:"Siguiente"})]})]})}export{y as default};
