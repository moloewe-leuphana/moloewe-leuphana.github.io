"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,f=h["".concat(o,".").concat(u)]||h[u]||d[u]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},s="Screens",c={unversionedId:"the-interface/screens",id:"the-interface/screens",title:"Screens",description:'Once you select a project, you can visit the Screens page of the project by clicking on "Screens" on the left panel of the user interface.',source:"@site/docs/02-the-interface/06_screens.md",sourceDirName:"02-the-interface",slug:"/the-interface/screens",permalink:"/docs/the-interface/screens",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Slides",permalink:"/docs/the-interface/slides"},next:{title:"Sessions",permalink:"/docs/the-interface/sessions"}},o={},l=[{value:"<strong>1 Creating New Screens</strong>",id:"1-creating-new-screens",level:2},{value:"<strong>2 Editing Screen Details</strong>",id:"2-editing-screen-details",level:2},{value:"<strong>3 Deleting Screens</strong>",id:"3-deleting-screens",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"screens"},"Screens"),(0,a.kt)("p",null,'Once you select a project, you can visit the Screens page of the project by clicking on "Screens" on the left panel of the user interface.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5923).Z,width:"1920",height:"966"})),(0,a.kt)("p",null,"The screens page displays the screens associated with a selected project. Additionally, this page allows users to create, edit, and delete screens that they need for their project."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'Note that the colloquial meaning of screens as display devices differs from the meaning assigned to "Screen / Screens" in MoL\xf6we. Display devices are referred to either as "monitor / monitors" or as "display device / display devices".')),(0,a.kt)("p",null,"One of the primary features of MoL\xf6we is that it supports multi-monitor presentations."),(0,a.kt)("p",null,"Assuming that there are ",(0,a.kt)("strong",{parentName:"p"},"Z")," number of display devices available and that a project contains ",(0,a.kt)("strong",{parentName:"p"},"X")," number of Slides and ",(0,a.kt)("strong",{parentName:"p"},"Y")," number of Screens, following are relevant information on the Screens:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The values of ",(0,a.kt)("strong",{parentName:"li"},"X"),", ",(0,a.kt)("strong",{parentName:"li"},"Y"),", and ",(0,a.kt)("strong",{parentName:"li"},"Z")," do not have to be the same. More Screens than the available number of display devices can be defined."),(0,a.kt)("li",{parentName:"ul"},'Each Screen in a project contains a "Start Slide" which acts as the default Slide associated with the Screen for the project at the beginning of the presentation.'),(0,a.kt)("li",{parentName:"ul"},'The Slides of the project can be placed into different Screens. The default "Start Slide" can be changed by following steps outlined in Step 3 below.'),(0,a.kt)("li",{parentName:"ul"},"All Screens must contain a Start Slide. However, not all Slides need to be associated with a Screen."),(0,a.kt)("li",{parentName:"ul"},"The Screens of a project can be selected and placed on any display device."),(0,a.kt)("li",{parentName:"ul"},"The Screens of a project placed on a display device can be changed during the presentation from the ",(0,a.kt)("strong",{parentName:"li"},"Controller Mode"),"."),(0,a.kt)("li",{parentName:"ul"},"The Slides associated with a given screen can be changed during the presentation from the ",(0,a.kt)("strong",{parentName:"li"},"Controller Mode"),".")),(0,a.kt)("h2",{id:"1-creating-new-screens"},(0,a.kt)("strong",{parentName:"h2"},"1 Creating New Screens")),(0,a.kt)("p",null,'By default, a project will initialize with a screen (named "Screen 1" by default) that contains as its Start Slide a Slide that has also automatically generated (named "Slide 1" by default).'),(0,a.kt)("p",null,'If a user has appropriate access rights, she can create a new Screen by pressing on the "Create Screen" button below the list of Screens.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7353).Z,width:"563",height:"288"})),(0,a.kt)("p",null,'Then, the users will be presented a page where the Screen being created can be given a name (in the example below, the new Screen is named as "Screen 2").  '),(0,a.kt)("p",null,"Additionally, the Start Slide to be associated with this Screen also needs to be selected in this step.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8988).Z,width:"1568",height:"519"})),(0,a.kt)("p",null,'After naming the Screen, users can click on "Save" button to confirm creation of the Screen.'),(0,a.kt)("p",null,"In the same page, users can also change other metadata of the Screen; namely, Screen name, and Screen description."),(0,a.kt)("h2",{id:"2-editing-screen-details"},(0,a.kt)("strong",{parentName:"h2"},"2 Editing Screen Details")),(0,a.kt)("p",null,'Screens can be given custom names, descriptions, and a Start Slide. To edit these parameters, users can click on the "',(0,a.kt)("strong",{parentName:"p"},"i"),'" icon on the right hand side of the name of the Screen from the Screens page.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6907).Z,width:"1551",height:"393"})),(0,a.kt)("p",null,"Then, the user is taken to a page where the Screen details can be changed."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6552).Z,width:"1562",height:"605"})),(0,a.kt)("p",null,"From this page, the following details of the Screens can be changed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Screen Name"),(0,a.kt)("li",{parentName:"ul"},"Screen Description"),(0,a.kt)("li",{parentName:"ul"},"Start Slide associated with the Screen")),(0,a.kt)("p",null,'Once the changes have been made, the changes can be saved by pressing on the "Save" button on the right side of the page.'),(0,a.kt)("p",null,'This page also allows users to delete the Screen by clicking on the "Delete" button.'),(0,a.kt)("h2",{id:"3-deleting-screens"},(0,a.kt)("strong",{parentName:"h2"},"3 Deleting Screens")),(0,a.kt)("p",null,'The interface that is used to edit the details of screens (outlined in Step 2 above) also allows users to delete the Screen by clicking on the "Delete" button.'))}d.isMDXComponent=!0},5923:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/08_screens_page-ffd042bc149a1c721c41ce712803ba99.jpg"},7353:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/46_create_screen-61205f630d565b17c0480b8bc8461d29.jpg"},8988:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/47_create_screen_interface-fe624242feae1e73beb4dc58a2e19ae4.jpg"},6907:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/48_edit_slide_details_button-a5a3451fc4ec2033d17bc35d1d47e1ff.jpg"},6552:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/49_edit_screen_details_interface-4a8c0c8cf978461d92b173340cc9624f.jpg"}}]);