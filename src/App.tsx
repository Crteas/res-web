import styled from "styled-components";

const Wraaper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: whitesmoke;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 100px;
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    font-size: 35px;
  }
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const Message = styled.span`
  text-align: center;
  width: 450px;
  font-size: 40px;
  border-radius: 15px;
  background-color: whitesmoke;
  padding: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 700px) {
    width: 100%;
    font-size: 35px;
  }
`;

function App() {
  return (
    <Wraaper>
      <Header>
        <Logo>제목</Logo>
      </Header>
      <Content>
        <Message>치킨먹고싶다</Message>
        <Message>피자먹고싶다</Message>
        <Message>햄버거는생각해보자</Message>
      </Content>
    </Wraaper>
  );
}

export default App;
