import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const culturalLoreBlueprint: I_Blueprint = {
  _id: "culturalLore",
  order: 525,
  namePlural: "Cultural Lore",
  nameSingular: "Cultural Lore",
  icon: "fas fa-archway",
  category: "Story/Lore",
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
      icon: "fas fa-archway",
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
        connectedObjectType: "culturalLore"
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
      id: "loreType",
      name: "Lore Type",
      type: "singleSelect",
      icon: "fas fa-archway",
      sizing: 4,
      predefinedSelectValues: [
        "Myth",
        "Legend",
        "Tradition",
        "Ritual",
        "Belief",
        "Superstition",
        "Prophecy",
        "History"
      ]
    },
    {
      id: "relatedKingdom",
      name: "Related Kingdom",
      type: "singleToNoneRelationship",
      icon: "mdi-castle",
      sizing: 4,
      tooltip: "The kingdom this cultural lore originates from or belongs to.",
      relationshipSettings: {
        connectedObjectType: "kingdom"
      }
    },
    {
      id: "relatedCulture",
      name: "Related Culture",
      type: "singleToNoneRelationship",
      icon: "fas fa-archway",
      sizing: 4,
      tooltip: "The culture or cultural group that holds this lore.",
      relationshipSettings: {
        connectedObjectType: "culture"
      }
    },
    {
      id: "description",
      name: "Description",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12,
      tooltip: "The full text and details of this cultural lore."
    },
    {
      id: "culturalSignificance",
      name: "Cultural Significance",
      type: "wysiwyg",
      icon: "fas fa-archway",
      sizing: 12,
      tooltip: "What this lore means to the culture and why it is important."
    },
    {
      id: "practicesRituals",
      name: "Practices & Rituals",
      type: "wysiwyg",
      icon: "mdi-candle",
      sizing: 12,
      tooltip: "Any rituals, ceremonies, or practices associated with this cultural lore."
    },
    {
      id: "influencesGameplay",
      name: "Influences on Gameplay",
      type: "wysiwyg",
      icon: "mdi-controller-classic-outline",
      sizing: 12,
      tooltip: "How this cultural lore affects gameplay mechanics, quests, or world interactions."
    },
    {
      id: "variations",
      name: "Variations",
      type: "wysiwyg",
      icon: "mdi-shuffle-variant",
      sizing: 12,
      tooltip: "Different regional or cultural variations of this lore."
    },
    {
      id: "playerDiscoverability",
      name: "Player Discoverability",
      type: "wysiwyg",
      icon: "mdi-magnify",
      sizing: 12,
      tooltip: "How and where players can discover this cultural lore in the game."
    },
    {
      id: "breakConnections",
      name: "Connections",
      type: "break",
      sizing: 12
    },
    {
      id: "historicalBasis",
      name: "Historical Basis",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      tooltip: "Historical events that this cultural lore is based on or derived from.",
      relationshipSettings: {
        connectedObjectType: "historicalEvent",
        connectedField: "relatedLore"
      }
    },
    {
      id: "keyFigures",
      name: "Key Figures",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      tooltip: "Important characters or figures central to this cultural lore.",
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedCulturalLore"
      }
    },
    {
      id: "relatedLocations",
      name: "Related Locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      tooltip: "Locations that are significant to this cultural lore.",
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedCulturalLore"
      }
    },
    {
      id: "relatedQuests",
      name: "Related Quests",
      type: "manyToManyRelationship",
      icon: "mdi-flag-checkered",
      sizing: 6,
      tooltip: "Quests that involve or are connected to this cultural lore.",
      relationshipSettings: {
        connectedObjectType: "quest",
        connectedField: "pairedCulturalLore"
      }
    },
    {
      id: "relatedMagic",
      name: "Related Magic",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 6,
      tooltip: "Schools of magic or magical traditions connected to this cultural lore.",
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "pairedCulturalLore"
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
