"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return n?o.createElement(k,l(l({ref:t},d),{},{components:n})):o.createElement(k,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},l="Setting Up Tools",i={unversionedId:"project_notebook/setting_up_tools",id:"project_notebook/setting_up_tools",title:"Setting Up Tools",description:"Each MoL\xf6we project contains a Project Notebook.",source:"@site/docs/project_notebook/setting_up_tools.md",sourceDirName:"project_notebook",slug:"/project_notebook/setting_up_tools",permalink:"/docs/project_notebook/setting_up_tools",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Change Scene Button",permalink:"/docs/moloewe-tools/change-scene"},next:{title:"Advanced: Setting up an Environment",permalink:"/docs/project_notebook/setting_up_environment"}},s={},p=[{value:"<strong>1 Acquiring the Project Notebook</strong>",id:"1-acquiring-the-project-notebook",level:2},{value:"<strong>2 Accessing the Project Notebook</strong>",id:"2-accessing-the-project-notebook",level:2},{value:"<strong>3 Structure of the Project Notebook</strong>",id:"3-structure-of-the-project-notebook",level:2},{value:"<strong>4 Preparatory code</strong>",id:"4-preparatory-code",level:2},{value:"4.1 Import Modules",id:"41-import-modules",level:3},{value:"4.2 Access Tokens and API Keys",id:"42-access-tokens-and-api-keys",level:3},{value:"4.3 Global Variables, Constants, Settings",id:"43-global-variables-constants-settings",level:3},{value:"4.4 Notebook Functions",id:"44-notebook-functions",level:3},{value:"<strong>5 General Tool Code Structure</strong>",id:"5-general-tool-code-structure",level:2},{value:"5.1 Where to Place Tool Codes",id:"51-where-to-place-tool-codes",level:3},{value:"5.2 The <code>get_</code> and <code>set_</code> Function",id:"52-the-get_-and-set_-function",level:3},{value:"5.2.1 The <code>get_</code> Function",id:"521-the-get_-function",level:4},{value:"5.2.2 The <code>set_</code> Function",id:"522-the-set_-function",level:4},{value:"<strong>6 Tool Codes</strong>",id:"6-tool-codes",level:2},{value:"6.1 Switch",id:"61-switch",level:3},{value:"6.2 Dropdown",id:"62-dropdown",level:3},{value:"6.3 Button",id:"63-button",level:3},{value:"6.4 Slider",id:"64-slider",level:3},{value:"6.5 Map",id:"65-map",level:3},{value:"6.6 Graph",id:"66-graph",level:3},{value:"?",id:"",level:3},{value:"<strong>4 Uploading the Project Notebook to MoL\xf6we</strong>",id:"4-uploading-the-project-notebook-to-mol\xf6we",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-tools"},"Setting Up Tools"),(0,a.kt)("p",null,"Each MoL\xf6we project contains a ",(0,a.kt)("a",{parentName:"p",href:"/docs/glossary#project-notebook"},(0,a.kt)("strong",{parentName:"a"},"Project Notebook")),".\nHere you can set up some of the ",(0,a.kt)("strong",{parentName:"p"},"MoL\xf6we tools")," using Python programming."),(0,a.kt)("p",null,"The required steps to achieve this are presented in this chapter."),(0,a.kt)("p",null,"(Note: Some MoL\xf6we tools do not need to be set up in the Project Notebook, see the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/overview"},(0,a.kt)("strong",{parentName:"a"},"Tools Chapter")),")"),(0,a.kt)("admonition",{title:"Python Experience",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Although you will set up MoL\xf6we tools using Python, programming experience with Python is ",(0,a.kt)("strong",{parentName:"p"},"not")," required.\nThis chapter is set up for users with no Python experience."),(0,a.kt)("p",{parentName:"admonition"},"However, if you're experienced with Python and would like to explore more advanced applications,\nyou can also check out the chapter for ",(0,a.kt)("a",{parentName:"p",href:"/docs/project_notebook/setting_up_environment"},(0,a.kt)("strong",{parentName:"a"},"Advanced Users")),".")),(0,a.kt)("h2",{id:"1-acquiring-the-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"1 Acquiring the Project Notebook")),(0,a.kt)("p",null,'When a new MoL\xf6we project is created, a Project Notebook is automatically generated (named "Template Notebook").\nPlease go to your ',(0,a.kt)("a",{parentName:"p",href:"/docs/user-interface#3-edit-mode"},(0,a.kt)("strong",{parentName:"a"},"Project Page"))," and download the Project Notebook from\nthe Notebooks Subpage with the steps described ",(0,a.kt)("a",{parentName:"p",href:"/docs/edit-mode/notebooks#1-download-a-project-notebook"},(0,a.kt)("strong",{parentName:"a"},"here")),"."),(0,a.kt)("h2",{id:"2-accessing-the-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"2 Accessing the Project Notebook")),(0,a.kt)("p",null,"You can access the Project Notebook using ",(0,a.kt)("strong",{parentName:"p"},"JupyterHub"),".\nYou have received a username and password for JupyterHub together with your MoL\xf6we user account."),(0,a.kt)("p",null,"You can open JupyterHub ",(0,a.kt)("a",{parentName:"p",href:"https://jupyter.leuphana.de/hub/login?next=%2Fhub%2F"},(0,a.kt)("strong",{parentName:"a"},"here")),"."),(0,a.kt)("p",null,'Once you logged in to JupyterHub, please upload the Project Notebook by clicking the "Upload Files" button and choose\nthe Project Notebook from your download folder.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7518).Z,width:"1922",height:"882"})),(0,a.kt)("p",null,"Now open the Project Notebook by double-clicking on it in the left sidebar. The notebook will open in a new tab."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4393).Z,width:"1919",height:"879"})),(0,a.kt)("h2",{id:"3-structure-of-the-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"3 Structure of the Project Notebook")),(0,a.kt)("p",null,"In order to make the Python code easier to read, the Project Notebook is arranged into ",(0,a.kt)("strong",{parentName:"p"},"cells"),".\nEach cell fulfills a specific task in the notebook."),(0,a.kt)("p",null,"For your purpose (setting up MoL\xf6we tools) only the following cells are relevant/need to be edited:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Preparatory code:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Import modules"),(0,a.kt)("li",{parentName:"ul"},"Access Tokens and API Keys"),(0,a.kt)("li",{parentName:"ul"},"Global Variables, Constants, Settings"),(0,a.kt)("li",{parentName:"ul"},"Notebook Functions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tool Code:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tool Switch"),(0,a.kt)("li",{parentName:"ul"},"Tool Dropdown"),(0,a.kt)("li",{parentName:"ul"},"Tool Button"),(0,a.kt)("li",{parentName:"ul"},"Tool Slider"),(0,a.kt)("li",{parentName:"ul"},"Tool Map"),(0,a.kt)("li",{parentName:"ul"},"Tool Graph")),(0,a.kt)("p",null,"The following two sections will explain how these cells need to be edited in order to set up MoL\xf6we tools."),(0,a.kt)("h2",{id:"4-preparatory-code"},(0,a.kt)("strong",{parentName:"h2"},"4 Preparatory code")),(0,a.kt)("p",null,"In this section we will explain how the cells of the ",(0,a.kt)("strong",{parentName:"p"},"preparatory")," part of the Project Notebook need to be edited."),(0,a.kt)("h3",{id:"41-import-modules"},"4.1 Import Modules"),(0,a.kt)("p",null,'In the cell "Import Modules", please add the following two lines:'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import geopandas as gpd")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import plotly.express as px")),(0,a.kt)("p",null,"Like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2750).Z,width:"1509",height:"805"})),(0,a.kt)("h3",{id:"42-access-tokens-and-api-keys"},"4.2 Access Tokens and API Keys"),(0,a.kt)("p",null,'The cell "Access Tokens and API Keys" needs to be edited if you want to show a map using mapbox.'),(0,a.kt)("p",null,"Please see the chapter on ",(0,a.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/map"},(0,a.kt)("strong",{parentName:"a"},"Maps")),"."),(0,a.kt)("h3",{id:"43-global-variables-constants-settings"},"4.3 Global Variables, Constants, Settings"),(0,a.kt)("p",null,'The cell "Global Variables, Constants, Settings" is different for every tool.\nTherefore, please refer to the specific to find out what code you exactly need here.'),(0,a.kt)("h3",{id:"44-notebook-functions"},"4.4 Notebook Functions"),(0,a.kt)("p",null,'The cell "Notebook Functions" is different for every tool.\nTherefore, please refer to the specific to find out what code you exactly need here.'),(0,a.kt)("h2",{id:"5-general-tool-code-structure"},(0,a.kt)("strong",{parentName:"h2"},"5 General Tool Code Structure")),(0,a.kt)("p",null,"Before you jump into the individual tool codes, you should familiarize yourself with the ",(0,a.kt)("strong",{parentName:"p"},"general code structure"),"\nof MoL\xf6we tools described in this section."),(0,a.kt)("h3",{id:"51-where-to-place-tool-codes"},"5.1 Where to Place Tool Codes"),(0,a.kt)("p",null,"The code of a tool needs to be placed in the cell that contains the respective ",(0,a.kt)("strong",{parentName:"p"},"tool class"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example")),":"),(0,a.kt)("p",null,"You would put the code for the ",(0,a.kt)("strong",{parentName:"p"},"Switch Tool")," in the cell ",(0,a.kt)("em",{parentName:"p"},'"Tool Switch"')," beneath the line ",(0,a.kt)("inlineCode",{parentName:"p"},"class tool_switch"),".\nThe code for the ",(0,a.kt)("strong",{parentName:"p"},"Dropdown Tool"),", on the other hand, belongs in the cell ",(0,a.kt)("em",{parentName:"p"},'"Tool Dropdown"')," beneath the line ",(0,a.kt)("inlineCode",{parentName:"p"},"class tool_dropdown"),"."),(0,a.kt)("p",null,"Like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2397).Z,width:"1536",height:"653"})),(0,a.kt)("admonition",{title:"Indentation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Be aware that your tool code needs to be ",(0,a.kt)("strong",{parentName:"p"},"indented"),'. It needs to be on the same "level" as the line ',(0,a.kt)("inlineCode",{parentName:"p"},"pass"),".\nYou can add an indentation with the Tab key on your keyboard."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{src:n(6291).Z,width:"1298",height:"134"})),(0,a.kt)("img",{src:"/img/doc/project_notebook_6_tabkey.png",alt:"tabkey",width:"120"})),(0,a.kt)("p",null,"If you want to create a second tool of the same kind, e.g. a second switch, you can place the code for the second\nswitch right after the code of the first one."),(0,a.kt)("h3",{id:"52-the-get_-and-set_-function"},"5.2 The ",(0,a.kt)("inlineCode",{parentName:"h3"},"get_")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"set_")," Function"),(0,a.kt)("p",null,"MoL\xf6we tool codes are formulated as so-called ",(0,a.kt)("strong",{parentName:"p"},"functions"),"."),(0,a.kt)("p",null,"Simply put, a function is a set of ",(0,a.kt)("strong",{parentName:"p"},"instructions")," that is executed when the function is called.\nThere are two functions that we need to define for a MoL\xf6we Tool: the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function and the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function."),(0,a.kt)("h4",{id:"521-the-get_-function"},"5.2.1 The ",(0,a.kt)("inlineCode",{parentName:"h4"},"get_")," Function"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function, we define the ",(0,a.kt)("strong",{parentName:"p"},"initial state")," of a tool, meaning its default parameters."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example:"))),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function of the Dropdown Tool, you define which options should appear/are available\nin the dropdown list and, in addition, which option will be selected by ",(0,a.kt)("strong",{parentName:"p"},"default")," (i.e. when you open the slide)"),(0,a.kt)("h4",{id:"522-the-set_-function"},"5.2.2 The ",(0,a.kt)("inlineCode",{parentName:"h4"},"set_")," Function"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function, we define what happens when the tool is ",(0,a.kt)("strong",{parentName:"p"},"executed"),"."),(0,a.kt)("p",null,"We can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function in such a way that it changes a parameter value of another tool.\nThis is how we can set up ",(0,a.kt)("strong",{parentName:"p"},"interactions")," between tools."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Example:"))),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function of a Button Tool, you can change the parameter displayed on the Y-Axis of a Graph Tool."),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Naturally, some tools do ",(0,a.kt)("strong",{parentName:"p"},"not")," require both the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function."),(0,a.kt)("p",{parentName:"admonition"},"The Graph tool, for example, only needs the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function, containing the data you want to display in the graph."),(0,a.kt)("p",{parentName:"admonition"},"The Button tool, on the other hand, only needs the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function, containing instructions on what to do when the button is pressed\n(i.e. when its ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function is called).")),(0,a.kt)("h2",{id:"6-tool-codes"},(0,a.kt)("strong",{parentName:"h2"},"6 Tool Codes")),(0,a.kt)("p",null,"Here we present the ",(0,a.kt)("strong",{parentName:"p"},"basic code")," for each tool.\nYou can copy the code into your Project Notebook and adjust it to your needs."),(0,a.kt)("p",null,"Also, please see our ",(0,a.kt)("strong",{parentName:"p"},"User Examples")," (left sidebar)."),(0,a.kt)("h3",{id:"61-switch"},"6.1 Switch"),(0,a.kt)("p",null,"All the Switch tools that needs to be defined for a presentation need to be placed under a single class named ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_switch"),"."),(0,a.kt)("p",null,"Each Switch tool is defined using a pair of ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," functions. It is recommended that the naming of the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," functions is set in a consistent manner as shown in the example below."),(0,a.kt)("admonition",{title:"Example Scenario",type:"note"},(0,a.kt)("p",{parentName:"admonition"},'We need a Switch tool that allows users to select between two strings: "light" and "dark". The selected string is eventually used to change the color mode of a Map from Light Mode to Dark Mode and vice-versa.')),(0,a.kt)("p",null,"The code snippet below represents the entirety of code that needs to be written to create one Switch that allows users to select a value between ",(0,a.kt)("inlineCode",{parentName:"p"},'"light"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"dark"'),"."),(0,a.kt)("p",null,"First, a global variable that stores a default value of the switch tool needs to be defined. In the example below, the global variable is named ",(0,a.kt)("inlineCode",{parentName:"p"},"current_map_style"),' and the "default" or "initial" value that it contains is 20. As such, ',(0,a.kt)("inlineCode",{parentName:"p"},'current_map_style = "light"')," even when the user has not interacted with the switch tool at all."),(0,a.kt)("p",null,"Second, under the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_switch"),", a pair of ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," functions are defined. The ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function is used to define the switch state based on the value stored in the global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"current_map_style"),". Whereas, the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function is used by the system back-end to change value stored in the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"current_map_style")," when a user makes a selection using the switch. Note that the naming scheme between the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," functions are consistent as they both have the exact same name except the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," prefixes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'global current_map_style\ncurrent_map_style = "light"\n\nclass tool_switch:\n    def get_change_map_style(self):\n        global current_map_style\n        if current_map_style == "light":\n            return True\n        else:\n            return False\n\n    def set_change_map_style(self, switch_state):\n        global current_map_style\n        if switch_state:\n            current_map_style = "light"\n        else:\n            current_map_style = "dark"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"get_change_map_style")," function first calls the global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"current_map_style"),". This way, the value stored in the global variable can be changed from within the local scope of the function. Then, the function returns a boolean value either ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"False")," based on the value currently stored in the global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"current_map_style"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"set_change_map_style")," is used by the MoL\xf6we back-end to pass the selection made by a user with the Switch tool. This function contains a keyword argument named ",(0,a.kt)("inlineCode",{parentName:"p"},"switch_state")," which is used by the MoL\xf6we back-end change the value stored in the global variable ",(0,a.kt)("inlineCode",{parentName:"p"},"current_map_style")," to a value that is different from the value initially stored in it before the switch was toggled by the user (as can be seen in the code within the function)."),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," functions have been defined, a Switch tool can be placed on a slide by opening the slide in Edit Mode."),(0,a.kt)("p",null,"If another switch tool is required for the presentation, say one that lets users change line width of a different line in the plot, a new pair of get and set functions need to be defined under the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_switch")," as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'global current_map_style\ncurrent_map_style = "light"\n\nglobal current_bulb_state\ncurrent_bulb_state = 0\n\nclass tool_switch:\n    # first switch\n    def get_change_map_style(self):\n        global current_map_style\n        if current_map_style == "light":\n            return True\n        else:\n            return False\n\n    def set_change_map_style(self, switch_state):\n        global current_map_style\n        if switch_state:\n            current_map_style = "light"\n        else:\n            current_map_style = "dark"\n\n    # second switch\n    def get_change_bulb_state(self):\n        global current_bulb_state\n        if current_bulb_state == 0:\n            return True\n        else:\n            return False\n    \n    def set_change_map_style(self, switch_state):\n        global current_bulb_state\n        if switch_state:\n            current_bulb_state = 0\n        else:\n            current_bulb_state = 1\n')),(0,a.kt)("h3",{id:"62-dropdown"},"6.2 Dropdown"),(0,a.kt)("h3",{id:"63-button"},"6.3 Button"),(0,a.kt)("h3",{id:"64-slider"},"6.4 Slider"),(0,a.kt)("h3",{id:"65-map"},"6.5 Map"),(0,a.kt)("h3",{id:"66-graph"},"6.6 Graph"),(0,a.kt)("h3",{id:""},"?"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File Extension"),(0,a.kt)("th",{parentName:"tr",align:null},"Project Directory"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".PNG")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/image")),(0,a.kt)("td",{parentName:"tr",align:null},"Image")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".JPG")," or ",(0,a.kt)("inlineCode",{parentName:"td"},".jpg")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/image")),(0,a.kt)("td",{parentName:"tr",align:null},"Image")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".JPEG")," or ",(0,a.kt)("inlineCode",{parentName:"td"},".jpeg")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/image")),(0,a.kt)("td",{parentName:"tr",align:null},"Image")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".MP4")," or ",(0,a.kt)("inlineCode",{parentName:"td"},".mp4")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/video")),(0,a.kt)("td",{parentName:"tr",align:null},"Video file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".txt")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/text")),(0,a.kt)("td",{parentName:"tr",align:null},"Text file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".md")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/text")),(0,a.kt)("td",{parentName:"tr",align:null},"Markdown file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".html")," or ",(0,a.kt)("inlineCode",{parentName:"td"},".HTML")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/text")),(0,a.kt)("td",{parentName:"tr",align:null},"HTML file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".shp"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".shx"),", ",(0,a.kt)("inlineCode",{parentName:"td"},".prj")," and ",(0,a.kt)("inlineCode",{parentName:"td"},".dbf")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/data")),(0,a.kt)("td",{parentName:"tr",align:null},"Shapefile extensions")))),(0,a.kt)("h2",{id:"4-uploading-the-project-notebook-to-mol\xf6we"},(0,a.kt)("strong",{parentName:"h2"},"4 Uploading the Project Notebook to MoL\xf6we")),(0,a.kt)("p",null,"Below are the files that can be uploaded and the directories in the project that they will be placed in."),(0,a.kt)("p",null,"see steps in chapter notebooks"))}c.isMDXComponent=!0},7518:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/project_notebook_1_upload_notebook-2d78cc79a38228dd2fbbaa92d6d8d947.jpg"},4393:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/project_notebook_2_access_notebook-ae5b2ec630bd49da8b459ec632fe4467.png"},2750:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/project_notebook_3_import_modules-77d9f8213f0cc78a5e823ad7b01fa98f.jpg"},2397:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/project_notebook_4_classes-f79cb7fc6452bc79932ddfad6020a86c.jpg"},6291:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/project_notebook_5_indentation-50b7137bbeb0afc3e016351cf66877b6.jpg"}}]);