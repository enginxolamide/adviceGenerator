import { useEffect, useState } from "react";
import dividerDestop from "../assets/images/pattern-divider-desktop.svg";
import dice from "../assets/images/icon-dice.svg";

export const AdviceGenerator = () => {
  const [advice, setAdvice] = useState([]);

  const getAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const resJson = await res.json();
      setAdvice(resJson.slip);
      console.log(resJson.slip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <p className="index">ADVICE #{advice.id}</p>
      <p className="advice">
        <q> {advice.advice ? advice.advice : `Check Internet: failed`}</q>
      </p>
      <img className="divider" src={dividerDestop} alt="" />

      <button onClick={getAdvice}>
        {" "}
        <img src={dice} alt="" />
      </button>
    </div>
  );
};
