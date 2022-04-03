import React from 'react'
import appleavatar from '../assets/apple-negative.png'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>404... Ih rapaz...</h1>
        <img src={appleavatar} alt="blog do mitrut" style={{maxWidth: "20%", margin: 0}}/>
        <p>A página que você tentou acessar não existe mais.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
