import React from "react";
import styled from "styled-components";
import Hero from "./Hero.jsx";
import RedFlame from "../Components/images/RedFlame.svg";
import Android from "../Components/images/Android.svg";
import Appstore from "../Components/images/Appstore.svg";
import Webapp from "../Components/images/Webapp.svg";

class Menu extends React.Component {
  render() {
    return (
      <Tincan>
        <DiscordFlame>
          <Flame src={RedFlame} alt="red flame" />
          <Discord>Join our Discord</Discord>
        </DiscordFlame>
        <Hero />
        <Locations>
          <Image src={Android} alt="android" />
          <Image src={Appstore} alt="appstore" />
          <Image src={Webapp} alt="webapp" />
        </Locations>
      </Tincan>
    );
  }
}

export default Menu;

const Tincan = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flame = styled.img`
  width: 100vw;
`;

const Discord = styled.p`
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: -1.75rem;
`;

const DiscordFlame = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Image = styled.img`
  width: 30%;
  margin-top: 2rem;
`;

const Locations = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
