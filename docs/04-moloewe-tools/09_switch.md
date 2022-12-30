# Switch

A Switch tool is used to interact with a presentation and allows users to switch the value (of any Python type) stored in a variable from one to the other.

The Switch tool requires definition of a function on the Project Notebook.

## **Defining a Switch Tool on Project Notebook**

All the Switch tools that needs to be defined for a presentation need to be placed under a single class named `tool_switch`.

Each Switch tool is defined using a pair of `get_` and `set_` functions. It is recommended that the naming of the `get_` and `set_` functions is set in a consistent manner as shown in the example below.

:::note Example Scenario

We need a Switch tool that allows users to select between two strings: "light" and "dark". The selected string is eventually used to change the color mode of a Map from Light Mode to Dark Mode and vice-versa.

:::

The code snippet below represents the entirety of code that needs to be written to create one Switch that allows users to select a value between `"light"` and `"dark"`.

First, a global variable that stores a default value of the switch tool needs to be defined. In the example below, the global variable is named `current_map_style` and the "default" or "initial" value that it contains is 20. As such, `current_map_style = "light"` even when the user has not interacted with the switch tool at all.

Second, under the class `tool_switch`, a pair of `get_` and `set_` functions are defined. The `get_` function is used to define the switch state based on the value stored in the global variable `current_map_style`. Whereas, the `set_` function is used by the system back-end to change value stored in the variable `current_map_style` when a user makes a selection using the switch. Note that the naming scheme between the `get_` and `set_` functions are consistent as they both have the exact same name except the `get_` and `set_` prefixes.

```python
global current_map_style
current_map_style = "light"

class tool_switch:
    def get_change_map_style(self):
        global current_map_style
        if current_map_style == "light":
            return True
        else:
            return False

    def set_change_map_style(self, switch_state):
        global current_map_style
        if switch_state:
            current_map_style = "light"
        else:
            current_map_style = "dark"
```

The `get_change_map_style` function first calls the global variable `current_map_style`. This way, the value stored in the global variable can be changed from within the local scope of the function. Then, the function returns a boolean value either `True` or `False` based on the value currently stored in the global variable `current_map_style`.

The `set_change_map_style` is used by the MoLöwe back-end to pass the selection made by a user with the Switch tool. This function contains a keyword argument named `switch_state` which is used by the MoLöwe back-end change the value stored in the global variable `current_map_style` to a value that is different from the value initially stored in it before the switch was toggled by the user (as can be seen in the code within the function).

Once the `get_` and `set_` functions have been defined, a Switch tool can be placed on a slide by opening the slide in Edit Mode.

If another switch tool is required for the presentation, say one that lets users change line width of a different line in the plot, a new pair of get and set functions need to be defined under the class `tool_switch` as shown below:

```python
global current_map_style
current_map_style = "light"

global current_bulb_state
current_bulb_state = 0

class tool_switch:
    # first switch
    def get_change_map_style(self):
        global current_map_style
        if current_map_style == "light":
            return True
        else:
            return False

    def set_change_map_style(self, switch_state):
        global current_map_style
        if switch_state:
            current_map_style = "light"
        else:
            current_map_style = "dark"

    # second switch
    def get_change_bulb_state(self):
        global current_bulb_state
        if current_bulb_state == 0:
            return True
        else:
            return False
    
    def set_change_map_style(self, switch_state):
        global current_bulb_state
        if switch_state:
            current_bulb_state = 0
        else:
            current_bulb_state = 1
```

## **Placing a Switch Tool on a Slide (Edit Mode)**

To place a Switch Tool on a Slide, first define the Switch Tool on the Project Notebook and upload the notebook to MoLöwe. Then, open the slide in which the Switch Tool needs to be placed in Edit Mode.

Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps outlined [**here**](docs/03-the-interface/05_slides.md#4-editing-slides-edit-mode).

Following that, click on the Switch icon.

![](/img/doc/65_switch.jpg)

This will place a container for the Switch Tool onto the slide.

![](/img/doc/38_tool_field.jpg)

When a user hovers over this container, they will be presented with a gear icon (on the top right of the container) that they can click on.

![](/img/doc/39_hover_tool_container.jpg)

Clicking on this icon opens an interface that allows users to select the options for selecting the Switch function.

![](/img/doc/65_switch_2.jpg)

* *Tool Name*: allows you to set a unique identifier for the button.
* *Get Function*: (defined in the Project Notebook) see description [**above**](#defining-a-switch-tool-on-project-notebook).
* *Set Function*: (defined in the Project Notebook) see description [**above**](#defining-a-switch-tool-on-project-notebook).

When the Tool Name, Get Function and Set Function have been set/selected, users can click on the "Save" button. Optionally, users can also set a Header, Footer, and Description texts.

Then, users are taken back to the slide in Edit Mode.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool) the tool as they desire.

The final result is a Switch Tool on the slide that determines what value is stored in the global variable as defined under the `get_` function.

Do note that when the slide is in Edit Mode, a rectangular box appears around the tool. This box does not appear around the tool when the slide is viewed in Presentation or Controller Modes.

## **Using a Switch Tool during Presentation**

During presentation (i.e. while at Presentation Mode or Controller Mode), users can interact with the Switch Tool by pressing (or clicking) on the tool to toggle it on and off. This action can be performed either with the mouse pointer or with the touch of a finger.

![](/img/doc/65_switch_3.jpg)

When in Edit Mode, the Switch tool will be surrounded by a rectangular box. When in Controller Mode, the Switch tool appears without the rectangular box surrounding it.
