import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { cups } from '../utils/cups'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `javascript`,
            `react`,
            `typescript`,
            `angular`,
            `react native`,
            `html`,
            `css`,
            `Android`,
          ]}
        />
        <Bio />
        <div className="blog-main-body">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const tags = node.frontmatter.tags || [];

            return (
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <div key={node.fields.slug} className="post-item">
                  {node.frontmatter.featuredImage && (
                    <Img
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                      alt={node.frontmatter.title}
                      className={'post-header-image'}
                    />
                  )}
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                      marginTop: 0,
                    }}
                  >
                    {title}
                  </h3>
                  <small style={{ color: '#9c9c9c' }}>
                    {node.frontmatter.date}
                    {` • ${cups(node.timeToRead)}`}
                  </small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  <div>
                  {tags.map(tag => <span className="tag-item" key={tag}> {tag} </span>)}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 750) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
