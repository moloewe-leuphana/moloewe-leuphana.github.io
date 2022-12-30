# Dropdown

A Drop Down (or Dropdown) tool is used to interact with a presentation and allows users to select a value from the different options available.

The Dropdown tool requires definition of a function on the Project Notebook.

## **Defining Dropdown on Project Notebook**

All the dropdown tools that needs to be defined for a presentation need to be placed under a single class named `tool_dropdown`.

Each dropdown tool is defined using a pair of `get_` and `set_` functions. It is recommended that the naming of the `get_` and `set_` functions is set in a consistent manner as shown in the example below.

:::note Example Scenario

We need a Dropdown tool that allows users to select a value of 10, 20, or 30 during a presentation. The selected values will be used to set the font size of a chart.

:::

The code snippet below represents the entirety of code that needs to be written to create one dropdown menu that allows users to select a value from a set of three values (10, 20, and 30 in this example).

First, a global variable that stores a default value of the dropdown tool needs to be defined. In the example below, the global variable is named `font_size` and the "default" or "initial" value that it contains is 20. As such, `font_size = 20` even when the user has not interacted with the dropdown tool at all.

Second, under the class `tool_dropdown`, a pair of `get_` and `set_` functions are defined. The `get_` function is used to define the dropdown list options that are to be presented to the user when the user interacts with the dropdown tool during a presentation. Whereas, the `set_` function is used by the system back-end to change value stored in the variable `font_size` when a user makes a selection from the dropdown list. Note that the naming scheme between the `get_` and `set_` functions are consistent as they both have the exact same name except the `get_` and `set_` prefixes.

```python
global font_size
font_size = 20

class tool_dropdown:
    def get_plot_font_size(self):
        global font_size
        return {
            "values": [10, 20, 30],
            "default": font_size
        }

    def set_plot_font_size(self, dropbox_selection):
        global font_size
        font_size = dropbox_selection
```

The `get_plot_font_size` function first calls the global variable `font_size`. This way, the value stored in the global variable can be changed from within the local scope of the function. Then, the function returns a dictionary with two key-value pairs. The first item is a key named `values` which is mapped to a list of values that form the options presented to the users during a presentation. The second item is a key named `default` which contains the global variable as its value.

The `set_plot_font_size` is used by the MoLöwe back-end to pass the selection made by a user with the dropdown tool. This function contains a keyword argument named `dropdown_selection` which is used by the MoLöwe back-end change the value stored in the global variable `font_size` (as can be seen in the code within the function).

Once the `get_` and `set_` functions have been defined, a dropdown tool can be placed on a slide by opening the slide in Edit Mode.

If another dropdown tool is required for the presentation, say one that lets users select from different cities in Germany, a new pair of get and set functions need to be defined under the class `tool_dropdown` as shown below:

```python
global font_size
font_size = 20

global german_city
german_city = "Berlin"

class tool_dropdown:
    def get_plot_font_size(self):
        global font_size
        return {
            "values": [10, 20, 30],
            "default": font_size
        }

    def set_plot_font_size(self, dropbox_selection):
        global font_size
        font_size = dropbox_selection

    def get_german_city(self):
        global german_city
        return {
            "values": ["Berlin", "Munich", "Lüneburg", "Kiel"],
            "default": german_city
        }
    def set_german_city(self, dropbox_selection):
        global german_city
        german_city = dropbox_selection
```

## **Placing Dropdown Tool on a Slide (Edit Mode)**

To place a Dropdown Tool on a Slide, first define the Dropdown Tool on the Project Notebook and upload the notebook to MoLöwe. Then, open the slide in which the Dropdown Tool needs to be placed in Edit Mode.

Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps outlined [**here**](docs/03-the-interface/05_slides.md#4-editing-slides-edit-mode).

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
