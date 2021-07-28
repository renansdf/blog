import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #000;
  max-width: 570px;
  width: 90%;

  h1{
    font-size: 50px;
    line-height: 1.2em;
    width: 100%;
    margin-bottom: 35px;
    font-weight: 300;
  }

  figure{
    width: 100%;
    height: 300px;
    background-size: cover;
    background-repeat: none;
    background-position: center;
    border: 2px solid #ff0025;

    margin-bottom: 15px;
  }

  > a{
    width: auto;
    color: #ff0025;
    border: 1px solid #ff0025;
    letter-spacing: 2px;
    font-size: 13px;
    margin-bottom: 20px;
    padding: 3px 13px;
    background: transparent;
    text-decoration: none;
  }

  @media (max-width: 750px){
    h1{
      font-size: 30px;
    }

    figure{
      height: 47vw;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;

  div{
    width: 100%;
    margin: 10px 0 30px;
    iframe{
      width: 100%;
      height: 34vw;
      max-height: 445px;
      box-shadow: 0 6px 18px -3px rgb(10,35,20);
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
    margin: 50px 0 10px;
    font-size: 30px;
    font-weight: 700;
    line-height: 1em;
  }

  p{
    font-size: 17px;
    line-height: 1.5em;
    margin-bottom: 20px;

    img{
      max-width: 100%;
    }
  }

  a{
    color: #ff0025;
  }

  ul {
    list-style: disc;
    padding-left: 22px;
  }

  @media (max-width:500px){
    h2{
      font-size: 22px;
    }

    p{
      font-size:15px;
      line-height:1.5em;
    }
  }
`