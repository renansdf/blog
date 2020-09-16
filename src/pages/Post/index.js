// In src/pages/Page.js
import React, { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { client, linkResolver } from '../../prismic-configuration'
import NotFound from '../NotFound'
import { Container, Content } from './styles'

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
        <div style={{ backgroundImage: "url(" + doc.data.cover.url + ")" }} ></div>
        <Content className="Post">
          <h1>{RichText.asText(doc.data.title)}</h1>
          <div dangerouslySetInnerHTML={{ __html: doc.data.video.html }} />
          <RichText render={doc.data.content} linkResolver={linkResolver} />
        </Content>
      </Container>
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Post