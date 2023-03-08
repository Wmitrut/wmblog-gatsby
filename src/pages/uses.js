import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class UsesPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Mitrut usa:" />
        <h1>Eu uso:</h1>
        <div className="uses-wrapper">
          <div className="uses-card">
            <h2>🖥️ Hardware</h2>

            <p>Macbook Pro Apple M1 PRO, 16GB ram, 1TB ssd</p>
            <p>Macbook Pro Apple 2015, 8GB ram, 512GB ssd</p>
            <p>Monitor LG LED 25 CLASS 219 Ultrawide IPS</p>
            <p>iPhone 11</p>
            <p>Apple Earpods</p>
          </div>
          <div className="uses-card">
            <h2>⏳ Productivity</h2>
            <p>Todoist</p>
            <p>Notion</p>
            <p>Raycast</p>
            <p>Bitwarden</p>
          </div>

          <div className="uses-card">
            <h2>💼 Business</h2>
            <p> GitHub (Personal) </p>
            <p> GitHub Business (Professional) </p>
          </div>

          <div className="uses-card">
            <h2>👨‍💻 Development</h2>
            <p> VIM</p>
            <p> VS Code with Catppuccin Mocha</p>
            <p>iTerm2</p>
          </div>

          <div className="uses-card">
            <h2>📸 Photography</h2>
            <p> Halide Camera</p>
            <p> Adobe Lightroom</p>
            <p>Instagram</p>
          </div>

          <div className="uses-card">
            <h2>🤪 Another apps</h2>
            <p>Figma</p>
            <p>Google Drive</p>
            <p> Netlify</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default UsesPage
