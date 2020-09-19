import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>
      <a href="https://defreitas.xyz/">Renan de Freitas</a>

      <div>
        <Link to="/">Blog</Link>
        <a href="https://defreitas.xyz/">Projetos</a>
      </div>

    </Container>
  )
}

export default Navbar