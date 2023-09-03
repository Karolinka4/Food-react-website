import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1c1c1c;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`;

export const Container2 = styled.div`
  display: flex;
  margin: 0 auto;
  flex-grow: 1;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.div`
  img {
    

    @media (max-width: 400px) {
      margin:auto;
      width: 100px;
      height: 80px;
    }
  }
`;

export const NameInfo = styled.div`
  

  @media (max-width: 400px) {
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  

  @media (max-width: 400px) {
    flex-direction: column;
   
  }
`;

export const Section = styled.div`
  flex: 1;
  margin-left: 35px;
`;

export const Title = styled.h4`
  font-size: 13px;
  margin-bottom: 10px;
`;

export const StyledFooter = styled.footer`
  background-color: #131313;
  color: #e3e2e2;
  padding: 20px 0;
  text-align: center;
  @media (max-width: 400px) {
   
    font-size: 10px;

  }
`;


export const Summary = styled.summary`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
 
`;

export const Details = styled.details`
  summary::-webkit-details-marker {
    display: none;
  }

  @media (max-width: 400px) {
    position: relative;
    right: 80px;    
    width: 170%;
    border-radius: 8px;
    font-size: 10px;
    
  }
`;
