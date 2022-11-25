# Template Notebook

Each MoLöwe project contains a [Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/stable/). Jupyter Notebook allows users to write and run Python code. MoLöwe system relies on a Jupyter Notebook that follows a particular "templated" structure. The notebook that follows this pre-defined structure and is uploaded to MoLöwe is called a *Project Notebook*.

In this page, the structure of the Project Notebook is outlined and some code examples are provided. In doing so, following conditions are expected:

1. Users have followed the setup instructions outlined in Chapter "Setting up an Environment".
2. Users have acquired a basic knowledge about how to work with Jupyter Notebook by following the reference documentation available [*here*](https://jupyter-notebook.readthedocs.io/en/stable/).

## **1 Creating/Acquiring a Project Notebook**

Creating a Project Notebook from the scratch is not recommended because this approach can lead to many user errors and frustrations. Instead, users are recommended to download the Project Notebook from the project.

When a new project is created on MoLöwe, a project notebook named "Template Notebook" is automatically generated. This notebook can be downloaded to the users' computer by visiting the Projects page (see chapter "Notebooks" - Section "3 Download a Project Notebook")).

:::note

The Project Notebook generated when a project is created is named "Template Notebook" because it is meant to be used as a template or reference to write the Python code necessary for the project.

:::

Once the notebook has been downloaded to the users' system, the user can open it in an active ipython session (see [*this*](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html#starting-the-notebook-server) for more information).

## **2 Structure of a Project Notebook**

All Project Notebooks must follow the same structure outlined below:

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

### 2.1 Mandatory Section

This section contains all the code that is necessary for the MoLöwe back-end and for the "Project-specific Source Code" section described below.

#### 2.1.1 Definition of Project Paths

The Python class Moloewe and code that goes in this section allows referencing of files by using relative paths. This means that users do not have to know/remember the project path to reference a data file that they uploaded. **This class and code needs to be present for the MoLöwe to work**; the code that needs to be written in this section is standardized.

#### 2.1.2 Installation of Required Packages

:::note

Most of the commonly used packages are already installed by default and **should not be installed or updated** within the Project Notebook. You should install only packages that are absolutely necessary and **are not available by default**.

:::

The code that goes in this section allows users to install packages that they need for their project. These packages can be related to loading data, analysing data, making plots, etc.

The code for installing the packages looks like the following:  
(the following code example can be used to install a package named `package_name`)

```python
!pip install package_name
```

Please note the exclamation mark placed before `pip`.

#### 2.1.3 Importing necessary packages

Importing Python packages using the Project Notebook, provided that they have been installed, is no different from installing packages for normal Python projects.

The code for importing packages looks like the following:  
(the following code example can be used to import a named `numpy`)

```python
import numpy as np
```

Note that the package `numpy` has been imported as `np` in order to save time and maintain standardization. For more, read the official documentation [*here*](https://numpy.org/doc/stable/user/absolute_beginners.html#how-to-import-numpy).

#### 2.1.4 Definition of API Tokens and Keys

API Tokens or Keys are not required if the libraries/packages that are being used do not specifically require them. If you are not sure if you need an API Key/Token, refer to the library's documentation.

If an API key is required, they can be defined as a string (`str`) in a separate section in order to maintain a coherent structure in the Project Notebook.

Following code snippet shows what the API Key that is defined might look like:

```python
mapbox_access_token = "ew.ecI9kWp"
```

### 2.2 Project-specific Source Code

The project-specific python code also follow a specific syntax or structure. As such, the example code snippets from the Template Notebook (or this documentation) can be used as references in order to create different tools that need to be defined for the MoLöwe project.

Some MoLöwe Tools need Python code written in a specific structure. The tools that require a code from the Project Notebook are listed below.

* **Switch Tool**
* **Dropdown List Tool**
* **Button Tool**: Some functions of the Button Tool require code from the Project Notebook.
* **Range Slider Tool**
* **Map Tool**
* **Graph Tool**

In order to get an overview of the MoLöwe Tools, please visit the page in the MoLöwe Tools chapter.

## **3 Accessing Files via Project Notebook**

Files that have been uploaded from the front-end of MoLöwe can be accessed via the Project Notebook.

Assuming that a file named `my_data.csv` has been uploaded to MoLöwe, the code snippet mentioned in Section "Mandatory Section" above allows users to reference the data file using the code shown below:

```python
global data
data_file = data + "my_data.csv"
```

Once the data file has been appropriately referenced, as shown above, it can be loaded into a Pandas DataFrame by using a code shown below:

```python
df = pd.read_csv(data_file)
```

Data files only need to be read from within the functions that are defined for maps and graphs.

## **4 Important to Know**

Avoid any "code in the wild" - meaning code that is not wrapped into a function (def). Besides the code section outlined in Section "Mandatory Section", all other code must be defined within Python classes and functions for the respective tools.
