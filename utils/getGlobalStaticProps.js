import { getGithubPreviewProps, parseJson } from "next-tinacms-github"

export default async (preview, previewData) => {
  if (preview) {
    const styleFormsProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/styles.json",
      parse: parseJson,
    })

    const globalFormProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/form.json",
      parse: parseJson,
    })

    return {
      styleFile: styleFormsProps.props.file,
      formFile: globalFormProps.props.file,
    }
  }

  return {
    styleFile: {
      data: (await import("../content/styles.json")).default,
      fileRelativePath: "content/styles.json",
    },
    formFile: {
      data: (await import("../content/form.json")).default,
      fileRelativePath: "content/form.json",
    },
  }
}
