# Switch

The Switch tool is used to interact with a presentation and allows users to change the value of a variable (i.e. parameter)
from one to another.

***Examples:***
* Activate/deactivate a certain parameter in a Graph using a Switch
* Conduct Surveys, where each option can be selected with its respective Switch

The Switch tool requires definition of a function on the Project Notebook.
See [**here**](docs/project_notebook/setting_up_tools.md) on how to set up the Switch Tool in the Project
Notebook.

## **Placing a Switch Tool on a Slide (Edit Mode)**

To place a Switch Tool on a Slide, first define the Switch Tool on the Project Notebook and upload the notebook to MoLöwe.

Then, open the slide in which the Switch Tool needs to be placed in Edit Mode.

Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps
outlined [**here**](docs/edit-mode/05_slides.md#4-editing-slides-edit-mode).

Following that, click on the Switch icon.

![](/img/doc/65_switch.jpg)

This will place a container for the Switch Tool onto the slide.

![](/img/doc/38_tool_field.jpg)

When a user hovers over this container, they will be presented with a gear icon (on the top right of the container)
that they can click on.

![](/img/doc/39_hover_tool_container.jpg)

Clicking on this icon opens an interface that allows users to select the options for selecting the Switch function.

![](/img/doc/65_switch_2.jpg)

* *Tool Name*: allows you to set a unique identifier for the button.
* *Get Function*: (defined in the Project Notebook) see description [**above**](#defining-a-switch-tool-on-project-notebook).
* *Set Function*: (defined in the Project Notebook) see description [**above**](#defining-a-switch-tool-on-project-notebook).

When the Tool Name, Get Function and Set Function have been set/selected, users can click on the "Save" button.
Optionally, users can also set a Header, Footer, and Description texts.

Then, users are taken back to the slide in Edit Mode.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool)
the tool as they desire.

The final result is a Switch Tool on the slide that determines what value is stored in the global variable as defined
under the `get_` function.

Do note that when the slide is in Edit Mode, a rectangular box appears around the tool. This box does not appear around
the tool when the slide is viewed in Presentation or Controller Modes.

## **Using a Switch Tool during Presentation**

During presentation (i.e. while at Presentation Mode or Controller Mode), users can interact with the Switch Tool by
pressing (or clicking) on the tool to toggle it on and off. This action can be performed either with the mouse pointer
or with the touch of a finger.

![](/img/doc/65_switch_3.jpg)

When in Edit Mode, the Switch tool will be surrounded by a rectangular box. When in Controller Mode, the Switch tool
appears without the rectangular box surrounding it.
