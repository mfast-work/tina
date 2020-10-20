import { useGithubJsonForm } from "react-tinacms-github"
import { useFormScreenPlugin } from "tinacms"
import {
  textArea,
  textField,
  checkBoxes,
  consent,
  radioField,
  selectField,
} from "../tina/formTemplates"

const useGlobalStyleForm = (styleFile, preview) => {
  if (!preview) {
    // if we are not in preview return the jsonfile and dont register the form
    return [styleFile.data, null]
  }

  const styleFormOptions = {
    label: "Theme",
    layout: "fullscreen",
    fields: [
      {
        label: "Site Name",
        name: "siteName",
        component: "text",
      },
      {
        label: "Logo",
        name: "logo",
        component: "text",
      },
      {
        label: "Description",
        name: "description",
        component: "text",
      },
      {
        label: "Form",
        name: "form",
        component: "blocks",
        templates: {
          "text-field": textField,
          "text-area": textArea,
          select: selectField,
          radio: radioField,
          checkboxes: checkBoxes,
          consent: consent,
        },
      },
      {
        name: "header",
        label: "Header Settings",
        component: "group",
        fields: [
          {
            name: "show",
            label: "Show header?",
            component: "toggle",
          },
          {
            name: "height",
            label: "Height",
            component: "number",
          },
          {
            name: "color",
            label: "Color",
            component: "select",
            options: [],
          },
          {
            name: "textColor",
            label: "Light or Dark text?",
            component: "toggle",
          },
        ],
      },
      {
        name: "footer",
        label: "Footer Settings",
        component: "group",
        fields: [
          {
            name: "privacy",
            label: "Privacy Policy",
            description: "Place link to privacy policy here",
            component: "text",
          },
          {
            name: "terms",
            label: "Terms and Conditions",
            description: "Place link to terms and conditions here",
            component: "text",
          },
          {
            name: "disclaimer",
            label: "Disclaimer Code",
            component: "html",
          },
          {
            name: "cslb",
            label: "CSLB",
            component: "text",
          },
          {
            name: "divider",
            label: "Footer Divider",
            component: "select",
            options: ["|", "//", "–", "• "],
          },
        ],
      },
      {
        label: "Navigation",
        name: "navigation",
        component: "group",
        fields: [
          {
            name: "headingLinks",
            label: "Heading Links",
            component: "group-list",
            itemProps: (item) => ({
              key: item.id,
              label: item.link,
            }),
            defaultItem: () => ({
              label: "New Link",
              id: Math.random().toString(36).substr(2, 9),
            }),
            fields: [
              {
                label: "Link Label",
                name: "link",
                component: "text",
              },
              {
                label: "Link URL",
                name: "linkTarget",
                component: "text",
              },
            ],
          },
          {
            name: "footerLinks",
            label: "Footer Links",
            component: "group-list",
            itemProps: (item) => ({
              key: item.id,
              label: item.link,
            }),
            defaultItem: () => ({
              link: "New Link",
              id: Math.random().toString(36).substr(2, 9),
            }),
            fields: [
              {
                label: "Link Label",
                name: "link",
                component: "text",
              },
              {
                label: "Link URL",
                name: "linkTarget",
                component: "text",
              },
            ],
          },
          {
            name: "socialLinks",
            label: "Social Media Links",
            component: "group-list",
            itemProps: (item) => ({
              key: item.id,
              label: item.icon,
            }),
            defaultItem: () => ({
              icon: "New Link",
              id: Math.random().toString(36).substr(2, 9),
            }),
            fields: [
              {
                label: "Social Media Platform",
                name: "icon",
                component: "select",
                options: ["instagram", "facebook", "twitter", "linkedin", "youtube"],
              },
              {
                label: "Link URL",
                name: "linkTarget",
                component: "text",
              },
            ],
          },
        ],
      },
      {
        label: "Colors",
        name: "colors",
        component: "group",
        fields: [
          {
            name: "primary",
            component: "color",
          },
          {
            name: "highlightBorder",
            component: "color",
          },
          {
            name: "background",
            component: "color",
          },
          {
            name: "text",
            component: "color",
          },
          {
            name: "highlight",
            component: "color",
          },
          {
            name: "secondary",
            component: "color",
          },
        ],
      },
      {
        label: "Card Settings",
        name: "cardSettings",
        description: "Define the style for card elements",
        component: "group",
        fields: [
          {
            name: "bgColor",
            label: "Background Color",
            component: "select",
            options: [],
          },
          {
            name: "bgImage",
            label: "Background Image",
            description: "Overrides the background color selection",
            component: "text",
          },
          {
            name: "borderRadius",
            label: "Corner Radius",
            component: "number",
          },
          {
            name: "stroke",
            label: "Border width",
            description: "For no border, leave blank or set to 0",
            component: "number",
          },
          {
            name: "strokeColor",
            label: "Border color",
            component: "select",
            options: [],
          },
          {
            name: "margin",
            component: "number",
          },
          {
            name: "headingColor",
            label: "Heading Color",
            component: "select",
            options: [],
          },
          {
            name: "padding",
            component: "number",
          },
          {
            name: "textColor",
            label: "Text Color",
            component: "select",
            options: [],
          },
        ],
      },
      {
        name: "buttonStyles",
        label: "Button Styles",
        component: "group",
        fields: [
          {
            name: "borderRadius",
            label: "Corner Radius",
            component: "number",
          },
          {
            name: "stroke",
            label: "Border width",
            description: "For no border, leave blank or set to 0",
            component: "number",
          },
          {
            name: "strokeColor",
            label: "Border color",
            component: "select",
            options: [],
          },
          {
            name: "padding",
            component: "number",
          },
          {
            name: "bgDark",
            label: "Dark Background Color",
            component: "select",
            options: [],
          },
          {
            name: "bgLight",
            label: "Light Background Color",
            component: "select",
            options: [],
          },
          {
            name: "textDark",
            label: "Dark Text Color",
            component: "select",
            options: [],
          },
          {
            name: "textLight",
            label: "Light Text Color",
            component: "select",
            options: [],
          },
          {
            name: "fontSize",
            label: "Font Size",
            component: "number",
          },
        ],
      },
      {
        name: "shadow",
        label: "Drop Shadow",
        description: "Set the global shadow style",
        component: "group",
        fields: [
          {
            name: "shadowColor",
            label: "Color",
            component: "color",
          },
          {
            name: "xOffset",
            label: "X Offset",
            component: "text",
          },
          {
            name: "yOffset",
            label: "Y Offset",
            component: "text",
          },
          {
            name: "blur",
            label: "Blur Radius",
            component: "text",
          },
        ],
      },
      {
        label: "Google Tag Manager ID",
        name: "gtm",
        component: "text",
      },
      {
        name: "fonts.body",
        label: "Body Fonts",
        component: "text",
      },
      {
        name: "fonts.head",
        label: "Heading Fonts",
        component: "text",
      },
    ],
  }

  const [styleData, styleForm] = useGithubJsonForm(styleFile, styleFormOptions)

  useFormScreenPlugin(styleForm)
  return [styleData, styleForm]
}
export default useGlobalStyleForm
