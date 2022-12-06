"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3877],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>p});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var A=n.createContext({}),l=function(e){var t=n.useContext(A),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},h=function(e){var t=l(e.components);return n.createElement(A.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,A=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=l(o),p=i,u=c["".concat(A,".").concat(p)]||c[p]||f[p]||s;return o?n.createElement(u,a(a({ref:t},h),{},{components:o})):n.createElement(u,a({ref:t},h))}));function p(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,a=new Array(s);a[0]=c;var r={};for(var A in t)hasOwnProperty.call(t,A)&&(r[A]=t[A]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var l=2;l<s;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},712:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>A,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=o(7462),i=(o(7294),o(3905));const s={},a="Change Scene Button",r={unversionedId:"moloewe-tools/change-scene",id:"moloewe-tools/change-scene",title:"Change Scene Button",description:"The Change Scene Button tool looks like and works similarly to the Button tool. It is used to interact with the presentation and allows that several screens will switch to different slides at the same time.This makes it possible to create presentations that are more suited for exhibitions and self-guided environments.",source:"@site/docs/03-moloewe-tools/11_change-scene.md",sourceDirName:"03-moloewe-tools",slug:"/moloewe-tools/change-scene",permalink:"/docs/moloewe-tools/change-scene",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03-moloewe-tools/11_change-scene.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dropdown",permalink:"/docs/moloewe-tools/dropdown"},next:{title:"Working with Notebooks",permalink:"/docs/category/working-with-notebooks"}},A={},l=[{value:"<strong>Place Change Scene Button on a Slide</strong>",id:"place-change-scene-button-on-a-slide",level:2},{value:"Switch screens to different slides",id:"switch-screens-to-different-slides",level:3},{value:"<strong>Using Features of a Change Scene Button (Presentation Mode)</strong>",id:"using-features-of-a-change-scene-button-presentation-mode",level:2}],h={toc:l};function f(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"change-scene-button"},"Change Scene Button"),(0,i.kt)("p",null,"The Change Scene Button tool looks like and works similarly to the Button tool. It is used to interact with the presentation and allows that several screens will switch to different slides at the same time.This makes it possible to create presentations that are more suited for exhibitions and self-guided environments."),(0,i.kt)("h2",{id:"place-change-scene-button-on-a-slide"},(0,i.kt)("strong",{parentName:"h2"},"Place Change Scene Button on a Slide")),(0,i.kt)("p",null,"In order to put a change scene button on a slide, follow the following steps:"),(0,i.kt)("p",null,"First, open the tool selection panel in Edit Mode on the page that you want to place a button in by following steps outlined ",(0,i.kt)("a",{parentName:"p",href:"/docs/the-interface/slides#4-editing-slides-edit-mode"},(0,i.kt)("strong",{parentName:"a"},"here")),"."),(0,i.kt)("p",null,"Then, click on the Change Scene Button icon (signified by a circle)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(8997).Z,width:"765",height:"608"})),(0,i.kt)("p",null,"This will place a container for the Change Scene Tool onto the slide."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(9898).Z,width:"682",height:"401"})),(0,i.kt)("p",null,"When a user hovers over this container, they will be presented with a gear icon (on the top right of the container) that they can click on."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(1885).Z,width:"266",height:"93"})),(0,i.kt)("p",null,"Clicking on this icon opens an interface that allows users to select the options for setting the button behavior."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(5747).Z,width:"758",height:"557"})),(0,i.kt)("p",null,"The required fields in this interface are the ",(0,i.kt)("strong",{parentName:"p"},"Tool Name"),", ",(0,i.kt)("strong",{parentName:"p"},"Button Text"),", and ",(0,i.kt)("strong",{parentName:"p"},"Define Scene"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Tool Name"),": allows you to set a unique identifier for the button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Button Text"),": allows you to set the text that appears on the button."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Define Scene"),": allows you to set a display sequence of Screens and Slides. ")),(0,i.kt)("p",null,'The plus icon on the options menu allows you to add more Screen and Slide combinations. The minus icon deletes scenes. When the Tool Name, Button Text and the define scene features have been set/selected, users can click on the "Save" button. Then, users are taken back to the slide in Edit Mode.\nOptionally, the user can also set a Header and a Footer Text for the Change Scene Button tool that is to be placed on the slide. The tool preferences also have an optional setting for a time period after which this button function is executed automatically.'),(0,i.kt)("p",null,"Following this, the user can ",(0,i.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/overview#resize-a-tool"},(0,i.kt)("strong",{parentName:"a"},"resize"))," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/overview#reposition-a-tool"},(0,i.kt)("strong",{parentName:"a"},"reposition"))," the tool as they desire."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(231).Z,width:"762",height:"552"})),(0,i.kt)("h3",{id:"switch-screens-to-different-slides"},"Switch screens to different slides"),(0,i.kt)("p",null,"With the options for the Change Scene Button set, Slides will switch on more than one Screen simultaneously. The Change Scene Button can be placed on any Slide, but for a workshop presentation it is useful to have all Change Scene Button on one controller panel Slide.  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(2161).Z,width:"1591",height:"739"})),(0,i.kt)("p",null,"Do note that when the slide is in Edit Mode, a rectangular box appears around the Change Scene Button. This box does not appear around the button when the slide is viewed in Presentation or Controller Modes."),(0,i.kt)("h2",{id:"using-features-of-a-change-scene-button-presentation-mode"},(0,i.kt)("strong",{parentName:"h2"},"Using Features of a Change Scene Button (Presentation Mode)")),(0,i.kt)("p",null,"While viewing a slide that contains a Change Scene Button Tool on Presentation Mode, users can interact with the button by clicking it with their mouse pointer (if using a desktop computer with a mouse) or by pressing on it (if using a touchscreen display device)."))}f.isMDXComponent=!0},9898:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/38_tool_field-630be267f08f54374da51cc1e819bb79.jpg"},1885:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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"},5747:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/change_scene_button_options-673c748729effe9980bd0d30b15d4db0.jpg"},231:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/change_scene_button_options2-2aa7591672d7023d7847129f4b041efb.jpg"},2161:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/controller_tablet-0d7df958d4ba9fb251b41a605c3cf773.jpg"},8997:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create_change_scene_button-81e5e9e3f010705370bb36a273b48747.jpg"}}]);