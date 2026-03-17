import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const spellsBlueprint: I_Blueprint = {
  _id: "spells",
  order: 255,
  namePlural: "Spells/Abilities",
  nameSingular: "Spell/Ability",
  icon: "fas fa-magic",
  category: "Groups/Teachings",
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
      icon: "fas fa-magic",
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
        connectedObjectType: "spells"
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
      id: "ardovianName",
      name: "Ardovian Incantation",
      type: "text",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      tooltip: "The magical incantation used to cast this spell in the Ardovian tongue (e.g. \"Womewt ik by tfe kimw\")."
    },
    {
      id: "magicClass",
      name: "Magic Class",
      type: "manyToManyRelationship",
      icon: "fas fa-hat-wizard",
      sizing: 4,
      tooltip: "The magic class(es) this spell belongs to.",
      relationshipSettings: {
        connectedObjectType: "magic",
        connectedField: "spellsInClass"
      }
    },
    {
      id: "rangeType",
      name: "Range Type",
      type: "singleSelect",
      icon: "mdi-arrow-expand-all",
      sizing: 4,
      predefinedSelectValues: [
        "Melee",
        "Ranged",
        "Area of Effect",
        "Self",
        "Touch",
        "Other"
      ]
    },
    {
      id: "manaCost",
      name: "Mana Cost",
      type: "number",
      icon: "mdi-water",
      sizing: 2,
      tooltip: "Mana points required to cast this spell."
    },
    {
      id: "cooldownSeconds",
      name: "Cooldown (seconds)",
      type: "number",
      icon: "mdi-timer-outline",
      sizing: 2,
      tooltip: "Seconds that must pass before the spell can be cast again."
    },
    {
      id: "damageAmount",
      name: "Damage",
      type: "number",
      icon: "mdi-sword",
      sizing: 2,
      tooltip: "Base damage dealt by this spell (leave empty for non-offensive spells)."
    },
    {
      id: "healAmount",
      name: "Heal Amount",
      type: "number",
      icon: "mdi-heart-plus",
      sizing: 2,
      tooltip: "Amount healed by this spell (leave empty for non-healing spells)."
    },
    {
      id: "description",
      name: "Description",
      type: "wysiwyg",
      icon: "mdi-book-open-page-variant-outline",
      sizing: 12,
      tooltip: "What the spell does, its visual effect, and any mechanical details."
    },
    {
      id: "unlockCondition",
      name: "Unlock Condition",
      type: "wysiwyg",
      icon: "mdi-lock-open-variant-outline",
      sizing: 12,
      tooltip: "How the player learns or acquires this spell."
    },
    {
      id: "breakConnections",
      name: "Connections",
      type: "break",
      sizing: 12
    },
    {
      id: "teachingNPC",
      name: "Teaching NPC",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 4,
      tooltip: "NPC(s) who can teach the player this spell.",
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "taughtSpells"
      }
    },
    {
      id: "relatedQuest",
      name: "Related Quest/Event",
      type: "manyToManyRelationship",
      icon: "mdi-calendar-text",
      sizing: 4,
      tooltip: "Quest(s) or event(s) that teach or reward this spell.",
      relationshipSettings: {
        connectedObjectType: "events",
        connectedField: "rewardedSpells"
      }
    },
    {
      id: "usedInInteractions",
      name: "Used in Environmental Interactions",
      type: "manyToManyRelationship",
      icon: "mdi-puzzle-outline",
      sizing: 4,
      tooltip: "Environmental interactions that require this specific spell.",
      relationshipSettings: {
        connectedObjectType: "environmentalInteractions",
        connectedField: "requiredSpell"
      }
    },
    {
      id: "environmentalPuzzleUses",
      name: "Environmental & Puzzle Uses",
      type: "wysiwyg",
      icon: "mdi-puzzle-outline",
      sizing: 12,
      tooltip: "How this spell can interact with the environment or solve puzzles."
    },
    {
      id: "combatTips",
      name: "Combat Tips",
      type: "wysiwyg",
      icon: "mdi-sword-cross",
      sizing: 12,
      tooltip: "Strategy notes for using this spell effectively in combat."
    },
    {
      id: "animationNotes",
      name: "Animation/VFX Notes",
      type: "wysiwyg",
      icon: "mdi-movie-play-outline",
      sizing: 12,
      tooltip: "Visual effects and animation reference for this spell."
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
