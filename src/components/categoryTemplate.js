import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CategoryTemplate = (posts) => {

    console.log('posts ================');
    console.log(posts);

    return (
        <ol style={{ listStyle: `none` }}>
        {posts.posts.map(post => {
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
    )
}

export default CategoryTemplate