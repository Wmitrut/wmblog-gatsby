import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: `https://blog.wmitrut.com/`,
              },
              {
                property: `og:image`,
                content: `https://lh3.googleusercontent.com/iAPOQcjk2lZzQt_B222uVn6EWQ74BNBPhCxwcafOf_9EtRAeHV0k4Fdd3eYy-X3qAtEmFsPM-4vhyFG613emrUVUcg5aRRqtv3NPACUNRJopqG3D-K6sc9BdIw2tP3CFMgMFW3dxBl91aP74U8pT2aLygDIQPohY_NunwCrkLW0PX1hn6yhCXO2gCY806_gf-0ssk1GprYxU-goMXdFrvxG2eRRCltvFm8b_FWnbqPQBRzPWTfbkG_cw2l7D2KyTQ8Mz6QWpgUjVPzSBLGfR2E1GIMiL7H80eXRXVEzTdIwwT_YU-gM7XZZIgSVtmFn4iUKAqflUKnSlNEC5mlNKMd09WW0dPhJuY1AlwLc-xrkGMR1vnTalEi9h_Rj854dA3pMlkHShTlaq6pRqMwQro_m_TjsfEpiMVHMYvMdRP-nZ6dLA8UnDYEP4IWnJ0BARVe0itxOROEzqqfWhKqqNKWsWlSoU2IZlQaemFMOwdt3Iugwk4BjQuIthj_xx6Ygm0acVVLBvEvyTXH1gsLpaOy5xyLFQKmB2MdM3kzc-QjhXzZLznNzUb4rhrgd5F4D8_xfuzIDUmzfnLfbrtbhhYKYqkKl51E2feszgCLB3e6sJz6bAkwMa3P6s_CI26lrWorBhrdhh1EtWVxc_SwjiQ1rf1-TEjk_C=w1000-h667-no`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
