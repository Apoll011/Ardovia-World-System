import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const questBlueprint: I_Blueprint = {
  _id: "quest",
  order: 515,
  namePlural: "Quests",
  nameSingular: "Quest",
  icon: "mdi-flag-checkered",
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
      icon: "mdi-flag-checkered",
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
        connectedObjectType: "quest"
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
      id: "questType",
      name: "Quest Type",
      type: "singleSelect",
      icon: "mdi-flag-checkered",
      sizing: 3,
      predefinedSelectValues: [
        "Main",
        "Side",
        "Companion",
        "Training",
        "Bounty",
        "Repeatable"
      ]
    },
    {
      id: "difficultyLevel",
      name: "Difficulty Level",
      type: "singleSelect",
      icon: "mdi-skull-crossbones",
      sizing: 3,
      predefinedSelectValues: [
        "Easy",
        "Medium",
        "Hard",
        "Legendary"
      ]
    },
    {
      id: "isMainQuest",
      name: "Is Main Quest",
      type: "switch",
      icon: "mdi-star-outline",
      sizing: 3,
      tooltip: "Toggle on if this is a critical main story quest."
    },
    {
      id: "questGiver",
      name: "Quest Giver",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      tooltip: "The character(s) who assign this quest to the player.",
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedGivenQuests"
      }
    },
    {
      id: "relatedAct",
      name: "Related Chapter/Act",
      type: "manyToManyRelationship",
      icon: "mdi-file-outline",
      sizing: 6,
      tooltip: "The chapter or act of the story this quest belongs to.",
      relationshipSettings: {
        connectedObjectType: "chapters",
        connectedField: "pairedQuests"
      }
    },
    {
      id: "relatedStoryBeat",
      name: "Related Story Beat",
      type: "manyToManyRelationship",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 6,
      tooltip: "Story beats that this quest is tied to.",
      relationshipSettings: {
        connectedObjectType: "storyBeats",
        connectedField: "pairedQuests"
      }
    },
    {
      id: "description",
      name: "Description",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12,
      tooltip: "The narrative description of this quest - its story, context, and what the player must do."
    },
    {
      id: "objectives",
      name: "Objectives",
      type: "list",
      icon: "mdi-checkbox-marked-circle-outline",
      sizing: 12,
      tooltip: "The individual objectives the player must complete for this quest."
    },
    {
      id: "prerequisites",
      name: "Prerequisites",
      type: "wysiwyg",
      icon: "mdi-lock-outline",
      sizing: 12,
      tooltip: "Conditions that must be met before this quest becomes available."
    },
    {
      id: "rewards",
      name: "Rewards",
      type: "wysiwyg",
      icon: "mdi-gift-outline",
      sizing: 12,
      tooltip: "What the player receives upon successful completion of this quest."
    },
    {
      id: "consequencesSuccess",
      name: "Consequences (Success)",
      type: "wysiwyg",
      icon: "mdi-check-circle-outline",
      sizing: 6,
      tooltip: "What changes in the world if the player succeeds at this quest."
    },
    {
      id: "consequencesFail",
      name: "Consequences (Failure)",
      type: "wysiwyg",
      icon: "mdi-close-circle-outline",
      sizing: 6,
      tooltip: "What happens if the player fails or abandons this quest."
    },
    {
      id: "breakConnections",
      name: "Connections",
      type: "break",
      sizing: 12
    },
    {
      id: "relatedLocations",
      name: "Related Locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      tooltip: "Locations that are relevant to this quest.",
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "pairedQuests"
      }
    },
    {
      id: "relatedNPCs",
      name: "Related Characters/NPCs",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      tooltip: "Characters and NPCs involved in this quest.",
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "pairedQuests"
      }
    },
    {
      id: "enemyEncounters",
      name: "Enemy Encounters",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      tooltip: "Enemy types the player will encounter during this quest.",
      relationshipSettings: {
        connectedObjectType: "enemyTypes",
        connectedField: "pairedQuests"
      }
    },
    {
      id: "requiredSkills",
      name: "Required Skills/Spells",
      type: "manyToManyRelationship",
      icon: "mdi-sword-cross",
      sizing: 6,
      tooltip: "Skills or spells needed to complete certain parts of this quest.",
      relationshipSettings: {
        connectedObjectType: "skills",
        connectedField: "relatedQuest"
      }
    },
    {
      id: "requiredItems",
      name: "Required Items",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      tooltip: "Items the player needs to have or collect for this quest.",
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "pairedQuests"
      }
    },
    {
      id: "followUpQuests",
      name: "Follow-up Quests",
      type: "manyToManyRelationship",
      icon: "mdi-flag-checkered",
      sizing: 6,
      tooltip: "Quests that become available or are triggered after completing this quest.",
      relationshipSettings: {
        connectedObjectType: "quest",
        connectedField: "previousQuests"
      }
    },
    {
      id: "previousQuests",
      name: "Previous Quests (Prerequisites)",
      type: "manyToManyRelationship",
      icon: "mdi-flag-checkered",
      sizing: 6,
      tooltip: "Quests that must be completed before this quest becomes available.",
      relationshipSettings: {
        connectedObjectType: "quest",
        connectedField: "followUpQuests"
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
