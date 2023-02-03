# Map

A Map Tool is used to display a map created using Plotly during a presentation.
Much like the [Graph Tool](06_graph.md), it supports input from other tools such as Dropdown Tool and Slider Tool.

The Map tool requires definition of a function on the Project Notebook.

## **Similarity to the Graph Tool**

The maps created using the Map tool are essentially Plotly charts. As a result, many aspects of the way the map tool is
defined and used bear resemblance to the Graph Tool.
Hence, readers are advised to read the documentation on the Graph Tool to learn about the Map Tool.

The icon for the map tool on the tool selection panel is shown in the image below. Besides that, all the steps/details are the same as the Graph Tool.

![](/img/doc/64_map.jpg)

## **Other Details Pertaining to the Map Tool**

Below are some details that pertain specifically to the map tool.

- In the current implementation of MoLöwe, only Plotly maps are supported. Users are referred to the [**Official Documentation from Plotly**](https://plotly.com/python/maps/) for more information about creating maps using Plotly and Python.
- If [**Mapbox**](https://plotly.com/python/mapbox-layers/) is being used to create maps, an API Key (or Access Token) from Mapbox might be required.
- See [**Project Notebook**](docs/05-working-with-notebooks/00_template_notebook.md#214-definition-of-api-tokens-and-keys) for information on how and where to put the API Key.
- See [**Official Documentation from Mapbox**](https://docs.mapbox.com/help/getting-started/access-tokens/) to learn how to create an access token on Mapbox.
- See the [**Maps User Example**](docs/05-user-examples/maps.md) for in depth information and examples.
