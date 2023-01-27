# Overview

All elements on a slide are called "MoLöwe Tools" or just "Tools". 
Tools are visible during presentations and can be used to display information or to allow interaction.

The only way to place the tool on a slide is from the [**Edit Mode**](docs/edit-mode/05_slides.md#4-editing-slides-edit-mode).
However, some tools need to be set up in the Project Notebook first, with a Python code written in a specific structure (i.e. function).
In addition, some tools require files (e.g. images or videos) to be uploaded to MoLöwe beforehand.

## **Tools Overview**

| Tool                                          | Description                                                                                       | Requires Project Notebook?<br/> (✅ Yes / ❌ No)                                     | Requires Files?<br/> (✅ Yes / ❌ No) |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|------------------------------------|
| [**Textbox**](01_textbox.md)                  | Displays a text during a presentation                                                             | ❌                                                                                  | ✅                                  |
| [**Image**](02_image.md)                      | Displays an image during a presentation                                                           | ❌                                                                                  | ✅                                  |
| [**Video**](03_video.md)                      | Displays a video during a presentation                                                            | ❌                                                                                  | ✅                                  |
| [**Slideshow**](04_slideshow.md)              | Displays multiple images in sequence during a presentation                                        | ❌                                                                                  | ✅                                  |
| [**Button**](05_button.md)                    | - Switch screen to a different slide<br/> - Show or Hide a Tool<br/> - Change value of a variable | ❌ <br/> (However, changing the value of a variable does require a Project Notebook) | ❌                                  |
| [**Change Scene Button**](11_change-scene.md) | Switch several screens to different slides at the same time                                       | ❌                                                                                  | ❌                                  |
| [**blah**](03_video.md)                       |                                                                                                   |                                                                                    |                                    |


## Tools with Project Notebook

* **Switch Tool**: This tool has been described in detail [**here**](09_switch.md).
* **Dropdown List Tool**: This tool has been described in detail [**here**](10_dropdown.md).
* **Button Tool**: Some functions of the Button Tool require code from the Project Notebook.
This tool has been described in detail [**here**](05_button.md).
* **Range Slider Tool**: This tool has been described in detail [**here**](08_slider.md).
* **Map Tool**: This tool has been described in detail [**here**](07_map.md).
* **Graph Tool**: This tool has been described in detail [**here**](06_graph.md).

Once all the necessary tools have been defined in the Notebook and the Project Notebook has been
[**uploaded**](docs/edit-mode/02_notebooks.md) to MoLöwe, these tools can be created in a slide by opening
the slide in [**Edit Mode**](docs/edit-mode/05_slides.md#4-editing-slides-edit-mode).
More details are presented on the pages that describe each tool.

## **Resize a Tool**
Once a tool has been placed on a slide, it can be resized by hovering the mouse pointer on the bottom right of the tool
until the mouse pointer turns into an arrow with two points as shown below.

![](/img/doc/57_resize_tool.jpg)

Then, click and drag the mouse pointer vertically or horizontally to change the size of the tool as desired.

## **Reposition a Tool**
Once a tool has been placed on a slide, it can be repositioned by clicking (with a mouse pointer) in the center of
the tool and dragging the pointer on the slide. When the user starts dragging a tool, a rectangular grid structure
will appear to aid the user in positioning the tool on the slide.

## **Delete a Tool**
To delete a MoLöwe tool that has been placed on a slide, (while at *Edit Mode*) hover over on the top right of the
tool container until a gear icon appears.

![](/img/doc/39_hover_tool_container.jpg)

When this icon is clicked, an interface that contains the settings of the tool opens.
A button on the bottom left of this interface lets users delete the tool from the slide.

In the example below, a textbox tool is being deleted from a slide.

![](/img/doc/70_delete_tool.jpg)