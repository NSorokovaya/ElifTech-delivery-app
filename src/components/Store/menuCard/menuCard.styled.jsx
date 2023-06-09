import styled from '@emotion/styled';

export const MenuCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 98%;
  border-radius: 8px;
  > img {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;

    @media screen and (min-width: 480px) {
      width: 343px;
    }
    @media screen and (min-width: 720px) {
      width: 336px;
    }
    @media screen and (min-width: 1280px) {
      width: 300px;
    }
  }
`;

export const MenuCardTitle = styled.div`
p {
  position: absolute;
  z-index: 2;
  width: calc(100% - 52px);
  padding: 16px 0 16px 16px;
  background-color: #65b89b;
  bottom: 24px;
  border-radius: 8px;
  left: 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: calc(20 / 16);
  letter-spacing: -0.24px;
  color: wheat;
  box-shadow: 0px 8px 5px -2px rgba(162, 156, 156, 0.26);


}
`;