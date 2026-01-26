import React from "react";
import css from "./HeroText.module.css";
import { Button } from "antd";
import { HOME_TEXT } from "../../../constants/home";

const HeroText = (props) => {
  return (
    <div className={css.herotext}>
      <div className={css.texte}>
        <div className={css.bigtext}>
          <h1>{HOME_TEXT.TITLE}</h1>
        </div>
        <div className={css.smalltext}>
          <h3>{HOME_TEXT.TEXT}</h3>
        </div>
      </div>
      <div className={css.buttonscontainer}>
        <Button className={css.buttonexplore}>Explore More</Button>
        <Button className={css.buttoncreate}>create NFT</Button>
      </div>
    </div>
  );
};

export default HeroText;
