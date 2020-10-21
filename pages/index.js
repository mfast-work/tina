//import { useEffect } from "react"
import styled from "styled-components"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { HtmlFieldPlugin, MarkdownFieldPlugin } from "react-tinacms-editor"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { usePlugin, usePlugins } from "tinacms"
import { useGithubJsonForm } from "react-tinacms-github"
import { columnsRow } from "../tina/columns"
import {
  featureRow,
  buttonRow,
  headingRow,
  imageRow,
  videoRow,
  formRow,
  ctaRow,
  htmlRow,
  contentRow,
} from "../tina/blocks"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import { useGlobalStyleForm } from "@hooks"

const Page = ({ file, preview, styleFile }) => {
  const formOptions = {
    label: "Home Page",
    fields: [
      {
        label: "Hero",
        name: "rawJson.hero",
        description: "Settings for the hero of the page",
        component: "group",
        fields: [
          {
            name: "showHero",
            component: "toggle",
            label: "Show Hero?",
          },
          {
            name: "hero.heading",
            label: "Heading",
            component: "text",
          },
          {
            name: "hero.content",
            label: "Hero Content",
            component: "markdown",
          },
          {
            name: "hero.cta",
            label: "Button Text",
            component: "text",
          },
          {
            name: "hero.ctaTarget",
            label: "Button Link",
            component: "text",
          },
          {
            name: "hero.image",
            label: "Image",
            component: "text",
          },
          {
            name: "hero.imageBg",
            label: "Use image as background?",
            component: "toggle",
          },
          {
            name: "hero.contentAlign",
            label: "Content Alignment",
            component: "select",
            options: ["Left", "Right", "Center"],
          },
          {
            name: "hero.imageAlign",
            label: "Image Alignment",
            component: "select",
            options: ["Left", "Right", "Top", "Bottom"],
          },
        ],
      },
      {
        label: "Page Sections",
        name: "rawJson.sections",
        component: "blocks",
        templates: {
          features: featureRow,
          heading: headingRow,
          content: contentRow,
          button: buttonRow,
          image: imageRow,
          video: videoRow,
          form: formRow,
          columns: columnsRow,
          "image-with-text": ctaRow,
          html: htmlRow,
        },
      },
    ],
  }
  const [data, form] = useGithubJsonForm(file, formOptions)
  usePlugin(form)
  usePlugins([HtmlFieldPlugin, MarkdownFieldPlugin])

  const [styleData, styleForm] = useGlobalStyleForm(styleFile, preview)

  return (
    <Layout form={form} theme={styleData}>
      <Head title="Home" />
      <Container className="container">
        <Title className="title">{data.title}</Title>
        <p className="description">{data.subheading}</p>
      </Container>
    </Layout>
  )
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps = async function ({ preview, previewData }) {
  const global = await getGlobalStaticProps(preview, previewData)

  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "content/home.json",
        parse: parseJson,
      })
    ).props

    return {
      props: {
        ...file,
        ...global,
      },
    }
  }
  // render from the file system.
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
      ...global,
    },
  }
}

export default Page
