import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const TitleContainer = styled.div`
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    
    span:nth-child(1) {
      width: 120px;
    }
  }
`