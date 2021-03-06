import React from "react";
//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";

const ServiceSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Efficent</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: #fff;
      color: #000;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;
