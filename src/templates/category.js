import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Menu from "../pages/menu"
import Seo from "../components/seo"
import _ from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"

const Category = ({pageContext, data}) => {

    const category = pageContext
    const {edges, totalCount} = data.allMarkdownRemark
    const location = {
        pathName: '/tags/' + _.kebabCase(category.tags),
    }
    console.log('===edges===');
    console.log(edges);

    return (
        <>
        <Menu />
        <Layout location={location} title='むらくも'>
        <Seo title="むらくも カテゴリ：" />
        <h2>{category.tags}</h2>
        <ol style={{ listStyle: `none` }}>
        {edges.map((post) => 
                <div>
                <li key={post.node.fields.slug}>
                <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                    style={{marginBottom: '50px'}}
                    >
                    <header>
                    <h3>
                        <Link to={post.node.fields.slug} itemProp="url">
                        <span itemProp="headline">{post.node.frontmatter.title}</span>
                        </Link>
                    </h3>
                    <div style={{maxHeight: '120px', overflow: 'hidden', borderRadius: '5px'}}>
                        <Link to={post.node.fields.slug} itemProp="url">
                        <GatsbyImage image={post.node.frontmatter.thumbnail?.childImageSharp.gatsbyImageData} />
                        </Link>
                    </div>
                    <small>{post.node.frontmatter.date}</small>
                    </header>
                    <section>
                    <p
                        dangerouslySetInnerHTML={{
                        __html: post.node.frontmatter.description || post.node.excerpt,
                        }}
                        itemProp="description"
                        />
                    </section>
                    <hr style={{marginTop: '10px'}}/>
                </article>
                </li>
            </div>
        )}
        </ol>
        </Layout>
        </>
    )

}

export default Category;

export const pageQuery = graphql`
    query($tags: String) {
        allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tags: { eq: $tags } } }
        ) {
        totalCount
        edges {
            node {
            excerpt(pruneLength: 100)
            fields {
                slug
            }
            timeToRead
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                tags
                thumbnail {
                    childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
                    }
                }    
            }
            }
        }
        }
    }
    `