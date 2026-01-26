import React, { useEffect } from "react";
import css from "./Weekly.module.css";
import { HOME_TEXT } from "../../../constants/home";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularCards } from "../../../store/Fetch";
import Card from "../../../components/Card/Card"


const Weekly = (props) => {
  const { popularCards } = useSelector ((state) => state.cardReduser);

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchPopularCards())
  },[])

  return (
    <div className={css.weeklyblock}>
      <h1 className={css.title}>{HOME_TEXT.TITLE1}</h1>

      <div className={css.wrapperCards}>
        {popularCards.map((card) => (
          <Card 
            key={card.id}
            current_dib={card.current_dib}
            name={card.name}
            img={`http://localhost:5000${card.img}`}
            author={card.authorData.name}
            button={props.modal}
          />
        ))}
      </div>
    </div>
  );
};

export default Weekly;
