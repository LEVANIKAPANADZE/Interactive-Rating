import React from "react";
import Img from "/images/illustration-thank-you.svg";
import styled from "styled-components";

export default function Last({ rate }) {
  return (
    <>
      <Container>
        {" "}
        <Image src={Img} alt="Image of the phone with cards" />
        <Selection>
          <span>You selected {rate} out of 5</span>
        </Selection>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </Container>
    </>
  );
}

const Container = styled.div`
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 327px;
  border-radius: 15px;

  h1 {
    margin-top: 24px;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    line-height: 30.38px;
    text-align: center;
  }

  p {
    color: #969fad;
    margin: 10px 24px 37px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`;

const Selection = styled.div`
  margin-top: 24px;
  background: #262e38;
  width: 168px;
  border-radius: 22.5px;
  color: #fc7614;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 32px;
  line-height: 22px;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 34px;
`;
