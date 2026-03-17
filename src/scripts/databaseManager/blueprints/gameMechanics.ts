import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const gameMechanicsBlueprint: I_Blueprint = {
  _id: "gameMechanics",
  order: 44,
  nameSingular: "Mechanic/Ability",
  namePlural: "Game Mechanics & Abilities",
  icon: "mdi-sword-cross",
  category: "Gameplay",
  extraFields: [
    {
      id: "breakDocumentSettings",
      name: "Document settings",
      type: "break",
      sizing: 12
    },
    {
      id: "name",
      name: "Name",
      type: "text",
      icon: "mdi-sword-cross",
      sizing: 3
    },
    {
      id: "parentDoc",
      name: "Belongs under",
      type: "singleToNoneRelationship",
      tooltip:
        `This field is used to build up custom hierarchical tree structure in the main list of items in the left side of the app.
        <br> You can use this for an infinite amount of sub-levels to the hierarchical structure.
        <br> An example would be multiple sub-groups (provinces) of Roman Empire belonging under the main political group called "Roman Empire".
        `,
      sizing: 3,
      relationshipSettings: {
        connectedObjectType: "gameMechanics"
      }
    },
    {
      id: "documentColor",
      name: "Text color",
      type: "colorPicker",
      icon: "mdi-eyedropper",
      tooltip:
        `This field allows for custom-coloring your document to any available HEX or RBG color.
        <br>The selected color will show on the icon and name of the document both in the hierarchical tree on the left and in the top tabs.
        `,
      sizing: 2
    },
    {
      id: "documentBackgroundColor",
      name: "Background color",
      type: "colorPicker",
      icon: "mdi-format-color-fill",
      tooltip:
        `This field allows for custom-coloring your document to any available HEX or RBG color.
        <br>The selected color will show as a background both in the hierarchical tree on the left and in the top tabs.
        `,
      sizing: 2
    },
    {
      id: "finishedSwitch",
      name: "Is finished",
      type: "switch",
      icon: "mdi-check-bold",
      tooltip:
        `This setting allows for setting the current document to finished document mode.
        <br>
        A document with finished document mode toggled on will not show any un-filled fields in view mode and will function as if "Hide empty fields" was turned on in the settings.
        `,
      sizing: 2
    },
    {
      id: "minorSwitch",
      name: "Is a minor document",
      type: "switch",
      icon: "mdi-magnify-minus-outline",
      tooltip:
        `This setting allows for setting the current document to minor document mode.
        <br>
        A document with minor document mode toggled on will not show in any other relationship searches.<br>
        The idea behind this setting is to allow for creation of documents that will not clutter the search, but could be theoretically relevant in some very specific cases to the story (eg: distant relatives of a character).
        `,
      sizing: 3
    },
    {
      id: "deadSwitch",
      name: "Is Dead/Gone/Destroyed",
      type: "switch",
      icon: "mdi-skull-crossbones",
      tooltip:
        `This setting allows for setting the current document to dead/gone/destroyed mode.
        <br>
        A document with dead/gone/destroyed mode toggled on will have a crossed-over text modifier applied to it - showing that it is no longer a part of the current timeline.
        `,
      sizing: 3
    },
    {
      id: "categorySwitch",
      name: "Is a category",
      type: "switch",
      icon: "fas fa-folder-open",
      tooltip:
        `This setting allows for setting the current document to category mode.
        <br>
        A document with category mode toggled on will have most of its fields hidden and will not show in any other relationship searches except for "Belongs under".
        `,
      sizing: 3
    },
    {
      id: "order",
      name: "Order number",
      type: "number",
      icon: "mdi-file-tree",
      tooltip:
        `In case the default sorting via alphabet in the hierarchical tree on the left is inadequate for your needs, this field allows you to fill custom numbers to order by that get placed before the default alphabetical order.
        <br>It is heavily suggested to "pad-out" the custom order numbers by writing for example 100 (or least 10) instead of 1.
        <br>This allows for extra "padding" between the items in case a new one needs to be added in the middle without needing to redo the custom order on all documents.
        `,
      sizing: 3
    },
    {
      id: "tags",
      name: "Tags",
      type: "tags",
      icon: "mdi-tag",
      tooltip:
        `Tags are used to sort the same (or even different) document types into a custom groups based on your needs.
        <br>
        A document may have any number of tags, but each tag can be present only once.
        <br>
        This limitation also applies to any variation of lower or upper case iterations of the same tag.
        <br>
        Example: A tag called "Player Party" will be considered the same tag as "player party", "PlAyER PaRtY" or anything similar.
        `,
      sizing: 8
    },
    {
      id: "extraClasses",
      name: "Extra HTML classes",
      type: "text",
      icon: "mdi-language-css3",
      tooltip:
        `This field exists for advanced usage by power-users who wish to style their document with globally defined CSS classes.
        <br>
        Settings are found inside "Project->Advanced project tools->Custom CSS".
        `,
      sizing: 12
    },
    {
      id: "otherNames",
      name: "Other Names & Epithets",
      type: "list",
      icon: "mdi-book-plus",
      sizing: 12
    },

    { id: "breakMechanicInfo", name: "Mechanic Information", type: "break", sizing: 12 },
    {
      id: "mechanicType",
      name: "Type",
      type: "singleSelect",
      sizing: 6,
      predefinedSelectValues: ["Combat Mechanic", "Movement Ability", "Magic Ability", "Passive", "Active", "Ultimate", "System Rule", "UI/HUD Element"]
    },
    {
      id: "magicClass",
      name: "Magic Class",
      type: "singleSelect",
      sizing: 6,
      predefinedSelectValues: ["None", "Fire", "Water", "Earth", "Air", "Weather", "Nature", "Spirit", "Normal"]
    },
    { id: "description", name: "Description", type: "wysiwyg", sizing: 12 },
    { id: "howToUse", name: "How to Use / Controls", type: "wysiwyg", sizing: 12 },

    { id: "breakGameData", name: "Game Data", type: "break", sizing: 12 },
    { id: "cooldown", name: "Cooldown / Cost", type: "text", sizing: 6 },
    { id: "unlockCondition", name: "Unlock Condition", type: "text", sizing: 6 },
    {
      id: "connectedCharacters",
      name: "Characters Who Use This",
      type: "manyToNoneRelationship",
      sizing: 6,
      relationshipSettings: { connectedObjectType: "characters" }
    },
    {
      id: "connectedSpells",
      name: "Related Spells",
      type: "manyToNoneRelationship",
      sizing: 6,
      relationshipSettings: { connectedObjectType: "magic" }
    },

    { id: "breakNotes", name: "Notes", type: "break", sizing: 12 },
    { id: "designNotes", name: "Design Notes", type: "wysiwyg", sizing: 12 },
    { id: "docTemplate", name: "Document Template", type: "documentTemplate", sizing: 12 }
  ]
}
