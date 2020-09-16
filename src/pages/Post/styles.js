import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > div:first-child{
    width: 100%;
    height: 500px;
    background-size: cover;
    background-repeat: none;
    background-position: center;

    margin-bottom: 0px;
  }
`

export const Content = styled.div`
  width: 90%;
  max-width: 750px;
  padding: 60px 70px;
  background-color: #fff;
  border-radius: 20px;
  transform: translateY(-100px);
  box-sizing: border-box;
  box-shadow: 0 0 30px -10px #00000029;

  div{
    width: 100%;
    margin: 10px 0 30px;
    iframe{
      width: 100%;
      height: 27vw;
      max-height: 320px;
    }
  }

  h1{
    font-size: 32px;
    letter-spacing: 1px;
    line-height: 1.2em;
    margin-bottom: 40px;
    font-weight: 700;
  }

  h2{
    margin: 40px 0 10px;
    font-size: 22px;
    font-weight: 700;
    line-height: 1em;
  }

  p{
    line-height: 1.7em;
    font-size: 16px;
    margin-bottom: 20px;
  }

  a{
    color: #8500ff;
  }
`