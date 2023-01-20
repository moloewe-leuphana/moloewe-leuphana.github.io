# Graph

A Graph Tool is used to display a Plotly graph during a presentation. Additionally, it supports input from other tools such as Dropdown Tool and Slider Tool.

The Graph tool requires definition of a function on the Project Notebook.

## **Defining Graph Tool on Project Notebook**

All the graph tools that needs to be defined for a presentation need to be placed under a single class named `tool_graph`.

Each graph tool is defined using a single `get_` function. It is recommended that the naming of the `get_` and `set_` functions is set in a consistent manner as shown in the example below.

```python
class tool_graph:
    
    def get_plotly_font_lwd_test_chart(self):

        global line_width_1  # input from Slider Tool
        global line_width_2  # input from Slider Tool
        global font_size     # input from Dropdown Tool

        fig = go.Figure()

        # 1.  Make the two line plots
        # Trace 1
        fig.add_trace(go.Scatter(
            x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
            y=[0, 1, 2, 3, 4, 5, 6, 7, 8],
            name="Line 1",
            mode="lines",
            line=dict(width=line_width_1)
        ))
        # Trace 2
        fig.add_trace(go.Scatter(
            x=[0, 1, 2, 3, 4, 5, 6, 7, 8],
            y=[1, 0, 3, 2, 5, 4, 7, 6, 8],
            name="Line 2",
            mode="lines+markers",
            line=dict(width=line_width_2) # Line width
            
        ))

        # 2. Add text related settings
        fig.update_layout(
            title="Plot Title (default: {})".format(font_size),
            xaxis=dict(title="X-axis title", automargin=True),
            yaxis=dict(title="Y-axis title", automargin=True),
        )
        
        # 3. Update plotly template and margin sizes
        fig.update_layout(
            template="plotly_white",
            margin=go.layout.Margin(l=100, r=0, b=100, t=font_size*2.5, pad=0),
        )
        
        # 4. Font size
        fig.update_layout(font=go.layout.Font(size=font_size))

        return fig.to_dict()
```

The `get_plotly_font_lwd_test_chart` function contains code that is used to create Plotly charts. This example chart (which is a line chart) displays two lines. Additionally, this code also takes input from other interactive tools such as Slider Tool (in case of `line_width_1` and `line_width_2`) and Dropdown Tool (in case of `font_size`). Depending on the values selected using the different interactive tools, the looks of the graph (the data and the graph properties) can be changed.

The global variables called within the function allows access to the values stored in the different variables that correspond to the different MoLöwe tools.

Please note the following:

- the name of the function must start with `get_` and end with `_chart`
- the function must return a dictionary of the figure (`fig.to_dict()`)

Users are referred to the official Plotly documentations for information on how to create [Plotly charts](https://plotly.com/python/).

## **Placing Graph on a Slide (Edit Mode)**

To place a Graph Tool on a Slide, first define the Graph Tool on the Project Notebook and upload the notebook to MoLöwe. Then, open the slide in which the Graph Tool needs to be placed in Edit Mode.

Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps outlined [**here**](docs/edit-mode/05_slides.md#4-editing-slides-edit-mode).

Following that, click on the Graph icon (signified by a bar chart).

![](/img/doc/37_choose_graph_tool.jpg)

This will place a container for the Graph Tool onto the slide.

![](/img/doc/38_tool_field.jpg)

When a user hovers over this container, they will be presented with a gear icon that they can click on.

![](/img/doc/39_hover_tool_container.jpg)

Clicking on this icon opens an interface that allows users to select the graph that they want to add to the slide.

![](/img/doc/41_choose_graph.jpg)

The required fields in this interface are **Tool Name** and **Get Function**. The *Tool Name* is a unique identifier for the tool, whereas the *Get Function* is a function that is defined in the [Project Notebook](docs/05-working-with-notebooks/00_template_notebook.md). The Header and Footer text are optional.

When the Tool Name and Get Functions have been set/selected, users can click on the "Save" button. Then, users are taken back to the slide in Edit Mode.

They can then resize and reposition the size of the tool on the Slide canvas as described [**here**](00_overview.md).

:::caution

The Graph might not render properly when in Edit Mode. However, when in Presentation Mode or in Controller Mode, provided that there are no errors in the code in the Project Notebook, the Graph will render properly to fill the container that it is placed in.

:::

In case of this example, the resized chart that has been placed in the slide looks like the following.

![](/img/doc/42_resized_chart.jpg)

## **Loading Data from Files or URLs**

Users can upload data files to MoLöwe and load the data so that they can use it for a graph or a map.

### Loading Data from a File

The following example shows how to load data from a file named `diabetes.csv`:

```python

class tool_graph:
    
    def get_some_chart(self):

        # Load data from a file
        global data
        diabetes = pd.read_csv(data + "diabetes.csv")

        #                            #
        # rest of the code goes here #
        #                            #

        return fig.to_dict()
```

The project path defined in the beginning of the Project Notebook (more [**here**](docs/05-working-with-notebooks/00_template_notebook.md#21-mandatory-section)) allows loading the data using the relative path. The relative path is stored in a global variable named `data`. The user does not have to know that is stored in `data`; as long as a user knows the file name of a data file, they can load the data by simply using the relative path to the file that is created by concatenating the string of the file name to the `data` variable.

### Loading Data from URL

The following example shows how to load data from a file named `diabetes.csv`:

```python

class tool_graph:
    
    def get_some_other_chart(self):

        # Load data from a URL
        diabetes = pd.read_csv("https://www.<link>.com/to/data/file.csv")

        #                            #
        # rest of the code goes here #
        #                            #

        return fig.to_dict()
```

As you can see, loading data from a URL quite straightforward. 

## **Viewing a Graph during Presentation**

During presentation (i.e. while at Presentation Mode or Controller Mode), users can view the Graph tool that was defined in the Edit Mode using the steps described above.

## **Combining Graphs with Other Tools**

A graph defined using the Graph tool can be manipulated by using other MoLöwe tools that allow users to select/change values (eg. Dropdown tool). The general order of operation to achieve this is as follows:

1. Define all the interactive tools necessary in the Project Notebook.
2. Define the Graph in the Project Notebook as described above. The global variables that correspond to the different interactive tools from Step 1 also need to be called within this function in order for them to be used.
3. Place the different interactive tools on a slide in Edit Mode.
4. Place the Graph Tool on a slide in Edit Mode.
5. Resize and/or reposition the tools as necessary.
6. Save the Slide and exit Edit Mode.
7. Start a presentation (Presentation Mode or Controller Mode) and open the slide.
8. Use interactive tools (Range Slider, Button, Dropdown Tool, etc.) to change different values.
9. Refresh the graph as described below.

When a Graph can be manipulated using other interactive tools (e.g. Dropdown and Slider as mentioned above), after making changes using these interactive tools, the graph needs to be refreshed manually by clicking on an icon that appears on the top right of the Graph's container as shown below. The refresh function works only when the slide is being viewed in the Controller or Presentation Modes.

![](/img/doc/62_graph_1.jpg)