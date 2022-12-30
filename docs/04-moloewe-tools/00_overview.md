# Overview

All the elements of MoLöwe that can be placed on a slide are called "MoLöwe Tools" or "Tools". These tools are visible during presentations and can be used to display information or to allow presentation visitors to interact with other MoLöwe Tools.

Some MoLöwe Tools do not need any code on the Project Notebook in order for them to function properly while some others need Python code written in a specific structure.
The tools defined using the Project Notebook are defined as either a `get_` function or a pair of `get_` and `set_` functions. All the functions that belong to a category of tools are placed within a single dedicated Python `class`. Hence, a Python class is defined for each of the tool mentioned here. For instance, if one needs to create 2 different Plotly charts, they need to place two `get_` functions with unique names (eg. `get_first_chart` and `get_second_chart`) under a single class named `tool_graph`.

##  **Creating tools**
MoLöwe Tools can be created in one of two ways: (i) define the tools Edit Mode, (ii) define the tools on the Project Notebook and place them on the slides. As you one can see, in both the cases, the only way to place the tool on a slide (no matter where they were defined) is from the front-end while at [**Edit Mode**](docs/03-the-interface/05_slides.md#4-editing-slides-edit-mode).

### Tools without Project Notebook

Some MoLöwe Tools do not need any code on the Project Notebook in order for them to function properly. The tools that don't need a code from the Project Notebook are listed below.

* **Tool Button**: Many functions of buttons can be accessed and used without a code defined in the Project Notebook. *Note that some functions of buttons require MoLöwe code.* This tool has been described in detail [**here**](08_button.md).
* **Tool Image**: If an image file has been uploaded to MoLöwe using the front-end, Image tools can be placed on the slides as desired. This tool has been described in detail [**here**](02_image.md).
* **Tool Video**: If a video file has been uploaded to MoLöwe using the front-end, Video tools can be placed on the slides as desired. This tool has been described in detail [**here**](03_video.md).
* **Tool Slideshow**: If multiple image files have been uploaded to MoLöwe using the front-end, Slideshow tools can be placed on the slides as desired. This tool has been described in detail [**here**](04_slideshow.md).
* **Tool Textbox**: If a text file has been uploaded to MoLöwe using the front-end, Textbox tools can be placed on the slides as desired. This tool has been described in detail [**here**](01_textbox.md).
* **Tool Change Scene Button**: This button looks like and works similarly to the existing Button tool except that in the preferences view editing this tool you can choose that several screens will switch to different slides at the same time. In a list of drop-down options, the user editing the tool on the slide can choose which slide will be shown on which screen making it possible e.g. that clicking on this button in presentation mode changes screens Monitor1 to SlideA, Monitor2 to SlideB, Monitor3 to SlideC (and so on) at the same time - in effect changing the scene of a setup of Monitors. The tool preferences also have an optional setting for a time period after which this button function is executed automatically. This makes it possible to create presentations that are more suited for exhibitions and self-guided environments and to switch Slides on several Screens at the same time during presentation. This tool has been described in detail [**here**](11_change-scene.md).

The tools above (except Tool Button and Tool Change Scene Button) require files to be uploaded to MoLöwe using the front-end of the tool. Once the files have been uploaded, these tools can be defined in a Slide by opening the slide in [**Edit Mode**](docs/03-the-interface/05_slides.md#4-editing-slides-edit-mode).

### Tools with Project Notebook

Some MoLöwe Tools need Python code written in a specific structure. The tools that require a code from the Project Notebook are listed below.

* **Switch Tool**: This tool has been described in detail [**here**](09_switch.md).
* **Dropdown List Tool**: This tool has been described in detail [**here**](10_dropdown.md).
* **Button Tool**: Some functions of the Button Tool require code from the Project Notebook. This tool has been described in detail [**here**](08_button.md).
* **Range Slider Tool**: This tool has been described in detail [**here**](07_slider.md).
* **Map Tool**: This tool has been described in detail [**here**](05_map.md).
* **Graph Tool**: This tool has been described in detail [**here**](06_graph.md).

The tools defined using the Project Notebook are defined as either a `get_` function or a pair of `get_` and `set_` functions. All the functions that belong to a category of tools are placed within a single dedicated Python `class`. Hence, a Python class is defined for each of the tool mentioned here. For instance, if one needs to create 2 different Plotly charts, they need to place two `get_` functions with unique names (eg. `get_first_chart` and `get_second_chart`) under a single class named `tool_graph`.

Once all the necessary tools have been defined in the Notebook and the Project Notebook has been [**uploaded**](docs/03-the-interface/03_notebooks.md) to MoLöwe, these tools can be created in a slide by opening the slide in [**Edit Mode**](docs/03-the-interface/05_slides.md#4-editing-slides-edit-mode). More details are presented on the pages that describe each tool.

## **Resize a Tool**
Once a tool has been placed on a slide, it can be resized by hovering the mouse pointer on the bottom right of the tool until the mouse pointer turns into an arrow with two points as shown below.

![](/img/doc/57_resize_tool.jpg)

Then, click and drag the mouse pointer vertically or horizontally to change the size of the tool as desired.

## **Reposition a Tool**
Once a tool has been placed on a slide, it can be repositioned by clicking (with a mouse pointer) in the center of the tool and dragging the pointer on the slide. When the user starts dragging a tool, a rectangular grid structure will appear to aid the user in positioning the tool on the slide.

## **Delete a Tool**
To delete a MoLöwe tool that has been placed on a slide, (while at *Edit Mode*) hover over on the top right of the tool container until a gear icon appears.

![](/img/doc/39_hover_tool_container.jpg)

When this icon is clicked, an interface that contains the settings of the tool opens. A button on the bottom left of this interface lets users delete the tool from the slide.

In the example below, a textbox tool is being deleted from a slide.

![](/img/doc/70_delete_tool.jpg)