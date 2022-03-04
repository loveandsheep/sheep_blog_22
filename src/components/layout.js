import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h3 style={{textDecoration: 'none'}}>
        <Link to="/">{title}</Link>
      </h3>
    )
  } else {
    header = (
      <h3 style={{textDecoration: 'none'}}>
        <Link to="/">
          {title}
        </Link>
      </h3>
    )
  }
//  :: {location.pathname}
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
 
export default Layout
