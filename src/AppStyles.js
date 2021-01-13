import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 60px ;
  width: 100vw;
  background: ${ ({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: background ${({ theme }) => theme.transition} ease-in-out;
`;

export const BodyCotainer = styled.div`
  width: 100%;
`
