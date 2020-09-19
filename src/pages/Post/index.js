// In src/pages/Page.js
import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../../prismic-configuration'
import NotFound from '../NotFound'
import { Container, Content } from './styles'
import Navbar from '../../components/Navbar/index'
import Footer from '../../components/Footer/index'

const Post = ({ match }) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  const uid = match.params.uid

  // Get the Post document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.getByUID('post', uid)

      if (result) {
        // We use the State hook to save the document
        return setDocData(result)
      } else {
        // Otherwise show an error message
        console.warn('Post document not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }, [uid]) // Skip the Effect hook if the UID hasn't changed

  if (doc) {
    console.log(doc.data);
    return (
      <Container>
        <Navbar />

        <h1>{RichText.asText(doc.data.title)}</h1>
        <figure style={{ backgroundImage: "url(" + doc.data.cover.url + ")" }} ></figure>
        <Content className="Post">
          <div dangerouslySetInnerHTML={{ __html: doc.data.video.html }} />
          <RichText render={doc.data.content} linkResolver={linkResolver} />
        </Content>

        <Footer />
      </Container>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Post