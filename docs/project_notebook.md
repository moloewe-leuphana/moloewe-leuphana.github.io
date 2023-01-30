---
sidebar_position: 7
---

# Project Notebook

Each MoLöwe project contains a [**Project Notebook**](glossary.md#project-notebook). 
Here you can set up some of the **MoLöwe tools** using Python programming.
The required steps to achieve this are presented in this chapter.

(Note: Some MoLöwe tools do not require to be set up in the Project Notebook, see the
[**Tools Chapter**](docs/moloewe-tools/00_overview.md))

:::note
Although you will set up Molöwe tools using Python, programming experience with Python is **not** required.
This tutorial is set up for users with no Python experience.
:::note

## **1 Acquiring the Project Notebook**

When a new MoLöwe project is created, a Project Notebook is automatically generated (named "Template Notebook").
Please download the Notebook of your project by visiting the Notebooks page in your [**Project Page**](user-interface.md#3-edit-mode)
(see [**here**](docs/edit-mode/02_notebooks.md#3-download-a-project-notebook) on how to download a Project Notebook).

## **2 Accessing the Project Notebook**

You can access the Project Notebook using **JupyterHub**.
You have received a username and password for JupyterHub together with your MoLöwe user account.

You can open JupyterHub [**here**](https://jupyter.leuphana.de/hub/login?next=%2Fhub%2F).

Once you logged in to JupyterHub, please upload the Project Notebook by clicking the "Upload Files" button and choosing
the Project Notebook from your download folder.

![](/img/doc/project_notebook_1.png)

Now open the Project Notebook by double-clicking on it in the left sidebar.

![](/img/doc/project_notebook_2.png)

## **3 Structure of a Project Notebook**

Project Notebooks follow the structure outlined below:

1. **Mandatory Section**
   1. Definition of project paths
   2. Installation of required packages
   3. Importing necessary packages
   4. Definition of API Tokens and Keys (optional)
2. **Project-specific Source Code**
   1. Switch Tool
   2. Dropdown List
   3. Button
   4. Slider
   5. Map
   6. Graph

### 3.1 Mandatory Section

This section contains all the code that is necessary for the MoLöwe back-end and for the "Project-specific Source Code"
section described below.

#### 3.1.1 Definition of Project Paths

The Python class Moloewe and code that goes in this section allows referencing of files by using relative paths.
This means that users do not have to know/remember the project path to reference a data file that they uploaded.
**This class and code needs to be present for the MoLöwe to work**; the code that needs to be written in this section is standardized.

#### 3.1.4 Definition of API Tokens and Keys

API Tokens or Keys are not required if the libraries/packages that are being used do not specifically require them.
If you are not sure if you need an API Key/Token, refer to the library's documentation.

If an API key is required, they can be defined as a string (`str`) in a separate section in order to maintain a
coherent structure in the Project Notebook.

Following code snippet shows what the API Key that is defined might look like:

```python
mapbox_access_token = "ew.ecI9kWp"
```

### 3.2 Project-specific Source Code

Each MoLöwe tool is written in a specific structure, called a "function".
In order to set up a MoLöwe tool, you need to add its function code to the Project Notebook and then customize it to your
liking.

The project-specific python code also follow a specific syntax or structure. As such, the example code snippets
from the Template Notebook (or this documentation) can be used as references in order to create different tools that
need to be defined for the MoLöwe project.

Some MoLöwe Tools need Python code written in a specific structure. The tools that require a code from the Project
Notebook are listed below.

* **Switch Tool**
* **Dropdown List Tool**
* **Button Tool**: Some functions of the Button Tool require code from the Project Notebook.
* **Range Slider Tool**
* **Map Tool**
* **Graph Tool**

In order to get an overview of the MoLöwe Tools, please visit the page in the MoLöwe Tools chapter.

## **4 Accessing Files via Project Notebook**

Files that have been uploaded from the front-end of MoLöwe can be accessed via the Project Notebook.

Assuming that a file named `my_data.csv` has been uploaded to MoLöwe, the code snippet mentioned in Section
"Mandatory Section" above allows users to reference the data file using the code shown below:

```python
global data
data_file = data + "my_data.csv"
```

Once the data file has been appropriately referenced, as shown above, it can be loaded into a Pandas DataFrame by
using a code shown below:

```python
df = pd.read_csv(data_file)
```

Data files only need to be read from within the functions that are defined for maps and graphs.

## **5 Important to Know**

Avoid any "code in the wild" - meaning code that is not wrapped into a function (def).
Besides the code section outlined in Section "Mandatory Section", all other code must be defined within Python classes
and functions for the respective tools.
