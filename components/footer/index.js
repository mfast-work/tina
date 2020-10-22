import { FooterWrapper, FooterLink, EditWithTinaButton } from "./styles"
import { useCMS } from "tinacms"

const Footer = ({ preview, privacy, terms, divider, cslb, disclaimer }) => {
  return (
    <FooterWrapper>
      <div>
        <section className="linksWrapper">
          {privacy ? <FooterLink href={privacy}>Privacy Policy</FooterLink> : null}
          {divider || "|"}
        </section>
        <EditLink />
      </div>
    </FooterWrapper>
  )
}
export const EditLink = () => {
  const cms = useCMS()
  return (
    <EditWithTinaButton onClick={() => cms.toggle()}>
      <i className="icon-edit" />
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site With TinaCMS"}
    </EditWithTinaButton>
  )
}

export const getStaticProps = async function ({ preview, previewData }) {
  const global = await getGlobalStaticProps(preview, previewData)

  if (preview) {
    // get data from github
    const file = (
      await getGithubPreviewProps({
        ...previewData,
        fileRelativePath: "content/styles.json",
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
        fileRelativePath: "content/styles.json",
        data: (await import("../../content/styles.json")).default,
      },
      ...global,
    },
  }
}

export default Footer
