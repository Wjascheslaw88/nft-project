import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/Без имени5.png";
import { Button } from "antd";
import {
  DiscordOutlined,
  QqOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { HOME_TEXT } from "../../constants/home";
const Footer = () => {
  return (
    <div className={css.backgraund}>
      <div className={css.wrapper1}>
        <img src={logo} alt="logo" />
        <nav>
          <Button className={css.button}>Privacy Policy</Button>
          <Button className={css.button}>Term & Conditions</Button>
          <Button className={css.button}>About Us</Button>
          <Button className={css.button}>Contact</Button>
        </nav>
      </div>
      <div className={css.wrapper2}>
        <div>
          <h3 className={css.textFooter}>{HOME_TEXT.FOOTER_TEXT}</h3>
        </div>
        <div>
        <Button className={css.button}>
          <TwitterOutlined />
        </Button>
        <Button className={css.button}>
          <WhatsAppOutlined />
        </Button>
        <Button className={css.button}>
          <QqOutlined />
        </Button>
        <Button className={css.button}>
          <DiscordOutlined />
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
