import React from "react";
import css from "./Sell.module.css";
import Upload from "./Upload/Upload";
import Inputs from "./Input/Inputs";

const Sell = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1>Create Your NFT</h1>
      </div>
      
      <div className={css.content}>
        <div className={css.leftSection}>
          <Inputs/>
        </div>
        <div className={css.rightSection}>
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default Sell;
