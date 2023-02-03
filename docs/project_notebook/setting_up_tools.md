---
sidebar_position: 1
---

# Setting Up Tools

Each MoLöwe project contains a [**Project Notebook**](../glossary.md#project-notebook). 
Here you can set up some of the **MoLöwe tools** using Python programming.

The required steps to achieve this are presented in this chapter.

(Note: Some MoLöwe tools do not need to be set up in the Project Notebook, see the
[**Tools Chapter**](docs/moloewe-tools/00_overview.md))

:::note Python Experience
Although you will set up MoLöwe tools using Python, programming experience with Python is **not** required.
This chapter is set up for users with no Python experience.

However, if you're experienced with Python and would like to explore more advanced applications,
you can also check out the chapter for [**Advanced Users**](docs/project_notebook/setting_up_environment.md).
:::note

## **1 Acquiring the Project Notebook**

When a new MoLöwe project is created, a Project Notebook is automatically generated (named "Template Notebook").
Please go to your [**Project Page**](docs/user-interface.md#3-edit-mode) and download the Project Notebook from
the Notebooks Subpage with the steps described [**here**](docs/edit-mode/02_notebooks.md#1-download-a-project-notebook).

## **2 Accessing the Project Notebook**

You can access the Project Notebook using **JupyterHub**.
You have received a username and password for JupyterHub together with your MoLöwe user account.

You can open JupyterHub [**here**](https://jupyter.leuphana.de/hub/login?next=%2Fhub%2F).

Once you logged in to JupyterHub, please upload the Project Notebook by clicking the "Upload Files" button and choose
the Project Notebook from your download folder.

![](/img/doc/project_notebook_1_upload_notebook.jpg)

Now open the Project Notebook by double-clicking on it in the left sidebar. The notebook will open in a new tab.

![](/img/doc/project_notebook_2_access_notebook.png)

## **3 Structure of the Project Notebook**

In order to make the Python code easier to read, the Project Notebook is arranged into **cells**.
Each cell fulfills a specific task in the notebook.

For your purpose (setting up MoLöwe tools) only the following cells are relevant/need to be edited:

**Preparatory code:**
* Import modules
* Access Tokens and API Keys
* Global Variables, Constants, Settings
* Notebook Functions

**Tool Code:**
* Tool Switch
* Tool Dropdown
* Tool Button
* Tool Slider
* Tool Map
* Tool Graph

The following two sections will explain how these cells need to be edited in order to set up MoLöwe tools.

## **4 Preparatory code**

In this section we will explain how the cells of the **preparatory** part of the Project Notebook need to be edited.

### 4.1 Import Modules

In the cell "Import Modules", please add the following two lines:

`import geopandas as gpd`

`import plotly.express as px`

Like this:

![](/img/doc/project_notebook_3_import_modules.jpg)

### 4.2 Access Tokens and API Keys

The cell "Access Tokens and API Keys" needs to be edited if you want to show a map using mapbox.

Please see the chapter on [**Maps**](docs/moloewe-tools/07_map.md).

### 4.3 Global Variables, Constants, Settings

The cell "Global Variables, Constants, Settings" is different for every tool.
Therefore, please refer to the specific to find out what code you exactly need here.

### 4.4 Notebook Functions

The cell "Notebook Functions" is different for every tool.
Therefore, please refer to the specific to find out what code you exactly need here.

## **5 General Tool Code Structure**

Before you jump into the individual tool codes, you should familiarize yourself with the **general code structure**
of MoLöwe tools described in this section.

### 5.1 Where to Place Tool Codes

The code of a tool needs to be placed in the cell that contains the respective **tool class**.

***Example***:

You would put the code for the **Switch Tool** in the cell *"Tool Switch"* beneath the line `class tool_switch`.
The code for the **Dropdown Tool**, on the other hand, belongs in the cell *"Tool Dropdown"* beneath the line `class tool_dropdown`.

Like this:

![](/img/doc/project_notebook_4_classes.jpg)

:::info Indentation
Be aware that your tool code needs to be **indented**. It needs to be on the same "level" as the line `pass`.
You can add an indentation with the Tab key on your keyboard.

![](/img/doc/project_notebook_5_indentation.jpg)

<img src="/img/doc/project_notebook_6_tabkey.png" alt="tabkey" width="120"/>
:::info

If you want to create a second tool of the same kind, e.g. a second switch, you can place the code for the second
switch right after the code of the first one.

### 5.2 The `get_` and `set_` Function

MoLöwe tool codes are formulated as so-called **functions**.

Simply put, a function is a set of **instructions** that is executed when the function is called.
There are two functions that we need to define for a MoLöwe Tool: the `get_` function and the `set_` function.

#### 5.2.1 The `get_` Function

In the `get_` function, we define the **initial state** of a tool, meaning its default parameters.

***Example:***

In the `get_` function of the Dropdown Tool, you define which options should appear/are available
in the dropdown list and, in addition, which option will be selected by **default** (i.e. when you open the slide)

#### 5.2.2 The `set_` Function

In the `set_` function, we define what happens when the tool is **executed**.

We can configure the `set_` function in such a way that it changes a parameter value of another tool.
This is how we can set up **interactions** between tools.

***Example:***

Using the `set_` function of a Button Tool, you can change the parameter displayed on the Y-Axis of a Graph Tool.

---
:::note
Naturally, some tools do **not** require both the `get_` and the `set_` function.

The Graph tool, for example, only needs the `get_` function, containing the data you want to display in the graph.

The Button tool, on the other hand, only needs the `set_` function, containing instructions on what to do when the button is pressed
(i.e. when its `set_` function is called).

:::note

## **6 Tool Codes**

Here we present the **basic code** for each tool.
You can copy the code into your Project Notebook and adjust it to your needs.

Also, please see our **User Examples** (left sidebar).

### 6.1 Switch

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

### 6.2 Dropdown

### 6.3 Button

### 6.4 Slider

### 6.5 Map

### 6.6 Graph

### ?

| File Extension                    | Project Directory | Description          |
|-----------------------------------|-------------------|----------------------|
| `.PNG`                            | `/image`          | Image                |
| `.JPG` or `.jpg`                  | `/image`          | Image                |
| `.JPEG` or `.jpeg`                | `/image`          | Image                |
| `.MP4` or `.mp4`                  | `/video`          | Video file           |
| `.txt`                            | `/text`           | Text file            |
| `.md`                             | `/text`           | Markdown file        |
| `.html` or `.HTML`                | `/text`           | HTML file            |
| `.shp`, `.shx`, `.prj` and `.dbf` | `/data`           | Shapefile extensions |


## **4 Uploading the Project Notebook to MoLöwe**

Below are the files that can be uploaded and the directories in the project that they will be placed in.


see steps in chapter notebooks