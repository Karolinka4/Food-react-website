import styled from 'styled-components';

export const Con = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;
z-index: 1;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
background: rgba(0, 0, 0, 0.25);
backdrop-filter: blur(2.2px);
-webkit-backdrop-filter: blur(2.2px);
`;

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
position: absolute;
overflow: hidden;
width: 678px;
min-height: 400px;
z-index: 100;
  
  @media(max-width: 768px) {
    min-height: 678px;
    width: 400px;
  }
`;

export const SignUpContainer = styled.div`
 position: absolute;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.$signin !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 `
    : null}

 @media(max-width: 768px) {
  height: 50%;
  left: 0;
  top: 0;
  width: 100%;
  opacity: 0;
  z-index: 1;
  ${props => props.$signin !== true ? `
   transform: translateY(100%);
   opacity: 1;
   z-index: 5;
 `
    : null}
}
  `;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.$signin !== true ? `transform: translateX(100%);` : null)}

@media(max-width: 768px) {
  top: 0;
  height: 50%;
  left: 0;
  width: 100%;
  ${props => (props.$signin !== true ? `transform: translateY(100%);` : null)}
}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;

`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;
  @media(max-width: 382px)
  {
    font-size:20px;
  }
  
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;

  @media(max-width: 382px)
  {
    font-size:10px;
  }
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #ff4b2b;
   background-color: #ff4b2b;
   color: #ffffff;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
  @media(max-width:382px )
  {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
    padding: 5px 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
      transform: scale(0.95);
    }
    &:focus {
      outline: none;
    }
  }
`;
export const GhostButton = styled(Button)`
background-color: green;
border-color: green;
`;

export const Anchor = styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
  @media(max-width: 382px)
  {
    font-size:10px;
  }
 
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
    props.$signin !== true ? `transform: translateX(-100%);` : null}

@media(max-width: 768px){
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  ${props =>
    props.$signin !== true ? `transform: translateY(-100%);` : null}
}
`;

export const Overlay = styled.div`
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.$signin !== true ? `transform: translateX(50%);` : null)}

@media(max-width: 768px){
  position: relative;
  left: 0;
  top: -100%;
  height: 200%;
  width: 100%;
  ${props => (props.$signin !== true ? `transform: translateY(50%);` : null)}
}
`;
export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  

  @media(max-width: 768px){
    height: 50%;
    width: 100%;
    transform: translateY(0);
  }
`;
//zaloguj się
export const LeftOverlayPanel = styled(OverlayPanel)`
  left: -40px;
  transform: translateX(-90%);
  ${props => props.$signin !== true ? `transform: translateX(0);` : null}

  @media(max-width: 768px){
    transform: translateY(-40%);
    ${props => props.$signin !== true ? `transform: translateY(0%);` : null}
  }
`;

//zarejestruj się
export const RightOverlayPanel = styled(OverlayPanel)`
    right: -40px;
    transform: translateX(0);
    ${props => props.$signin !== true ? `transform: translateX(20%);` : null}
    
    @media(max-width: 768px){
      transform: translateY(90%);
      ${props => props.$signin !== true ? `transform: translateY(130%);` : null}
    }
`;


export const CloseButton =styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 999;
  border-radius:50px;
  border:none;
  background-color:transparent;
 
`;

export const Img = styled.img`
       display: block;
  
  @media(max-width: 768px){
    display: none;
  }
    `