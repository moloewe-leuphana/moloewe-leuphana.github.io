"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8923],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(o),k=a,h=b["".concat(l,".").concat(k)]||b[k]||d[k]||r;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},9143:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={},i="Notebooks",s={unversionedId:"edit-mode/notebooks",id:"edit-mode/notebooks",title:"Notebooks",description:'Once you select a project, you can visit the Notebooks page of the project by clicking on "Notebooks" on the left',source:"@site/docs/edit-mode/02_notebooks.md",sourceDirName:"edit-mode",slug:"/edit-mode/notebooks",permalink:"/docs/edit-mode/notebooks",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Projects",permalink:"/docs/edit-mode/projects"},next:{title:"Files",permalink:"/docs/edit-mode/files"}},l={},c=[{value:"<strong>1 Upload a new Notebook</strong>",id:"1-upload-a-new-notebook",level:2},{value:"<strong>2 Edit Project Notebook Details</strong>",id:"2-edit-project-notebook-details",level:2},{value:"<strong>3 Download a Project Notebook</strong>",id:"3-download-a-project-notebook",level:2},{value:"<strong>4 Delete a Project Notebook</strong>",id:"4-delete-a-project-notebook",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notebooks"},"Notebooks"),(0,a.kt)("p",null,'Once you select a project, you can visit the Notebooks page of the project by clicking on "Notebooks" on the left\npanel of the user interface.'),(0,a.kt)("p",null,"This page displays the Jupyter Notebook associated with a project that has been selected."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(3209).Z,width:"1920",height:"966"})),(0,a.kt)("p",null,"By default, a new project has a notebook named ",(0,a.kt)("em",{parentName:"p"},"Template Notebook")," automatically placed on this page. Users can\ndownload this notebook and edit it for their project if they so choose. The steps for downloading the\n",(0,a.kt)("em",{parentName:"p"},"Template Notebook")," are outlined in Section 3 below."),(0,a.kt)("h2",{id:"1-upload-a-new-notebook"},(0,a.kt)("strong",{parentName:"h2"},"1 Upload a new Notebook")),(0,a.kt)("p",null,'Users can upload a new notebook for their project by clicking on the "Import Notebook" button.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(4262).Z,width:"433",height:"263"})),(0,a.kt)("p",null,'When the "Import Notebook" button is clicked, users are presented with an interface (see below) that allow uploading a new notebook.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5605).Z,width:"1575",height:"504"})),(0,a.kt)("p",null,'From this interface, a new notebook can be uploaded from a user\'s computer by clicking on "Click here to select\nfile ..." button as shown below.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9405).Z,width:"572",height:"128"})),(0,a.kt)("p",null,"Once a new notebook has been selected, the changes can be saved by clicking on the save button on the bottom right side of the page."),(0,a.kt)("h2",{id:"2-edit-project-notebook-details"},(0,a.kt)("strong",{parentName:"h2"},"2 Edit Project Notebook Details")),(0,a.kt)("p",null,'Notebooks can be given custom descriptions. This can be done by clicking on the "',(0,a.kt)("strong",{parentName:"p"},"i"),'" icon on the right-hand side\nof the name of the notebook.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(2013).Z,width:"1554",height:"250"})),(0,a.kt)("p",null,"When that button is pressed, the interface changes into a page that allows for the notebook description to be changed."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(8120).Z,width:"1559",height:"378"})),(0,a.kt)("p",null,'Once a description text has been typed in to the description box, the changes can be saved by clicking on the "Save" button.'),(0,a.kt)("h2",{id:"3-download-a-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"3 Download a Project Notebook")),(0,a.kt)("p",null,"To download a project notebook, enter the interface that allows users to change notebook details by following\nSection 2 outlined above. This should take users to the following page."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(8120).Z,width:"1559",height:"378"})),(0,a.kt)("p",null,'To download a project notebook, click on the "Export Notebook" button.'),(0,a.kt)("h2",{id:"4-delete-a-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"4 Delete a Project Notebook")),(0,a.kt)("p",null,"To delete a project notebook, enter the interface that allows users to change notebook details by following Section 2\noutlined above. This should take users to the following page."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(8120).Z,width:"1559",height:"378"})),(0,a.kt)("p",null,'To delete a project notebook, click on the "Delete Notebook" button.'))}d.isMDXComponent=!0},3209:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/05_notebooks_page-d745a9217f72e4c4483f7eff13e44bf0.jpg"},4262:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/19_import_notebook-89aaf13272071657196f8ca826e891fa.jpg"},5605:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/20_import_notebook_interface-d599ecf20c2e0221a55a13478daeae9b.jpg"},9405:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/21_select_notebook_upload-525397cf20f545f3ac16a580fbdd443b.jpg"},2013:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/22_change_notebook_details-88d2da540adbf2e2c37e20d58dc91574.jpg"},8120:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/23_change_notebook_details_interface-1559efe97338806985e8cee37e93470a.jpg"}}]);