import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import ThemeToggle from './ThemeToggle.js'
import blogsabbath from '../assets/blogsabbath.png'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let year = new Date().getFullYear()

    if (location.pathname === rootPath) {
      header = (
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <h1
          style={{
            ...scale(0.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: '#D30002',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: '#D30002',
            }}
            to={`/`}
          >
            <img src={blogsabbath} alt="blog do mitrut" style={{maxWidth: "50%", margin: 0}}/>
          </Link>{' '}
          
        </h1>
        <ThemeToggle />
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: '#D30002',
              display: `flex`,
              alignItems: `center`,
            }}
            to={`/`}
          >
            {' '}
            ◄
            <img src={blogsabbath} alt="blog do mitrut" style={{maxWidth: "30%", margin:0}}/>
          </Link>{' '}
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
      >
        {' '}
        {header} {children}{' '}
        <footer>
          {' '}
          <span>
            © {year}, Built with <a href="https://www.gatsbyjs.org"> Gatsby </a>{' '}
          </span>
        </footer>{' '}
      </div>
    )
  }
}

export default Layout
