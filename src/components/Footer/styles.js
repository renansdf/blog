import styled from 'styled-components'

export const Container = styled.nav`
  width: 90%;
  max-width: 850px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px;
  margin: 50px 0;
  border-top: 1px solid #fff4eb;
  
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
    background-color: #fff4eb;
    color: rgba(24,71,43,1);
    padding: 10px 20px;
    font-size: 13px;
    text-transform: uppercase;

    transition: all .4s;

    &:hover{
      background-color:#ff7300;
      color: #fff4eb;
    }
  }
`;