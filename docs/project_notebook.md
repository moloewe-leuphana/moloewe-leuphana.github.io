---
sidebar_position: 7
---

# Project Notebook

Each MoLöwe project contains a [**Project Notebook**](glossary.md#project-notebook). 
Here you can set up some of the **MoLöwe tools** using Python programming.
The required steps to achieve this are presented in this chapter.

(Note: Some MoLöwe tools do not need to be set up in the Project Notebook, see the
[**Tools Chapter**](docs/moloewe-tools/00_overview.md))

:::note
Although you will set up MoLöwe tools using Python, programming experience with Python is **not** required.
This tutorial is set up for users with no Python experience.
:::note

SEE CHAPTER FOR ADVANCED USERS

## **1 Acquiring the Project Notebook**

When a new MoLöwe project is created, a Project Notebook is automatically generated (named "Template Notebook").
Please download the Notebook of your project by visiting the Notebooks page and follow the steps described
[**here**](docs/edit-mode/02_notebooks.md#3-download-a-project-notebook).

(see [**here**](docs/edit-mode/02_notebooks.md#1-download-a-project-notebook) how to get to the Notebooks page)

## **2 Accessing the Project Notebook**

You can access the Project Notebook using **JupyterHub**.
You have received a username and password for JupyterHub together with your MoLöwe user account.

You can open JupyterHub [**here**](https://jupyter.leuphana.de/hub/login?next=%2Fhub%2F).

Once you logged in to JupyterHub, please upload the Project Notebook by clicking the "Upload Files" button and choose
the Project Notebook from your download folder.

![](/img/doc/project_notebook_1.jpg)

Now open the Project Notebook by double-clicking on it in the left sidebar. The notebook will open in a new tab.

![](/img/doc/project_notebook_2.png)

## **3 Structure of a Project Notebook**

In order to make the Python code easier to read, the Project Notebook is arranged into cells.
Each cell fulfills a specific task in the notebook.

For your purposes (setting up MoLöwe tools) only the following cells are relevant/need to be edited:

**Preparatory code:**
* Import modules
* Access Tokens and API Keys
* Global Variables, Constants, Settings
* Notebook Functions

** Tool Functions:**
* Tool Switch
* Tool Dropdown
* Tool Button
* Tool Slider
* Tool Map
* Tool Graph

- python code ist in einzelnen tool kapiteln (wichtig: plotly nicht kommentieren!)

## **4 Uploading the Project Notebook to MoLöwe**

see steps in chapter notebooks