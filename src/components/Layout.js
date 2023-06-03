import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import ThemeToggle from './ThemeToggle.js'
import blogsabbath from '../assets/blogsabbath.png'
import blogmetal from '../assets/blogmetal.png'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let year = new Date().getFullYear()

    if (location.pathname === rootPath) {
      header = (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0 15px 0 0',
          }}
        >
          <h1
            style={{
              ...scale(0.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              color: '#cba6f7',
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: '#cba6f7',
              }}
              to={`/`}
            >
              <img
                src={blogmetal}
                alt="blog do mitrut"
                style={{ maxWidth: '50%', margin: 0 }}
                class={'blog-logo'}
              />
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
              color: '#cba6f7',
              display: `flex`,
              alignItems: `center`,
            }}
            to={`/`}
          >
            {' '}
            <img
              src={blogmetal}
              alt="blog do mitrut"
              style={{ maxWidth: '30%', margin: 0 }}
              class={'blog-logo'}
            />
          </Link>{' '}
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
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
            © {year}, Feito com <a href="https://www.gatsbyjs.org"> Gatsby </a>{' '}
            , Veja o que eu <a href={'https://blog.wmitrut.co/uses'}>uso</a>.
          </span>
          <span></span>
        </footer>{' '}
      </div>
    )
  }
}

export default Layout
