import React from "react";
import css from "./Feature.module.css";

const Feature = () => {
  return (
    
   <div className={css.list}>
  <div className={css.item}>
    <div className={css.digit}>430K</div>
    <div className={css.textbelow}>Art Works</div>
  </div>

  <div className={css.item}>
    <div className={css.digit}>159K</div>
    <div className={css.textbelow}>Creators</div>
  </div>

  <div className={css.item}>
    <div className={css.digit}>87K</div>
    <div className={css.textbelow}>Collections</div>
  </div>
</div>
  );
};

export default Feature;
