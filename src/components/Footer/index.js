import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container>
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/">Blog</Link>
        <a href="https://defreitas.xyz/">Projetos</a>
      </div>


      <a href="https://defreitas.xyz/"><img src="../images/logo-branca.png" alt="Logo renan" /></a>



    </Container>
  )
}

export default Footer