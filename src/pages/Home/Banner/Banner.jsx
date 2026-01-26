import React from "react";
import css from "./Banner.module.css";
import { Button } from "antd";
import { HOME_TEXT } from "../../../constants/home";
import logobanner from "../../../assets/Без имени4.png"

const Banner = () => {
  return (
    <div className={css.glblock}>
      <div className={css.textbutton}>
        <h1 className={css.texth1}>{HOME_TEXT.BANNER_TEXT_H1}</h1>
        <h2 className={css.texth2}>{HOME_TEXT.BANNER_TEXT_H2}</h2>
        <div className={css.blockbutton}>
        <Button className={css.buttonbanner1}>Explore More</Button>
        <Button className={css.buttonbanner2}>Sell Artwork</Button>
      </div>
      </div>
      <div >
        <img className={css.images1} src={logobanner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
