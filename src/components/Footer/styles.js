import styled from 'styled-components'

export const Container = styled.nav`
  width: 90%;
  max-width: 570px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px;
  margin: 50px 0;
  border-top: 1px solid #ff0025;
  
  > a:first-child{
    width: 150px;
  }

  a{
    font-size: 20px;
    color: #fff4eb;
    text-decoration: none;
  }

  img{
    max-width: 50px;
  }

  div a + a{
    margin-left: 20px;
  }

  div a:first-child{
    background-color: transparent;
    color: #202020;
    color: rgba(24,71,43,1);
    padding: 5px 13px;
    font-size: 13px;
    text-transform: uppercase;
    border: 1px solid #202020;

    transition: all .4s;

    &:hover{
      background-color:#202020;
      color: #fff;
    }
  }

  div{
    display: flex;
    align-items: center;
  }

  a img{
    max-width: 30px;
    max-height: 30px;
  }
`;