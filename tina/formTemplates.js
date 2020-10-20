export const universalFields = [
  {
    name: "name",
    component: "text",
  },
  {
    name: "label",
    component: "text",
  },
  {
    name: "required",
    label: "Required?",
    component: "toggle",
  },
]

export const textField = {
  label: "Text Field",
  key: "text-field",
  fields: [
    universalFields,
    {
      label: "Minimum Length",
      name: "min",
      component: "number",
    },
    {
      label: "Maximum Length",
      name: "max",
      component: "number",
    },
  ],
}

export const textArea = {
  label: "Text Area",
  key: "text-area",
  fields: [
    universalFields,
    {
      label: "Minimum Length",
      name: "min",
      component: "number",
    },
    {
      label: "Maximum Length",
      name: "max",
      component: "number",
    },
  ],
}

export const selectField = {
  label: "Select",
  key: "select-field",
  fields: [
    universalFields,
    {
      name: "options",
      component: "group-list",
      fields: [
        {
          name: "singleOption",
          label: "Option",
          component: "text",
        },
      ],
    },
  ],
}

export const radioField = {
  label: "Radio Buttons",
  key: "radio-field",
  fields: [
    universalFields,
    {
      name: "options",
      component: "group-list",
      fields: [
        {
          name: "singleOption",
          label: "Option",
          component: "text",
        },
      ],
    },
  ],
}

export const checkBoxes = {
  label: "Checkboxes",
  key: "checkboxes",
  fields: [
    universalFields,
    {
      name: "boxes",
      component: "group-list",
      fields: [
        {
          name: "box",
          label: "Box label",
          component: "text",
        },
      ],
    },
  ],
}

export const consent = {
  label: "Consent",
  key: "consent",
  fields: [universalFields],
}
