import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Instagram, GitHub, Linkedin } from 'react-feather';

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <>
          <div
            style={{
              display: `flex`,
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `0%`,
                objectFit:`contain`
              }}
            />
            <p>
              Blog escrito por
              {` `}
              <a href={`https://github.com/${social.twitter}`}>
              <strong>{author}</strong>
              </a> 
              , Antes de tudo eu faço arte: código, música, fotografia, desenho e etc. Amo criar coisas
              e compartilhar com o mundo
            </p>
            
          </div>
          <div className='social-button-area'>
            <a href='https://www.instagram.com/wmitrut/' target='_blank' noref noopener alt="Instagram" className='social-button'><Instagram/></a>
            <a href='https://github.com/Wmitrut' target='_blank' noref noopener alt="Instagram" className='social-button'><GitHub/></a>
            <a href='https://www.linkedin.com/in/wmitrut/' target='_blank' noref noopener alt="Linkedin" className='social-button'><Linkedin/></a>
          </div>
          </>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/apple-avatar.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
