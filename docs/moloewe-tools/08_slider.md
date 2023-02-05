# Slider

A Range Slider (or just "Slider") tool is used to interact with a presentation and allows users to select a value
from within a pre-defined range of values.

The Slider tool requires definition of a function on the Project Notebook.

See [**here**](docs/project_notebook/setting_up_tools.md) on how to set up the Slider Tool in the Project
Notebook.

## **Placing a Range Slider Tool on a Slide (Edit Mode)**

To place a Slider Tool on a Slide, first define the Slider Tool on the Project Notebook and upload the notebook to MoLöwe.
Then, open the slide in which the Slider Tool needs to be placed in Edit Mode.

Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps
outlined [**here**](docs/edit-mode/05_slides.md#4-editing-slides-edit-mode).

Following that, click on the slider icon (signified by 3 lines with ticks for values).

![](/img/doc/63_slider.jpg)

This will place a container for the Slider Tool onto the slide.

![](/img/doc/38_tool_field.jpg)

When a user hovers over this container, they will be presented with a gear icon (on the top right of the container)
that they can click on.

![](/img/doc/39_hover_tool_container.jpg)

Clicking on this icon opens an interface that allows users to select the options for selecting the Slider function.

![](/img/doc/63_slider_2.jpg)

* *Tool Name*: allows you to set a unique identifier for the button.
* *Get Function*: (defined in the Project Notebook) see description [**above**](#defining-a-range-slider-on-project-notebook).
* *Set Function*: (defined in the Project Notebook) see description [**above**](#defining-a-range-slider-on-project-notebook).

When the Tool Name, Get Function and Set Function have been set/selected, users can click on the "Save" button.
Optionally, users can also set a Header, Footer, and Description texts.

Then, users are taken back to the slide in Edit Mode.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool)
the tool as they desire.

The final result is a Slider Tool on the slide that presents the options that have been defined under the `get_` function.

Do note that when the slide is in Edit Mode, a rectangular box appears around the tool. This box does not appear around
the tool when the slide is viewed in Presentation or Controller Modes.

## **Using a Range Slider Tool during Presentation**

During presentation (i.e. while at Presentation Mode or Controller Mode), users can interact with the Range Slider Tool
by pressing (or clicking) on the circle (see green arrow below) on the slider and moving it left or right as desired.
This action can be performed either with the mouse pointer or with the touch of a finger.

![](/img/doc/63_slider_3.jpg)

Moving a Range Slider left or right changes the value of the variable that the slider is set to change.

When in Controller Mode, the Slider tool appears without the rectangular box surrounding it.
