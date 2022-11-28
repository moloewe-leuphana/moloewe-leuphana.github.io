"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const l={},r="\ud83d\udcc8 House Data Visualization",i={unversionedId:"user-examples/house_data",id:"user-examples/house_data",title:"\ud83d\udcc8 House Data Visualization",description:"Prerequisite: You need to install our moloewechart package from moloewechart.zip.",source:"@site/docs/05-user-examples/02_house_data.md",sourceDirName:"05-user-examples",slug:"/user-examples/house_data",permalink:"/docs/user-examples/house_data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05-user-examples/02_house_data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd Create a Survey",permalink:"/docs/user-examples/survey"},next:{title:"\ud83d\uddfa\ufe0f Maps",permalink:"/docs/user-examples/maps"}},s={},p=[{value:"<strong>1 Coming up with concept (separately from MoL\xf6we notebook)</strong>",id:"1-coming-up-with-concept-separately-from-mol\xf6we-notebook",level:2},{value:"Determine the static part of the plot",id:"determine-the-static-part-of-the-plot",level:3},{value:"Determine the &quot;interactive&quot; part of the plot",id:"determine-the-interactive-part-of-the-plot",level:3},{value:"1. Get one possible value for your dropdown list as a placeholder and build an initial plot",id:"1-get-one-possible-value-for-your-dropdown-list-as-a-placeholder-and-build-an-initial-plot",level:4},{value:"2. Get all possible values for your dropdown list",id:"2-get-all-possible-values-for-your-dropdown-list",level:4},{value:"<strong>2 Working in the MoL\xf6we notebook</strong>",id:"2-working-in-the-mol\xf6we-notebook",level:2},{value:"Essential Code",id:"essential-code",level:3},{value:"Default Code",id:"default-code",level:4},{value:"Import Modules",id:"import-modules",level:4},{value:"Access Tokens and API Keys",id:"access-tokens-and-api-keys",level:4},{value:"Definition of tools for global use",id:"definition-of-tools-for-global-use",level:4},{value:"Tool Switch",id:"tool-switch",level:5},{value:"Tool Dropdown",id:"tool-dropdown",level:5},{value:"Tool Button",id:"tool-button",level:5},{value:"Tool Slider",id:"tool-slider",level:5},{value:"Tool Map",id:"tool-map",level:5},{value:"Tool Graph",id:"tool-graph",level:5},{value:"Create functions and global variables",id:"create-functions-and-global-variables",level:3},{value:"Create a global variable",id:"create-a-global-variable",level:4},{value:"Setting up functions for a dropdown in <code>tool_dropdown</code>",id:"setting-up-functions-for-a-dropdown-in-tool_dropdown",level:4},{value:"Modify the plot code and put it into <code>tool_graph</code>",id:"modify-the-plot-code-and-put-it-into-tool_graph",level:4},{value:"<strong>Testing the code directly in this IDE using MoL\xf6we built-in function</strong>",id:"testing-the-code-directly-in-this-ide-using-mol\xf6we-built-in-function",level:2}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-house-data-visualization"},"\ud83d\udcc8 House Data Visualization"),(0,a.kt)("p",null,"Prerequisite: You need to install our ",(0,a.kt)("inlineCode",{parentName:"p"},"moloewe_chart")," package from ",(0,a.kt)("inlineCode",{parentName:"p"},"moloewe_chart.zip"),"."),(0,a.kt)("p",null,"To do this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open a terminal in the directory which contains ",(0,a.kt)("inlineCode",{parentName:"li"},"moloewe_chart.zip")),(0,a.kt)("li",{parentName:"ul"},"Activate your current working virtual environment"),(0,a.kt)("li",{parentName:"ul"},"Install the package using the command ",(0,a.kt)("inlineCode",{parentName:"li"},"pip install --user moloewe_chart.zip"))),(0,a.kt)("p",null,"For this example, we will be working with ",(0,a.kt)("inlineCode",{parentName:"p"},"house-prices.csv")," dataset. Let's check it out."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nlocal_path = 'D:/codes/leuphana-work/molowe/data/'\nhouse_data = pd.read_csv(local_path + \"house-prices.csv\")\nhouse_data.head()\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Unnamed: 0"),(0,a.kt)("th",{parentName:"tr",align:null},"price"),(0,a.kt)("th",{parentName:"tr",align:null},"lotsize"),(0,a.kt)("th",{parentName:"tr",align:null},"bedrooms"),(0,a.kt)("th",{parentName:"tr",align:null},"bathrooms"),(0,a.kt)("th",{parentName:"tr",align:null},"stories"),(0,a.kt)("th",{parentName:"tr",align:null},"driveway"),(0,a.kt)("th",{parentName:"tr",align:null},"recreation"),(0,a.kt)("th",{parentName:"tr",align:null},"fullbase"),(0,a.kt)("th",{parentName:"tr",align:null},"gasheat"),(0,a.kt)("th",{parentName:"tr",align:null},"aircon"),(0,a.kt)("th",{parentName:"tr",align:null},"garage"),(0,a.kt)("th",{parentName:"tr",align:null},"prefer"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"42000.0"),(0,a.kt)("td",{parentName:"tr",align:null},"5850"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"38500.0"),(0,a.kt)("td",{parentName:"tr",align:null},"4000"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"49500.0"),(0,a.kt)("td",{parentName:"tr",align:null},"3060"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"60500.0"),(0,a.kt)("td",{parentName:"tr",align:null},"6650"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"61000.0"),(0,a.kt)("td",{parentName:"tr",align:null},"6360"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"1-coming-up-with-concept-separately-from-mol\xf6we-notebook"},(0,a.kt)("strong",{parentName:"h2"},"1 Coming up with concept (separately from MoL\xf6we notebook)")),(0,a.kt)("p",null,"In this example, we would like to visualize the relationship between the house prices vs lot sizes and use color to indicate the number of garages a particular house has."),(0,a.kt)("p",null,"This part we can build independently outside the MoL\xf6we notebook, and later we can copy the codes back to the notebook and modify some places."),(0,a.kt)("h3",{id:"determine-the-static-part-of-the-plot"},"Determine the static part of the plot"),(0,a.kt)("p",null,"This would be the static part of the plot, i.e. the part that stay the same and is not affected by the dropdown list. You can comfortably create a graph like below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import plotly.express as px\n\n# Because the number of garage in the data is continuous, we convert it to discreet\n# for the plot\nhouse_data["garage"] = house_data["garage"].astype(str)\n\n# Create the scatter plot\nf = px.scatter(house_data, x = "lotsize", y = "price", \n                color = "garage", \n                title="House Prices vs Lot Size in the City of Windsor, Canada")\n\n# Change the axis labels\nf.update_layout(xaxis_title = "Lot Size (sqm)",\n                yaxis_title = "Price ($)")\n\n# we define chart configuration settings for Plotly (Plotly offers a config parameter)\n    # in this case we try to set the ModeBar to inactive (not all options are available for Plotly in Python when exporting)\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3274).Z,width:"1275",height:"639"})),(0,a.kt)("h3",{id:"determine-the-interactive-part-of-the-plot"},'Determine the "interactive" part of the plot'),(0,a.kt)("p",null,"From the above plot, we now want to dive deeper and visualize the relationship between the house prices vs lot sizes ",(0,a.kt)("strong",{parentName:"p"},"with a FILTER - the different numbers of bedrooms"),". Therefore, the information about the numbers of bedrooms is now our moving part of the plot, and is flowing into the dropdown list we are now building. I try breaking it down into the following steps:"),(0,a.kt)("h4",{id:"1-get-one-possible-value-for-your-dropdown-list-as-a-placeholder-and-build-an-initial-plot"},"1. Get one possible value for your dropdown list as a placeholder and build an initial plot"),(0,a.kt)("p",null,"We need a starting point to build a plot. Therefore, it is advisable to use one possible value of the dropdown list and combine it with the static part to create your first plot. This would be the skeleton to your final plot when you combine it with the information from the dropdown list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'house_data["bedrooms"].unique()\n\narray([3, 2, 4, 1, 5, 6], dtype=int64)\n')),(0,a.kt)("p",null,'After looking at the unique values for bedroom number, I just choose a value, here I chose 2 as a placeholder. Now I build the "skeleton":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import plotly.express as px\n\nhouse_data = pd.read_csv("data/house-prices.csv")\n\n# Now we can subset houses which have 2 bedrooms\ndf_bedroom = house_data[house_data["bedrooms"] == 2]\n\n# Because the number of garage in the data is continuous, we convert it to discreet for the plot\ndf_bedroom["garage"] = df_bedroom["garage"].astype(str)\n\n# Create the scatter plot (with adjusted title)\nf = px.scatter(df_bedroom, x = "lotsize", y = "price", \n                color = "garage",\n                title="House Prices vs Lot Size in the City of Windsor, Canada - " + str(2) + " bedroom(s)")\n\n# Change the axis labels\nf.update_layout(xaxis_title = "Lot Size (sqm)",\n                yaxis_title = "Price ($)")\n\n# we define chart configuration settings for Plotly (Plotly offers a config parameter)\n    # in this case we try to set the ModeBar to inactive (not all options are available for Plotly in Python when exporting\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4938).Z,width:"1283",height:"666"})),(0,a.kt)("p",null,'Now what you are seeing is a "version" of your interactive plot, that is the plot you would get when you select the value 2 from the dropdown list.'),(0,a.kt)("p",null,"This is also a good time for you to fine-tuning your plot, adding titles and labels, checking the size, working the legend, etc. anything and involves the static part of your plot."),(0,a.kt)("h4",{id:"2-get-all-possible-values-for-your-dropdown-list"},"2. Get all possible values for your dropdown list"),(0,a.kt)("p",null,'Now that we have the "skeleton" of your interactive plot in place, let\'s make the dropdown happen.'),(0,a.kt)("p",null,"First, we need to check out all the possible values to be displayed in the dropdown list under a variable. Here, we extract all the unique values of the column bedrooms, and warp it in a list comprehension to produce a python list. We also sort the list, so the output would make more sense when being incorporated into the dropdown list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Get all possible values your dropdown list\nbedroom_number = [i for i in house_data["bedrooms"].unique()]\nbedroom_number.sort()\nprint(bedroom_number)\n[1, 2, 3, 4, 5, 6]\n')),(0,a.kt)("p",null,"And this is all you need to prepare before modifying the dropdown list function in the MoL\xf6we notebook."),(0,a.kt)("h2",{id:"2-working-in-the-mol\xf6we-notebook"},(0,a.kt)("strong",{parentName:"h2"},"2 Working in the MoL\xf6we notebook")),(0,a.kt)("p",null,"Now we write code that is actually going into the MoL\xf6we notebook."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT NOTE"),": in order for things to run in MoL\xf6we, everything has to warped inside a function."),(0,a.kt)("p",null,"The following cells are essential codes for MoL\xf6we to function, they must be included everytime we write a MoL\xf6we notebook. They are included in the notebook template. We can leave most of them as is."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"What we should change, for example, is the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapbox_access_token"),". For a project working with MoL\xf6we using map data, one can obtain this by signing up on Openstreetmap and get one's own API Token.")),(0,a.kt)("h3",{id:"essential-code"},"Essential Code"),(0,a.kt)("h4",{id:"default-code"},"Default Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# MobileSolutionWorkshop / MobileL\xf6sungsWerkstatt initialization\n# template notebook version 21-11-15\n\n# This section contains default code for the MobileSolutionWorkshop / MobileL\xf6sungsWerkstatt to work.\n# Please do not modify.\n\nclass Moloewe:\n    # create paths to the assets of the project\n    def project_initialize(self, project_data):\n\n        # folder with data files (GIS, CSV, POI, etc.) within the project\n        # used by functions by the researcher to store data for calculations, data filtering, maps, graphs, etc.\n        global data\n        data = project_data['folder_project_data']\n\n        # folder with images (JPG, PNG, SVG, PDF, GIF) within the project\n        # used by tools (Image, Slideshow) and by the researcher\n        global image\n        image = project_data['folder_project_image']\n\n        # folder with text files (TXT (utf-8), MD, HTML) within the project\n        # used by tools (TextBox) and by the researcher\n        global text\n        text = project_data['folder_project_text']\n\n        # folder with videos within the project\n        # used by tools (Video)\n        global video\n        video = project_data['folder_project_video']\n\n        # folder with output created within the project\n        # used by functions by the researcher\n        global output\n        output = project_data['folder_project_output']\n        \n")),(0,a.kt)("h4",{id:"import-modules"},"Import Modules"),(0,a.kt)("p",null,"Here you can define all the imports of packages/modules you need for your notebook functions to work. The mandatory and basic packages are already included as well as suggestions for specific needs."),(0,a.kt)("p",null,"Feel free to add yours."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"## basic packages for working with moloewe chart\n#from moloewe_chart import MoloeweChart # for tool_graph\n\n\n## basic packages for working with Plotly\nimport plotly.express as px # for tool_graph with Plotly\nimport plotly.graph_objs as go # for tool_graph with Plotly\n\n\n## basic packages for working with data\nimport json as json # for loading and converting JSON data sets\nimport numpy as np # for converting data sets\nfrom numpy import arange, array, ones # for converting data sets\nimport pandas as pd # for loading and converting data sets\nfrom datetime import datetime # for converting data sets\n\n\n## packages from Scikit-learn for machine learning  \n#from scipy import stats\n#from sklearn import datasets, linear_model\n#from sklearn.linear_model import LinearRegression\n#from sklearn.model_selection import train_test_split\n#from sklearn.metrics import mean_squared_error as mse\n#from sklearn.metrics import r2_score\n#from sklearn.linear_model import Ridge\n\n## packages for network analysis and visualization\n\n#import networkx as nx\n\n\n## packages for visualizations\n\n# Matplotlib\nimport matplotlib\nimport matplotlib.pyplot as plt\nimport matplotlib.patches as mpatches\n\n# Plotly\nimport plotly.figure_factory as ff\nfrom plotly.offline import (\n    download_plotlyjs,\n    init_notebook_mode,\n    plot,\n    iplot,\n)\n\n\n## miscellaneous packages\n\n#init_notebook_mode(connected=True)\n#import geopandas as gpd\n#import shapefile as shp\n")),(0,a.kt)("h4",{id:"access-tokens-and-api-keys"},"Access Tokens and API Keys"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# This token is for the Mapbox service for an interactive chart\nmapbox_access_token = "pk.eyJ1IjoibW9sb2V3ZSIsImEiOiJjanprMzFkODUwMnJyM29vM3lwYWNwMG5jIn0.ElIGswv7z_KNHyivxm9yrg"\n')),(0,a.kt)("h4",{id:"definition-of-tools-for-global-use"},"Definition of tools for global use"),(0,a.kt)("p",null,"In this section you can define the interactive tools if they are used repeatedly throughout the presentation."),(0,a.kt)("h5",{id:"tool-switch"},"Tool Switch"),(0,a.kt)("p",null,"Here you can define the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_switch"),".\nFor this tool work, you need a ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function for each switch button. You can find examples in MoL\xf6we documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class tool_switch:\n\n    pass \n")),(0,a.kt)("h5",{id:"tool-dropdown"},"Tool Dropdown"),(0,a.kt)("p",null,"Here you can define the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_dropdown"),".\nFor this tool work, you need a ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function for each dropdown list. You can find examples in MoL\xf6we documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class tool_dropdown:\n\n    pass\n")),(0,a.kt)("h5",{id:"tool-button"},"Tool Button"),(0,a.kt)("p",null,"Here you can define the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_button"),".\nFor this tool work, you only need a ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function for each button. You can find examples in MoL\xf6we documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class tool_button:\n\n    pass\n")),(0,a.kt)("h5",{id:"tool-slider"},"Tool Slider"),(0,a.kt)("p",null,"Here you can define the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_slider"),".\nFor this tool work, you need a ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function for each slider. You can find examples in MoL\xf6we documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class tool_slider:\n\n    pass\n")),(0,a.kt)("h5",{id:"tool-map"},"Tool Map"),(0,a.kt)("p",null,"Here you can define the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_map"),".\nFor this tool work, you need a ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function for each button. You can find examples in MoL\xf6we documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class tool_map:\n\n    pass\n")),(0,a.kt)("h5",{id:"tool-graph"},"Tool Graph"),(0,a.kt)("p",null,"Here you can define the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_graph"),".\nFor this tool work, you need a ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function for each graph/plot. You can find examples in MoL\xf6we documentation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class tool_graph:\n\n    pass\n")),(0,a.kt)("h3",{id:"create-functions-and-global-variables"},"Create functions and global variables"),(0,a.kt)("p",null,"There are different tools and interactive objects in MoL\xf6we, each is define as a Class. For this example we only need two things: an instance from Class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_dropdown")," (for our dropdown list) and an instance from ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_graph")," (to display the plot).\nLet's start by setting up our bedroom number dropdown."),(0,a.kt)("h4",{id:"create-a-global-variable"},"Create a global variable"),(0,a.kt)("p",null,"The first step is to create two global variables, one contains all possible values for a dropdown, and one contains the selected values. The selected value we set now in this initialization phase will be the default value for the plot. For now, we just copy the values we saw before and feed it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bedroom_number_all")," variable. (Sidenote: we can actually make these variable dynamic by loading them directly from the data, but that adds another layer of explanation, so for now I just do this manually. Once you get the logic of MoL\xf6we, it would be easier to then try this alternative out)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Get all possible values your dropdown list\nglobal bedroom_number_all\nbedroom_number_all = [1, 2, 3, 4, 5, 6]\n\n# Set global variables with default\nglobal bedroom_number_selected\nbedroom_number_selected = 1\n")),(0,a.kt)("h4",{id:"setting-up-functions-for-a-dropdown-in-tool_dropdown"},"Setting up functions for a dropdown in ",(0,a.kt)("inlineCode",{parentName:"h4"},"tool_dropdown")),(0,a.kt)("p",null,"For one instance of a dropdown, we have to write two functions: a ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function sets up and initializes the dropdown values")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"set_")," function runs in the background everytime we interact with the dropdown list in presentation mode and choose a value, so that value can in turn be used in e.g. plotting.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"These functions must be appended to the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_dropdown")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"setattr()"),"."))),(0,a.kt)("p",null,"Now onto our example, we would set up a ",(0,a.kt)("inlineCode",{parentName:"p"},"get_bedroom_number")," function to initialize the dropdown list. It needs two things: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(1) all of the possible values we want to choose from"),(0,a.kt)("li",{parentName:"ul"},"(2) the default value, i.e. which value is displayed in the dropdown and also fed to the plot the moment we start the presentation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Define get function\ndef get_bedroom_number(self): # here you put the function name\n    return {\n        "values": bedroom_number_all, # all the possible values (saved in bedroom_number)\n        "default": bedroom_number_selected, # the default value (saved in bedroom_number_selected)\n    }\n\n# Append the function to class tool_dropdown\nsetattr(tool_dropdown, "get_bedroom_number", get_bedroom_number)\n')),(0,a.kt)("p",null,"Now we set up the function ",(0,a.kt)("inlineCode",{parentName:"p"},"set_bedroom_number"),". This function allows you to change the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"bedroom_number_selected")," based on what you are selecting in the dropdown (",(0,a.kt)("inlineCode",{parentName:"p"},"dropdown_selection"),"). There is nothing much to modifying here, just name the function and call the right global variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Define set function\ndef set_bedroom_number(self, dropdown_selection):  # here you put the function name\n    global bedroom_number_selected # here you call the global variable\n    bedroom_number_selected = dropdown_selection # assign the variable as the selected dropdown content\n\n# Append the function to class tool_dropdown\nsetattr(tool_dropdown, "set_bedroom_number", set_bedroom_number)\n')),(0,a.kt)("h4",{id:"modify-the-plot-code-and-put-it-into-tool_graph"},"Modify the plot code and put it into ",(0,a.kt)("inlineCode",{parentName:"h4"},"tool_graph")),(0,a.kt)("p",null,"After creating our interactive part - the dropdown list - we now incorporate this into our static plot to obtain our plotting function in class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_graph"),"."),(0,a.kt)("p",null,"Regarding the class ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_graph"),", we only need to build one function for each of the plot created. Here I will create function ",(0,a.kt)("inlineCode",{parentName:"p"},"get_houseprice_chart")),(0,a.kt)("p",null,'Essentially, we copy the "skeleton" code we created before here, and where placeholder (2) was, we replace it with the variable ',(0,a.kt)("inlineCode",{parentName:"p"},"bedroom_number_selected"),". There are some other things that just need to be there as MoL\xf6we structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load MoL\xf6we package with ",(0,a.kt)("inlineCode",{parentName:"li"},"from moloewe_chart import MoloeweChart")),(0,a.kt)("li",{parentName:"ul"},"Initialize instance of MoloeweChart with ",(0,a.kt)("inlineCode",{parentName:"li"},"my_chart = MoloeweChart()")),(0,a.kt)("li",{parentName:"ul"},"Get the directory to the asset folder ",(0,a.kt)("inlineCode",{parentName:"li"},"data")," on the server and load our dataset from there"),(0,a.kt)("li",{parentName:"ul"},"Add plot to this instance using the method ",(0,a.kt)("inlineCode",{parentName:"li"},"moloewe_chart_plot")," and return it in the end ")),(0,a.kt)("p",null,"Basically in the example below, ",(0,a.kt)("inlineCode",{parentName:"p"},"my_chart")," receives plotting information as a dictionary from the plot ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," (",(0,a.kt)("inlineCode",{parentName:"p"},"f")," is an instance of Ploty Express)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def get_houseprice_chart(self):\n\n    # Load MoL\xf6we package\n    from moloewe_chart import MoloeweChart\n\n    # Load othe necessary packages (here Plotly Express)\n    import plotly.express as px\n\n    # Initialize instance of MoloeweChart\n    my_chart = MoloeweChart()\n\n    # We call the selected variable (passed from the dropdown)\n    global bedroom_number_selected\n\n    # Load data (this global variable data contains the directory to our asset folder "data" on the server, where we upload house-prices.csv)\n    global data\n    house_data = pd.read_csv(data + "house-prices.csv")\n\n    # Now we subset the data based on the dropdown value\n    # We replace the value we chose earlier (2) with bedroom_number_selected\n    df_bedroom = house_data[house_data["bedrooms"] == bedroom_number_selected] \n\n    # Because the number of garage in the data is continuous, we convert it to discreet\n    # for the plot\n    df_bedroom["garage"] = df_bedroom["garage"].astype(str)\n\n    # Create the scatter plot (with adjusted title)\n    f = px.scatter(df_bedroom, x = "lotsize", y = "price", \n                   color = "garage",\n                   title="House Prices vs Lot Size in the City of Windsor, Canada - " + str(bedroom_number_selected) + " bedroom(s)")\n\n    # Change the axis labels\n    f.update_layout(xaxis_title = "Lot Size (sqm)",\n                    yaxis_title = "Price ($)")\n    \n    # Optional, we can add some additional configs to the plot. If not, just create an empty dictionary\n    my_config = dict()\n\n    # Now we only need to return this method moloewe_chart_plot\n    return my_chart.moloewe_chart_plot(plotly_data = f.to_dict(), plotly_config = my_config)\n\n\n# Append the function to class tool_graph\nsetattr(tool_graph, "get_houseprice_chart", get_houseprice_chart)\n')),(0,a.kt)("h2",{id:"testing-the-code-directly-in-this-ide-using-mol\xf6we-built-in-function"},(0,a.kt)("strong",{parentName:"h2"},"Testing the code directly in this IDE using MoL\xf6we built-in function")),(0,a.kt)("p",null,"Here, we initialize the MoL\xf6we project locally to test out the above functions directly in this IDE without having to upload the notebook onto MoL\xf6we. This saves us time and effort, and ensures us catching all coding-related mistakes before running the notebook on the MoL\xf6we server."),(0,a.kt)("p",null,"In the following cell, you only need to change the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"local_path"),". Remember to create all 5 asset folders - data, image, text, video, output - within this path as well, then put the ",(0,a.kt)("inlineCode",{parentName:"p"},"house_price.csv")," file in ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," subfolder."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT: MAKE SURE to comment out this entire section before saving the notebook and uploading it onto MoL\xf6we")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from moloewe_chart import MoloeweChart\n\ndef initialize_local_testing(local_data_path):\n\n    project_data = {\n            'folder_project_data': local_data_path + '/data/',\n            'folder_project_image': local_data_path + '/image/',\n            'folder_project_text': local_data_path + '/text/',\n            'folder_project_video': local_data_path + '/video/',\n            'folder_project_output': local_data_path + '/output/'\n        }\n    return project_data\n\n# Load local path (you need to create all 5 asset folders - data, image, text, video, output - within this path as well, then put the .csv file in data) \n\nlocal_path = 'D:/codes/leuphana-work/molowe'\n\n# project_data = initialize_local_testing('E:/projects/molowe') # Chan's laptop\nproject_data = initialize_local_testing(local_path) # Chan's workstation\n\n# Initialize Moloewe() instance\nlocal_testing = Moloewe().project_initialize(project_data)\n\n# Initialize all testing objects\nplot_test = MoloeweChart()\ntool_map_test = tool_map()\ntool_graph_test = tool_graph()\ntool_switch_test = tool_switch()\ntool_dropdown_test = tool_dropdown()\ntool_slider_test = tool_slider()\n")),(0,a.kt)("p",null,"Now you can check all the functions we wrote above. They show you all the possible values within the dropdown bedroom number, the currently selected value, and the corresponding plot with that value. You can go back and try selecting another bedroom number, then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"moloewe_plot_preview")," function to see the change in plot."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Check all values contained in the dropdown bedroom number\ntool_dropdown_test.get_bedroom_number()\n{'values': [1, 2, 3, 4, 5, 6], 'default': 1}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Set desired bedroom number\ntool_dropdown_test.set_bedroom_number(4)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Plot with selected bedroom number\nplot_test.moloewe_plot_preview(tool_graph_test.get_houseprice_chart())\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2892).Z,width:"1283",height:"666"})),(0,a.kt)("p",null,"Hopefully, with this example, you could gain a better insight of the MoL\xf6we logic. To sum up, interaction with MoL\xf6we charts & maps can be done with the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Come up with a concept of what you are trying to visualise (plot, map)"),(0,a.kt)("li",{parentName:"ul"},'Determine with part of that visualization would be your static part, and what would then be your "interactive" component'),(0,a.kt)("li",{parentName:"ul"},"Build the static part of the visualization"),(0,a.kt)("li",{parentName:"ul"},'Select any out of the possible values of the "interactive" component to be the placeholder'),(0,a.kt)("li",{parentName:"ul"},'Build this placeholder into the visualization to get a "skeleton version" of how the interactive visualization would look like, when a certain value from the interactive component is selected.'),(0,a.kt)("li",{parentName:"ul"},"Build ",(0,a.kt)("inlineCode",{parentName:"li"},"set")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"get")," functions for the corresponding MoL\xf6we interactive tool you would like to use (we have ",(0,a.kt)("inlineCode",{parentName:"li"},"tool_switch"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"tool_dropdown"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"tool_slider")," for this)"),(0,a.kt)("li",{parentName:"ul"},"Build ",(0,a.kt)("inlineCode",{parentName:"li"},"get")," function for the visualization (either with ",(0,a.kt)("inlineCode",{parentName:"li"},"tool_graph")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"tool_map"),"): combining the skeleton map and the selected value from the ",(0,a.kt)("inlineCode",{parentName:"li"},"set")," function")))}u.isMDXComponent=!0},3274:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/house_data_prices_vs_lot_size-84b8fc79a5d285b9f590c21874fbe3e2.jpg"},2892:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/house_data_prices_vs_lot_size_four_bedrooms-a30dddcd5ca5d5a59008b45f8eb34af7.jpg"},4938:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/house_data_prices_vs_lot_size_two_bedrooms-0519e1818f4d7c6de905089277aa891e.jpg"}}]);