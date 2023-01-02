"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7381],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),h=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),A=h(o),f=a,g=A["".concat(s,".").concat(f)]||A[f]||d[f]||i;return o?n.createElement(g,r(r({ref:t},p),{},{components:o})):n.createElement(g,r({ref:t},p))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=A;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var h=2;h<i;h++)r[h]=o[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}A.displayName="MDXCreateElement"},3885:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=o(7462),a=(o(7294),o(3905));const i={},r="Graph",l={unversionedId:"moloewe-tools/graph",id:"moloewe-tools/graph",title:"Graph",description:"A Graph Tool is used to display a Plotly graph during a presentation. Additionally, it supports input from other tools such as Dropdown Tool and Slider Tool.",source:"@site/docs/04-moloewe-tools/06_graph.md",sourceDirName:"04-moloewe-tools",slug:"/moloewe-tools/graph",permalink:"/docs/moloewe-tools/graph",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Map",permalink:"/docs/moloewe-tools/map"},next:{title:"Slider",permalink:"/docs/moloewe-tools/slider"}},s={},h=[{value:"<strong>Defining Graph Tool on Project Notebook</strong>",id:"defining-graph-tool-on-project-notebook",level:2},{value:"<strong>Placing Graph on a Slide (Edit Mode)</strong>",id:"placing-graph-on-a-slide-edit-mode",level:2},{value:"<strong>Loading Data from Files or URLs</strong>",id:"loading-data-from-files-or-urls",level:2},{value:"Loading Data from a File",id:"loading-data-from-a-file",level:3},{value:"Loading Data from URL",id:"loading-data-from-url",level:3},{value:"<strong>Viewing a Graph during Presentation</strong>",id:"viewing-a-graph-during-presentation",level:2},{value:"<strong>Combining Graphs with Other Tools</strong>",id:"combining-graphs-with-other-tools",level:2}],p={toc:h};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"graph"},"Graph"),(0,a.kt)("p",null,"A Graph Tool is used to display a Plotly graph during a presentation. Additionally, it supports input from other tools such as Dropdown Tool and Slider Tool."),(0,a.kt)("p",null,"The Graph tool requires definition of a function on the Project Notebook."),(0,a.kt)("h2",{id:"defining-graph-tool-on-project-notebook"},(0,a.kt)("strong",{parentName:"h2"},"Defining Graph Tool on Project Notebook")),(0,a.kt)("p",null,"All the graph tools that needs to be defined for a presentation need to be placed under a single class named ",(0,a.kt)("inlineCode",{parentName:"p"},"tool_graph"),"."),(0,a.kt)("p",null,"Each graph tool is defined using a single ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," function. It is recommended that the naming of the ",(0,a.kt)("inlineCode",{parentName:"p"},"get_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"set_")," functions is set in a consistent manner as shown in the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class tool_graph:\n    \n    def get_plotly_font_lwd_test_chart(self):\n\n        global line_width_1  # input from Slider Tool\n        global line_width_2  # input from Slider Tool\n        global font_size     # input from Dropdown Tool\n\n        fig = go.Figure()\n\n        # 1.  Make the two line plots\n        # Trace 1\n        fig.add_trace(go.Scatter(\n            x=[0, 1, 2, 3, 4, 5, 6, 7, 8],\n            y=[0, 1, 2, 3, 4, 5, 6, 7, 8],\n            name="Line 1",\n            mode="lines",\n            line=dict(width=line_width_1)\n        ))\n        # Trace 2\n        fig.add_trace(go.Scatter(\n            x=[0, 1, 2, 3, 4, 5, 6, 7, 8],\n            y=[1, 0, 3, 2, 5, 4, 7, 6, 8],\n            name="Line 2",\n            mode="lines+markers",\n            line=dict(width=line_width_2) # Line width\n            \n        ))\n\n        # 2. Add text related settings\n        fig.update_layout(\n            title="Plot Title (default: {})".format(font_size),\n            xaxis=dict(title="X-axis title", automargin=True),\n            yaxis=dict(title="Y-axis title", automargin=True),\n        )\n        \n        # 3. Update plotly template and margin sizes\n        fig.update_layout(\n            template="plotly_white",\n            margin=go.layout.Margin(l=100, r=0, b=100, t=font_size*2.5, pad=0),\n        )\n        \n        # 4. Font size\n        fig.update_layout(font=go.layout.Font(size=font_size))\n\n        return fig.to_dict()\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"get_plotly_font_lwd_test_chart")," function contains code that is used to create Plotly charts. This example chart (which is a line chart) displays two lines. Additionally, this code also takes input from other interactive tools such as Slider Tool (in case of ",(0,a.kt)("inlineCode",{parentName:"p"},"line_width_1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"line_width_2"),") and Dropdown Tool (in case of ",(0,a.kt)("inlineCode",{parentName:"p"},"font_size"),"). Depending on the values selected using the different interactive tools, the looks of the graph (the data and the graph properties) can be changed."),(0,a.kt)("p",null,"The global variables called within the function allows access to the values stored in the different variables that correspond to the different MoL\xf6we tools."),(0,a.kt)("p",null,"Please note the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the name of the function must start with ",(0,a.kt)("inlineCode",{parentName:"li"},"get_")," and end with ",(0,a.kt)("inlineCode",{parentName:"li"},"_chart")),(0,a.kt)("li",{parentName:"ul"},"the function must return a dictionary of the figure (",(0,a.kt)("inlineCode",{parentName:"li"},"fig.to_dict()"),")")),(0,a.kt)("p",null,"Users are referred to the official Plotly documentations for information on how to create ",(0,a.kt)("a",{parentName:"p",href:"https://plotly.com/python/"},"Plotly charts"),"."),(0,a.kt)("h2",{id:"placing-graph-on-a-slide-edit-mode"},(0,a.kt)("strong",{parentName:"h2"},"Placing Graph on a Slide (Edit Mode)")),(0,a.kt)("p",null,"To place a Graph Tool on a Slide, first define the Graph Tool on the Project Notebook and upload the notebook to MoL\xf6we. Then, open the slide in which the Graph Tool needs to be placed in Edit Mode."),(0,a.kt)("p",null,"Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps outlined ",(0,a.kt)("a",{parentName:"p",href:"docs/03-the-interface/05_slides.md#4-editing-slides-edit-mode"},(0,a.kt)("strong",{parentName:"a"},"here")),"."),(0,a.kt)("p",null,"Following that, click on the Graph icon (signified by a bar chart)."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(1775).Z,width:"828",height:"506"})),(0,a.kt)("p",null,"This will place a container for the Graph Tool onto the slide."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9898).Z,width:"682",height:"401"})),(0,a.kt)("p",null,"When a user hovers over this container, they will be presented with a gear icon that they can click on."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(1885).Z,width:"266",height:"93"})),(0,a.kt)("p",null,"Clicking on this icon opens an interface that allows users to select the graph that they want to add to the slide."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(4137).Z,width:"776",height:"419"})),(0,a.kt)("p",null,"The required fields in this interface are ",(0,a.kt)("strong",{parentName:"p"},"Tool Name")," and ",(0,a.kt)("strong",{parentName:"p"},"Get Function"),". The ",(0,a.kt)("em",{parentName:"p"},"Tool Name")," is a unique identifier for the tool, whereas the ",(0,a.kt)("em",{parentName:"p"},"Get Function")," is a function that is defined in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/working-with-notebooks/template_notebook"},"Project Notebook"),". The Header and Footer text are optional."),(0,a.kt)("p",null,'When the Tool Name and Get Functions have been set/selected, users can click on the "Save" button. Then, users are taken back to the slide in Edit Mode.'),(0,a.kt)("p",null,"They can then resize and reposition the size of the tool on the Slide canvas as described ",(0,a.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/overview"},(0,a.kt)("strong",{parentName:"a"},"here")),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The Graph might not render properly when in Edit Mode. However, when in Presentation Mode or in Controller Mode, provided that there are no errors in the code in the Project Notebook, the Graph will render properly to fill the container that it is placed in.")),(0,a.kt)("p",null,"In case of this example, the resized chart that has been placed in the slide looks like the following."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9121).Z,width:"1920",height:"966"})),(0,a.kt)("h2",{id:"loading-data-from-files-or-urls"},(0,a.kt)("strong",{parentName:"h2"},"Loading Data from Files or URLs")),(0,a.kt)("p",null,"Users can upload data files to MoL\xf6we and load the data so that they can use it for a graph or a map."),(0,a.kt)("h3",{id:"loading-data-from-a-file"},"Loading Data from a File"),(0,a.kt)("p",null,"The following example shows how to load data from a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"diabetes.csv"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nclass tool_graph:\n    \n    def get_some_chart(self):\n\n        # Load data from a file\n        global data\n        diabetes = pd.read_csv(data + "diabetes.csv")\n\n        #                            #\n        # rest of the code goes here #\n        #                            #\n\n        return fig.to_dict()\n')),(0,a.kt)("p",null,"The project path defined in the beginning of the Project Notebook (more ",(0,a.kt)("a",{parentName:"p",href:"/docs/working-with-notebooks/template_notebook#21-mandatory-section"},(0,a.kt)("strong",{parentName:"a"},"here")),") allows loading the data using the relative path. The relative path is stored in a global variable named ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),". The user does not have to know that is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),"; as long as a user knows the file name of a data file, they can load the data by simply using the relative path to the file that is created by concatenating the string of the file name to the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," variable."),(0,a.kt)("h3",{id:"loading-data-from-url"},"Loading Data from URL"),(0,a.kt)("p",null,"The following example shows how to load data from a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"diabetes.csv"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nclass tool_graph:\n    \n    def get_some_other_chart(self):\n\n        # Load data from a URL\n        diabetes = pd.read_csv("https://www.<link>.com/to/data/file.csv")\n\n        #                            #\n        # rest of the code goes here #\n        #                            #\n\n        return fig.to_dict()\n')),(0,a.kt)("p",null,"As you can see, loading data from a URL quite straightforward. "),(0,a.kt)("h2",{id:"viewing-a-graph-during-presentation"},(0,a.kt)("strong",{parentName:"h2"},"Viewing a Graph during Presentation")),(0,a.kt)("p",null,"During presentation (i.e. while at Presentation Mode or Controller Mode), users can view the Graph tool that was defined in the Edit Mode using the steps described above."),(0,a.kt)("h2",{id:"combining-graphs-with-other-tools"},(0,a.kt)("strong",{parentName:"h2"},"Combining Graphs with Other Tools")),(0,a.kt)("p",null,"A graph defined using the Graph tool can be manipulated by using other MoL\xf6we tools that allow users to select/change values (eg. Dropdown tool). The general order of operation to achieve this is as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define all the interactive tools necessary in the Project Notebook."),(0,a.kt)("li",{parentName:"ol"},"Define the Graph in the Project Notebook as described above. The global variables that correspond to the different interactive tools from Step 1 also need to be called within this function in order for them to be used."),(0,a.kt)("li",{parentName:"ol"},"Place the different interactive tools on a slide in Edit Mode."),(0,a.kt)("li",{parentName:"ol"},"Place the Graph Tool on a slide in Edit Mode."),(0,a.kt)("li",{parentName:"ol"},"Resize and/or reposition the tools as necessary."),(0,a.kt)("li",{parentName:"ol"},"Save the Slide and exit Edit Mode."),(0,a.kt)("li",{parentName:"ol"},"Start a presentation (Presentation Mode or Controller Mode) and open the slide."),(0,a.kt)("li",{parentName:"ol"},"Use interactive tools (Range Slider, Button, Dropdown Tool, etc.) to change different values."),(0,a.kt)("li",{parentName:"ol"},"Refresh the graph as described below.")),(0,a.kt)("p",null,"When a Graph can be manipulated using other interactive tools (e.g. Dropdown and Slider as mentioned above), after making changes using these interactive tools, the graph needs to be refreshed manually by clicking on an icon that appears on the top right of the Graph's container as shown below. The refresh function works only when the slide is being viewed in the Controller or Presentation Modes."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7805).Z,width:"1544",height:"788"})))}d.isMDXComponent=!0},1775:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/37_choose_graph_tool-0d22938ffdee24d3a9cbe03344d3f6d2.jpg"},9898:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/38_tool_field-630be267f08f54374da51cc1e819bb79.jpg"},1885:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAsRXhpZgAATU0AKgAAAAgAAQExAAIAAAAKAAAAGgAAAABHcmVlbnNob3QA/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAXQEKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/rB/4JUf8ovP+Cbv/ZhH7Hv/AKzz8O6+96+CP+CVH/KLz/gm7/2YR+x7/wCs8/DuvvegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+aP/grD48/aDuP+CgfwS+CXwl/aN+MHwR0Hxr+z5omqXMPgDx7428P6GNdh8YfG24m1i88O+GvFHh2zvtSvrPw7puk3GoSSLefY7ayVpJ4rCC2ryd/2Rf8Ago4I0mH7fn7TkkUiLJFInj/4sOkiOAyujL8WyrIykMrAkMpDLkc16Z/wU0OP+CuH7LR9P2dNM9f+hl/aK9Oa/oU+BelW+seEtBuLuCOW3sLG3O2SNWEszrmKNt4OY48PIyf3vLB+R2DfhHD3BXD/ABdnXiJjs/p5rjMTguPswy3Cyo8R8SZbSoYGjkvD+Kp0IYbK82wWGSjXxeIqc7ouo3U5ZTcYQjH+aeFfD3hfjriDxWzLielnWPxeX+J2a5RgpYfi3i3KaOHy6hw9wxjKWFp4TJs8y/CKMMTjsVU53QdV+15ZVHCFOMP5r7P9iv8A4KW3yCUft3/tOxwN9x5/HvxbUuv95Iz8VixX+6W2qwOUZgc1fP7Dn/BSUD5f2+P2mS3ofHHxZUZ/3h8WmP47a/rN+yWv/Prb/wDfiP8A+Jqhb3Wg3V7eaba3GkXOoaeIzf2FvNZTXtiJgTCby1jZp7YSgExmZE3gErmvq/8AiD/AX/Qvzrv/AMlnxr0t/wBVD00/A+3XgN4aNNrKuIWo2cmuP/ENpJtJNv8A1p0u2kr9WkfyVXn7G3/BSrTiBdft3/tPpGxwkyePfi28LH+7uHxXXY2OiyBGYZ2ggEjyD4/fsp/t0aL8Avjdr3xO/bP+P3jr4Z6N8IfiVq3xD8EeLPF3xI1Xwp4y8Dad4M1q88W+FPE2l6z8TNT0fUfD/iHQIdQ0jWrDVtM1HTbzTby5gvrG8tZJbeT+z6fTbC5hkgnsraSKVSjoYI8EH325BHVWBBUgEEEA1+ZH/BUDThpv/BOL/govp8aqk0P7Dn7Wn2S5RBHMA/wA8fPbTpJGFKTJlPnQrtlU7Cu0YP8AiD/AX/Qvzr/xM+Nf/oh8l9wv+ID+GX/Qr4g/8WB4hf8A0Un4gf8ABNP9oD40eHfj58fPhF8Yfid8Q/izb6H4ksPB6XHjzxZ4k8Tz6PqPhbXfGujXl/okPiLV9YbRTqUsMbalZ2txsvEtrSK6knksbOeH+hFWDqrqcq6hlOCMqwyDg4IyD3APrX82n7KyqP2/P20cKoCftFeMwmFA2j/hZvxNGF4+UY4wMccV/SNa/wDHtb/9cIv/AEWtLwec/wDiH+VRnVrVvY5nxXh4TxFetia3scNxfnuHoQnXxE6lap7KjSp0oyqVJy5IRTk7B4Duf/EL8lhOtiK/sM443wtOpisTiMXX9hhOO+JcLhqdTE4qpWxFb2OHo0qMZVqs58kIpydjz/8A4JUf8ovP+Cbv/ZhH7Hv/AKzz8O6+96+CP+CVH/KLz/gm7/2YR+x7/wCs8/Duvvev00/YAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+ZX/gpt/wApbv2W/wDs3PTP/Ul/aKr+jP8AZzx/wrPTP73m89M7Psdns6e+/Gfev5zv+Cmgz/wVw/ZaHr+zppnr/wBDL+0V6c1/Qx8CL9dL8I6DBO221v7K3QyE/LDOifunYnGEkDNGzf3jGT8iMV/M/Dr/AH7xO/7OZmv/AKzvC5+P+E//ACMfGL/s8Gd/+srwafIv/BZz47/FH9mv/gnZ8d/jD8F/jFonwQ+JvhVfB0nhXxdq2j6Xrl7qV3c+MtEgufCHhey1oXOljxN4nsGurCxuL3SNdhgtDfsdOhONX0v+KrWfH3xa/ZR8AfA//gov8EP+CsPhTX/2sf2+PEEGk/tQeB9L0TwBf+J/h3Ya1fr4j1fVfG+jvqfiRrbTfA+s6TYaPq8c3gDwYbd7qKz8IyRaHLLbXH+i78VPhN8Mvjl4D174X/GHwJ4X+JXw68UJZR+IfBnjLSLTXfDurrp2oWmraeb3Tb6OW3mex1SxstQtJCvmW95awXELJLEjD8kvhP8A8EBf+CdPwu/aE+MPx4uPhLpHxF074qC5OjfBP4h+GPBGvfBr4RyX2rWms30vww8KjwxbyaI/2izW10s3F7ef2DpU93pWkfZbKcxD9UympHCY6rWrNx569GvDExj7acMDQpU45jkfs5y5o4fiNRjQxjpTp0qVPDU6kVTxFWtWqf3J4Z+JXBvCvCGNyfPMvr18U8zxuNx2DpZBw7mVDizAYrC4PDZbleOxmZ4OrXw8OHsypT4hwsa8qlGeIpOnFydWFKl+x3hG/fVfCfhjU5Nd0fxRJqXh7Rb+TxN4egFtoHiJ7zTba4bXdDtxf6oLfR9XaQ6hpkI1PURFZXECC/vNv2iT8/P+CrG3/h37/wAFAOm3/hhH9qbzOn3v+FH/ABG69/ubevav0bd7awtdx8q2tLWIKqoqxxQxRKFSOONAFVVUBI40X+6iL0FfmP8A8FRbx7v/AIJu/wDBRvVnDIP+GGf2t5YkY8xwwfs/eP8AylbGRuCIGfBK7yzDIOTnWnGpWq1IR5ITqTnGFoLljKTlGNqUKdNcqaVqdOnBW9yEY2iv55gmoxUt1FJ6uWqSvq9Xr1er3ep+Av7K/wDyf5+2n/2cX4z/APVnfE6v6RLX/j2t/wDrhF/6LWv5u/2Vv+T/AD9tP/s4vxn/AOrO+J1f0iWv/Htb/wDXCL/0Wtfl3g//AMkDl3/Y54y/9bXiE/IfAf8A5Nnlf/ZQeIH/AK8Lik8//wCCVH/KLz/gm7/2YR+x7/6zz8O6+96+CP8AglR/yi8/4Ju/9mEfse/+s8/Duvvev00/YAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD+YT/gqZruh+Gf+Cr37MmueJdZ0rw9olh+zlpD3+sa5qNnpOlWSTeKv2h7aJ7vUL+a3tLZZLiaGCNppkDzSxxKS7qp/ZD4dfth/seWvgbQrPUP2rf2a7O6hs41ktrv45/C+3uImCL8skM3ilJUORgqyhhjHAzWR+2R/wTn/AGf/ANsXVdP8eePfDl3L8TtA8M2vhHR/EcHiXxVp1vJ4ZsNU1nW7PRLnSdN1uz0fMGqeINYu4NS+wfb3a9e2vLme0islsfzth/4IffB2NNsvhae4bJPmN4q8YxsQegKx+IVTjsQo4xnJ5P5BhMk8S+H814sq5Dh+BsblnEPE2K4hoyzfNs/wuOo/WcvyzAOhVpYLIsTh1yrLVNOFeprUfvWSR+D4Dhzxe4WzvjetwzhfDfMMo4p4wxvFOHnnud8T4PMsP9cyvKMteGrUMv4bxeFjyRymNROGJq61ZLmskfrZZft3fsl6Yqwp+1v+zFe2y8LFcfHr4XF4x12xzr4s3KvZVcSKo+VFUYA0z/wUF/ZDIwv7Tv7MaN2dv2hfha6g+pQeIUOPbePrX5CH/giD8Ge3hGUf9zb40P8A7sX9aT/hyD8Gv+hSl/8ACs8Z/wDzRV6ft/GT/oV+Gf8A4fuKf/oc9f6WvsfWfH7/AKE3g/8A+JLxp/8AQmfrDd/tv/si6s6tf/tefsyLEpyltF8ePhbHAmf4th8WszuOzSNIy5IUhSwPxl/wUk/aq/Za8bf8E5f2/PBHgb9pP4A+MfGnjD9in9qnwt4P8H+FPjF8OvEPinxX4p8Q/Avx3pPh/wAN+G/D+keI7zVdd1/XdWvLTTNH0fS7S61DU9Rurexsbaa4njjb5sH/AARB+DP/AEKMp/7m3xp/TxFXg/7VP/BJb4OfAr9mD9o/43ReGmsZfg58Bvi/8VI72TxR4tnjs5Ph78PfEXi5Lp4LrXprWZLdtIErRXMUsEgQpNG8ZZSe38ZP+hX4Z/8Ah+4p/wDoc9f6Wp9Z8fv+hN4P/wDiS8af/QmfPf7H+saT4g/bm/a/1/QNU07XNC1z49eJtX0XWtIvbbUtJ1fSdS+IvxJvdO1TS9RspZrPUNO1Czmhu7K9tJpba6tpYp4JZIpEc/0q2v8Ax7W//XCL/wBFrX5VfAv/AIJ/aZ8APE7eIfAumfYBezae2sW76nq+oG9h057lrXy21W9vfIkg+23RXyTEs3mlZ922J4v1WtwVt4FYEEQxAgggghFBBB5BB4IPSvX8PeH8z4X4Sy/Js4ngamZUcXnmLxUstq4ivgebNc+zPNoQw9XFYbCV5qnSx1OnN1MPTaqRmlzRUZy97ws4Xzjg7gfK8gz6pltXN8PjuI8djJ5RWxWIy5TzvibOM8p08LWxuEwOJqRpUMypUpurhaTVWFRR54KNSfn3/BKj/lF5/wAE3f8Aswj9j3/1nn4d19718Ef8EqP+UXn/AATd/wCzCP2Pf/Wefh3X3vX2p+hBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfBH/BVf8A5Ref8FIv+zCP2wv/AFnn4iV9718Ef8FV/wDlF5/wUi/7MI/bC/8AWefiJQB6PRRRQB5x/wAEqP8AlF5/wTd/7MI/Y9/9Z5+Hdfe9fhh/wTT/AOCln/BOXwJ/wTl/YB8D+OP2/v2J/BvjXwb+xP8Asq+FPF/hDxX+1V8CvDvijwp4o8O/ArwHpHiDw34k8P6v48s9W0LX9C1azu9L1jR9UtLXUdM1G1ubK9toLmCWJftj/h6v/wAEvP8ApJF+wR/4mF+zz/8APEoA+96K+CP+Hq//AAS8/wCkkX7BH/iYX7PP/wA8Sj/h6v8A8EvP+kkX7BH/AImF+zz/APPEoA+96K+CP+Hq/wDwS8/6SRfsEf8AiYX7PP8A88Sj/h6v/wAEvP8ApJF+wR/4mF+zz/8APEoA+96K+CP+Hq//AAS8/wCkkX7BH/iYX7PP/wA8Sj/h6v8A8EvP+kkX7BH/AImF+zz/APPEoA+96K+CP+Hq/wDwS8/6SRfsEf8AiYX7PP8A88Sj/h6v/wAEvP8ApJF+wR/4mF+zz/8APEoA+96K+CP+Hq//AAS8/wCkkX7BH/iYX7PP/wA8Sj/h6v8A8EvP+kkX7BH/AImF+zz/APPEoA+96K+CP+Hq/wDwS8/6SRfsEf8AiYX7PP8A88Sj/h6v/wAEvP8ApJF+wR/4mF+zz/8APEoA+96K+CP+Hq//AAS8/wCkkX7BH/iYX7PP/wA8Sj/h6v8A8EvP+kkX7BH/AImF+zz/APPEoA+96K+CP+Hq/wDwS8/6SRfsEf8AiYX7PP8A88Sj/h6v/wAEvP8ApJF+wR/4mF+zz/8APEoA+96K+CP+Hq//AAS8/wCkkX7BH/iYX7PP/wA8Sj/h6v8A8EvP+kkX7BH/AImF+zz/APPEoA+96K+CP+Hq/wDwS8/6SRfsEf8AiYX7PP8A88Sj/h6v/wAEvP8ApJF+wR/4mF+zz/8APEoA+96K+CP+Hq//AAS8/wCkkX7BH/iYX7PP/wA8Sj/h6v8A8EvP+kkX7BH/AImF+zz/APPEoA+96K+CP+Hq/wDwS8/6SRfsEf8AiYX7PP8A88Sj/h6v/wAEvP8ApJF+wR/4mF+zz/8APEoA+96K+CP+Hq//AAS8/wCkkX7BH/iYX7PP/wA8Sj/h6v8A8EvP+kkX7BH/AImF+zz/APPEoA+96K+CP+Hq/wDwS8/6SRfsEf8AiYX7PP8A88Sj/h6v/wAEvP8ApJF+wR/4mF+zz/8APEoA+96+LP8AgpL4Q8S/EL/gnb+3r8P/AAXpF14h8Z+PP2Mf2oPBPg/w9YeWb/xB4s8W/BHxx4f8N6Dp6zSRRPf6zrWo2Om2MbyIJbq6hj3Ddmjwh/wUl/4J2/ELxLpHgv4f/t6/sY+PPGfiG6+weHvB/gn9qD4I+LfFniC/Mcky6foPhvw/441HWtZv3iikeOx02xurqUI3lwtg1zfxU+Kl545vG0/TzLaeGLSXNtbHKS6jKhIW+vlB/G1tjlYFO98zklAD0eiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z"},4137:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/41_choose_graph-706aca75f8953fb336afc971087be898.jpg"},9121:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/42_resized_chart-5f1d6e8a6825144e6244f4f349e6d8a5.jpg"},7805:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/62_graph_1-4b81709553e5af6fbcd3fd3d17ea3260.jpg"}}]);