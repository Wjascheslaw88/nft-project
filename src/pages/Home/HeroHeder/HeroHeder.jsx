import React, { useState } from "react";
import css from "./HeroHeder.module.css";
import logo from "../../../assets/Без имени1.png";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HeroHeder = () => {
  const [isBlur, setBlur] = useState(false);

  return (
    <div className={css.herohederblock}>
      <div>
        <img
          className={`${css.logo} ${isBlur ? css.Blurelogo : ""}`}
          src={logo}
        />
      </div>
      <div className={css.buttonfunctional}>
        <Button className={css.noborder} onClick={() => setBlur(true)}>
          <CaretLeftOutlined />
        </Button>
        <Button className={css.noborder} onClick={() => setBlur(false)}>
          <CaretRightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default HeroHeder;
