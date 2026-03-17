import { I_Blueprint } from "../../../interfaces/I_Blueprint"
export const npcSchedulesBlueprint: I_Blueprint = {
  _id: "npcSchedules",
  order: 395,
  namePlural: "NPC Schedules",
  nameSingular: "NPC Schedule",
  icon: "mdi-calendar-clock",
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
      icon: "mdi-calendar-clock",
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
        connectedObjectType: "npcSchedules"
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
      id: "npc",
      name: "NPC",
      type: "manyToManyRelationship",
      icon: "mdi-account",
      sizing: 6,
      tooltip: "The NPC(s) this schedule entry belongs to.",
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "npcSchedule"
      }
    },
    {
      id: "dayOfWeek",
      name: "Day of Week",
      type: "singleSelect",
      icon: "mdi-calendar-week",
      sizing: 3,
      predefinedSelectValues: [
        "Every Day",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Weekdays",
        "Weekends",
        "Other"
      ]
    },
    {
      id: "timeSlot",
      name: "Time of Day",
      type: "singleSelect",
      icon: "mdi-clock-outline",
      sizing: 3,
      predefinedSelectValues: [
        "Morning",
        "Noon",
        "Afternoon",
        "Evening",
        "Night",
        "Late Night"
      ]
    },
    {
      id: "location",
      name: "Location",
      type: "manyToManyRelationship",
      icon: "mdi-map-marker-radius",
      sizing: 6,
      tooltip: "Where the NPC is during this time slot.",
      relationshipSettings: {
        connectedObjectType: "locations",
        connectedField: "npcSchedules"
      }
    },
    {
      id: "interactingNPCs",
      name: "Interacting NPCs",
      type: "manyToManyRelationship",
      icon: "mdi-account-group",
      sizing: 6,
      tooltip: "Other NPCs the NPC interacts with during this time slot.",
      relationshipSettings: {
        connectedObjectType: "characters",
        connectedField: "scheduleInteractions"
      }
    },
    {
      id: "activity",
      name: "Activity",
      type: "wysiwyg",
      icon: "mdi-run",
      sizing: 12,
      tooltip: "What the NPC is doing during this time slot."
    },
    {
      id: "notes",
      name: "Notes",
      type: "wysiwyg",
      icon: "mdi-note-text-outline",
      sizing: 12,
      tooltip: "Special conditions or additional notes for this schedule entry."
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
