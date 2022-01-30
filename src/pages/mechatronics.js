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
                    機械設計についてなど
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
        filter: {frontmatter: {tags: {in: "Mechatronics"}}}
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
        }
        }
    }
    }
`