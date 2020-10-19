export const contentColumn = {
  label: "Content",
  key: "content-column",
  fields: [
    {
      name: "content",
      label: "Content",
      components: "markdown",
    },
  ],
}

export const formColumn = {
  label: "Form",
  key: "form-column",
  fields: [
    {
      name: "heading",
      label: "Heading",
      component: "text",
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

export const cardColumn = {
  label: "Card",
  key: "card-column",
  fields: [
    {
      name: "heading",
      label: "Heading",
      component: "text",
    },
    {
      name: "image",
      label: "Image",
      component: "text",
    },
    {
      name: "content",
      label: "Content",
      component: "markdown",
    },
  ],
}

export const listColumn = {
  label: "List",
  key: "list-column",
  fields: [
    {
      name: "listType",
      label: "Numbers or Bullets?",
      component: "toggle",
    },
    {
      name: "listItems",
      label: "List Items",
      component: "group-list",
      itemProps: (item) => ({
        key: item.id,
        label: item.listItem,
      }),
      defaultItem: () => ({
        name: "New Item",
        id: Math.random().toString(36).substr(2, 9),
      }),
      fields: [
        {
          name: "listItem",
          label: "Item",
          component: "text",
        },
      ],
    },
  ],
}

export const imageColumn = {
  label: "Image",
  key: "image-column",
  fields: [
    {
      name: "file",
      label: "Image name",
      component: "text",
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

export const columnsRow = {
  label: "Columns",
  key: "columns-row",
  defaultItem: {},
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
    },
    {
      label: "Column Blocks",
      name: "columns",
      component: "blocks",
      templates: {
        content: contentColumn,
        form: formColumn,
        card: cardColumn,
        list: listColumn,
        image: imageColumn,
      },
    },
  ],
}
