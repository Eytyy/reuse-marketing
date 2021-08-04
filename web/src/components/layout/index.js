import React from "react"
import PropTypes from "prop-types"

import Global from "../../styles/Global.js"
import { LayoutWrapper } from "./styles"

import Header from "../header"

const Layout = ({ children }) => {
  return (
    <>
      <Global />
      <LayoutWrapper>
        <Header />
        <div>
          <main>{children}</main>
          <footer>
            {`🥴`} © {new Date().getFullYear()}
          </footer>
        </div>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
