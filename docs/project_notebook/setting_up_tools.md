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

![](/img/doc/project_notebook_1.jpg)

Now open the Project Notebook by double-clicking on it in the left sidebar. The notebook will open in a new tab.

![](/img/doc/project_notebook_2.png)

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

![](/img/doc/project_notebook_3.jpg)

### 4.2 Access Tokens and API Keys

The cell "Access Tokens and API Keys" needs to be edited if you want to show a map using mapbox.

Please see the chapter on [**Maps**](docs/moloewe-tools/07_map.md).

### 4.3 Global Variables, Constants, Settings

The cell "Global Variables, Constants, Settings" is different for every tool.
Therefore, please refer to the specific
[**tool code**](#5-tool-code) to find out what code you exactly need here.

### 4.4 Notebook Functions

The cell "Notebook Functions" is different for every tool.
Therefore, please refer to the specific
[**tool code**](#5-tool-code) to find out what code you exactly need here.

## **5 Tool Code**

Tools using the Project Notebook are defined as either a `get_` function or a pair of `get_` and `set_` functions.
All the functions that belong to a category of tools are placed within a single dedicated Python `class`. Hence, a Python class
is defined for each of the tool mentioned here. For instance, if one needs to create 2 different Plotly charts,
they need to place two `get_` functions with unique names (eg. `get_first_chart` and `get_second_chart`) under a single
class named `tool_graph`.

- siehe außerdem user examples

### 5.1 Switch

### 5.2 Dropdown

### 5.3 Button

### 5.4 Slider

### 5.5 Map

### 5.6 Graph

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