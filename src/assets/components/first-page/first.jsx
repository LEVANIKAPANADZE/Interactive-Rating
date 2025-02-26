import React, { useState } from "react";
import star from "/images/icon-star.svg";
import Last from "../last-page/last";
import styled from "styled-components";

export default function first() {
  const [rate, setRate] = useState(0);
  const buttons = [1, 2, 3, 4, 5];
  const [submited, setSubmitted] = useState(false);

  function lastPageFunction() {
    if (rate !== 0) {
      setSubmitted(true);
    } else {
      alert`You have to rate us first!`;
    }
  }

  return (
    <>
      {submited ? (
        <Last rate={rate} />
      ) : (
        <Container>
          <Star>
            <img src={star} alt="Star icon" />
          </Star>

          <div>
            {" "}
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <Buttons>
            {" "}
            {buttons.map((element) => (
              <button
                key={element}
                onClick={() => setRate(element)}
                style={{
                  backgroundColor: rate === element ? "#7C8798" : "#262e38",
                  color: rate === element ? "#FFFFFF" : "#7c8798",
                }}
              >
                {element}
              </button>
            ))}
            {console.log(rate)}
          </Buttons>

          <Submit onClick={lastPageFunction}>SUBMIT</Submit>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  width: 327px;
  padding: 24px 24px 32px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 15px;

  h1 {
    margin-top: 16px;
    text-align: left;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    line-height: 30.38px;
  }

  p {
    margin-top: 10px;
    color: #969fad;
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 412px;
    padding: 32px 39px 32px 32px;
    border-radius: 30px;

    h1 {
      margin-top: 30px;
      font-size: 28px;
      line-height: 35.45px;
    }

    p {
      margin-top: 7px;
      font-size: 15px;
      line-height: 24px;
    }
  }
`;

const Star = styled.div`
  background: #262e38;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    width: 48px;
    height: 48px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  margin-top: 24px;

  button {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    color: #7c8798;
    background: #262e38;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.17px;
    text-align: center;
    &:hover {
      cursor: pointer;
      background: #fc7614 !important;
      color: #ffffff !important;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 21px;
    margin-top: 24px;

    button {
      width: 51px;
      height: 51px;
      font-size: 16px;
      letter-spacing: 0.17px;
      text-align: center;
    }
  }
`;

const Submit = styled.button`
  width: 279px;
  height: 45px;
  margin-top: 24px;
  background: #fc7614;
  border-radius: 22.5px;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.72px;
  letter-spacing: 1.87px;
  border: none;

  &:hover {
    cursor: pointer;
    background: #ffffff;
    color: #fc7614;
  }

  @media screen and (min-width: 1440px) {
    width: 341px;
    margin-top: 32px;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 2px;
  }
`;
