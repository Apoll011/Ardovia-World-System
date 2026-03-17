import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const districtBlueprint: I_Blueprint = {
  _id: "district",
  order: 510,
  namePlural: "Districts",
  nameSingular: "District",
  icon: "mdi-map-marker-multiple",
  category: "World",
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
      icon: "mdi-map-marker-multiple",
      sizing: 3
    },
    {
      id: "parentDoc",
      name: "Belongs under",
      type: "singleToNoneRelationship",
      tooltip:
        `This field is used to build up custom hierarchical tree structure in the main list of items in the left side of the app.
        <br> You can use this for an infinite amount of sub-levels to the hierarchical structure.
        `,
      sizing: 3,
      relationshipSettings: {
        connectedObjectType: "district"
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
        A document with minor document mode toggled on will not show in any other relationship searches.
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
        `,
      sizing: 8
    },
    {
      id: "docTemplate",
      name: "Document Template",
      type: "documentTemplate",
      icon: "mdi-script-text-outline",
      tooltip:
        `
        Document templates are used to determine which fields will the current
        <br>
        document show both in view and edit mode.
        `,
      sizing: 4
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
    {
      id: "categoryDescription",
      name: "Category description",
      type: "wysiwyg",
      icon: "mdi-folder-edit-outline",
      sizing: 12
    },
    {
      id: "breakBasic",
      name: "Basic information",
      type: "break",
      sizing: 12
    },
    {
      id: "city",
      name: "City",
      type: "manyToSingleRelationship",
      icon: "mdi-city",
      sizing: 6,
      tooltip: "The city this district is part of.",
      relationshipSettings: {
        connectedObjectType: "city",
        connectedField: "districts"
      }
    },
    {
      id: "purpose",
      name: "Purpose/Type",
      type: "singleSelect",
      icon: "mdi-map-marker-multiple",
      sizing: 6,
      tooltip: "The primary function or character of this district.",
      predefinedSelectValues: [
        "Residential",
        "Commercial",
        "Industrial",
        "Military",
        "Noble",
        "Poor",
        "Harbor",
        "Scholarly",
        "Sacred",
        "Entertainment"
      ]
    },
    {
      id: "description",
      name: "Description",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12,
      tooltip: "A detailed description of this district - its buildings, streets, and general feel."
    },
    {
      id: "atmosphere",
      name: "Atmosphere",
      type: "wysiwyg",
      icon: "mdi-weather-fog",
      sizing: 12,
      tooltip: "The overall mood, sensory details, and atmosphere of this district."
    },
    {
      id: "environmentalHazards",
      name: "Environmental Hazards",
      type: "wysiwyg",
      icon: "mdi-alert-outline",
      sizing: 12,
      tooltip: "Any dangers, hazards, or risks present in this district."
    },
    {
      id: "lore",
      name: "Lore",
      type: "wysiwyg",
      icon: "mdi-script-text-outline",
      sizing: 12,
      tooltip: "History, legends, and lore associated with this district."
    },
    {
      id: "breakConnections",
      name: "Connections",
      type: "break",
      sizing: 12
    },
    {
      id: "locations",
      name: "Locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      tooltip: "Specific locations found within this district.",
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedDistricts"
      }
    },
    {
      id: "npcsLivingHere",
      name: "Characters/NPCs Living Here",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      tooltip: "Characters and NPCs who reside in this district.",
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedDistricts"
      }
    },
    {
      id: "connectedDistricts",
      name: "Connected Districts",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-multiple",
      sizing: 6,
      tooltip: "Neighboring or connected districts.",
      relationshipSettings: {
        connectedObjectType: "district",
        connectedField: "connectedDistricts"
      }
    },
    {
      id: "breakSpoilers",
      name: "Secrets/Spoilers/DM notes",
      type: "break",
      sizing: 12,
      isSpoiler: true
    },
    {
      id: "spoilerNotes",
      name: "Secrets/Spoilers/DM notes",
      type: "wysiwyg",
      icon: "fas fa-mask",
      sizing: 12,
      isSpoiler: true,
      tooltip:
        `This field will not export by default when using the Export document functionality.
        <br>
        Instead it needs to be manually included if the user wishes to export it.
        `
    }
  ]
}
