---
sidebar_position: 1
---

# Switch

We need a Switch tool that allows users to select between two strings: "light" and "dark". The selected string is
eventually used to change the color mode of a Map from Light Mode to Dark Mode and vice-versa.

The code snippet below represents the entirety of code that needs to be written to create one Switch that allows
users to select a value between `"light"` and `"dark"`.

First, a global variable that stores a default value of the switch tool needs to be defined. In the example below,
the global variable is named `current_map_style` and the "default" or "initial" value that it contains is 20.
As such, `current_map_style = "light"` even when the user has not interacted with the switch tool at all.

Second, under the class `tool_switch`, a pair of `get_` and `set_` functions are defined. The `get_` function is used
to define the switch state based on the value stored in the global variable `current_map_style`. Whereas, the `set_`
function is used by the system back-end to change value stored in the variable `current_map_style` when a user makes
a selection using the switch. Note that the naming scheme between the `get_` and `set_` functions are consistent as
they both have the exact same name except the `get_` and `set_` prefixes.

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

The `get_change_map_style` function first calls the global variable `current_map_style`. This way, the value stored in
the global variable can be changed from within the local scope of the function. Then, the function returns a boolean
value either `True` or `False` based on the value currently stored in the global variable `current_map_style`.

The `set_change_map_style` is used by the MoLöwe back-end to pass the selection made by a user with the Switch tool.
This function contains a keyword argument named `switch_state` which is used by the MoLöwe back-end change the value
stored in the global variable `current_map_style` to a value that is different from the value initially stored in it
before the switch was toggled by the user (as can be seen in the code within the function).

Once the `get_` and `set_` functions have been defined, a Switch tool can be placed on a slide by opening the slide in Edit Mode.

If another switch tool is required for the presentation, say one that lets users change line width of a different
line in the plot, a new pair of get and set functions need to be defined under the class `tool_switch` as shown below:

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