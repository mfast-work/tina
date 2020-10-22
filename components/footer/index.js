import { FooterWrapper, FooterLink, EditWithTinaButton } from "./styles"
import { useCMS } from "tinacms"
import { parseJson } from "next-tinacms-github"

const Footer = ({ preview, privacy, terms, divider, cslb, disclaimer }) => {
  return (
    <div>
      <FooterWrapper>
        <div>
          <section className="linksWrapper">
            {privacy ? <FooterLink href={privacy}>Privacy Policy</FooterLink> : null}
            {privacy && (terms || cslb) ? divider || "|" : null}
            {terms ? <FooterLink href={terms}>Terms & Conditions</FooterLink> : null}
            {terms && cslb ? divider || "|" : null}
            {cslb ? (
              <FooterLink href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx">
                CSLB# {cslb}
              </FooterLink>
            ) : null}
          </section>
          <EditLink />
        </div>
      </FooterWrapper>
      <div dangerouslySetInnerHTML={{ __html: disclaimer }} />
    </div>
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
