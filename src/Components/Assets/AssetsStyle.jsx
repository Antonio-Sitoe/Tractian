import styled from 'styled-components';
import { bgCard, colorGreen, colorWhite } from '../../GlobalStyles/Utilits';
export const AssetsContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 1rem;
`;

export const CardAssets = styled.div`
  max-width: 55rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.3rem;
  background: ${bgCard};
  color: ${colorWhite};
  font-family: 'Poppins', sans-serif;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }

  img {
    border-radius: 0.3rem;
    display: block;
    height: 20rem;
    width: 100%;
    margin: 0;
    padding: 0;
    @media (max-width: 40rem) {
      max-width: 100%;
      height: 18rem;
    }
  }
`;
export const Name = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.3rem 2rem;
  background: ${colorGreen};
  border-radius: 0 0.3rem 0 0;
  color: #252525;
`;

export const List = styled.ul`
  color: white;
  margin-top: 3rem;
  padding: 0 0.6rem;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    font-size: 0.8rem;
  }
  @media (max-width: 40rem) {
    margin: 0;
  }
`;

export const CenterButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
   @media (max-width: 40rem) {
    margin-bottom: 1rem;
  }
`;
