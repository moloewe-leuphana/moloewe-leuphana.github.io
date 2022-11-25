# Glossary

## **Mobile Lösungswerkstatt**
Is a digital environment that allows to visualise future scenarios and to experience the effects of adjusted model parameters in real time. The Mobile Lösungswerkstatt, short MoLöwe, consists of the hardware, including five 65’’ screens that create an immersive environment and tablets that allow participants to interact with the screens’ content, as well as the custom developed software for this interactive dashboard.

## **Project**
A project is the umbrella term for everything that a user creates/edits when planning i.e. a workshop. Projects can entail a presentation (several slides), a specific notebook, uploaded files, the order of screens and (saved) sessions of the presented slides.

## **Notebook**
The notebook entails the code and therefore the functions and tools needed for the MoLöwe. Each project starts with a template Jupyter Notebook that can be downloaded, changed/edited and uploaded again to enable new functions and tools. The notebook enables optimal use of the tools and may help with data and file sizes.

## **File**
A file can be uploaded into a project to use for a presentation/for slides; i.e. images, video or text files, markdown or HTML files

## **Slide**
The terms "Slide(s)" are used in MoLöwe are not the same as the slides that are created for PowerPoint (or Keynote) presentations. MoLöwe offers features that are distinctly different from generic slides. As a result, users are encouraged to not be bound to the notion of slides as they exist in software programs such as PowerPoint and Keynote.

## **Screen**
The colloquial meaning of screens as display devices differs from the meaning assigned to "Screen(s)" in MoLöwe. Display devices are referred to either as "monitor(s)" or as "display device(s)". This means, that a project/presentation needs information on the number of display devices available, the number of slides and the number of screens. These numbers don’t have to be the same and it is possible to define more screens than display devices available. A Screen is the current browser window open on any device. On this Screen (browser window) any Slide can be opened. For the naming of Screens it is advised to follow the naming of the display devices (e.g. Monitor1, Tablet1, etc.)

## **Session**
When a workshop is executed, the presentation can be saved as a session in case of taking a break or pausing for the day. This enables the presenter to start at exactly the same spot and with the same results as before the break. Sessions can only be created from the Controller Mode during a presentation. Until a new session has been saved from the Controller Mode during a presentation, the sessions Page will not list any sessions.

## **Tools**
All the elements of MoLöwe that can be placed on a **Slide** are called *MoLöwe Tools* or *Tools*. These tools are visible during presentations and can be used to display information or to allow presentation visitors to interact with other MoLöwe Tools.

The tools that can be selected are:
Textbox, Image, Video, Slideshow, Map, Graph, Range Slider, Button, Switch, Drop Down List, Change Scene Button

Some tools can be used and function without any code in the Project Notebook; other tools need Python code written in a specific structure in the Project Notebook.

### Tools *without* extra code in Project Notebook

**Button**: this tool is used to interact with the presentation and allows users to perform three specific actions:
1. Switch screen to a different dashboard slide
2. Show or Hide a Tool
3. Change value of a variable
The first two features of the Button tool do not require any definition in the Project Notebook. For the third feature (changing the value of a variable), a function needs to be defined in the Project Notebook.

**Image**: If an image file has been uploaded to MoLöwe using the front-end Image tools can be placed on the slides as desired. It is used to display an image during a presentation.

**Video**: If a video file has been uploaded to MoLöwe using the front-end Video tools can be placed on the slides as desired. It is used to display a video during a presentation.

**Slideshow**: this tool is used to display multiple images in sequence (at a pre-defined interval) during a presentation. If multiple image files have been uploaded to MoLöwe using the font-end, Slideshow tools can be placed on the slides as desired.

**Textbox**: with this tool, text is displayed during a presentation. If a text file has been uploaded to MoLöwe using the front-end Textbox tools can be placed on the slides as desired. 

**Change Scene Button**: This button looks like and works similarly to the existing Button tool except that in the preferences view editing this tool you can choose that several screens will switch to different slides at the same time. In a list of drop-down options, the user editing the tool on the slide can choose which slide will be shown on which screen making it possible e.g. that clicking on this button in presentation mode changes screens Monitor1 to SlideA, Monitor2 to SlideB, Monitor3 to SlideC (and so on) at the same time - in effect changing the scene of a setup of Monitors. The tool preferences also have an optional setting for a time period after which this button function is executed automatically. This makes it possible to create presentations that are more suited for exhibitions and self-guided environments and to switch Slides on several Screens at the same time during presentation.

The tools above (except Tool Button) require files to be uploaded to MoLöwe using the front-end of the tool. Once the files have been uploaded, these tools can be defined in a **Slide** by opening the slide in *Edit Mode*.


### Tools *with* extra code in Project Notebook

**Switch**: this tool is used to interact with a presentation and allows users to switch the value (of any Python type) stored in a variable from one to the other. During presentation, users can interact with the Switch Tool.

**Dropdown List**: this tool can be used to interact with a presentation and allows users to select a value from the different options available. During presentation, users can interact with the Dropdown tool by pressing on the tool to view all the dropdown list items and selecting an option from the list.

**Button**: as mentioned above, some functions of the Button Tool require code from the Project Notebook. 

**Range Slider**: this tool makes it possible interact with a presentation and allows users to select a value from within a pre-defined range of values (by pressing or clicking on the circle on the slider and moving it left or right as desired).

**Map**: this tool is used to display a map created using Plotly during a presentation. Much like the *Graph Tool* it supports input from other tools such as *Dropdown Tool* and *Slider Tool*.

**Graph**: this can be used to display a Plotly or Echarts graph during a presentation. Additionally, it supports input from other tools such as *Dropdown Tool* and *Slider Tool*.

Once all the necessary tools have been defined in the Notebook and the Project Notebook has been uploaded to MoLöwe, these tools can be created in a **Slide** by opening the slide in *Edit Mode*. 

For an even more detailed description and explanation check out the respective chapters of each tool or the chapter **Excursus - Tools**.
