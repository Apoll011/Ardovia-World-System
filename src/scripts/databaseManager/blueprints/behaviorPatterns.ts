import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const behaviorPatternsBlueprint: I_Blueprint = {
  _id: "behaviorPatterns",
  order: 47,
  namePlural: "Behavior Patterns",
  nameSingular: "Behavior Pattern",
  icon: "mdi-head-cog",
  category: "Characters",
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
      icon: "mdi-head-cog",
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
        connectedObjectType: "behaviorPatterns"
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
      id: "enemyType",
      name: "Enemy Type",
      type: "manyToManyRelationship",
      icon: "mdi-skull",
      sizing: 6,
      tooltip: "The enemy type(s) that use this behavior pattern.",
      relationshipSettings: {
        connectedObjectType: "enemyTypes",
        connectedField: "behaviorPattern"
      }
    },
    {
      id: "durationSeconds",
      name: "Duration (seconds)",
      type: "number",
      icon: "mdi-timer-outline",
      sizing: 3,
      tooltip: "How long this behavior state lasts before transitioning."
    },
    {
      id: "nextBehavior",
      name: "Next Behavior",
      type: "singleToNoneRelationship",
      icon: "mdi-arrow-right-circle-outline",
      sizing: 3,
      tooltip: "The behavior pattern that follows this one.",
      relationshipSettings: {
        connectedObjectType: "behaviorPatterns"
      }
    },
    {
      id: "triggerCondition",
      name: "Trigger Condition",
      type: "wysiwyg",
      icon: "mdi-lightning-bolt",
      sizing: 12,
      tooltip: "What event or condition causes the enemy to enter this behavior state."
    },
    {
      id: "actions",
      name: "Actions",
      type: "wysiwyg",
      icon: "mdi-play-circle-outline",
      sizing: 12,
      tooltip: "What the enemy does while in this behavior state."
    },
    {
      id: "relatedDialogue",
      name: "Sound Effects & Dialogue",
      type: "wysiwyg",
      icon: "mdi-volume-high",
      sizing: 12,
      tooltip: "Sound effects and lines the enemy vocalizes during this behavior."
    },
    {
      id: "playerCounterStrategy",
      name: "Player Counter Strategy",
      type: "wysiwyg",
      icon: "mdi-shield-sword-outline",
      sizing: 12,
      tooltip: "How the player can counter or exploit this behavior pattern."
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
