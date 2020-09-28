import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(22,94,59,1);
`

export const BlogBody = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 60px 70px;
  color: #fff4eb;
  box-sizing: border-box;
  box-shadow: 0 0 30px -10px #00000029;

  background: rgb(24,71,43);
  background: url('/images/bg1.png'), linear-gradient(164deg, rgb(19,60,35) 0%, rgba(22,94,59,1) 100%);
  background-position: center;
  background-size: contain;
  border: 1px solid #fff4eb;

  header{
    width: 90%;
    max-width: 1200px;
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
      font-size: 50px;
      line-height: 1.2em;
      max-width: 610px;
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
      line-height: 1.7em;
      max-width: 400px;
    }
  }

  @media(max-width: 850px){
    padding: 30px 15px;
    header img{
      display: none;
    }
    header h1{
      font-size: 30px;
    }
    header p{
      font-size: 18px;
      line-height: 1.5em
    }
  }
`

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);

  a{
    max-width: 50px;
    display: block;
    transition: all .3s;
  }

  a:hover{
    transform: scale(1.1);
  }

  a + a{
    margin-top: 10px;
  }

  img{
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 6px 18px -3px rgb(10 35 20);
  }

  @media(max-width: 650px){
    position: relative;
    flex-direction: row;
    top: auto;
    left: auto;
    transform: none;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    border-top: 1px solid #fff4eb;
    
    a{
      margin: 0 10px;
    }

    a + a{
      margin-top: 0;
    }
    img{
      box-shadow: 0 6px 18px -3px rgb(10 35 20 / 15%);
    }
  }
`


export const PostList = styled.div`
  width: 90%;
  max-width: 850px;
  padding: 0;
`

export const Post = styled.article`
  border-top: 3px solid #fff4eb;
  padding: 50px 0 0;
  margin-bottom: 70px;
  box-sizing: border-box;
  position: relative;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    a{
      width: 20%;
      background-color: #fff4eb;
      color: rgba(24,71,43,1);
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 13px;
      padding: 10px 0;
      box-shadow: 0 6px 18px -3px rgb(10,35,20);
      transition: all .4s;

      &:hover{
        background-color:#ff7300;
        color: #fff4eb;
      }
    }
  }

  h1{
    font-size: 30px;
    line-height: 1.3em;
    max-width: 550px;
    width: 70%;
    margin-bottom: 3px;
    font-weight: 700;
  }

  img{
    width: 100%;
    box-shadow: 0 6px 18px -3px rgb(10 35 20);
    margin-bottom: 20px;
  }

  p{
    font-size: 18px;
    line-height: 1.5em;
    a{
      color: #ff7300;
    }
  }

  p + p{
    margin-top: 20px;
  }
  
  > a{
    display: inline-block;
    color: #fff4eb;
    font-size: 13px;
    margin-top: 20px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
    border-left: 12px solid;
    padding: 0 0 2px 10px;
    line-height: 1em;
    transition: all .4s;
    padding-right: 20px;

    &:hover{
      background-color: #ff7300;
      border-color: #ff7300;
    }
  }

  strong{
    font-size: 16px;
    color: #ff7300;
    background-color: #fff4eb;
    padding: 3px 5px;
    margin-bottom: 14px;
    display: inline-block;
    font-weight: 400;
    line-height: 1em;
  }
  
  @media (max-width: 1000px){
    div{
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0;
      a{
        display: none;
        width: auto;
        padding: 3px 10px;
        font-size: 10px;
      }
    }

    h1{
      width: 100%;
      margin-bottom: 20px;
      font-size: 22px;
    }


    strong{
      position: relative;
      font-size: 18px;
      margin-bottom: 30px;
      display: block;
      transform: none;
      font-weight: 300;
      letter-spacing: 2px;
    }
  }
`

export const Signature = styled.div``
