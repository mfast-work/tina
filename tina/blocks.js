export const rowSettings = {
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
      component: "text",
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
}

export const featureRow = {
  label: "Features",
  key: "features-row",
  defaultItem: {
    settings: "",
    features: "",
  },
  fields: [
    rowSettings,
    {
      label: "Features",
      name: "features",
      component: "group-list",
      itemProps: (item) => ({
        key: item.id,
        label: item.heading,
      }),
      defaultItem: () => ({
        heading: "New Feature",
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
          component: "text",
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
    rowSettings,
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
    rowSettings,
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

export const imageRow = {
  label: "Image",
  key: "image-row",
  defualtItem: {
    settings: "",
  },
  fields: [
    rowSettings,
    {
      name: "file",
      label: "Image name",
      component: "text",
    },
    {
      name: "size",
      label: "Size (Width)",
      description: "Max size: 100",
      component: "number",
    },
    {
      name: "alt",
      label: "Alt Text",
      description: "Describe the image for SEO and screenreaders",
      component: "text",
    },
    {
      name: "shadow",
      label: "Drop Shadow",
      component: "toggle",
    },
  ],
}

export const videoRow = {
  label: "Video",
  key: "video-row",
  defaultItem: {
    settings: "",
  },
  fields: [
    rowSettings,
    {
      name: "videoId",
      label: "YouTube Video ID",
      component: "text",
    },
    {
      name: "size",
      label: "Size (Width)",
      description: "Max size: 100",
      component: "number",
    },
    {
      name: "shadow",
      label: "Drop Shadow",
      component: "toggle",
    },
  ],
}

export const formRow = {
  label: "Form",
  key: "form-row",
  fields: [
    rowSettings,
    {
      name: "size",
      label: "Width",
      description: "Max width: 100",
      component: "number",
    },
    {
      name: "bgColor",
      label: "Background Color",
      component: "select",
      options: [],
    },
    {
      name: "borderRadius",
      label: "Corner Radius",
      component: "number",
    },
  ],
}

export const ctaRow = {
  label: "Image and Text",
  key: "cta",
  fields: [
    rowSettings,
    {
      label: "Sizing Ratio",
      name: "ratio",
      component: "select",
      options: ["1:1", "1:2", "2:1", "2:3", "3:2"],
    },
    {
      label: "Image",
      name: "image",
      component: "text",
    },
    {
      label: "Alt Text",
      name: "alt",
      component: "text",
      description: "Describe the image for SEO and screen readers",
    },
    {
      label: "Image on right?",
      name: "imageRight",
      component: "toggle",
    },
    {
      label: "Content",
      name: "content",
      component: "markdown",
    },
    {
      name: "button",
      label: "Show button?",
      component: "toggle",
    },
    {
      name: "buttonLabel",
      label: "Button Text",
      component: "text",
    },
    {
      name: "buttonTarget",
      label: "Button Link",
      component: "text",
    },
    {
      name: "buttonTheme",
      label: "Light or Dark Button?",
      component: "toggle",
    },
  ],
}

export const contentRow = {
  label: "Content",
  key: "content-row",
  fields: [
    rowSettings,
    {
      name: "content",
      label: "Content",
      components: "markdown",
    },
  ],
}

export const htmlRow = {
  label: "Code",
  key: "html-row",
  fields: [
    {
      label: "HTML",
      name: "htmlCode",
      component: "html",
    },
  ],
}
