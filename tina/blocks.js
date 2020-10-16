export const featureRow = {
  label: "Features",
  key: "features-row",
  defaultItem: {
    settings: "",
    features: "",
  },
  fields: [
    {
      label: "Row Settings",
      name: "settings",
      component: "group",
      fields: [
        {
          name: "bgColor",
          label: "Background Color",
          component: "select",
          options: ["primary", "secondary"],
        },
        {
          name: "bgImage",
          label: "Background Image",
          description: "This overrides the background color if both are defined",
          component: "image",
          parse: (media) => media.path,
        },
        {
          name: "fullWidth",
          label: "Full width?",
          component: "toggle",
        },
        {
          name: "yPadding",
          label: "Vertical Padding",
          component: "number",
        },
        {
          name: "xPadding",
          label: "Horizontal Padding",
          component: "number",
        },
      ],
    },
    {
      label: "Features",
      name: "features",
      component: "group-list",
      itemProps: (item) => ({
        key: item.id,
        label: item.name,
      }),
      defaultItem: () => ({
        name: "New Feature",
        id: Math.random().toString(36).substr(2, 9),
      }),
      fields: [
        {
          label: "Heading",
          name: "heading",
          component: "text",
        },
        {
          label: "Description",
          name: "description",
          component: "textarea",
        },
        {
          label: "Image",
          name: "image",
          component: "image",
          parse: (media) => media.path,
        },
        {
          label: "Content Alignment",
          name: "alignment",
          component: "select",
          options: ["Left", "Right", "Center"],
        },
        {
          label: "Use Card style?",
          name: "matchCard",
          description: "May override alignment setting",
          component: "toggle",
        },
      ],
    },
  ],
}

export const headingRow = {
  label: "Heading",
  key: "heading-row",
  defaultItem: {
    settings: "",
    heading: "",
  },
  fields: [
    {
      label: "Row Settings",
      name: "settings",
      component: "group",
      fields: [
        {
          name: "bgColor",
          label: "Background Color",
          component: "select",
          options: ["primary", "secondary"],
        },
        {
          name: "bgImage",
          label: "Background Image",
          description: "This overrides the background color if both are defined",
          component: "image",
          parse: (media) => media.path,
        },
        {
          name: "fullWidth",
          label: "Full width?",
          component: "toggle",
        },
        {
          name: "yPadding",
          label: "Vertical Padding",
          component: "number",
        },
        {
          name: "xPadding",
          label: "Horizontal Padding",
          component: "number",
        },
      ],
    },
    {
      name: "text",
      label: "Text",
      component: "text",
    },
    {
      name: "size",
      label: "Font Size",
      description: "Max size: 100",
      component: "number",
    },
    {
      name: "style",
      label: "Dark or light?",
      component: "toggle",
    },
  ],
}

export const buttonRow = {
  label: "Button",
  key: "button-row",
  defaultItem: {
    settings: "",
    button: "",
  },
  fields: [
    {
      label: "Row Settings",
      name: "settings",
      component: "group",
      fields: [
        {
          name: "bgColor",
          label: "Background Color",
          component: "select",
          options: ["primary", "secondary"],
        },
        {
          name: "bgImage",
          label: "Background Image",
          description: "This overrides the background color if both are defined",
          component: "image",
          parse: (media) => media.path,
        },
        {
          name: "fullWidth",
          label: "Full width?",
          component: "toggle",
        },
        {
          name: "yPadding",
          label: "Vertical Padding",
          component: "number",
        },
        {
          name: "xPadding",
          label: "Horizontal Padding",
          component: "number",
        },
      ],
    },
    {
      name: "label",
      label: "Label",
      component: "text",
    },
    {
      name: "target",
      label: "Link",
      component: "text",
    },
    {
      name: "style",
      label: "Dark or light?",
      component: "toggle",
    },
    {
      name: "size",
      label: "Font Size",
      description: "Max size: 100",
      component: "number",
    },
  ],
}

export const imageRow = {}

export const videoRow = {}

export const formRow = {}

export const ctaRow = {}
