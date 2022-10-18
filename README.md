# Role Playing Game Manager Obsidian Plugin

> RPG Manager is a tool to simplify the plot, run and track of role playing game campaigns, 
> helping storytellers to be plot better campaigns in less time.

Obsidian Role Playing Game Manager is an Obsidian plugin that helps you plot and manage your tabletop role playing game 
campaigns. The plugin revolves around three main types of components: 
- **Plotting** (_when you plan your campaign_)
- **Running** (_when you run play campaign_)
- **Elements** (_the npcs, locations, etc... present in your plots_)

RPG Manager helps you creating the plot of a campaign, organising and referencing elements where they are used.

The **goal** of RPG Manager is to lower the time needed to write a plot and to increase the quality of the sessions you 
run for your players.

> If you are new to RPG Manager, I would suggest you to [read the documentation](documentation/index.md), also referred
> as _RTFM_

Creating a new RPG Manager `component` is as easy as opening the **Obsidian Commands** and look for the RPG Manager 
options to create a new `components` or add the frontmatter and codeblocks to an existing note. You can also use the 
ribbon icon to open a handy tool.

## Creating new components

To create new plots and elements, you just need to open the Obsidian Command pane and search for the RPG Manager 
options. For each type of plot or element you will find two options:
- Create
- Fill

When you **create** a new plot or element, RPG Manager will create a new obsidian note. If you **fill** a pre-existing 
note, RPG Manager will add required information to the currently open note.

In either cases, a guided form will help you creating your new plot or element and will fill all the relevant 
frontmatter information and codeblocks.

You can also create new components from the RPG Manager view reachable from the d20 ribbon icon.

New components can be created as an empty shell with only the frontmatter and codeblocks, using a default template 
(_default option_), or using your own templates. To use your own templates you must identify the folder that contains
your templates and select the corresponding template during the component creation. The frontmatter of your template
will be merged with the frontmatter generated by RPG Manager, while the content of your notes will be added after the 
first codeblock of the component.

## Code Blocks

Every component uses one or more RpgManager codeblocks, which are automatically added to the notes to dynamically 
display the information and relationship for the current note. For details on codeblocks and their options, please 
refer to the [data codeblock documentation](documentation/data/index.md) and the 
[codeblock documentation](documentation/views/index.md).

There is one additional hidden codeblock at the end of each Obsidian Note, the `RpgManagerID` which is used to identify
a note as a `component`. Please **DO NOT EDIT OR DELETE IT**.

## Plot Structures

RPG Manager allows the use of two specific plot structures to simplify the plotting of 
[campaigns](documentation/components/campaign.md), [adventures](documentation/components/adventure.md) and 
[acts](documentation/components/act.md). These are the [ABT](documentation/plots/abt.md) and the
[Story Circle](documentation/plots/storycircle.md). These two supports to writing plots are available by switching on 
the functionality in the settings of RPG Manager.

## Scene Analyser

From `v3.0`, RPG Manager comes with a tool called [Scene Analyser](documentation/analyser/index.md). This is a tool 
that analyses the scene you wrote and creates a report on your [acts](documentation/components/act.md) and 
[sessions](documentation/components/session.md). This report tells you if there are problems with the group of scenes 
making up an act or a scene and is an important tool to provide feedback you can use to tweak your sessions to make 
them more balanced. The Analyser keep into consideration the duration of your past scenes during runtime thanks to a 
timer, and estimate the running time of an act or a session when you create their scenes.

## Video Tutorials

- [Installing RPG Manager](https://www.youtube.com/watch?v=QGIbNNhL8so&list=PLAO6liEcd6-0iJXIKznSfkBenDxgmFR2h)

## Tutorials and Help (from version 2)

- [Watch a tutorial on how to use RPG Manager](https://youtu.be/NLvzfOWI4aE)
- [Watch an example of world building and campaign creation](https://youtu.be/die8QGKtk5A)

## Templates

RPG Manager comes with the ability to create plots and elements with specific templates. The plugin comes with some 
intermal templates, but you can specify your own templates when you create a new plot or element.

To use custom templates, please open RPG Manager Settings in Obsidian and specify the folder where your templates 
reside. Your templates can contain both frontmatter and content. Please note, the frontmatter MUST be a valid 
frontmatter for the template to work. The frontmatter in the template will be merged with the frontmatter generated by 
RPG Manager, while the content of the template will be placed between or after the RPG Manager codeblocks.

## Contributors

My most humble thanks go to everyone who is helping RPG Manager becoming a better plugin.

<a href="https://github.com/sigrunixia">
  <img src="https://github.com/sigrunixia.png?size=50">
</a>
<a href="https://github.com/SlRvb">
  <img src="https://github.com/SlRvb.png?size=50">
</a>
<a href="https://github.com/x1101">
  <img src="https://github.com/x1101.png?size=50">
</a>

[We are always looking for help. Join us!](https://github.com/carlonicora/obsidian-rpg-manager/issues/151)
