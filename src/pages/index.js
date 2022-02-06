import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Menu from './menu'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="むらくも" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>

      <Menu />
      <Layout location={location} title={siteTitle}>
      <Seo title="むらくも" />
        
        {/* <Bio /> */}
        <div>最近の投稿⬇️</div>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const thumbImage = post.frontmatter.thumbnail?.childImageSharp.gatsbyImageData;//getImage(post.frontmatter.thumbnail);
            return (
              <div>
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                    style={{marginBottom: '50px'}}
                    >
                    <header>
                      <h3>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h3>
                      <div style={{maxHeight: '120px', overflow: 'hidden', borderRadius: '5px'}}>
                        <Link to={post.fields.slug} itemProp="url">
                        <GatsbyImage image={thumbImage} />
                        </Link>
                      </div>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                        />
                    </section>
                    <hr style={{marginTop: '10px'}}/>
                  </article>
                </li>
              </div>
            )
          })}
        </ol>
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          image
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`
