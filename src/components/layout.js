import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const style_main = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  }

  if (isRootPath) {
    header = (
      <h3 style={{marginTop: '0px', textDecoration: 'none'}}>
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
      <main style={style_main}>
        <div className="contents-left">
        <header className="global-header">{header}</header>
          ここにサイドメニュー的な何か
        </div>
        <div className="contents-main">
      
          {children}
        </div>
        <div className="contents-right">
          
        </div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
