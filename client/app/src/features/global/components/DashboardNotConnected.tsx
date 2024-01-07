
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5%;
`;

const TextContainer = styled.div`
  width: 50%;
  text-align: center;

  
`;

const StyledTypography = styled.h4`
    direction: rtl;
    color: white;
    position: absolute;
    width: 44%;
    font-size: 3vw;
    top: 150px;;
    right: 6%;
    @media (max-width: 768px) {
      font-size: 7vw;
      width: 90%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  font-size: 30px;
  padding: 1% 6vw;
  margin: 25px;
  border: 1px;
  border-radius: 25px;
  background: #d87d0c;
  &:hover {
    transition-duration: 0.4s;
    background: #d87c0c8f;
    cursor: pointer;
  }
  color: white;
  cursor:pointer;

`;
const Img = styled.img`
position: absolute;
    top: 172px;
    left: 6%;
    width: 38%;
    z-index: -1;
    @media (max-width: 768px) {
    display:none;
  }
`;

function DashboardNotConnected() {
  return (
    <Container>
      <TextContainer>
        <StyledTypography>
          הצטרפו לקהילה של הרכישה הקבוצתית והשיגו עסקאות בלעדיות במחירים מוזלים באמצעות כוחה של קנייה קולקטיבית.
        </StyledTypography>
        <Img src="../../../../public/img/group.svg"></Img>
      </TextContainer>

      <ActionButtons>
        <StyledButton>הרשמה</StyledButton>
        <StyledButton>כניסה</StyledButton>
      </ActionButtons>
    </Container>
  );
}

export default DashboardNotConnected;
