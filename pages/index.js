import { useEffect } from "react"
import styled from "styled-components"
import { getGithubPreviewProps, parseJson } from "next-tinacms-github"
import { useGithubJsonForm } from "react-tinacms-github"
import Router from "next/router"

import Head from "@components/head"
import Layout from "@components/layout"
import Container from "@components/container"
import { usePlugin } from "tinacms"
import getGlobalStaticProps from "../utils/getGlobalStaticProps"
import { useGlobalStyleForm } from "@hooks"

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
