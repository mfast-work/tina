import { FooterWrapper, FooterLink, EditWithTinaButton } from "./styles"
import { useCMS } from "tinacms"
import getGlobalStaticProps from "../../utils/getGlobalStaticProps"

const Footer = ({ preview }) => {
  return (
    <FooterWrapper>
      <div>
        <section className="linksWrapper">
          <privacyPolicy />
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

export const privacyPolicy = () => {
  if (data.footer.privacy) {
  }
}

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
        data: (await import("../../content/home.json")).default,
      },
      ...global,
    },
  }
}

export default Footer
