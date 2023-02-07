---
sidebar_position: 2
---

# Dropdown

:::note
Before you start, please make yourself familiar with chapter
[**Setting up Tools and Content**](docs/project_notebook/setting_up_tools.md).
:::

Say we want to add a Dropdown Tool that lets users select from different cities in
Germany.

First, a variable that stores the default value that is selected in the Dropdown Tool needs to be defined in the cell
*"Global Variables, Constants, Settings"*. We want the default value to be "Berlin".
So we add the variable `german_city` with the value "Berlin":

```python
german_city = "Berlin"
```

Now, a new pair of get and set functions need to be defined:

```python
def get_german_city(self):
    return {
        "values": ["Berlin", "Munich", "Lüneburg", "Kiel"],
        "default": german_city
    }
def set_german_city(self, dropbox_selection):
    global german_city
    german_city = dropbox_selection
```