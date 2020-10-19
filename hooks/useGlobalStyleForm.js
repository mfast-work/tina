import { useGithubJsonForm } from "react-tinacms-github"
import { useFormScreenPlugin } from "tinacms"

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
        label: "Google Tag Manager ID",
        name: "gtm",
        component: "text",
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
        name: "fonts.body",
        label: "Body Fonts",
        component: "text",
      },
      {
        name: "fonts.head",
        label: "Heading Fonts",
        component: "text",
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
    ],
  }

  const [styleData, styleForm] = useGithubJsonForm(styleFile, styleFormOptions)

  useFormScreenPlugin(styleForm)
  return [styleData, styleForm]
}
export default useGlobalStyleForm
