"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4380],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),k=r,h=u["".concat(c,".").concat(k)]||u[k]||d[k]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9436:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:7},i="Project Notebook",s={unversionedId:"project_notebook",id:"project_notebook",title:"Project Notebook",description:"Each MoL\xf6we project contains a Project Notebook.",source:"@site/docs/project_notebook.md",sourceDirName:".",slug:"/project_notebook",permalink:"/docs/project_notebook",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"defaultSidebar",previous:{title:"Change Scene Button",permalink:"/docs/moloewe-tools/change-scene"},next:{title:"\ud83d\udcdd Create a Survey",permalink:"/docs/user-examples/survey"}},c={},l=[{value:"<strong>1 Acquiring the Project Notebook</strong>",id:"1-acquiring-the-project-notebook",level:2},{value:"<strong>2 Access and Edit the Project Notebook</strong>",id:"2-access-and-edit-the-project-notebook",level:2},{value:"<strong>3 Structure of a Project Notebook</strong>",id:"3-structure-of-a-project-notebook",level:2},{value:"3.1 Mandatory Section",id:"31-mandatory-section",level:3},{value:"3.1.1 Definition of Project Paths",id:"311-definition-of-project-paths",level:4},{value:"3.1.4 Definition of API Tokens and Keys",id:"314-definition-of-api-tokens-and-keys",level:4},{value:"3.2 Project-specific Source Code",id:"32-project-specific-source-code",level:3},{value:"<strong>4 Accessing Files via Project Notebook</strong>",id:"4-accessing-files-via-project-notebook",level:2},{value:"<strong>5 Important to Know</strong>",id:"5-important-to-know",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project-notebook"},"Project Notebook"),(0,r.kt)("p",null,"Each MoL\xf6we project contains a ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#project-notebook"},(0,r.kt)("strong",{parentName:"a"},"Project Notebook")),".\nHere you can set up some of the ",(0,r.kt)("strong",{parentName:"p"},"MoL\xf6we tools")," using Python programming.\nThe required steps to achieve this are presented in this chapter."),(0,r.kt)("p",null,"(Note: Some MoL\xf6we tools do not require to be set up in the Project Notebook, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/overview"},(0,r.kt)("strong",{parentName:"a"},"Tools Chapter")),")"),(0,r.kt)("h2",{id:"1-acquiring-the-project-notebook"},(0,r.kt)("strong",{parentName:"h2"},"1 Acquiring the Project Notebook")),(0,r.kt)("p",null,'When a new MoL\xf6we project is created, a Project Notebook is automatically generated (named "Template Notebook").\nPlease download the Notebook of your project by visiting the Notebooks page in your ',(0,r.kt)("a",{parentName:"p",href:"/docs/user-interface#3-edit-mode"},(0,r.kt)("strong",{parentName:"a"},"Project Page")),"\n(see ",(0,r.kt)("a",{parentName:"p",href:"/docs/edit-mode/notebooks#3-download-a-project-notebook"},(0,r.kt)("strong",{parentName:"a"},"here"))," on how to download a Project Notebook)."),(0,r.kt)("h2",{id:"2-access-and-edit-the-project-notebook"},(0,r.kt)("strong",{parentName:"h2"},"2 Access and Edit the Project Notebook")),(0,r.kt)("p",null,"You can access and edit the Project Notebook using ",(0,r.kt)("strong",{parentName:"p"},"JupyterHub"),".\nYou have received a username and password for JupyterHub together with your MoL\xf6we user account."),(0,r.kt)("p",null,"You can open Jupyterhub ",(0,r.kt)("a",{parentName:"p",href:"https://jupyter.leuphana.de/hub/login?next=%2Fhub%2F"},(0,r.kt)("strong",{parentName:"a"},"here")),"."),(0,r.kt)("h2",{id:"3-structure-of-a-project-notebook"},(0,r.kt)("strong",{parentName:"h2"},"3 Structure of a Project Notebook")),(0,r.kt)("p",null,"All Project Notebooks must follow the same structure outlined below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Mandatory Section"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Definition of project paths"),(0,r.kt)("li",{parentName:"ol"},"Installation of required packages"),(0,r.kt)("li",{parentName:"ol"},"Importing necessary packages"),(0,r.kt)("li",{parentName:"ol"},"Definition of API Tokens and Keys (optional)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Project-specific Source Code"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Switch Tool"),(0,r.kt)("li",{parentName:"ol"},"Dropdown List"),(0,r.kt)("li",{parentName:"ol"},"Button"),(0,r.kt)("li",{parentName:"ol"},"Slider"),(0,r.kt)("li",{parentName:"ol"},"Map"),(0,r.kt)("li",{parentName:"ol"},"Graph")))),(0,r.kt)("h3",{id:"31-mandatory-section"},"3.1 Mandatory Section"),(0,r.kt)("p",null,'This section contains all the code that is necessary for the MoL\xf6we back-end and for the "Project-specific Source Code"\nsection described below.'),(0,r.kt)("h4",{id:"311-definition-of-project-paths"},"3.1.1 Definition of Project Paths"),(0,r.kt)("p",null,"The Python class Moloewe and code that goes in this section allows referencing of files by using relative paths.\nThis means that users do not have to know/remember the project path to reference a data file that they uploaded.\n",(0,r.kt)("strong",{parentName:"p"},"This class and code needs to be present for the MoL\xf6we to work"),"; the code that needs to be written in this section is standardized."),(0,r.kt)("h4",{id:"314-definition-of-api-tokens-and-keys"},"3.1.4 Definition of API Tokens and Keys"),(0,r.kt)("p",null,"API Tokens or Keys are not required if the libraries/packages that are being used do not specifically require them.\nIf you are not sure if you need an API Key/Token, refer to the library's documentation."),(0,r.kt)("p",null,"If an API key is required, they can be defined as a string (",(0,r.kt)("inlineCode",{parentName:"p"},"str"),") in a separate section in order to maintain a\ncoherent structure in the Project Notebook."),(0,r.kt)("p",null,"Following code snippet shows what the API Key that is defined might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'mapbox_access_token = "ew.ecI9kWp"\n')),(0,r.kt)("h3",{id:"32-project-specific-source-code"},"3.2 Project-specific Source Code"),(0,r.kt)("p",null,'Each MoL\xf6we tool is written in a specific structure, called a "function".\nIn order to set up a MoL\xf6we tool, you need to add its function code to the Project Notebook and then customize it to your\nliking.'),(0,r.kt)("p",null,"The project-specific python code also follow a specific syntax or structure. As such, the example code snippets\nfrom the Template Notebook (or this documentation) can be used as references in order to create different tools that\nneed to be defined for the MoL\xf6we project."),(0,r.kt)("p",null,"Some MoL\xf6we Tools need Python code written in a specific structure. The tools that require a code from the Project\nNotebook are listed below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Switch Tool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dropdown List Tool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Button Tool"),": Some functions of the Button Tool require code from the Project Notebook."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Range Slider Tool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Map Tool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Graph Tool"))),(0,r.kt)("p",null,"In order to get an overview of the MoL\xf6we Tools, please visit the page in the MoL\xf6we Tools chapter."),(0,r.kt)("h2",{id:"4-accessing-files-via-project-notebook"},(0,r.kt)("strong",{parentName:"h2"},"4 Accessing Files via Project Notebook")),(0,r.kt)("p",null,"Files that have been uploaded from the front-end of MoL\xf6we can be accessed via the Project Notebook."),(0,r.kt)("p",null,"Assuming that a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"my_data.csv"),' has been uploaded to MoL\xf6we, the code snippet mentioned in Section\n"Mandatory Section" above allows users to reference the data file using the code shown below:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'global data\ndata_file = data + "my_data.csv"\n')),(0,r.kt)("p",null,"Once the data file has been appropriately referenced, as shown above, it can be loaded into a Pandas DataFrame by\nusing a code shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.read_csv(data_file)\n")),(0,r.kt)("p",null,"Data files only need to be read from within the functions that are defined for maps and graphs."),(0,r.kt)("h2",{id:"5-important-to-know"},(0,r.kt)("strong",{parentName:"h2"},"5 Important to Know")),(0,r.kt)("p",null,'Avoid any "code in the wild" - meaning code that is not wrapped into a function (def).\nBesides the code section outlined in Section "Mandatory Section", all other code must be defined within Python classes\nand functions for the respective tools.'))}d.isMDXComponent=!0}}]);