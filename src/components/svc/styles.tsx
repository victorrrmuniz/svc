import styled from "styled-components";


export const MainContainer = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`

export const HeaderContainer = styled.div`
  background-color: #1d1d1d;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 800;
  padding: 16px 0;
` 

export const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 64px;
  background-color: #1d1d1d;
  border-radius: 18px;
  border: 1px solid #000;

  > div:first-of-type {
    display: flex;
    align-items: center;
    width: 100%;

    > div {
      flex: 1;
      background-color: #242424;
    }
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
  gap: 64px;
  padding: 64px;
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #242424;

  padding: 16px;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);

  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(1.1);
  }
`