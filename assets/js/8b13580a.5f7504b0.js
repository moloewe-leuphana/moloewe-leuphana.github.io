"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2522],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2579:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:3},i="Advanced: Template Notebook",l={unversionedId:"project_notebook/template_notebook",id:"project_notebook/template_notebook",title:"Advanced: Template Notebook",description:"Each MoL\xf6we project contains a Project Notebook.",source:"@site/docs/project_notebook/template_notebook.md",sourceDirName:"project_notebook",slug:"/project_notebook/template_notebook",permalink:"/docs/project_notebook/template_notebook",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Advanced: Setting up an Environment",permalink:"/docs/project_notebook/setting_up_environment"},next:{title:"Switch",permalink:"/docs/user-examples/switch"}},s={},p=[{value:"<strong>1 Creating/Acquiring a Project Notebook</strong>",id:"1-creatingacquiring-a-project-notebook",level:2},{value:"<strong>2 Structure of a Project Notebook</strong>",id:"2-structure-of-a-project-notebook",level:2},{value:"2.1 Mandatory Section",id:"21-mandatory-section",level:3},{value:"2.1.1 Definition of Project Paths",id:"211-definition-of-project-paths",level:4},{value:"2.1.2 Installation of Required Packages",id:"212-installation-of-required-packages",level:4},{value:"2.1.3 Importing necessary packages",id:"213-importing-necessary-packages",level:4},{value:"2.1.4 Definition of API Tokens and Keys",id:"214-definition-of-api-tokens-and-keys",level:4},{value:"2.2 Project-specific Source Code",id:"22-project-specific-source-code",level:3},{value:"<strong>3 Accessing Files via Project Notebook</strong>",id:"3-accessing-files-via-project-notebook",level:2},{value:"<strong>4 Important to Know</strong>",id:"4-important-to-know",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-template-notebook"},"Advanced: Template Notebook"),(0,a.kt)("p",null,"Each MoL\xf6we project contains a ",(0,a.kt)("a",{parentName:"p",href:"/docs/glossary#notebook"},(0,a.kt)("strong",{parentName:"a"},"Project Notebook")),".\nIt is used to set up some of the MoL\xf6we tools, using a Python code written in a specific structure (i.e. function)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://jupyter-notebook.readthedocs.io/en/stable/"},(0,a.kt)("strong",{parentName:"a"},"Jupyter Notebook")),"."),(0,a.kt)("p",null,"MoL\xf6we system relies on a Project Notebook that follows a particular structure.\nThe notebook that follows this pre-defined structure and is uploaded to MoL\xf6we is called a ",(0,a.kt)("em",{parentName:"p"},"Project Notebook"),"."),(0,a.kt)("p",null,"In this page, the structure of the Project Notebook is outlined and some code examples are provided.\nIn doing so, following conditions are expected:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Users have followed the setup instructions outlined in Chapter "Setting up an Environment".'),(0,a.kt)("li",{parentName:"ol"},"Users have acquired a basic knowledge about how to work with Jupyter Notebook by following the reference documentation\navailable ",(0,a.kt)("a",{parentName:"li",href:"https://jupyter-notebook.readthedocs.io/en/stable/"},(0,a.kt)("em",{parentName:"a"},"here")),".")),(0,a.kt)("h2",{id:"1-creatingacquiring-a-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"1 Creating/Acquiring a Project Notebook")),(0,a.kt)("p",null,"Creating a Project Notebook from the scratch is not recommended because this approach can lead to many user errors and frustrations.\nInstead, users are recommended to download the Project Notebook from the project."),(0,a.kt)("p",null,'When a new project is created on MoL\xf6we, a Project Notebook named "Template Notebook" is automatically generated.\nThis notebook can be downloaded to the users\' computer by visiting the Projects page\n(see chapter "Notebooks" - Section "3 Download a Project Notebook")).'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'The Project Notebook generated when a project is created is named "Template Notebook" because it is meant to be used as\na template or reference to write the Python code necessary for the project.')),(0,a.kt)("p",null,"Once the notebook has been downloaded to the users' system, the user can open it in an active ipython session\n(see ",(0,a.kt)("a",{parentName:"p",href:"https://jupyter-notebook.readthedocs.io/en/stable/notebook.html#starting-the-notebook-server"},(0,a.kt)("em",{parentName:"a"},"this"))," for more information)."),(0,a.kt)("h2",{id:"2-structure-of-a-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"2 Structure of a Project Notebook")),(0,a.kt)("p",null,"All Project Notebooks must follow the same structure outlined below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Mandatory Section"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Definition of project paths"),(0,a.kt)("li",{parentName:"ol"},"Installation of required packages"),(0,a.kt)("li",{parentName:"ol"},"Importing necessary packages"),(0,a.kt)("li",{parentName:"ol"},"Definition of API Tokens and Keys (optional)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Project-specific Source Code"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Switch Tool"),(0,a.kt)("li",{parentName:"ol"},"Dropdown List"),(0,a.kt)("li",{parentName:"ol"},"Button"),(0,a.kt)("li",{parentName:"ol"},"Slider"),(0,a.kt)("li",{parentName:"ol"},"Map"),(0,a.kt)("li",{parentName:"ol"},"Graph")))),(0,a.kt)("h3",{id:"21-mandatory-section"},"2.1 Mandatory Section"),(0,a.kt)("p",null,'This section contains all the code that is necessary for the MoL\xf6we back-end and for the "Project-specific Source Code"\nsection described below.'),(0,a.kt)("h4",{id:"211-definition-of-project-paths"},"2.1.1 Definition of Project Paths"),(0,a.kt)("p",null,"The Python class Moloewe and code that goes in this section allows referencing of files by using relative paths.\nThis means that users do not have to know/remember the project path to reference a data file that they uploaded.\n",(0,a.kt)("strong",{parentName:"p"},"This class and code needs to be present for the MoL\xf6we to work"),"; the code that needs to be written in this section is standardized."),(0,a.kt)("h4",{id:"212-installation-of-required-packages"},"2.1.2 Installation of Required Packages"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Most of the commonly used packages are already installed by default and ",(0,a.kt)("strong",{parentName:"p"},"should not be installed or updated")," within\nthe Project Notebook. You should install only packages that are absolutely necessary and ",(0,a.kt)("strong",{parentName:"p"},"are not available by default"),".")),(0,a.kt)("p",null,"The code that goes in this section allows users to install packages that they need for their project.\nThese packages can be related to loading data, analysing data, making plots, etc."),(0,a.kt)("p",null,"The code for installing the packages looks like the following:",(0,a.kt)("br",{parentName:"p"}),"\n","(the following code example can be used to install a package named ",(0,a.kt)("inlineCode",{parentName:"p"},"package_name"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!pip install package_name\n")),(0,a.kt)("p",null,"Please note the exclamation mark placed before ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,a.kt)("h4",{id:"213-importing-necessary-packages"},"2.1.3 Importing necessary packages"),(0,a.kt)("p",null,"Importing Python packages using the Project Notebook, provided that they have been installed,\nis no different from installing packages for normal Python projects."),(0,a.kt)("p",null,"The code for importing packages looks like the following:",(0,a.kt)("br",{parentName:"p"}),"\n","(the following code example can be used to import a named ",(0,a.kt)("inlineCode",{parentName:"p"},"numpy"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\n")),(0,a.kt)("p",null,"Note that the package ",(0,a.kt)("inlineCode",{parentName:"p"},"numpy")," has been imported as ",(0,a.kt)("inlineCode",{parentName:"p"},"np")," in order to save time and maintain standardization.\nFor more, read the official documentation ",(0,a.kt)("a",{parentName:"p",href:"https://numpy.org/doc/stable/user/absolute_beginners.html#how-to-import-numpy"},(0,a.kt)("em",{parentName:"a"},"here")),"."),(0,a.kt)("h4",{id:"214-definition-of-api-tokens-and-keys"},"2.1.4 Definition of API Tokens and Keys"),(0,a.kt)("p",null,"API Tokens or Keys are not required if the libraries/packages that are being used do not specifically require them.\nIf you are not sure if you need an API Key/Token, refer to the library's documentation."),(0,a.kt)("p",null,"If an API key is required, they can be defined as a string (",(0,a.kt)("inlineCode",{parentName:"p"},"str"),") in a separate section in order to maintain a\ncoherent structure in the Project Notebook."),(0,a.kt)("p",null,"Following code snippet shows what the API Key that is defined might look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'mapbox_access_token = "ew.ecI9kWp"\n')),(0,a.kt)("h3",{id:"22-project-specific-source-code"},"2.2 Project-specific Source Code"),(0,a.kt)("p",null,"The project-specific python code also follow a specific syntax or structure. As such, the example code snippets\nfrom the Template Notebook (or this documentation) can be used as references in order to create different tools that\nneed to be defined for the MoL\xf6we project."),(0,a.kt)("p",null,"Some MoL\xf6we Tools need Python code written in a specific structure. The tools that require a code from the Project\nNotebook are listed below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Switch Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dropdown List Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Button Tool"),": Some functions of the Button Tool require code from the Project Notebook."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Range Slider Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Map Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Graph Tool"))),(0,a.kt)("p",null,"In order to get an overview of the MoL\xf6we Tools, please visit the page in the MoL\xf6we Tools chapter."),(0,a.kt)("h2",{id:"3-accessing-files-via-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"3 Accessing Files via Project Notebook")),(0,a.kt)("p",null,"Files that have been uploaded from the front-end of MoL\xf6we can be accessed via the Project Notebook."),(0,a.kt)("p",null,"Assuming that a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"my_data.csv"),' has been uploaded to MoL\xf6we, the code snippet mentioned in Section\n"Mandatory Section" above allows users to reference the data file using the code shown below:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'global data\ndata_file = data + "my_data.csv"\n')),(0,a.kt)("p",null,"Once the data file has been appropriately referenced, as shown above, it can be loaded into a Pandas DataFrame by\nusing a code shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.read_csv(data_file)\n")),(0,a.kt)("p",null,"Data files only need to be read from within the functions that are defined for maps and graphs."),(0,a.kt)("h2",{id:"4-important-to-know"},(0,a.kt)("strong",{parentName:"h2"},"4 Important to Know")),(0,a.kt)("p",null,'Avoid any "code in the wild" - meaning code that is not wrapped into a function (def).\nBesides the code section outlined in Section "Mandatory Section", all other code must be defined within Python classes\nand functions for the respective tools.'))}d.isMDXComponent=!0}}]);