# Front-End

The *front-end* of MoLöwe refers to all the pages that you see when you visit MoLöwe on your web browser ([**link**](https://moloewe.leuphana.de/login)).

The front-end allows users to access, create, and edit projects. Further, provided that a user has project edit rights, the front-end also allows
to upload new MoLöwe notebooks, upload files, and set up slides and screens.
Finally, if a user has presentation access rights, the front-end also allows users to start or view interactive presentations from different projects.

Users are assigned the required access rights by the administrator of MoLöwe.

The pages that constitute the front-end are described in this section.

## **1 Login Page**

Login page is where you log in to the MoLöwe system via your web browser.

![](/img/doc/01_login_page.png)

If you are using MoLöwe for the first time, this will be the first page that you encounter. This is also the page that you will see when you visit MoLöwe when you 
have not logged in yet.

:::caution

The user account and password protection feature in MoLöwe should not be considered a secured access and data stored there to be safe from unauthorized access and deletion. 
The user account system in MoLöwe is primarily in place to organize the access to different functions of it.

:::

## **2 Selection Page**

The user lands on this page when they have successfully logged in. On this page, the user can select between the **edit mode** and **presentation mode**.
The two modes are explained in the following chapters.

![](/img/doc/SelectionPage.png)

## **3 Edit Mode**

In the edit mode, a presentation/a project can be created, worked on, changed & up- or downloaded. This mode is necessary when planning and preparing a workshop.

### 3.1 Projects Page

This is the first page a user sees when they open edit mode. In this page, all projects associated with the user are listed.

![](/img/doc/02_projects_page.jpg)

You can click on the name of the project that you want to access. When you do so, you are presented with the details of the project. 

In this example, a project named "Font + Line Width Test" was selected.

![](/img/doc/04_project_details.jpg)

When you have selected a project, you can access the different sub-pages that belong to the project from which you can upload your custom notebook and files, 
and create slides. The different pages related to the selected project are discussed below.

### 3.2 Notebooks Page

This page lists the Jupyter Notebook associated with the selected project.

Users can upload a new notebook for their project using the "Import Notebook" button.

![](/img/doc/05_notebooks_page.jpg)

### 3.3 Files Page

This page lists all the files that have been uploaded to a project.

Users can upload a new file by using the "Import File" button.

![](/img/doc/06_files_page.jpg)

### 3.4 Slides Page

This page lists all the slides that have been created in a project. When a new project is created, an empty slide with the name "Slide 1" will automatically be created.

New slides can be created by pressing the "Create Slide" button.

Users can edit slide contents on this page.

![](/img/doc/07_slides_page.jpg)

### 3.5 Screens Page

This page lists all the screens that have been created in a project. 

When a new project is created, an empty slide with the name "Screen 1" will automatically be created. By default, Screen 1 has Slide 1 as its start slide.

![](/img/doc/08_screens_page.jpg)

### 3.6 Sessions Page

This page lists all the sessions that have been created during a presentation session of a project.

![](/img/doc/09_sessions_page.jpg)

### 3.7 Starting a Presentation

You can start presentation mode directly from edit mode by pressing on the button on the bottom-left part of the edit page.

![](/img/doc/10_start_presentation.jpg)

When this button is pressed, the presentation mode will open which allows users to start a presentation by selecting a project.

![](/img/doc/11_presentation_selection_page.jpg)

Of course, you can also start presentation mode from the selection page if you prefer.

## **4 Presentation Mode**

In this mode, a finished presentation can be presented and controlled.

There are four drop-down lists that need to be filled out.

![](/img/doc/PresentationPage.png)

### 4.1 Select project

This dropdown list contains all projects the user has access rights to and that are saved on the MoLöwe.

### 4.2 Select screen

This dropdown list shows all screens meaning all available 5 Monitors (for further clarification, see [**Glossary**](docs/06_glossary.md#screen)).

### 4.3 Presentation

In this dropdown menu, the user can choose if the selected screen should be in **Presentation** or **Controller** mode.

Presentation mode is selected for screens that are displayed to the audience.
Controller mode is selected for the moderators' tablet, where she/he can switch between the displayed slides.

:::info A presentation will not begin until the controller mode is started.
To begin a presentation, first start your presentation screens in presentation mode (the message "Please wait for the presentation to start" will appear)
and then start the controller screen (i.e. moderators' tablet) in controller mode.
:::info

### 4.4 From Start
This dropdown list may not be clickable everytime, since it needs a saved (previous) session.
If the presentation has not been presented yet or no earlier session was saved, then the presentation can only start from the start.
However, if there are old session that were saved (i.e. during a workshop at the end of a day) than the presentation can be started from that exact version.

To start the presentation, the user then clicks on the **Start** button after filling out all dropdown lists.

## **5 Logging Out of MoLöwe**

Users can log out from MoLöwe at any time by clicking on the icon on the top right of the pages in the front-end next to the user name.

![](/img/doc/9999_log_out.jpg)
