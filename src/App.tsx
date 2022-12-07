import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getWeathers, weatherApi } from "./api";

const Wraaper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #3c40c6;
  color: whitesmoke;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #575fcf;
  justify-content: flex-start;
  @media screen and (max-width: 807px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  height: 100px;
  font-size: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  box-sizing: border-box;
  @media screen and (max-width: 807px) {
    font-size: 50px;
    font-weight: 600;
  }
`;

const Content = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  @media screen and (max-width: 807px) {
    flex-direction: column;
  }
`;

const MessageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  @media screen and (max-width: 807px) {
    width: 100%;
    padding: 10px;
  }
`;

const Message = styled.span`
  text-align: center;
  width: 100%;
  font-size: 40px;
  border-radius: 15px;
  background-color: #575fcf;
  padding: 20px;
  margin-bottom: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 807px) {
    font-size: 35px;
  }
`;

const WeatherContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 807px) {
    width: 100%;
    padding: 0px 10px;
  }
`;

const WeatherDivs = styled.div`
  background-color: #575fcf;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`;

function App() {
  const { data, isLoading } = useQuery<weatherApi>("weather", getWeathers);
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  useEffect(() => {
    if (data?.main?.temp !== undefined) {
      if (data.main?.temp > 28) {
        setMessage2("더워요 ㅠㅠ");
        setMessage3("더위조심하세요!");
      } else if (data.main?.temp > 20) {
        setMessage2("온도는 적당해요");
        setMessage3("산책이라도 나가보세요~");
      } else if (data.main.temp > 10) {
        setMessage2("조금 추워요");
        setMessage3("감기조심하세요!");
      } else if (data.main.temp >= -1) {
        setMessage2("엄청추워요");
        setMessage3("따뜻하게 입고가세요~");
      } else {
        setMessage2("너무 추워요");
        setMessage3("가급적 밖에 나가지마세요!");
      }
    }
  }, [data]);

  let main;
  let desc;
  if (Array.isArray(data?.weather)) {
    main = data?.weather[0].main;
    desc = data?.weather[0].description;
  }

  return (
    <Wraaper>
      <Header>
        <Logo>날씨</Logo>
      </Header>
      <Content>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <MessageDiv>
              <Message>날씨는 어때요</Message>
              <Message>{message2}</Message>
              <Message>{message3}</Message>
            </MessageDiv>
            <WeatherContainer>
              <WeatherDivs>{main}</WeatherDivs>
              <WeatherDivs>{desc}</WeatherDivs>
              <WeatherDivs>{data?.main?.temp} °C </WeatherDivs>
              <WeatherDivs>{data?.name}</WeatherDivs>
            </WeatherContainer>
          </>
        )}
      </Content>
    </Wraaper>
  );
}

export default App;
