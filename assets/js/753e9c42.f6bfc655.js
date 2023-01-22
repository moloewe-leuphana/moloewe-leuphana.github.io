"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(k,l(l({ref:t},u),{},{components:n})):o.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},l="Setting up an Environment",i={unversionedId:"under_construction/setting_up_environment",id:"under_construction/setting_up_environment",title:"Setting up an Environment",description:"MoL\xf6we projects are set up using a Jupyter Notebook file, called MoL\xf6we Notebook, and the options available on the MoL\xf6we platform.",source:"@site/docs/under_construction/setting_up_environment.md",sourceDirName:"under_construction",slug:"/under_construction/setting_up_environment",permalink:"/docs/under_construction/setting_up_environment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Glossary",permalink:"/docs/glossary"},next:{title:"Software",permalink:"/docs/under_construction/software"}},s={},p=[{value:"<strong>Approach 1: Manual Installation</strong>",id:"approach-1-manual-installation",level:2},{value:"Install Python 3",id:"install-python-3",level:3},{value:"Install Necessary Python Packages",id:"install-necessary-python-packages",level:3},{value:"Overview of Installed Packages",id:"overview-of-installed-packages",level:3},{value:"<strong>Approach 2: Restore a Conda Environment</strong>",id:"approach-2-restore-a-conda-environment",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-an-environment"},"Setting up an Environment"),(0,a.kt)("p",null,"MoL\xf6we projects are set up using a Jupyter Notebook file, called ",(0,a.kt)("em",{parentName:"p"},"MoL\xf6we Notebook"),", and the options available on the MoL\xf6we platform."),(0,a.kt)("p",null,"The easiest way to develop a Jupyter Notebook is to use the ",(0,a.kt)("a",{parentName:"p",href:"jupyter.leuphana.de"},(0,a.kt)("strong",{parentName:"a"},"JupyterHub server")),".\nBut you can also manually install the different software components on your own computer to have your local\nenvironment to develop a notebook to use it in MoL\xf6we. "),(0,a.kt)("hr",null),(0,a.kt)("p",null,"MoL\xf6we has been tested with Python 3.7 and Plotly v4. This section provides information on how to install Python\nand the required packages so that you can get started with writing a MoL\xf6we Notebook for your project."),(0,a.kt)("p",null,"At the time of writing, Jupyter Lab does not work reliably with Plotly. As such, using Jupyter Notebook is recommended."),(0,a.kt)("h2",{id:"approach-1-manual-installation"},(0,a.kt)("strong",{parentName:"h2"},"Approach 1: Manual Installation")),(0,a.kt)("p",null,"This shows you the way to manually install the different software components required. "),(0,a.kt)("p",null,"An alternative to manual installation is to restore a conda environment, however doing so requires a deeper\nknowledge of managing conda environments. If you are familiar with conda environments, follow the instructions mentioned below."),(0,a.kt)("h3",{id:"install-python-3"},"Install Python 3"),(0,a.kt)("p",null,"You can download and install Python 3 on your computer system by following the instructions mentioned in the official website.\n(",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},(0,a.kt)("em",{parentName:"a"},"link here")),")"),(0,a.kt)("p",null,"Please note that MoL\xf6we was tested to work with Python 3.7. Hence, we suggest this version of Python to be installed."),(0,a.kt)("h3",{id:"install-necessary-python-packages"},"Install Necessary Python Packages"),(0,a.kt)("p",null,"Once Python has been installed, you need two more packages (Jupyter Notebook and Plotly) to get started.\nHowever, installing three other packages that are used for data analysis is also advised. Therefore, the scripts in\nthe instruction below will install five packages in total."),(0,a.kt)("p",null,"Instructions for installation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the terminal (MacOS/Linux) or Powershell (Windows)."),(0,a.kt)("li",{parentName:"ol"},"Install Jupyter Notebook (and other useful packages like Numpy, Pandas, sklearn, etc.) by copy-pasting the following text and pressing enter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pip install numpy pandas scikit-learn jupyterlab"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Install Plotly by copy-pasting the following text to the terminal and pressing enter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pip install plotly==4.14.3"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Load Jupyter Notebook by typing ",(0,a.kt)("inlineCode",{parentName:"li"},"jupyter notebook")," in your terminal and pressing enter. A new browser tab should open with an interface that looks like the image below:")),(0,a.kt)("h3",{id:"overview-of-installed-packages"},"Overview of Installed Packages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Jupyter Notebook")," (",(0,a.kt)("a",{parentName:"li",href:"https://jupyter-notebook.readthedocs.io/en/stable/"},(0,a.kt)("em",{parentName:"a"},"official docs")),") is a browser-based code editing software that you need to write and store the code that you use for your projects in MoL\xf6we. We refer to the Jupyter Notebook uploaded to MoL\xf6we projects as MoL\xf6we Notebook in order to solidify the distinction between a regular Jupyter Notebook file and the file that is uploaded to the project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Plotly")," (",(0,a.kt)("a",{parentName:"li",href:"https://plotly.com/python/"},(0,a.kt)("em",{parentName:"a"},"official docs")),") is the interactive visualization library used by MoL\xf6we to create plots that are used for MoL\xf6we presentations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NumPy")," (",(0,a.kt)("a",{parentName:"li",href:"https://numpy.org/doc/stable/"},(0,a.kt)("em",{parentName:"a"},"official docs")),") is a package that many Python packages built for scientific computation use. It allows for vectorized operations. While you might not use this package directly in the MoL\xf6we Notebook for your project, it is still good to install."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"pandas")," (",(0,a.kt)("a",{parentName:"li",href:"https://pandas.pydata.org/docs/user_guide/index.html"},(0,a.kt)("em",{parentName:"a"},"official docs")),") allows loading tabular data from files and urls and supports many data analysis and summarization methods."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"scikit-learn")," (",(0,a.kt)("a",{parentName:"li",href:"https://scikit-learn.org/stable/user_guide.html"},(0,a.kt)("em",{parentName:"a"},"official docs")),") (also called ",(0,a.kt)("inlineCode",{parentName:"li"},"sklearn"),") is the most used Python package for data analysis and machine learning. Check out the official docs for all the methods supported.")),(0,a.kt)("h2",{id:"approach-2-restore-a-conda-environment"},(0,a.kt)("strong",{parentName:"h2"},"Approach 2: Restore a Conda Environment")),(0,a.kt)("p",null,"In order to restore a conda environment, please follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download ",(0,a.kt)("a",{parentName:"li",href:"./assets/requirements.txt"},"requirements.txt")," and place it in a folder (for instance, you can place it in a folder called ",(0,a.kt)("inlineCode",{parentName:"li"},"moloewe"),")."),(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"/moloewe")," in your terminal."),(0,a.kt)("li",{parentName:"ol"},"Restore the conda environment using ",(0,a.kt)("inlineCode",{parentName:"li"},"requirements.txt")," by using the following command: (replace ",(0,a.kt)("inlineCode",{parentName:"li"},"<env-name-here>")," with your own name eg. ",(0,a.kt)("inlineCode",{parentName:"li"},"moloewe"),")")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"conda create -n <env-name-here> -f requirements.txt"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"If you named your environment as ",(0,a.kt)("inlineCode",{parentName:"li"},"moloewe"),", you can activate the conda environment by running:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"conda activate moloewe"))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"You can then load Jupyter Notebook installed in the environment by running:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jupyter notbeook"))))}c.isMDXComponent=!0}}]);