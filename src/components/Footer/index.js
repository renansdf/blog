import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'
import githubIcon from '../../images/github.png'
import linkedinIcon from '../../images/linkedin.png'
import mailIcon from '../../images/mail.png'
import logo from '../../images/logo-renan.png'


const Footer = () => {
  return (
    <Container>
      <div>
        <Link to="/">Back</Link>
        <a href="https://github.com/renansdf" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Logo do github" /></a>
        <a href="https://www.linkedin.com/in/renan-sdf" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="Logo do LinkedIn" /></a>
        <a href="mailto:renan@defreitas.xyz" target="_blank" rel="noopener noreferrer"><img src={mailIcon} alt="Ícone de email" /></a>
      </div>

      <a href="https://defreitas.xyz/"><img src={logo} alt="Logo renan" /></a>
    </Container>
  )
}

export default Footer