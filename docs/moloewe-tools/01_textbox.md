# Textbox

A Textbox Tool is used to display a text during a presentation.

It requires a text file to be uploaded to MoLöwe beforehand.

It does not require definition of a function on the Project Notebook.

## **Uploading Text Files to MoLöwe**

The text files that need to be placed on a slide can be uploaded with the
[**process described here**](docs/edit-mode/03_files.md#2-upload-a-new-file).

The supported file formats are `.txt`, `.md`, `.pdf` and `.html`.

## **Placing a Text on a Slide (Edit Mode)**

To place a Text Tool on a Slide, first upload the text file to MoLöwe.
Then, open the slide in which the Textbox Tool needs to be placed in Edit Mode.

Then, open the tool selection panel in Edit Mode on the page that you want to place the tool in by following steps
outlined [**here**](docs/03-edit-mode/05_slides.md#4-editing-slides-edit-mode).

Following that, click on the Textbox icon.

![](/img/doc/69_textbox.jpg)

This will place a container for the Textbox Tool onto the slide.

![](/img/doc/38_tool_field.jpg)

When a user hovers over this container, they will be presented with a gear icon that they can click on.

![](/img/doc/39_hover_tool_container.jpg)

Clicking on this icon opens an interface that allows users to select the textbox that they want to add to the slide.

![](/img/doc/69_textbox_1.jpg)

The required fields in this interface are **Tool Name** and **Select File**. The *Tool Name* is a unique identifier for the tool,
whereas the *Select File* presents a list of text files that the users can select from. The Header and Footer text are optional.

Once the tool name has been defined and an text file has been selected, users are taken back to the slide in Edit Mode.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool)
the tool as they desire.

Do note that when the slide is in Edit Mode, a rectangular box appears around the tool.
This box does not appear around the tool when the slide is viewed in Presentation or Controller Modes.

## **Viewing a Textbox during Presentation**

During presentation (i.e. while at Presentation Mode or Controller Mode), users can view the Textbox tool that was defined
in the Edit Mode using the steps described above.

The HTML (`.html`) files and Markdown (`.md`) files are rendered based on the plain HTML syntax and can be used to present
various types of text such as code snippets, headings, etc. in a visually interesting manner.

The plain text files (`.txt`) are not rendered in any special way. They look plain.
