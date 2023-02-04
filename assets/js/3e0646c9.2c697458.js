"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8173],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>w});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function A(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?A(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},A=Object.keys(e);for(i=0;i<A.length;i++)o=A[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(i=0;i<A.length;i++)o=A[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,A=e.originalType,s=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=l(o),w=n,c=p["".concat(s,".").concat(w)]||p[w]||f[w]||A;return o?i.createElement(c,r(r({ref:t},h),{},{components:o})):i.createElement(c,r({ref:t},h))}));function w(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var A=o.length,r=new Array(A);r[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,r[1]=a;for(var l=2;l<A;l++)r[l]=o[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2728:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>A,metadata:()=>a,toc:()=>l});var i=o(7462),n=(o(7294),o(3905));const A={},r="Switch",a={unversionedId:"moloewe-tools/switch",id:"moloewe-tools/switch",title:"Switch",description:"The Switch tool is used to interact with a presentation and allows users to change the value of a variable (i.e. parameter)",source:"@site/docs/moloewe-tools/09_switch.md",sourceDirName:"moloewe-tools",slug:"/moloewe-tools/switch",permalink:"/docs/moloewe-tools/switch",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Slider",permalink:"/docs/moloewe-tools/slider"},next:{title:"Dropdown",permalink:"/docs/moloewe-tools/dropdown"}},s={},l=[{value:"<strong>Placing a Switch Tool on a Slide (Edit Mode)</strong>",id:"placing-a-switch-tool-on-a-slide-edit-mode",level:2},{value:"<strong>Using a Switch Tool during Presentation</strong>",id:"using-a-switch-tool-during-presentation",level:2}],h={toc:l};function f(e){let{components:t,...A}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,A,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"switch"},"Switch"),(0,n.kt)("p",null,"The Switch tool is used to interact with a presentation and allows users to change the value of a variable (i.e. parameter)\nfrom one to another."),(0,n.kt)("p",null,"The Switch tool requires definition of a function on the Project Notebook."),(0,n.kt)("h2",{id:"placing-a-switch-tool-on-a-slide-edit-mode"},(0,n.kt)("strong",{parentName:"h2"},"Placing a Switch Tool on a Slide (Edit Mode)")),(0,n.kt)("p",null,"To place a Switch Tool on a Slide, first define the Switch Tool on the Project Notebook and upload the notebook to MoL\xf6we.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/docs/project_notebook/setting_up_tools"},(0,n.kt)("strong",{parentName:"a"},"here"))," on how to set up the Switch Tool in the Project\nNotebook."),(0,n.kt)("p",null,"Then, open the slide in which the Switch Tool needs to be placed in Edit Mode."),(0,n.kt)("p",null,"Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps\noutlined ",(0,n.kt)("a",{parentName:"p",href:"/docs/edit-mode/slides#4-editing-slides-edit-mode"},(0,n.kt)("strong",{parentName:"a"},"here")),"."),(0,n.kt)("p",null,"Following that, click on the Switch icon."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(8100).Z,width:"785",height:"623"})),(0,n.kt)("p",null,"This will place a container for the Switch Tool onto the slide."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(9898).Z,width:"682",height:"401"})),(0,n.kt)("p",null,"When a user hovers over this container, they will be presented with a gear icon (on the top right of the container)\nthat they can click on."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(1885).Z,width:"266",height:"93"})),(0,n.kt)("p",null,"Clicking on this icon opens an interface that allows users to select the options for selecting the Switch function."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(506).Z,width:"784",height:"637"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Tool Name"),": allows you to set a unique identifier for the button."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Get Function"),": (defined in the Project Notebook) see description ",(0,n.kt)("a",{parentName:"li",href:"#defining-a-switch-tool-on-project-notebook"},(0,n.kt)("strong",{parentName:"a"},"above")),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Set Function"),": (defined in the Project Notebook) see description ",(0,n.kt)("a",{parentName:"li",href:"#defining-a-switch-tool-on-project-notebook"},(0,n.kt)("strong",{parentName:"a"},"above")),".")),(0,n.kt)("p",null,'When the Tool Name, Get Function and Set Function have been set/selected, users can click on the "Save" button.\nOptionally, users can also set a Header, Footer, and Description texts.'),(0,n.kt)("p",null,"Then, users are taken back to the slide in Edit Mode."),(0,n.kt)("p",null,"Following this, the user can ",(0,n.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/overview#resize-a-tool"},(0,n.kt)("strong",{parentName:"a"},"resize"))," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/overview#reposition-a-tool"},(0,n.kt)("strong",{parentName:"a"},"reposition")),"\nthe tool as they desire."),(0,n.kt)("p",null,"The final result is a Switch Tool on the slide that determines what value is stored in the global variable as defined\nunder the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_")," function."),(0,n.kt)("p",null,"Do note that when the slide is in Edit Mode, a rectangular box appears around the tool. This box does not appear around\nthe tool when the slide is viewed in Presentation or Controller Modes."),(0,n.kt)("h2",{id:"using-a-switch-tool-during-presentation"},(0,n.kt)("strong",{parentName:"h2"},"Using a Switch Tool during Presentation")),(0,n.kt)("p",null,"During presentation (i.e. while at Presentation Mode or Controller Mode), users can interact with the Switch Tool by\npressing (or clicking) on the tool to toggle it on and off. This action can be performed either with the mouse pointer\nor with the touch of a finger."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(6931).Z,width:"388",height:"189"})),(0,n.kt)("p",null,"When in Edit Mode, the Switch tool will be surrounded by a rectangular box. When in Controller Mode, the Switch tool\nappears without the rectangular box surrounding it."))}f.isMDXComponent=!0},9898:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/38_tool_field-630be267f08f54374da51cc1e819bb79.jpg"},1885:(e,t,o)=>{o.d(t,{Z:()=>i});const i="data:image/jpeg;base64,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"},8100:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/65_switch-d1be5e73d899e8b5e7c4017e89dfe355.jpg"},506:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/65_switch_2-32177480aa5e68e2ad98cd3db91df453.jpg"},6931:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/65_switch_3-d0ea7701f418586b379fccbf1799a8c8.jpg"}}]);