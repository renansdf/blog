import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const BlogBody = styled.div`
  position: relative;
  padding: 100px 0 0;
  width: 90%;
  max-width: 570px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #000;
  box-sizing: border-box;

  header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;

    div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    h1{
      font-size: 90px;
      line-height: 1.1em;
      font-weight: 100;
      margin: 10px 0 10px;
    }

    h2{
      font-size: 25px;
      font-weight: 900;
      letter-spacing: 2px;
      background: #ff0025;
      color: #fff;
      padding: 3px 5px 3px 6px;
    }

    img{
      width: 40%;
      max-width: 400px;
      margin-left: 5%;
      box-shadow: 0 6px 18px -3px rgb(10 35 20);
    }

    p{
      font-size: 20px;
      margin-top: 16px;
      line-height: 1.3em;
      max-width: 310px;
    }
  }

  article + article{
    margin-top: 120px;
  }

  @media(max-width: 570px){
    padding: 30px 15px;
    header img{
      display: none;
    }
    header h1{
      font-size: 60px;
    }
    header p{
      font-size: 18px;
      line-height: 1.5em
    }
  }
`

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
    transition: all .3s;
  }
  
  a + a{
    margin-left: 10px;
  }

  img{
    max-width: 30px;
    max-height: 30px;
  }

`
export const PostList = styled.div``

export const Post = styled.article`
  box-sizing: border-box;
  position: relative;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    a{
      position: absolute;
      transform: translateX(-50%);
      width: auto;
      background-color: #ff0025;
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 13px;
      padding: 15px;
      transition: all .4s;
      font-weight: 400;
      line-height: 1.4em;
      text-align: center;
      letter-spacing: 3px;

      &:hover{
        background-color:#e10021;
      }
    }
  }

  h3{
    font-size: 30px;
    line-height: 1.3em;
    margin-bottom: 15px;
    font-weight: 300;
  }

  img{
    width: 100%;
    border: 1px solid #ff0025;
  }

  p{
    font-size: 18px;
    line-height: 1.5em;
    a{
      color: #ff0025;
    }
  }

  p + p{
    margin-top: 20px;
  }
  
  > a{
    display: inline-block;
    color: #ff0025;
    font-size: 13px;
    margin-top: 15px;
    font-weight: 300;
    text-transform: lowercase;
    letter-spacing: 2px;
    line-height: 1em;
    transition: all .4s;

    &:hover{
      color: #990016;
    }
  }

  strong{
    font-size: 14px;
    color: #ff0025;
    background-color: transparent;
    border: 2px solid #ff0025;
    padding: 5.5px 5px 3px;
    margin-bottom: 14px;
    display: inline-block;
    font-weight: 400;
    line-height: 1em;
  }
  
  @media (max-width: 570px){
    div{
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10px;
      a{
        display: none;
        width: auto;
        padding: 3px 10px;
        font-size: 10px;
      }
    }

    h3{
      width: 100%;
      margin-bottom: 20px;
      font-size: 24px;
    }


    strong{
      position: relative;
      font-size: 13px;
      margin-bottom: 15px;
      display: block;
      transform: none;
      letter-spacing: 2px;
      width: fit-content;
    }

    p{
      font-size: 15px;
    }
  }
`

export const Signature = styled.div``
