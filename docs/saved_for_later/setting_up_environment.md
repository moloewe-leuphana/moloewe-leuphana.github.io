# Setting up an Environment

MoLöwe projects are set up using a Jupyter Notebook file, called *MoLöwe Notebook*, and the options available on the MoLöwe platform.

The easiest way to develop a Jupyter Notebook is to use the [**JupyterHub server**](jupyter.leuphana.de).
But you can also manually install the different software components on your own computer to have your local
environment to develop a notebook to use it in MoLöwe. 

---

MoLöwe has been tested with Python 3.7 and Plotly v4. This section provides information on how to install Python
and the required packages so that you can get started with writing a MoLöwe Notebook for your project.

At the time of writing, Jupyter Lab does not work reliably with Plotly. As such, using Jupyter Notebook is recommended.

## **Approach 1: Manual Installation**

This shows you the way to manually install the different software components required. 

An alternative to manual installation is to restore a conda environment, however doing so requires a deeper
knowledge of managing conda environments. If you are familiar with conda environments, follow the instructions mentioned below.

### Install Python 3

You can download and install Python 3 on your computer system by following the instructions mentioned in the official website.
([*link here*](https://www.python.org/downloads/))

Please note that MoLöwe was tested to work with Python 3.7. Hence, we suggest this version of Python to be installed.

### Install Necessary Python Packages

Once Python has been installed, you need two more packages (Jupyter Notebook and Plotly) to get started.
However, installing three other packages that are used for data analysis is also advised. Therefore, the scripts in
the instruction below will install five packages in total.

Instructions for installation:

1. Open the terminal (MacOS/Linux) or Powershell (Windows).
2. Install Jupyter Notebook (and other useful packages like Numpy, Pandas, sklearn, etc.) by copy-pasting the following text and pressing enter
  - `pip install numpy pandas scikit-learn jupyterlab`
3. Install Plotly by copy-pasting the following text to the terminal and pressing enter
  - `pip install plotly==4.14.3`
4. Load Jupyter Notebook by typing `jupyter notebook` in your terminal and pressing enter. A new browser tab should open with an interface that looks like the image below:

### Overview of Installed Packages

* **Jupyter Notebook** ([*official docs*](https://jupyter-notebook.readthedocs.io/en/stable/)) is a browser-based code editing software that you need to write and store the code that you use for your projects in MoLöwe. We refer to the Jupyter Notebook uploaded to MoLöwe projects as MoLöwe Notebook in order to solidify the distinction between a regular Jupyter Notebook file and the file that is uploaded to the project.
* **Plotly** ([*official docs*](https://plotly.com/python/)) is the interactive visualization library used by MoLöwe to create plots that are used for MoLöwe presentations.
* **NumPy** ([*official docs*](https://numpy.org/doc/stable/)) is a package that many Python packages built for scientific computation use. It allows for vectorized operations. While you might not use this package directly in the MoLöwe Notebook for your project, it is still good to install.
* **pandas** ([*official docs*](https://pandas.pydata.org/docs/user_guide/index.html)) allows loading tabular data from files and urls and supports many data analysis and summarization methods.
* **scikit-learn** ([*official docs*](https://scikit-learn.org/stable/user_guide.html)) (also called `sklearn`) is the most used Python package for data analysis and machine learning. Check out the official docs for all the methods supported.

## **Approach 2: Restore a Conda Environment** 

In order to restore a conda environment, please follow the steps below:

1. Download [requirements.txt](./assets/requirements.txt) and place it in a folder (for instance, you can place it in a folder called `moloewe`).
2. Navigate to `/moloewe` in your terminal.
3. Restore the conda environment using `requirements.txt` by using the following command: (replace `<env-name-here>` with your own name eg. `moloewe`)
  - `conda create -n <env-name-here> -f requirements.txt`
4. If you named your environment as `moloewe`, you can activate the conda environment by running:
  - `conda activate moloewe`
5. You can then load Jupyter Notebook installed in the environment by running:
  - `jupyter notbeook`
