import React, { useEffect, useState } from 'react'
import Prismic from '@prismicio/client'
import { client, linkResolver } from '../../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import NotFound from '../NotFound'
import { Container, PostList, Post, SocialNetworks, BlogBody, Signature } from './styles'
import { Link } from 'react-router-dom'

import githubIcon from '../../images/github.png'
import linkedinIcon from '../../images/linkedin.png'
import mailIcon from '../../images/mail.png'

import Footer from '../../components/Footer/index'

const Blog = () => {
  const [posts, setPosts] = useState(null)
  const [notFound, toggleNotFound] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.query(
        Prismic.Predicates.at('document.type', 'post'),
        { orderings: '[my.post.ordering_date desc]' }
      )

      if (response) {
        return setPosts(response)
      } else {
        console.warn('Posts not found. Make sure it exists in your Prismic repository')
        toggleNotFound(true)
      }
    }
    fetchData()
  }, [])

  if (posts) {
  return (
      <Container>
        <BlogBody>
          <SocialNetworks>
            <a href="https://github.com/renansdf" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Logo do github" /></a>
            <a href="https://www.linkedin.com/in/renan-sdf" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="Logo do LinkedIn" /></a>
            <a href="mailto:renan@defreitas.xyz" target="_blank" rel="noopener noreferrer"><img src={mailIcon} alt="Ícone de email" /></a>
          </SocialNetworks>

          <header>
            <div>
              <h1>Renan<br />de Freitas</h1>
              <h2>frontend developer</h2>
              <p>I write about personal projects, web development and events.</p>
            </div>
          </header>

          <PostList>
            {posts.results.map(post => (
              <Post key={post.id}>
                <strong>{post.data.month}</strong>
                <h3>{post.data.title[0].text}</h3>
                {post.data.cover.url && (
                  <div>
                    <Link to={`/post/${post.uid}`} >Read<br/>More</Link>
                    <img src={post.data.cover.url} alt={post.data.cover.alt} />
                  </div>
                )}
                <RichText render={post.data.resumo} linkResolver={linkResolver} />
                <Link to={`/post/${post.uid}`} >Read More</Link>
              </Post>
            ))}
          </PostList>



          <Signature />

        </BlogBody>
        <Footer />
      </Container >
    )
  } else if (notFound) {
    return <NotFound />
  }
  return null
}

export default Blog