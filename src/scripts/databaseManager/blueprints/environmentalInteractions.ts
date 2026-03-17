import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const environmentalInteractionsBlueprint: I_Blueprint = {
  _id: "environmentalInteractions",
  order: 390,
  namePlural: "Environmental Interactions",
  nameSingular: "Environmental Interaction",
  icon: "mdi-puzzle-outline",
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
      icon: "mdi-puzzle-outline",
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
        connectedObjectType: "environmentalInteractions"
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
        A document with dead/gone/destroyed mode toggled on will have a crossed-over text modifier applied to it.
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
      id: "interactionType",
      name: "Interaction Type",
      type: "singleSelect",
      icon: "mdi-gesture-tap",
      sizing: 4,
      predefinedSelectValues: [
        "Puzzle",
        "Destructible",
        "Lever",
        "Pressure Plate",
        "Door",
        "Secret Passage",
        "Treasure Chest",
        "Trap",
        "Other"
      ]
    },
    {
      id: "difficultyLevel",
      name: "Difficulty Level",
      type: "singleSelect",
      icon: "mdi-gauge",
      sizing: 4,
      predefinedSelectValues: [
        "Easy",
        "Medium",
        "Hard",
        "Legendary"
      ]
    },
    {
      id: "location",
      name: "Location",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 4,
      tooltip: "Location(s) where this interaction exists.",
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "environmentalInteractions"
      }
    },
    {
      id: "description",
      name: "Description",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12,
      tooltip: "What the player sees and the context of this interaction."
    },
    {
      id: "interactionSequence",
      name: "Interaction Sequence",
      type: "wysiwyg",
      icon: "mdi-format-list-numbered",
      sizing: 12,
      tooltip: "Step-by-step guide on how the player interacts with this object."
    },
    {
      id: "breakRequirements",
      name: "Requirements",
      type: "break",
      sizing: 12
    },
    {
      id: "requiredItem",
      name: "Required Item",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 4,
      tooltip: "Item(s) needed to complete this interaction.",
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "usedInInteractions"
      }
    },
    {
      id: "requiredSpell",
      name: "Required Spell",
      type: "manyToManyRelationship",
      icon: "fas fa-magic",
      sizing: 4,
      tooltip: "Spell(s) required to solve or trigger this interaction.",
      relationshipSettings: {
        connectedObjectType: "spells",
        connectedField: "usedInInteractions"
      }
    },
    {
      id: "requiredMagicClass",
      name: "Required Magic Class",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      tooltip: "Magic class(es) needed (e.g. Air Magic for camouflage, Fire Magic for a torch puzzle).",
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "usedInInteractions"
      }
    },
    {
      id: "breakOutcome",
      name: "Outcome",
      type: "break",
      sizing: 12
    },
    {
      id: "rewards",
      name: "Rewards",
      type: "wysiwyg",
      icon: "mdi-treasure-chest",
      sizing: 12,
      tooltip: "What the player receives for solving or completing this interaction."
    },
    {
      id: "relatedQuest",
      name: "Related Quest/Event",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      tooltip: "Quest(s) or event(s) tied to this interaction.",
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "environmentalInteractions"
      }
    },
    {
      id: "relatedStoryBeat",
      name: "Related Story Beat",
      type: "manyToManyRelationship",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 6,
      tooltip: "Story beat(s) associated with this interaction.",
      relationshipSettings: {
        connectedObjectType: "storyBeats",
        connectedField: "environmentalInteractions"
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
      id: "puzzleSolution",
      name: "Puzzle Solution (Designer Reference)",
      type: "wysiwyg",
      icon: "mdi-key-variant",
      sizing: 12,
      isSpoiler: true,
      tooltip:
        `Full solution details for designer reference only.
        <br>
        This field will not export by default when using the Export document functionality.
        `
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
