import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const enemyTypesBlueprint: I_Blueprint = {
  _id: "enemyTypes",
  order: 380,
  namePlural: "Enemy Types",
  nameSingular: "Enemy Type",
  icon: "mdi-skull",
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
      icon: "mdi-skull",
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
        connectedObjectType: "enemyTypes"
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
      id: "enemyCategory",
      name: "Enemy Category",
      type: "singleSelect",
      icon: "fas fa-dragon",
      sizing: 4,
      predefinedSelectValues: [
        "Humanoid",
        "Beast",
        "Magical",
        "Undead",
        "Demonic",
        "Elemental",
        "Other"
      ]
    },
    {
      id: "magicWeakness",
      name: "Magic Weakness",
      type: "singleSelect",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      tooltip: "The type of magic this enemy is most vulnerable to.",
      predefinedSelectValues: [
        "Fire",
        "Water",
        "Earth",
        "Air",
        "Weather",
        "Nature",
        "Spirit",
        "None"
      ]
    },
    {
      id: "isBoss",
      name: "Is a Boss",
      type: "switch",
      icon: "mdi-crown",
      sizing: 2,
      tooltip: "Toggle on if this enemy type is a boss encounter."
    },
    {
      id: "healthPoints",
      name: "Health Points",
      type: "number",
      icon: "mdi-heart",
      sizing: 2
    },
    {
      id: "strengthStat",
      name: "Strength",
      type: "number",
      icon: "mdi-arm-flex",
      sizing: 2
    },
    {
      id: "speedStat",
      name: "Speed",
      type: "number",
      icon: "mdi-run-fast",
      sizing: 2
    },
    {
      id: "magicResistance",
      name: "Magic Resistance",
      type: "number",
      icon: "fas fa-hat-wizard",
      sizing: 2
    },
    {
      id: "description",
      name: "Description & Lore",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12,
      tooltip: "Appearance, backstory, and lore for this enemy type."
    },
    {
      id: "combatStrategy",
      name: "Combat Strategy",
      type: "wysiwyg",
      icon: "mdi-sword-cross",
      sizing: 12,
      tooltip: "Tips and strategy notes for players encountering this enemy."
    },
    {
      id: "breakConnections",
      name: "Connections",
      type: "break",
      sizing: 12
    },
    {
      id: "behaviorPattern",
      name: "Behavior Pattern",
      type: "manyToManyRelationship",
      icon: "mdi-head-cog",
      sizing: 6,
      tooltip: "AI behavior patterns this enemy uses.",
      relationshipSettings: {
        connectedObjectType: "behaviorPatterns",
        connectedField: "enemyType"
      }
    },
    {
      id: "relatedLocations",
      name: "Found in Locations",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      tooltip: "Locations where this enemy type can be encountered.",
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "enemyEncounters"
      }
    },
    {
      id: "lootDrops",
      name: "Loot Drops",
      type: "manyToManyRelationship",
      icon: "mdi-sword",
      sizing: 6,
      tooltip: "Items that can drop from this enemy.",
      relationshipSettings: {
        connectedObjectType: "items",
        connectedField: "droppedByEnemies"
      }
    },
    {
      id: "relatedQuest",
      name: "Related Quest/Event",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 6,
      tooltip: "Quest(s) this enemy is specifically related to (e.g. boss of a quest).",
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "relatedEnemyTypes"
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
