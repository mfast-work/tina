import { node, bool, any, string } from "prop-types"
import { useGithubToolbarPlugins } from "react-tinacms-github"
import { ThemeProvider } from "styled-components"

import TopBar from "@components/topbar"
import Footer from "@components/footer"

import { LayoutStyled, LayoutBodyStyled } from "./styles"

const Layout = ({ children, splitView, theme }) => {
  useGithubToolbarPlugins()
  return (
    // if the theme isnt avaible load it from the file system
    <ThemeProvider theme={theme || require("../../content/styles.json")}>
      <LayoutStyled>
        <TopBar theme={theme || require("../../content/styles.json")} />
        <LayoutBodyStyled splitView={splitView}>{children}</LayoutBodyStyled>
        <Footer privacy={theme.footer.privacy} divider={theme.footer.divider} />
      </LayoutStyled>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: node,
  showDocsSearcher: bool,
  splitView: bool,
  searchIndex: string,
  theme: any,
  searchText: string,
}

Layout.defaultProps = {
  showDocsSearcher: false,
  splitView: false,
}

export default Layout
