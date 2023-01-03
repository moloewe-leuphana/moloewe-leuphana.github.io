"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3018],{3905:(e,o,i)=>{i.d(o,{Zo:()=>l,kt:()=>f});var A=i(7294);function t(e,o,i){return o in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i,e}function n(e,o){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);o&&(A=A.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),i.push.apply(i,A)}return i}function a(e){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?n(Object(i),!0).forEach((function(o){t(e,o,i[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(i,o))}))}return e}function K(e,o){if(null==e)return{};var i,A,t=function(e,o){if(null==e)return{};var i,A,t={},n=Object.keys(e);for(A=0;A<n.length;A++)i=n[A],o.indexOf(i)>=0||(t[i]=e[i]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(A=0;A<n.length;A++)i=n[A],o.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var r=A.createContext({}),s=function(e){var o=A.useContext(r),i=o;return e&&(i="function"==typeof e?e(o):a(a({},o),e)),i},l=function(e){var o=s(e.components);return A.createElement(r.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return A.createElement(A.Fragment,{},o)}},h=A.forwardRef((function(e,o){var i=e.components,t=e.mdxType,n=e.originalType,r=e.parentName,l=K(e,["components","mdxType","originalType","parentName"]),h=s(i),f=t,g=h["".concat(r,".").concat(f)]||h[f]||d[f]||n;return i?A.createElement(g,a(a({ref:o},l),{},{components:i})):A.createElement(g,a({ref:o},l))}));function f(e,o){var i=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=i.length,a=new Array(n);a[0]=h;var K={};for(var r in o)hasOwnProperty.call(o,r)&&(K[r]=o[r]);K.originalType=e,K.mdxType="string"==typeof e?e:t,a[1]=K;for(var s=2;s<n;s++)a[s]=i[s];return A.createElement.apply(null,a)}return A.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5073:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>K,toc:()=>s});var A=i(7462),t=(i(7294),i(3905));const n={},a="Slides",K={unversionedId:"edit-mode/slides",id:"edit-mode/slides",title:"Slides",description:'Once you select a project, you can visit the Slides page of the project by clicking on "Slides" on the left panel of the user interface.',source:"@site/docs/03-edit-mode/05_slides.md",sourceDirName:"03-edit-mode",slug:"/edit-mode/slides",permalink:"/docs/edit-mode/slides",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Files",permalink:"/docs/edit-mode/files"},next:{title:"Screens",permalink:"/docs/edit-mode/screens"}},r={},s=[{value:"<strong>1 Creating New Slides</strong>",id:"1-creating-new-slides",level:2},{value:"<strong>2 Editing Slide Details</strong>",id:"2-editing-slide-details",level:2},{value:"<strong>3 Different Slide Modes</strong>",id:"3-different-slide-modes",level:2},{value:"3.1 Edit Mode",id:"31-edit-mode",level:3},{value:"3.2 Controller Mode",id:"32-controller-mode",level:3},{value:"3.3 Presentation Mode",id:"33-presentation-mode",level:3},{value:"<strong>4 Editing Slides (Edit Mode)</strong>",id:"4-editing-slides-edit-mode",level:2},{value:"<strong>5 Edit Mode Example 1: Add a Graph</strong>",id:"5-edit-mode-example-1-add-a-graph",level:2},{value:"<strong>6 Edit Mode Example 2: Add a Range-Slider Tool</strong>",id:"6-edit-mode-example-2-add-a-range-slider-tool",level:2},{value:"<strong>7 Deleting Slides</strong>",id:"7-deleting-slides",level:2}],l={toc:s};function d(e){let{components:o,...n}=e;return(0,t.kt)("wrapper",(0,A.Z)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"slides"},"Slides"),(0,t.kt)("p",null,'Once you select a project, you can visit the Slides page of the project by clicking on "Slides" on the left panel of the user interface.'),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(306).Z,width:"1920",height:"966"})),(0,t.kt)("p",null,"The slides page displays the slides associated with a selected project. Additionally, this page allows users to create, edit, and delete slides that they need for their project."),(0,t.kt)("p",null,'New projects already have an empty slide named "Slide 1" created in the project.'),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},'The terms "Slide / Slides" are used in MoL\xf6we are not the same as the slides that are created for PowerPoint (or Keynote) presentations. MoL\xf6we offers features that are distinctly different from generic slides. As a result, users are encouraged to not be bound to the notion of slides as they exist in software programs such as PowerPoint and Keynote.')),(0,t.kt)("h2",{id:"1-creating-new-slides"},(0,t.kt)("strong",{parentName:"h2"},"1 Creating New Slides")),(0,t.kt)("p",null,'If a user has appropriate access rights, she can create a new slide by pressing on the "Create Slide" button below the list of slides.'),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(9889).Z,width:"578",height:"315"})),(0,t.kt)("p",null,'Then, the users will be presented a page where the slide being created can be given a name (in the example below, the new slide is named as "Slide 2").'),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(5919).Z,width:"1567",height:"589"})),(0,t.kt)("p",null,'After naming the slide, users can click on "Save" button to confirm creation of the slide.'),(0,t.kt)("p",null,"In the same page, users can also change other metadata of the slide; namely, slide name, slide description, slide background image or slide background color."),(0,t.kt)("h2",{id:"2-editing-slide-details"},(0,t.kt)("strong",{parentName:"h2"},"2 Editing Slide Details")),(0,t.kt)("p",null,'Slides can be given custom names, descriptions, and a background color or an image. To edit these parameters of slides, users can click on the "',(0,t.kt)("strong",{parentName:"p"},"i"),'" icon on the right hand side of the name of the slide.'),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(9565).Z,width:"1550",height:"433"})),(0,t.kt)("p",null,"Then, the user is taken to a page where the slide details can be changed."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(2204).Z,width:"1560",height:"523"})),(0,t.kt)("p",null,"From this page, the following details of the slides can be changed:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Slide Name"),(0,t.kt)("li",{parentName:"ul"},"Slide Description"),(0,t.kt)("li",{parentName:"ul"},"Background picture of the slide"),(0,t.kt)("li",{parentName:"ul"},"Background color of the slide (if a background picture has been selected, the color that has been selected is ignored)")),(0,t.kt)("p",null,'Once the changes have been made, the changes can be saved by pressing on the "Save" button on the right side of the page.'),(0,t.kt)("p",null,'This page also allows users to delete the slide by clicking on the "Delete" button.'),(0,t.kt)("h2",{id:"3-different-slide-modes"},(0,t.kt)("strong",{parentName:"h2"},"3 Different Slide Modes")),(0,t.kt)("p",null,'When it comes to accessing Slides in MoL\xf6we, there are three main modes: "Edit Mode", "Controller Mode", "Presentation Mode".'),(0,t.kt)("h3",{id:"31-edit-mode"},"3.1 Edit Mode"),(0,t.kt)("p",null,"Edit Mode allows users to edit the contents of the slide. This means that any MoL\xf6we Tool (e.g. Graphs, Maps, Range Sliders, Buttons, etc.) that the user wants to place into a slide can be done by entering the Edit Mode."),(0,t.kt)("p",null,"Details on how to access Edit Mode are presented in Section 4 of this page."),(0,t.kt)("h3",{id:"32-controller-mode"},"3.2 Controller Mode"),(0,t.kt)("p",null,"When a presentation is being carried out using MoL\xf6we, the presenter interacts with MoL\xf6we in Controller Mode."),(0,t.kt)("p",null,"Controller Mode allows users to change the Slides that are associated with Screens. Additionally, the Controller Mode also allows users to change the Screens that are placed on the different Display Devices."),(0,t.kt)("h3",{id:"33-presentation-mode"},"3.3 Presentation Mode"),(0,t.kt)("p",null,"When a presentation is being carried out using MoL\xf6we, the audience members of the presentation interact with MoL\xf6we in Presentation Mode."),(0,t.kt)("h2",{id:"4-editing-slides-edit-mode"},(0,t.kt)("strong",{parentName:"h2"},"4 Editing Slides (Edit Mode)")),(0,t.kt)("p",null,"Edit Mode allows users to edit the contents of the slide. This means that any ",(0,t.kt)("a",{parentName:"p",href:"/docs/moloewe-tools/overview"},(0,t.kt)("strong",{parentName:"a"},"MoL\xf6we Tool"))," (e.g. Graphs, Maps, Range Sliders, Buttons, etc.) that the user wants to place into a slide can be done by entering the Edit Mode."),(0,t.kt)("p",null,'To edit a slide (in this case "Slide 1"), click on the name of the slide.'),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(46).Z,width:"756",height:"344"})),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Loading slides runs the contents of the ",(0,t.kt)("a",{parentName:"p",href:"/docs/working-with-notebooks/template_notebook"},(0,t.kt)("strong",{parentName:"a"},"Template Notebook")),". Depending on the amount of code placed in the notebook, it might take some time to load the slide.")),(0,t.kt)("p",null,"In Edit Mode, an empty slide with a gray background looks like the following."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(6278).Z,width:"1920",height:"966"})),(0,t.kt)("p",null,'Users can add different MoL\xf6we Tools to the slide by clicking on the "',(0,t.kt)("strong",{parentName:"p"},"+"),'" button on the top left of the page.'),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(8520).Z,width:"488",height:"289"})),(0,t.kt)("p",null,"Clicking on the button will open a panel of options for the different tools that users can add to the slide. This panel of options looks like the following:"),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(4810).Z,width:"583",height:"464"})),(0,t.kt)("p",null,"Two examples for how different tools can be placed on a Slide are presented in sub-sections below."),(0,t.kt)("h2",{id:"5-edit-mode-example-1-add-a-graph"},(0,t.kt)("strong",{parentName:"h2"},"5 Edit Mode Example 1: Add a Graph")),(0,t.kt)("p",null,"To add a graph, click on the Graph icon (signified by a bar chart)."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(1775).Z,width:"828",height:"506"})),(0,t.kt)("p",null,"This will place a container for the Graph Tool onto the slide."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(9898).Z,width:"682",height:"401"})),(0,t.kt)("p",null,"When a user hovers over this container, they will be presented with a gear icon that they can click on."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(1885).Z,width:"266",height:"93"})),(0,t.kt)("p",null,"Clicking on this icon opens an interface that allows users to select the graph that they want to add to the slide."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(4137).Z,width:"776",height:"419"})),(0,t.kt)("p",null,"The required fields in this interface are ",(0,t.kt)("strong",{parentName:"p"},"Tool Name")," and ",(0,t.kt)("strong",{parentName:"p"},"Get Function"),". The ",(0,t.kt)("em",{parentName:"p"},"Tool Name")," is a unique identifier for the tool, whereas the ",(0,t.kt)("em",{parentName:"p"},"Get Function")," is a function that is defined in the ",(0,t.kt)("a",{parentName:"p",href:"/docs/working-with-notebooks/template_notebook"},"Project Notebook"),". The Header and Footer text are optional."),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Visit the ",(0,t.kt)("a",{parentName:"p",href:"docs/03-moloewe-tools/00_overview.md"},(0,t.kt)("strong",{parentName:"a"},"MoL\xf6we Tools Chapter"))," for more information on the different tools. ")),(0,t.kt)("p",null,'When the Tool Name and Get Functions have been set/selected, users can click on the "Save" button. Then, users are taken back to the slide in Edit Mode.'),(0,t.kt)("p",null,"They can then resize and reposition the size of the tool on the Slide canvas as described ",(0,t.kt)("a",{parentName:"p",href:"docs/03-moloewe-tools/00_overview.md"},(0,t.kt)("strong",{parentName:"a"},"here")),"."),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"The Graph might not render properly when in Edit Mode. However, when in Presentation Mode or in Controller Mode, provided that there are no errors in the code in the Project Notebook, the Graph will render properly to fill the container that it is placed in.")),(0,t.kt)("p",null,"In case of this example, the resized chart that has been placed in the slide looks like the following."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(9121).Z,width:"1920",height:"966"})),(0,t.kt)("p",null,"In the next example, a range slider tool will be added to the slide."),(0,t.kt)("h2",{id:"6-edit-mode-example-2-add-a-range-slider-tool"},(0,t.kt)("strong",{parentName:"h2"},"6 Edit Mode Example 2: Add a Range-Slider Tool")),(0,t.kt)("p",null,"Adding a range slider tool involves the general steps mentioned above."),(0,t.kt)("p",null,"To add a Slider, click on the slider icon from the tool selection panel."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(3186).Z,width:"770",height:"460"})),(0,t.kt)("p",null,"This will place a container for the Slider Tool onto the slide. This will look identical to the initial container for the Graph Tool shown above. Following the steps described in Example 1 above, users can open an interface that allows them to select the range slider tool that they want to place on the slide by clicking on the gear icon that appears when they hover over the container using their mouse."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(6250).Z,width:"774",height:"630"})),(0,t.kt)("p",null,"The required fields in this interface are ",(0,t.kt)("strong",{parentName:"p"},"Tool Name"),", ",(0,t.kt)("strong",{parentName:"p"},"Get Function"),", and ",(0,t.kt)("strong",{parentName:"p"},"Set Function"),". The ",(0,t.kt)("em",{parentName:"p"},"Tool Name")," is a unique identifier for the tool, whereas the ",(0,t.kt)("em",{parentName:"p"},"Get Function")," and the ",(0,t.kt)("em",{parentName:"p"},"Set Function")," are functions that are defined in the ",(0,t.kt)("a",{parentName:"p",href:"/docs/working-with-notebooks/template_notebook"},"Project Notebook"),". The Header, Footer, and Description texts are optional."),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Visit the ",(0,t.kt)("a",{parentName:"p",href:"docs/03-moloewe-tools/00_overview.md"},(0,t.kt)("strong",{parentName:"a"},"MoL\xf6we Tools Chapter"))," for more information on the different tools. ")),(0,t.kt)("h2",{id:"7-deleting-slides"},(0,t.kt)("strong",{parentName:"h2"},"7 Deleting Slides")),(0,t.kt)("p",null,"Navigate to the page where slide details can be changed by following steps detailed in Step 2."),(0,t.kt)("p",null,"This will lead to a page where you can edit details of the slide (see below)."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(2204).Z,width:"1560",height:"523"})),(0,t.kt)("p",null,"The same page also allows users to delete or export a given slide. This can be done by pressing the delete button on the bottom left side (see below)."),(0,t.kt)("p",null,(0,t.kt)("img",{src:i(676).Z,width:"677",height:"321"})))}d.isMDXComponent=!0},306:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/07_slides_page-21984a14ba61dd0ccebdb0e7102de9f8.jpg"},9889:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/29_create_slide-be5fe85b5656484ec5fd6f1be0a23bf0.jpg"},5919:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/30_create_slide_interface-6c6dc53aea93d3dcab8825e2438ec206.jpg"},9565:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/31_edit_slide_button-43f7b26832d91297c5ec472c47c642c4.jpg"},2204:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/32_edit_slide_details_interface-f8aa5f0e4b6fc2626b6116cee6995ccf.jpg"},46:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/33_enter_edit_mode-fb72ffe624702267def042f34df96d8a.jpg"},6278:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/34_edit_mode_page-6f4afc6b99fb8fd0fc3cc8ec0645c7d6.jpg"},8520:(e,o,i)=>{i.d(o,{Z:()=>A});const A="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAsRXhpZgAATU0AKgAAAAgAAQExAAIAAAAKAAAAGgAAAABHcmVlbnNob3QA/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgBIQHoAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/t4oor+Tr/g6k+NPxM8EfDT9kv4R+EvFuteHfA/xb1r43a18RNJ0bULvTV8Vt8ObT4T2vhjTNaezmhbUdEtm8f67ez6PdmbT7nUE0y+mt3udMs5IdaNN1qkaafLzN62vZJNvTS+i7n2Ph/wfX4+4vybhLD42nl1TN6uKi8bVoyrww1LBYDFZjiKnsI1KTrT+r4SqqVL2tJTquEZVacW5x/rFor/HPorv/s3/AKff+U//ALc/qv8A4k3/AOrjf+ah/wDjQf7GFFf459FH9m/9Pv8Ayn/9uH/Em/8A1cb/AM1D/wDGg/2MKK/k6/4NW/jT8TPG/wANP2tPhH4t8W614i8D/CTWvgjrXw70nWdQu9SXwo3xGtPixa+J9M0V7yaZtO0S5bwBoV7Bo9oYdPttQfU76G3S51O8km/rFrgrU3RqSpt83LbVK17pSWnoz+VPEDg+vwDxfnPCWIxtPMamUVcLFY2lRlQhiaWNwGFzHD1PYSqVXRn9XxdJVaXtaqhVU4xq1IpTkUUUVkfHBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfxz/APB2d/zYH/3dR/77hX9jFfxz/wDB2d/zYH/3dR/77hXVgv8AeaX/AG//AOm5n7d9HL/k83Bv/dw/+srnh/HPX7U/8EaP2K/EvxM/4KP/ALLnhz9on9mPxt4j+Beuaj4/vfFlp8SfhX4qT4dapbWHwb+IOu+GH1y61fR4NEudPk8T2OgT2UV5O1nqF4LO1KXK3Agl/Fav7fP+CWH/AAcPftr/ALa37dX7Pv7LHxZ+G37MOkeA/idP47svEfiDwJ4I+KWj+Noh4R+E3jnxvYXGmXutfGfxJ4ctZ7vWPC9hFqAm8L3Vu9hPew2cFlM9vcW3r4iVRU5ezin7k+ZuTi46bx01e73VrI/vbxezLi7LeD88nwxlWDxuHlw5xNLOMxrZxPK8ZktCllcnSxuW06eHqyxmKhTli68IRrYaVOrhaMYzvW5qf4B/8FbP2M/Fvw2/4KD/ALWGh/Af9mnx54d+Bvh7xtb3fhOHwF8MPF0nw80fSJfBvh3V9abQ73T9IuNFtNFtNXuNXkeGzuU03Sts9nBHaW1otvD+P9f2pf8ABT3/AIOJP22/2U/2yv2mP2Uvht8Nv2XtQ8A/DvWrbwloHiHxh4G+KGreN3sdc8EaDq1xealeaf8AGbRvDF3qFvd65dC1I8KQ2HkxW0d1YXW2Yz/xW0YeVSVOPtIpLkhytS5nJOOrlorPbvu+13p4TZlxdmXCeUT4nynB4GjHIOHZZRj6GcTzXF5zh6uWQlVxuYwqYajLCYmcY4atOMquIlUq4mspTvR56n9jH/Bpj/zf5/3av/78fX9jFfxz/wDBpj/zf5/3av8A+/H1/YxXkY3/AHmr/wBuf+m4H8C/SN/5PNxl/wB29/6yuRn4/f8ABcj47/tL/s7/ALBXifx9+zBca7ofiW48d+E/DHxC8feF9ObUPEnwy+FGuWevr4j8aaG2x10q/Gt2/hfwwuv5gn0ODxLPqenX+larbWOq2Xzv+wzonh3xP+0P8IviD+xn/wAFgfHn7UXwi/4V5rEn7QX7O/7THxm1L43fE7xBHFDp1lpPirwp4L8TS6H4w+Eki6rfi/1rUrjRNN/sjVNP03RlXWND8R6lpNn+iP8AwUP0r9vC4+DOh+IP+CfXiPwtb/F3wh460XXPEvw88XaZ4HnsPi98PY0uI9c8D2Ot+PrGfRvDmqXVybCUXzap4aebSBrEFt4i07VDpjt+UunfsfftLftIf8FKP2Rv2r7T9hnQ/wDgnj4O+AVrrPif4z+NYfiD8GNa8X/GvxDqdssEvgmPR/gvqtzc61bTW0194Zk8V+KoNPbUvB+v+IxqjxTafovhfUHT5fYtOVODtVbbcHJ+6rRlTmuZ3t7koN2bbtdHZwhWyqp4fYnA4rMuG8mn7HjLEYnGyxnD+KzDF1HlWFWXZZnvDmdYOGcYmVavRUOGMz4YxuKlgcTicRWqYSlicPUqHxV8Af2lLfxD/wAEuPjn8Tf2zv2yP2+fB+keEf8AgqH4w8H6F8Tf2fPi9rl58aY9Pt/g/wCCpvDvwzbxB4xv9WuIPhVDdatrniN/DNnc2lhaeJrXStUtoBILlLn92Pjj/wAFYv2dP2e/iz4x/Z507wP+0r+0b8Qvgt4BXxr8am/Z/wDhjbfEyD4TeGrCx0+6udW+Jut3niTwrbWl1Hpl9Z6trEukxapBp/2kwak9hqQfTk/CrWv+CVH7fF3/AMEnPjf+zPb/AAG8z42+MP8AgpTq3x/8O+Cv+Fo/BlP7R+Elz8L/AAx4dg8W/wDCSP8AERfCVpv1nTryz/sG+1628TL5P2h9GW1kinf740L4B/t1fsJ/tq/8FF/ir8Cv2Uo/2ufh1+2/baN8Qfh74jsPin8L/B1z4F+Jtle+LrpfBfxD0n4l+K9Av4/B1vqPxB8TS6hcaHBrFpe6FpHg23sJbe4u9csvDOlRUZuT5otqU3GCqQhF/wABX5tlo5v+84u2zT+04oy7w8z3F5jiI51kuY16GacUYjKOH8PxPkGQ5Vir4ngXC0KjzVpU8HSlgcXnmOoxq4hRzGrlc4YSSWFxVKr5T/wSk/4KV6J8Cf8AglhP+0P+2v8AGb4u/FbxDqn7TPjv4c+CU17WvFXxj+MPxA1t/DnhHUND8AeC4/EmsXeoXjqg1S6tYdR1nSfDmmvNKbrUbGa/hW5/YX9lz/go38Ev2ovip43+Adr4M+N3wJ/aB+H+gWvi7X/gd+0d8O1+HHxFbwfdnS1i8VaZZ2Ot+J9E1LRxJrekK5t9dN+I9RtLxbFtPlW7r+bvwj/wRy/bn0r/AIJ9fs3WF98JzB+0N+y5+2p4w+OZ+AMXxt8L+EdU+JXw08V2vwqF23hT4w/Dnx3caN4M8ZW2ofD+2/sjUY/GHh3xFoumTa9q+h6tYeI7TQdO1z9Y/wBib9kj4hWv7dev/tMeK/2N/F37Pvgvwn8HR4G8H/EX9oz9rj4i/tL/ALS/jbxFrlxIur6TBBD+0D8WPh/4c+G+k6fLdxJYa9az6zBfpZ6noOoXP/CQapY+EVWjQftZqScm5tcsoWTUoqKUeZOSau7xT3dn7rT8rxAyXwuxv+umfYHOMPiszr5hxRicH/ZGc8PQweExGEzHB0cjweEyyWYUMTmGXZlg6ssRPE5Zg8fzOrUlQrUI5ZiqdTA/4Ld/t+ft0/sU/D7SPEP7Ofwh0Twr8N/+Eq8J6VrX7TfijxH8O/FkN5rGu6Z4huV+Hfh/4N31xc+JLaV5NOjur7xtrFi1hGljPptjYg3kOqp+/tfjb/wXP/ZT+Pn7Y37Etn8Iv2cPAf8AwsX4hxfGnwH4tk8Pf8JR4M8IbfD+i6P4wtdT1D+1vHfiLwxoZ+zT6pYR/ZF1I3s3n7re2lSKZo/2Srnm4ulSsoqSlUUrfE1anyuV23/NbaO9lufkuf1sircB8CPA4TJcJnlLMeL8Pnf9nzlLM8Vh6UeGpZVjM4jWxWJxMXWlUzJYPTDYH3MUsDhqfLXuUUUVifABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV/IL/wdi+GNfu/DP7DfjK20q8m8MaBrn7Q/hvWdbjhdrDTtc8WWPwX1Lw5pl1OBsiutYsfBvie5sYmIaaLRb5kz5LY/re/4STRf+f3/AMl7v/4xXI+OdD+FPxP8M6h4L+JXhbwj8Q/B2rrGuq+E/HPhOx8W+GdTWJxJEuoaDr+l6hpd6scirJGLm1lCOAy4YA1rRq+xqwqW5uVvTa6acX87PQ+48N+MFwDxtkXFs8E8xp5TVxntcHGqqE61HH5djMsrezquE4xqU6WMnVpqUXGVSEYScYycl/kM13Hw2+JnxD+Dnjnw58TPhR428UfDn4heEb5tR8MeNPBmtah4e8SaHeSW09lPLp+raZPb3kC3dhdXen30Ky+Rf6dd3en3kU9ldXEEn+ot/wAMIf8ABOL/AKMj/Y5/8Rb+D3/zA14n4k+BP/BKnwh8avBPwP8AEn7GH7G+leJfiN4V1fxH4Nurn9mD4Nx2WrXOg6jBZaloO9/AK+VqkkF3Be6ZHucX8UGoxjypbaFbrqxGdYPCwhPFONCnVrUMNCVapCEJ18VVhh8PRTlZOpXr1IUaUN6lWcKcU5TSP6zx30x+DKOH5cy4SzOGFxdWhl7ji8flvsMRVzCrDB0MHKNWPs6ksZWrQwtOjJP29SrCioylUUX/AJp/xB+Ifjz4s+NPEXxG+J3jHxL8QPH3i7UX1bxP4x8Yazf+IPEmvai8ccP2rVNX1Oe5vbuSOCGG2gEszJb2sEFrAsdvBFEnG1/qnf8ADCH/AATi/wCjI/2Of/EW/g9/8wNH/DCH/BOL/oyP9jn/AMRb+D3/AMwNb/2jD/n1L715f8H8Pl00vpd8L0adOjR4LzilRpQhSpUqWMy6FOlThFRhTpwjFRhCEUowhFKMYpJJLb+ef/g068Ma/aeGf25PGVzpV5D4Y1/XP2ePDeja3JC62Go654TsfjRqXiPTLWcjZLdaPY+MvDFzfRKS0MWtWLPjzlz/AF9V5r4G0P4U/DDwzp/gv4a+FvCPw88HaQsi6V4T8DeE7Hwl4Z0xZXMkq6foOgaXp+l2SySM0kgtrWIO5LNliTXXf8JJov8Az+/+S93/APGK86vV9tVnUty81tN7Wio7/K5/IfiTxiuPuNs94thgXl1PNquD9lg5VVXnRo4DLsHllH2lVQhGVWpSwcKtVRioxqVJQi5RipPcorD/AOEk0X/n9/8AJe7/APjFH/CSaL/z+/8Akvd//GKyPhzcorD/AOEk0X/n9/8AJe7/APjFH/CSaL/z+/8Akvd//GKANyisP/hJNF/5/f8AyXu//jFH/CSaL/z+/wDkvd//ABigDcorD/4STRf+f3/yXu//AIxR/wAJJov/AD+/+S93/wDGKANyisP/AISTRf8An9/8l7v/AOMUf8JJov8Az+/+S93/APGKANyisP8A4STRf+f3/wAl7v8A+MUf8JJov/P7/wCS93/8YoA3KKw/+Ek0X/n9/wDJe7/+MUf8JJov/P7/AOS93/8AGKANyisP/hJNF/5/f/Je7/8AjFH/AAkmi/8AP7/5L3f/AMYoA3KKw/8AhJNF/wCf3/yXu/8A4xR/wkmi/wDP7/5L3f8A8YoA3KKw/wDhJNF/5/f/ACXu/wD4xR/wkmi/8/v/AJL3f/xigDcorD/4STRf+f3/AMl7v/4xR/wkmi/8/v8A5L3f/wAYoA3KKw/+Ek0X/n9/8l7v/wCMUf8ACSaL/wA/v/kvd/8AxigDcorD/wCEk0X/AJ/f/Je7/wDjFH/CSaL/AM/v/kvd/wDxigDcorD/AOEk0X/n9/8AJe7/APjFH/CSaL/z+/8Akvd//GKANyisP/hJNF/5/f8AyXu//jFH/CSaL/z+/wDkvd//ABigDcorD/4STRf+f3/yXu//AIxR/wAJJov/AD+/+S93/wDGKANyisP/AISTRf8An9/8l7v/AOMUf8JJov8Az+/+S93/APGKANyisP8A4STRf+f3/wAl7v8A+MUf8JJov/P7/wCS93/8YoA3KKw/+Ek0X/n9/wDJe7/+MUf8JJov/P7/AOS93/8AGKANyisP/hJNF/5/f/Je7/8AjFH/AAkmi/8AP7/5L3f/AMYoA3KKw/8AhJNF/wCf3/yXu/8A4xR/wkmi/wDP7/5L3f8A8YoA3KKw/wDhJNF/5/f/ACXu/wD4xR/wkmi/8/v/AJL3f/xigDcorD/4STRf+f3/AMl7v/4xR/wkmi/8/v8A5L3f/wAYoA3KKw/+Ek0X/n9/8l7v/wCMUf8ACSaL/wA/v/kvd/8AxigDcorD/wCEk0X/AJ/f/Je7/wDjFH/CSaL/AM/v/kvd/wDxigDcorD/AOEk0X/n9/8AJe7/APjFH/CSaL/z+/8Akvd//GKANyisP/hJNF/5/f8AyXu//jFFAHldFFFABX8z3/BbTxlqfh/9o/4DSeH9WuNK8Q+FPhn/AMJTp13ZTSR3mm3V/wCNtahsr6Ljy0LTeHpVU/N532d45kaNVVv6Ya/lL/4Lb3Pn/tdeFYt2fsXwJ8HW2Msdm/xn8Rrzbg8Ln7XuwvHzZ+8Wr8I+kdjK+D8MMdLDznSq1c4yOEatOcqdWlKjj4YynUpTg4yhUhVwtOUZxalFrmTTSa/mr6WWYYjL/BzMp4WrOhWrZ7w5ThXpTnSrUZ0Myp5hSq0KlOUZ061OtgqcoTi1KDXNFqSTX7kfsA/tb6Z+1Z8GNO1W+nhh+I3hOODRPHWlb0843sEapBrMUasSbTVUAnR8LiRmV1R8ov3ZX8On7G/7TniH9lb40aD4/wBNlml8N3c0Gk+OdGTe0ereHJpcT/u0OWurAu13aNtkIZZERC0gI/th8EeM/D3xD8JeH/G3hTUIdU8P+JdMtdV0u9gdXSW2uo1kUMVJCyxkmOVD8ySIykAivV8FvEqn4h8LwljKkFxHkypYPPKK5Yyry5WsNmlOEbWpZhCnKVRRjGNLGU8TShFUo0pT9r6Pni7S8VeDKcsfVpri3II0MBxHQXLGWJk4NYPOqVOKilQzSnSnKrGMYQo46li6MIKjGhKp1VFFFfsR+9hRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV+IX/BQv/gnz40/aH+OFv8ZLbxRDa+G4/CGgeFE0OwsJLnVc6PLqt1NNLf3Nwlpp/n3OqOYI1sL6OSOJmaSOWZxD+3tMkjSVGjkRXRxhlYZUj3B/Meh5HNfP8S8LZFxfl0cp4iwKzDLo4qhjXhXXxOHhOvhnJ0XUlha1CpOEXNuVJz9nU2qRlG6Pl+LuDOG+O8qhknFWXLNcqhjcNmDwcsTi8LTqYnCc7oSqTwVfD1p04upJyoup7Kr8NWE4Xi/40P2YvgT4Pu/2k/HPwO+Kmjq+taHqWoaRpJ1iB3iik0fVJrOeWeycfY501O3n026glkgeQQMJrM+VJMkv9T37Onwivfgt4c/4RTT5VHhVsT2WkrtS20mYqAz6WiARw2tyADLaxBYg4WWIAlw34Vf8FD/DL/AD/gol8O/i5pcEllofxX0vwxq13JbybIJNa0/b4F12Axs6hEt7Wz8Na1dBdqvNeGdQbguT/Rd8M/EMXijwN4c1qKQSi7022ZmDBvnEa5yR1PTnv7HIH5p4MZbgMgw3F/C1LA4TDZhwtxbmmXSxNPDUqeNxuTY6cc2yPEYzEqnGtiHPCYt0qftZTUKeGhCDdOEG/wAh+j7lGV8MYTjvgyjluBwmacGccZzlU8XSwdGlmOY5BmVSGd8OYvMMVGnHEYpzwONdCj7edRU6WEp06bdKFOT7uiiiv2s/oYKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD8Yf+C2fwsbxN+zv4J+K1hbRHVPhN4+t4b69+aO5tfC3jqBNIvDBKgJZj4psfByiJigCvJMkivH5c30z/wAE4/imvxJ/Z/8ADM8soa8t9NsmuIhL5xhnMKx3MO/gt5M6SRbyqlyh3qkgda+k/wBpn4Wr8a/2fvjB8LRHE934y8BeINN0czxedFD4iis3v/DN20W5C/2LxDaaZdqFdG3QAo6sAw/EL/gjF8Uzay+I/htfTLFLYahM0No5KTR2+osbgNJE/wAyO1+L+MjaATCFbbIoLfkLX+r/AI0J/wAPB+IXCTVvdXt8/wCEKyd9PebWR43rZ/ut5rSl+Ev/AIxf6QSd/ZYDxT4Hat7q+scT8CV0+i5m48N5j1s/3L1qJJUf6L6KKK/Xj92CiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/lv0qzl/ZW/4KkfErwejT2Hh7xf4uvPEGho0Ijhm0/wAYiLxxpUNs6KqGz0qHVNX0SIsQry2LQSN9pUEf1IV/PT/wWL+HGteGPjb+zn+0L4T0XV9Qurq3ufB/iBtEtpLy4M/g7VYvEOjQmzi3SSXOr6Rr3iO08wIYntdIENzJEFg8z8l8W6VXBZfwzxhhqVWpiODOLMnzOuqEKlSvUyfMK6ybOcPTp005S9rhsdCpO1lGNByk3BSjL8O8c6NbLsr4P48wdKtVxXh9xxkOb4mOGp1auJq5BmmIWQZ/haVKipTn7bCZlTq1LK0aeHc53pxnCX9BGmXiahp9lfRkMl3bQzqQcg+ZGrcH6k9efXmr1eEfs3+MY/Gvwl8L6osheVbCCGbOdyusY4YN8wIwV2sA6kFXG4En3ev1pO6TWqeqfdH7gmmk1qmrprqnswooooGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABWL4g8PaN4p0m70TX9PttT0y9jMc9rcxrIjA8q67gSkiMA8ciEOjqrKwYAjaooA86+H/AMOdK+HVvdWGhs0enXEhkW1IwkbZyrKowofb8rsOHwGwDwPRaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k="},1775:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/37_choose_graph_tool-0d22938ffdee24d3a9cbe03344d3f6d2.jpg"},9898:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/38_tool_field-630be267f08f54374da51cc1e819bb79.jpg"},1885:(e,o,i)=>{i.d(o,{Z:()=>A});const A="data:image/jpeg;base64,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"},4137:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/41_choose_graph-706aca75f8953fb336afc971087be898.jpg"},9121:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/42_resized_chart-5f1d6e8a6825144e6244f4f349e6d8a5.jpg"},3186:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/43_choose_slider_tool-0a7154b80051cfdb7395a909ac91363f.jpg"},6250:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/44_choose_slider-d3327bde3c600a9fedfa1c21951f8db9.jpg"},676:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/45_delete_slide-549ae199c538cf204fd8c55ed5e4b3e8.jpg"},4810:(e,o,i)=>{i.d(o,{Z:()=>A});const A=i.p+"assets/images/ChooseTools-9244e0cce29f95fc76d294b18eb925f7.png"}}]);