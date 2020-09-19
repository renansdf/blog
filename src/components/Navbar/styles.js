import styled from 'styled-components'

export const Container = styled.nav`
  width: 90%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  margin: 50px 0;

  a{
    font-size: 20px;
    color: #fff4eb;
    text-decoration: none;
  }

  div a + a{
    margin-left: 20px;
  }
`;