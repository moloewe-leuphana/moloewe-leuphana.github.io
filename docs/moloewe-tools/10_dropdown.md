# Dropdown

A Dropdown tool is used to interact with a presentation and allows users to select a value from pre-defined options.

During presentation, users can interact with the Dropdown tool by pressing on the tool to view all the dropdown list
items and selecting an option from the list.

The Dropdown tool requires definition of a function on the Project Notebook.

## **Placing Dropdown Tool on a Slide (Edit Mode)**

To place a Dropdown Tool on a Slide, first define the Dropdown Tool on the Project Notebook and upload the notebook to MoLöwe. Then, open the slide in which the Dropdown Tool needs to be placed in Edit Mode.

Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps outlined [**here**](docs/edit-mode/05_slides.md#4-editing-slides-edit-mode).

Following that, click on the dropdown icon (signified by an chevron icon).

![](/img/doc/62_dropdown.jpg)

This will place a container for the Dropdown Tool onto the slide.

![](/img/doc/38_tool_field.jpg)

When a user hovers over this container, they will be presented with a gear icon (on the top right of the container) that they can click on.

![](/img/doc/39_hover_tool_container.jpg)

Clicking on this icon opens an interface that allows users to select the options for selecting the Dropdown function.

![](/img/doc/62_dropdown_2.jpg)

The required fields in this interface are the **Tool Name**, **Get Function**, and **Set Function**.

* *Tool Name*: allows you to set a unique identifier for the button.
* *Get Function*: (defined in the Project Notebook) see description [**above**](#defining-dropdown-on-project-notebook).
* *Set Function*: (defined in the Project Notebook) see description [**above**](#defining-dropdown-on-project-notebook).

When the Tool Name, Get Function and Set Function have been set/selected, users can click on the "Save" button. Optionally, users can also set a Header, Footer, and Description texts.

Then, users are taken back to the slide in Edit Mode.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool) the tool as they desire.

The final result is a Dropdown Tool on the slide that presents the options that have been defined under the `get_` function.

Do note that when the slide is in Edit Mode, a rectangular box appears around the tool. This box does not appear around the tool when the slide is viewed in Presentation or Controller Modes.

## **Using Dropdown Tool during Presentation**

During presentation (i.e. while at Presentation Mode or Controller Mode), users can interact with the Dropdown tool by pressing on the tool to view all the dropdown list items and selecting an option from the list. This action can be performed either with the mouse pointer or with the touch of a finger.

When in Controller Mode, the dropdown tool appears as following on a slide.

![](/img/doc/62_dropdown_3.jpg)

Users can click on the Dropdown Tool in order to be presented with the different options. When an option is clicked on, the menu collapses and the value that has been selected is stored in the corresponding global variable as defined by the `set_` function.

![](/img/doc/62_dropdown_4.jpg)
