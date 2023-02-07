---
sidebar_position: 1
---

# Switch

:::note
Before you start, please make yourself familiar with chapter
[**Setting up Tools and Content**](docs/project_notebook/setting_up_tools.md).
:::

Say we want to add a Switch Tool that lets users change the line width of the line plot described in section 6.5 of
chapter [**Setting up Tools and Content**](docs/project_notebook/setting_up_tools.md).
We want the line width to be either size 0.5 or size 3.

First, a variable with the default value of the line width needs to be defined. For this, we add the
variable `line_width` with the initial value of "0.5".
We would place the following code in cell *"Global Variables, Constants, Settings"*:

```python
line_width = 0.5
```

Now, a pair of `get_` and `set_` functions needs to be defined.
We want the default state of the Switch to be "turned off". When the user turns on the Switch, the line width should change
to "3".
The functions would look like this:

```python
def get_change_line_width(self):
    if line_width == 0.5:
        return False
    else:
        return True

def set_change_line_width(self, switch_state):
    global line_width
    if switch_state:
        line_width = 3
    else:
        line_width = 0.5
```

The code for the Graph Tool would look like this:

```python
def get_houseprice_chart(self):

    df = pd.read_csv(data + 'data.csv')

    fig = px.line(df, x = 'AAPL_x', y = 'AAPL_y', title='Apple Share Prices over time (2014)')
    
    fig.update_traces(line=dict(width=line_width))

    return my_chart.moloewe_chart_plot(plotly_data = fig.to_dict(), plotly_config=dict())
```

Note how the variable "line_width", that we changed with the Switch Tool, is used in this code.