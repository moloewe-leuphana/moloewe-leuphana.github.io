# Building an Interactive Tool

Tools using the Project Notebook are defined as either a `get_` function or a pair of `get_` and `set_` functions.
All the functions that belong to a category of tools are placed within a single dedicated Python `class`. Hence, a Python class
is defined for each of the tool mentioned here. For instance, if one needs to create 2 different Plotly charts,
they need to place two `get_` functions with unique names (eg. `get_first_chart` and `get_second_chart`) under a single
class named `tool_graph`.