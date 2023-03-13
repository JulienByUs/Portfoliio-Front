(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{1244:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[id]",function(){return r(6818)}])},6818:function(e,t,r){"use strict";r.r(t);var a=r(5893),s=r(7294),l=r(1163),o=r(1664),i=r.n(o),c=r(4083),n=r(3636),m=r(4228),x=r(7992),d=r(6817),p=r(5555),g=r(5675),h=r.n(g);d.p8.registerPlugin(p.ScrollTrigger);let u=()=>{let[e,t]=(0,s.useState)(null),r=(0,l.useRouter)(),{id:o}=r.query;(0,s.useEffect)(()=>{let e=document.querySelector(".about-project .text-4xl"),t=document.querySelector(".about-project .text-2sm"),r=document.querySelector(".about-project img"),a=document.querySelector(".ring-img-g"),s=document.querySelector(".role"),l=document.querySelector(".ring-img-g"),o=document.querySelector(".project-role"),i=document.querySelector(".overview"),c=document.querySelector(".project-overview"),n=document.querySelector(".close-up"),m=document.querySelector(".project-text-close"),x=document.querySelector(".project-img-close");d.p8.fromTo(e,{x:-50,alpha:0},{x:0,alpha:1,duration:1}),d.p8.fromTo(t,{x:-50,alpha:0},{x:0,alpha:1,duration:1,delay:1}),d.p8.fromTo(r,{x:50,alpha:0},{x:0,alpha:1,duration:1,delay:2}),d.p8.fromTo(a,{y:50,alpha:0},{y:0,alpha:1,duration:1,delay:3});let g=d.p8.fromTo(s,{opacity:0,x:-50},{opacity:1,x:0,duration:1});p.ScrollTrigger.create({trigger:l,animation:g,start:"bottom 80%",end:"105% 100%",toggleActions:"play none none reverse"});let h=d.p8.fromTo(o,{opacity:0,x:50},{opacity:1,x:0,duration:1});p.ScrollTrigger.create({trigger:l,animation:h,start:"bottom 80%",end:"105% 100%",toggleActions:"play none none reverse"});let u=d.p8.fromTo(i,{opacity:0,y:-50},{opacity:1,y:0,duration:1});p.ScrollTrigger.create({trigger:o,animation:u,start:"bottom 80%",end:"105% 100%",toggleActions:"play none none reverse"});let j=d.p8.fromTo(c,{opacity:0,y:50},{opacity:1,y:0,duration:1});p.ScrollTrigger.create({trigger:i,animation:j,start:"50% 80%",end:"120% 100%",toggleActions:"play none none reverse"});let y=d.p8.fromTo(n,{opacity:0,y:-50},{opacity:1,y:0,duration:1});p.ScrollTrigger.create({trigger:c,animation:y,start:"bottom 80%",end:"105% 100%",toggleActions:"play none none reverse"});let f=d.p8.fromTo(x,{opacity:0,y:50},{opacity:1,y:0,duration:1});p.ScrollTrigger.create({trigger:m,animation:f,start:"55% 80%",end:"120% 100%",toggleActions:"play none none reverse"});let v=d.p8.fromTo(m,{opacity:0,y:50},{opacity:1,y:0,duration:1});p.ScrollTrigger.create({trigger:n,animation:v,start:"50% 80%",end:"120% 100%",toggleActions:"play none none reverse"})},[]),(0,s.useEffect)(()=>{o&&fetch("http://localhost:8000/api/projects/".concat(o)).then(e=>{if(!e.ok)throw Error("Project not found: ".concat(o));return e.json()}).then(e=>t(e)).catch(e=>{console.error(e),r.push("/404")})},[o,r]),(0,s.useEffect)(()=>{o&&e&&0!==e.length&&(document.title="Julien Estanis | ".concat(e.title," | Paris"))},[o,e]);let g=()=>{let e=Number(o)-1;r.push("/project/".concat(e))},u=()=>{let e=Number(o)+1;r.push("/project/".concat(e))};if(!e)return(0,a.jsx)("main",{className:"isolate",children:(0,a.jsx)("div",{className:"relative",children:(0,a.jsx)("div",{className:"py-24 sm:py-32",children:"Loading..."})})});let j=[{name:"Projects",href:"/projects",current:!1},{name:e.title,href:"#",current:!0}];return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("main",{className:"isolate",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:(0,a.jsx)("div",{className:"mx-auto max-w-2xl lg:max-w-4xl text-left",children:(0,a.jsx)("nav",{className:"flex","aria-label":"Breadcrumb",children:(0,a.jsxs)("ol",{role:"list",className:"flex items-center space-x-4",children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{children:(0,a.jsxs)(i(),{href:"/",className:"text-gray-400 hover:text-gray-500",children:[(0,a.jsx)(m,{className:"h-5 w-5 flex-shrink-0","aria-hidden":"true"}),(0,a.jsx)("span",{className:"sr-only",children:"Home"})]})})}),j.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(x,{className:"h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),(0,a.jsxs)(i(),{href:e.href,className:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700","aria-current":e.current?"page":void 0,children:[e.name," \xa0"]})]})},e.name))]})})})}),(0,a.jsxs)("div",{className:"py-24 sm:py-32",children:[(0,a.jsx)("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",children:(0,a.jsxs)("svg",{className:"relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]",viewBox:"0 0 1155 678",children:[(0,a.jsx)("path",{fill:"url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)",fillOpacity:".3",d:"M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"}),(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"9b2541ea-d39d-499b-bd42-aeea3e93f5ff",x1:"1155.49",x2:"-78.208",y1:".177",y2:"474.645",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#00AB6"}),(0,a.jsx)("stop",{offset:1,stopColor:"#00FFA3"})]})})]})}),(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8 about-project",children:e&&(0,a.jsx)("div",{className:"mx-auto max-w-2xl lg:max-w-4xl text-left",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl leading-10",children:e.catchphrase}),(0,a.jsx)("p",{className:"text-2sm font-light tracking-tight text-gray-900 mt-5",children:e.description})]}),(0,a.jsx)(h(),{className:"col-span-2 max-h-12 w-full object-contain lg:col-span-1",src:e.herourl,alt:"Reform",width:158,height:48})]})})}),(0,a.jsx)(h(),{src:"https://tailwindui.com/img/component-images/project-app-screenshot.png",alt:"App screenshot",width:2432,height:600,className:"ring-1 ring-gray-900/10 my-20 md:my-44 ring-img-g"}),(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"mx-auto max-w-2xl lg:max-w-4xl text-left",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 items-center gap-x-8 sm:gap-y-0 lg:gap-y-16 lg:grid-cols-2 items-baseline",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h2",{className:"role text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10",children:"Role"})}),(0,a.jsx)("p",{className:"text-2sm font-light tracking-tight text-gray-900 mt-5 project-role",children:e.role})]}),(0,a.jsxs)("div",{className:"my-20 md:my-44",children:[(0,a.jsx)("h3",{className:"overview text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 mb-10",children:"Overview"}),(0,a.jsx)(h(),{src:"https://tailwindui.com/img/component-images/project-app-screenshot.png",alt:"App screenshot",width:2432,height:600,className:"project-overview ring-1 ring-gray-900/10"})]}),(0,a.jsx)("div",{className:"absolute inset-x-0 top-[calc(70%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-30rem)]",children:(0,a.jsxs)("svg",{className:"relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]",viewBox:"0 0 1155 678",children:[(0,a.jsx)("path",{fill:"url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)",fillOpacity:".3",d:"M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"}),(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1",x1:"1155.49",x2:"-78.208",y1:".177",y2:"474.645",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#00AB6"}),(0,a.jsx)("stop",{offset:1,stopColor:"#00FFA3"})]})})]})}),(0,a.jsxs)("div",{className:"my-20 md:my-44",children:[(0,a.jsx)("h3",{className:"close-up text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 mb-5",children:"Close up look"}),(0,a.jsx)("p",{className:"project-text-close text-2sm font-light tracking-tight text-gray-900 mb-10",children:e.closeDescription}),(0,a.jsx)(h(),{src:"https://tailwindui.com/img/component-images/project-app-screenshot.png",alt:"App screenshot",width:2432,height:600,className:"project-img-close ring-1 ring-gray-900/10"})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("nav",{className:"flex items-center justify-between px-4 sm:px-0 my-20 md:my-10",children:[(0,a.jsx)("div",{className:"-mt-px flex w-0 flex-1",children:(0,a.jsxs)("button",{onClick:g,disabled:1===Number(o),className:"inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-[#00AB6D] hover:text-[#00AB6D]",children:[(0,a.jsx)(c,{className:"mr-3 h-5 w-5 hover:text-[#00AB6D]","aria-hidden":"true"}),"Previous"]})}),(0,a.jsx)("div",{className:"-mt-px flex w-0 flex-1 justify-end",children:(0,a.jsxs)("button",{onClick:u,className:"inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-[#00AB6D] hover:text-[#00AB6D]",children:["Next",(0,a.jsx)(n,{className:"ml-3 h-5 w-5 hover:text-[#00AB6D]","aria-hidden":"true"})]})})]})}),(0,a.jsx)("div",{})]})})]})]})})})};t.default=u}},function(e){e.O(0,[802,663,410,774,888,179],function(){return e(e.s=1244)}),_N_E=e.O()}]);