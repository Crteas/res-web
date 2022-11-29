import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getWeathers, weatherApi } from "./api";

const Wraaper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #3c40c6;
  color: whitesmoke;
`;

const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #575fcf;
  @media screen and (max-width: 767px) {
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
  @media screen and (max-width: 767px) {
    font-size: 60px;
  }
`;

const Content = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  @media screen and (max-width: 767px) {
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
  @media screen and (max-width: 767px) {
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
  @media screen and (max-width: 767px) {
    font-size: 35px;
  }
`;

const WeatherContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);

  @media screen and (max-width: 767px) {
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
  let main;
  let desc;
  if (Array.isArray(data?.weather)) {
    main = data?.weather[0].main;
    desc = data?.weather[0].description;
  }

  return (
    <Wraaper>
      <Header>
        <Logo>제목</Logo>
      </Header>
      <Content>
        <MessageDiv>
          <Message>추워요</Message>
          <Message>더워요</Message>
          <Message>날씨는 어때요</Message>
        </MessageDiv>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <WeatherContainer>
            <WeatherDivs>{main}</WeatherDivs>
            <WeatherDivs>{desc}</WeatherDivs>
            <WeatherDivs>{data?.main?.temp} °C </WeatherDivs>
            <WeatherDivs>{data?.name}</WeatherDivs>
          </WeatherContainer>
        )}
      </Content>
    </Wraaper>
  );
}

export default App;
