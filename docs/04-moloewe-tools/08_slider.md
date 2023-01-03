# Slider

A Range Slider (or Slider) tool is used to interact with a presentation and allows users to select a value from within a pre-defined range of values.

The Slider tool requires definition of a function on the Project Notebook.

## **Defining a Range Slider on Project Notebook**

All the slider tools that needs to be defined for a presentation need to be placed under a single class named `tool_slider`.

Each Slider tool is defined using a pair of `get_` and `set_` functions. It is recommended that the naming of the `get_` and `set_` functions is set in a consistent manner as shown in the example below.

:::note Example Scenario

We need a Slider tool that allows users to select a value between 1 and 20. Additionally, only integer values are allowed. The selected values will be used to set the line width of a chart.

:::

The code snippet below represents the entirety of code that needs to be written to create one Slider that allows users to select a value from a range between 1 and 20.

First, a global variable that stores a default value of the slider tool needs to be defined. In the example below, the global variable is named `line_width_1` and the "default" or "initial" value that it contains is 20. As such, `line_width_1 = 1` even when the user has not interacted with the slider tool at all.

Second, under the class `tool_slider`, a pair of `get_` and `set_` functions are defined. The `get_` function is used to define the slider options (minimum value, maximum value, and the step by which the value changes when user moves the slider left or right) that are to be presented to the user when the user interacts with the Slider tool during a presentation. Whereas, the `set_` function is used by the system back-end to change value stored in the variable `line_width_1` when a user makes a selection using the slider. Note that the naming scheme between the `get_` and `set_` functions are consistent as they both have the exact same name except the `get_` and `set_` prefixes.


```python
global line_width_1
line_width_1 = 1

class tool_slider:
    def get_plot_line_width_1(self):
        global line_width_1
        return {
            "Minimum": 1,
            "Maximum": 20,
            "Step": 1,
            "Default": line_width_1
        }

    def set_plot_line_width_1(self, slider_selection):
        global line_width_1
        line_width_1 = float(slider_selection)
```

The `get_plot_line_width_1` function first calls the global variable `line_width_1`. This way, the value stored in the global variable can be changed from within the local scope of the function. Then, the function returns a dictionary with four key-value pairs as follows. The first item in the dictionary is a key named `Minimum`, with the value mapped to it signifying the lowest value that can be set using the slider. Likewise, the second item in the dictionary is a key named `Maximum`, with the value mapped to it signifying the highest value that can be set using the slider. The third item in the dictionary is a key named `Step`, which contains the value by which the number is incremented when the slider is moved for just one step. The final item in the dictionary is a key named `Default` which signifies the default value of the Slider tool when the tool has not been interacted with. The value mapped to this key is the global variable `line_width_1`.

The `set_plot_line_width_1` is used by the MoLöwe back-end to pass the selection made by a user with the Slider tool. This function contains a keyword argument named `slider_selection` which is used by the MoLöwe back-end change the value stored in the global variable `line_width_1` (as can be seen in the code within the function).

Once the `get_` and `set_` functions have been defined, a Slider tool can be placed on a slide by opening the slide in Edit Mode.

If another slider tool is required for the presentation, say one that lets users change line width of a different line in the plot, a new pair of get and set functions need to be defined under the class `tool_slider` as shown below:

```python
global line_width_1
line_width_1 = 1

global line_width_2
line_width_2 = 7

class tool_slider:

    # first line
    def get_plot_line_width_1(self):
        global line_width_1
        return {
            "Minimum": 1,
            "Maximum": 20,
            "Step": 1,       # value increments by +/- 1
            "Default": line_width_1
        }

    def set_plot_line_width_1(self, slider_selection):
        global line_width_1
        line_width_1 = float(slider_selection)

    # second line
    def get_plot_line_width_2(self):
        global line_width_2
        return {
            "Minimum": 5,
            "Maximum": 15,
            "Step": 1.5,     # value increments by +/- 1.5
            "Default": line_width_2
        }

    def set_plot_line_width_2(self, slider_selection):
        global line_width_2
        line_width_2 = float(slider_selection)
```

## **Placing a Range Slider Tool on a Slide (Edit Mode)**

To place a Slider Tool on a Slide, first define the Slider Tool on the Project Notebook and upload the notebook to MoLöwe. Then, open the slide in which the Slider Tool needs to be placed in Edit Mode.

Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps outlined [**here**](docs/03-the-interface/05_slides.md#4-editing-slides-edit-mode).

Following that, click on the slider icon (signified by 3 lines with ticks for values).

![](/img/doc/63_slider.jpg)

This will place a container for the Slider Tool onto the slide.

![](/img/doc/38_tool_field.jpg)

When a user hovers over this container, they will be presented with a gear icon (on the top right of the container) that they can click on.

![](/img/doc/39_hover_tool_container.jpg)

Clicking on this icon opens an interface that allows users to select the options for selecting the Slider function.

![](/img/doc/63_slider_2.jpg)

* *Tool Name*: allows you to set a unique identifier for the button.
* *Get Function*: (defined in the Project Notebook) see description [**above**](#defining-a-range-slider-on-project-notebook).
* *Set Function*: (defined in the Project Notebook) see description [**above**](#defining-a-range-slider-on-project-notebook).

When the Tool Name, Get Function and Set Function have been set/selected, users can click on the "Save" button. Optionally, users can also set a Header, Footer, and Description texts.

Then, users are taken back to the slide in Edit Mode.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool) the tool as they desire.

The final result is a Slider Tool on the slide that presents the options that have been defined under the `get_` function.

Do note that when the slide is in Edit Mode, a rectangular box appears around the tool. This box does not appear around the tool when the slide is viewed in Presentation or Controller Modes.

## **Using a Range Slider Tool during Presentation**

During presentation (i.e. while at Presentation Mode or Controller Mode), users can interact with the Range Slider Tool by pressing (or clicking) on the circle (see green arrow below) on the slider and moving it left or right as desired. This action can be performed either with the mouse pointer or with the touch of a finger.

![](/img/doc/63_slider_3.jpg)

Moving a Range Slider left or right changes the value of the variable that the slider is set to change.

When in Controller Mode, the Slider tool appears without the rectangular box surrounding it.
