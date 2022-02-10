import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Menu from './menu'
import CategoryTemplate from "../components/categoryTemplate"

const Mechatronics = ({data, location}) => {

    return (
    <>
        <Menu />
        <Layout location={location} title='むらくも'>
            <Seo title="むらくも" />
            
            {/* <Bio /> */}
                <div>
                    トレード日誌
                    <CategoryTemplate posts={data.allMarkdownRemark.nodes}/>
                </div>
        </Layout>
    </>
    )
}

export default Mechatronics

export const pageQuery = graphql`
    query {
    site {
        siteMetadata {
        title
        }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {frontmatter: {tags: {in: "trade"}}}
        ) {
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