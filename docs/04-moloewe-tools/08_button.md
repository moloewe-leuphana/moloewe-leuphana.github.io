# Button

The Button tool is used to interact with the presentation and allows users to perform three specific actions:

1. Switch screen to a different dashboard slide
2. Show or Hide a Tool
3. Change value of a variable

The first two features of the Button tool do not require any definition in the Project Notebook. For the third feature (changing the value of a variable), a function needs to be defined in the Project Notebook.

## **Place Button on a Slide**

In order to put a button on a slide, follow the following steps:

First, open the tool selection panel in Edit Mode on the page that you want to place a button in by following steps outlined [**here**](docs/03-the-interface/05_slides.md#4-editing-slides-edit-mode).

Then, click on the Button icon (signified by a circle).

![](/img/doc/58_create_button.jpg)

This will place a container for the Button Tool onto the slide.

![](/img/doc/38_tool_field.jpg)

When a user hovers over this container, they will be presented with a gear icon (on the top right of the container) that they can click on.

![](/img/doc/39_hover_tool_container.jpg)

Clicking on this icon opens an interface that allows users to select the options for setting the button behavior.

![](/img/doc/59_button_options.jpg)

The required fields in this interface are the **Tool Name**, **Button Text**, and **Choose Option**.

* *Tool Name*: allows you to set a unique identifier for the button.
* *Button Text*: allows you to set the text that appears on the button.
* *Choose Option*: allows you to set the feature of the button. 

When the Tool Name, Button Text and the button features have been set/selected, users can click on the "Save" button. Then, users are taken back to the slide in Edit Mode.

## **Setting Features of a Button (Edit Mode)**

To use the different features of the button, users need to select an option from the drop-down that appears in the Choose Option section of the tool settings panel as shown below.

![](/img/doc/60_button_settings.jpg)

Depending on the selection made in this field, more options (that are mandatory) are presented to the user. These cases are discussed in their respective section below.

### Switch screen to a different slide

With this feature, a button that can be used to change the slide to any slide that has been defined can be placed on a slide.

This button feature can be activated by selecting "Switch a screen to different dashboard slide" from the dropdown menu presented above. When a user clicks on this option, they will be presented with an additional dropdown menu called "Choose Slide" where the user can select a slide that they want.

![](/img/doc/61_button_feature_1.jpg)

From this point, the user can select a slide from the dropdown menu including the Tool Name and Button Text as shown below.

![](/img/doc/61_button_feature_1_1.jpg)

Optionally, the user can also set a Header and a Footer Text for the button tool that is to be placed on the slide.

Finally, the user can click on the save button in order to create the tool with the correct settings.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool) the tool as they desire.

The final result is a button with the selected action placed on a slide as shown in the example below. Do note that this slide is currently in Edit Mode. The rectangular box around the button does not appear when the slide is viewed in Presentation or Controller Modes.

![](/img/doc/61_button_feature_1_2.jpg)

### Show or Hide a Tool

With this feature, a button that can be used to show or hide a tool on the current slide can be placed on the slide.

This button feature can be activated by selecting "Show/Hide a Tool" from the dropdown menu presented above. When a user clicks on this option, they will be presented with an additional dropdown menu called "Choose Tool" where the user can select a tool that has already been placed on the current slide.

![](/img/doc/61_button_feature_2_2.jpg)

From this point, the user can select a MoLöwe Tool from the dropdown menu including the Tool Name and Button Text as shown below.

![](/img/doc/61_button_feature_2_3.jpg)

Optionally, the user can also set a Header and a Footer Text for the button tool that is to be placed on the slide.

Finally, the user can click on the save button in order to create the tool with the correct settings.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool) the tool as they desire.

The final result is a button with the selected action placed on a slide. 

Do note that when the slide is in Edit Mode, a rectangular box appears around the button. This box does not appear around the button when the slide is viewed in Presentation or Controller Modes.

### Change value of a variable

With this feature, a button that can be used to change a value stored in a variable in the Project Notebook. As such, operating this tool requires that a function is defined in the Project Notebook that allows an interaction between the variable defined in the Project Notebook and the button tool to take place.

#### On Project Notebook

All the functions that correspond to this feature of the button need to be placed under a single class named `tool_button`. The functions are executed when users press a corresponding button while in Presentation Mode or Controller Mode.

An example function that needs to be defined in order to use this feature is presented below (along with the class definition). In this example, the variable whose value is being changed is `stored_value` which has `0` as its initial value. Likewise, the function `set_to_one()` is executed when the button is pressed (while at Presentation or Controller Mode) to change the value stored in `stored_value` from `0` to `1`.

```python
global stored_value
stored_value = 0

class tool_button:
    def set_to_one(self):
        global stored_value
        stored_value = 1

```

#### Using the Edit Mode on the Front-End

Provided that a function has been defined in the Project Notebook as shown above, the button feature can be activated in the Edit Mode by selecting "Change value of variable" from the "Choose option" dropdown menu. When a user clicks on this option, they will be presented with an additional dropdown menu called "Set Function" where the user can select a tool that has already been placed on the current slide (in this example, the `set_to_one` function will be presented).

![](/img/doc/61_button_feature_3_1.jpg)

From this point, the user can select a MoLöwe Tool from the dropdown menu including the Tool Name and Button Text as also shown above.

Optionally, the user can also set a Header and a Footer Text for the button tool that is to be placed on the slide.

Finally, the user can click on the save button in order to create the tool with the correct settings.

Following this, the user can [**resize**](00_overview.md#resize-a-tool) or [**reposition**](00_overview.md#reposition-a-tool) the tool as they desire.

The final result is a button with the selected action placed on a slide. Do note that when the slide is in Edit Mode, a rectangular box appears around the button. This box does not appear around the button when the slide is viewed in Presentation or Controller Modes.

## **Using Features of a Button (Presentation Mode)**

While viewing a slide that contains a Button Tool on Presentation Mode, users can interact with the button by clicking it with their mouse pointer (if using a desktop computer with a mouse) or by pressing on it (if using a touchscreen display device).
