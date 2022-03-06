import * as React from "react"
import _ from 'lodash'
import { graphql, Link, useStaticQuery } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const tagList = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }`
  )

  console.log(tagList);
  
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
        <h5>タグ一覧</h5>
        <hr/>
        <ul>
        {tagList.allMarkdownRemark.group.map((t) =>
        <>
        {t.tag !== "trade" ? 
          <li>
          <Link to={`/tags/${_.kebabCase(t.tag)}/`}>
          {t.tag}({t.totalCount})
          </Link>
        </li>:<></>
        }
        </>
        )}
        </ul>
        </div>
        <div className="contents-main">
          {children}
        </div>
        <div className="contents-right">
          
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </main>

    </div>
  )
}

export default Layout
