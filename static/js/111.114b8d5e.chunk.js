"use strict";(self.webpackChunkwarmhospitalityllc=self.webpackChunkwarmhospitalityllc||[]).push([[111],{111:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var l=s(791);const a={_origin:"https://api.emailjs.com"},r=(e,t,s)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class n{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const x=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((l,r)=>{const x=new XMLHttpRequest;x.addEventListener("load",(e=>{let{target:t}=e;const s=new n(t);200===s.status||"OK"===s.text?l(s):r(s)})),x.addEventListener("error",(e=>{let{target:t}=e;r(new n(t))})),x.open("POST",a._origin+e,!0),Object.keys(s).forEach((e=>{x.setRequestHeader(e,s[e])})),x.send(t)}))},o=(e,t,s,l)=>{const n=l||a._userID,o=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(s);r(n,e,t);const i=new FormData(o);return i.append("lib_version","3.11.0"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",n),x("/api/v1.0/email/send-form",i)};var i=s(184);const c=()=>(0,i.jsx)("p",{children:"Your message has been successfully sent!"}),m=()=>{const[e,t]=(0,l.useState)({name:"",lastName:"",email:"",phone:"",message:""}),[s,a]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1);(0,l.useEffect)((()=>{const e=()=>{const e=window.scrollY;document.querySelectorAll(".parallax-element").forEach((t=>{const s=t.dataset.speed;t.style.transform="translateY(".concat(e*s,"px)")}))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);const x=s=>{const l=s.target.name,a=s.target.value;if("email"===l){n(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a))}t({...e,[l]:a})},m=()=>(0,i.jsx)("p",{children:"**Please enter a valid email**"});return setTimeout((()=>{a(!1)}),1e4),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"min-h-screen text-3xl text-center bg-fixed bg-center bg-no-repeat bg-cover large-container parallax-element bg-BG font-Raleway",children:(0,i.jsxs)("div",{className:"fixed inset-0 flex flex-col items-center justify-center w-screen pt-32 overflow-x-hidden bg-color-BG bg-opacity-60",children:[(0,i.jsxs)("h1",{className:"pt-32 text-5xl font-semibold text-black lg:pt-40 xl:pt-72",children:["Contact ",(0,i.jsx)("span",{className:"font-semibold text-black",children:"Us"})]}),(0,i.jsx)("p",{className:"pt-4 text-xs text-black sm:text-base lg:text-lg",children:"Please feel free to reach out with any questions here or email us at info@warmhospitalitygroup.com"}),(0,i.jsx)("div",{className:"flex items-center justify-center m-4 lg:pt-60 2xl:pt-20 lg:my-0 sm:w-11/12 sm:h-full ",children:(0,i.jsx)("div",{className:"w-full",children:(0,i.jsxs)("form",{className:"flex flex-col mx-auto text-center lg:pt-10",method:"post",onSubmit:e=>{e.preventDefault(),r||(o("service_6dy0jp8","template_0xg8atn",e.target,"YwTj1knNMEuoJMbCX").then((e=>{console.log(e.text)}),(e=>{console.log(e.text)})),e.target.reset(),t(""),t({message:""}),a(!0))},children:[(0,i.jsxs)("div",{className:"flex mb-2 space-x-5 sm:space-x-10",children:[(0,i.jsxs)("div",{className:"flex flex-col w-full",children:[(0,i.jsx)("label",{className:"flex text-xs text-black sm:text-base lg:text-lg",children:"First Name (required)"}),(0,i.jsx)("input",{className:"w-full p-2 text-xs border-2 border-black border-solid h-7 lg:h-auto sm:text-base lg:text-lg lg:mt-2",type:"text",name:"name",id:"",onChange:x,value:e.name,placeholder:"First name",required:!0})]}),(0,i.jsxs)("div",{className:"flex flex-col w-full",children:[(0,i.jsx)("label",{className:"flex text-xs text-black sm:text-base lg:text-lg",children:"Last Name"}),(0,i.jsx)("input",{className:"w-full p-2 px-2 text-xs border-2 border-black border-solid sm:text-base h-7 lg:h-auto lg:text-lg lg:mt-2",type:"text",name:"lastName",id:"",onChange:x,value:e.lastName,placeholder:"Last name"})]})]}),(0,i.jsx)("label",{className:"flex text-xs text-black sm:text-base lg:text-lg lg:pt-2",children:"Email (required)"}),(0,i.jsx)("input",{className:"flex text-xs border-2 h-7 border-black border-solid lg:mt-2 sm:text-base lg:px-[12px] lg:text-lg lg:h-auto lg:py-[8px] px-2",type:"email",name:"email",id:"",onChange:x,value:e.email,placeholder:"example@gmail.com",required:!0}),(0,i.jsx)("h2",{className:"text-base font-semibold text-center text-red-500 underline ",children:r?(0,i.jsx)(m,{}):null}),(0,i.jsx)("label",{className:"flex text-xs text-black sm:text-base lg:text-lg lg:pt-2 ",children:"Phone Number"}),(0,i.jsx)("input",{className:"flex text-xs border-2 h-7 border-black border-solid lg:mt-2 sm:text-base lg:px-[12px] lg:h-auto lg:text-lg lg:py-[8px] px-2",type:"phone",name:"phone",id:"",onChange:x,value:e.phone,placeholder:"+1 (xxx)-xxx-xxxx"}),(0,i.jsx)("label",{className:"flex text-xs text-black lg:text-lg sm:text-base lg:pt-2",children:"Message (required)"}),(0,i.jsx)("textarea",{className:"flex px-2 mb-5 text-xs border-2 border-black border-solid sm:text-base lg:mb-8 lg:text-lg lg:mt-2",name:"message",id:"",cols:"30",rows:"10",onChange:x,value:e.message,placeholder:"Enter message here...",required:!0}),(0,i.jsx)("div",{className:"flex justify-center mb-0 lg:h-auto",children:(0,i.jsx)("button",{className:"flex items-center justify-center w-48 text-base text-center text-white bg-black rounded-lg bt-black sm:text-lg hover:bg-white hover:text-black lg:w-20 lg:mb-4",type:"submit",children:"Send"})}),(0,i.jsx)("h2",{className:"pt-5 text-lg",children:s?(0,i.jsx)(c,{}):null})]})})})]})})})}}}]);
//# sourceMappingURL=111.114b8d5e.chunk.js.map