import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import ThemeToggle from './ThemeToggle.js'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let year = new Date().getFullYear()

    if (location.pathname === rootPath) {
      header = (
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
            {' '}
            {title}{' '}
          </Link>{' '}
        </h1>
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
            }}
            to={`/`}
          >
            {' '}
            {title}{' '}
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
          <ThemeToggle />
        </footer>{' '}
      </div>
    )
  }
}

export default Layout
