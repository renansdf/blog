// In src/pages/Page.js
import { useEffect, useState } from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from 'react-router-dom'
import { client, linkResolver } from '../../prismic-configuration'

import Loading from '../../components/Loading'
import NotFound from '../NotFound'
import Footer from '../../components/Footer/index'

import { Wrapper, Container, Content } from './styles'

const Post = ({ match }) => {
  const [doc, setDocData] = useState(null)
  const [notFound, toggleNotFound] = useState(false)
  const [loadingVisibility, setLoadingVisibility] = useState(true)

  const uid = match.params.uid

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getByUID('post', uid)

      if (result) {
        setLoadingVisibility(false)
        setDocData(result)
      } else {
        console.warn('Post document not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }, [uid])

  return (
    <Wrapper>
      <Loading loadingVisibility={loadingVisibility} />
      
      {notFound && (
        <NotFound />
      )}

      {doc && (
        <Container>
          <Link to="/">Back</Link>
          <h1>{RichText.asText(doc.data.title)}</h1>
          {doc.data.cover.url && (
            <figure style={{ backgroundImage: "url(" + doc.data.cover.url + ")" }} ></figure>
          )}
          <Content className="Post">
            <div dangerouslySetInnerHTML={{ __html: doc.data.video.html }} />
            <RichText render={doc.data.content} linkResolver={linkResolver} />
          </Content>

        </Container>
      )}

      <Footer />
    </Wrapper>
  )
}

export default Post