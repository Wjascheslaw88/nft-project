import { Button } from "antd";
import React, { useEffect } from "react";
import { fetchCards, fetchNewCards } from "../../store/Fetch";
import { useDispatch, useSelector } from "react-redux";
import css from "./Discover.module.css";
import Card from "../../components/Card/Card";
import { CopyOutlined, DollarOutlined, OrderedListOutlined } from "@ant-design/icons";

const Discover = (props) => {
  const {cards = [],NewCards = [] ,cardsPage} = useSelector((state) => state.cardReduser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards(cardsPage));
  }, [cardsPage]);

useEffect(()=>{dispatch(fetchNewCards())},[]);
  
  const allCards = [...cards, ...NewCards]

  return (
    <div>
    <div className={css.futerWrapper}>
      <h1 className={css.textH1}>Discover NFTs</h1>
      <div className={css.blockButton}>
        <Button><OrderedListOutlined />Category</Button>
        <Button><CopyOutlined />Collection</Button>
        <Button><DollarOutlined />Price</Button>
      </div>
      </div>  
    <div className={css.cardsGridContainer}>
      <div className={css.cardsGrid}>
        {allCards.map((card) => (
          <Card
            key={card.id}
            className={css.card}
            img={`http://localhost:5000${card.img}`}
            name={card.name}
            current_dib={card.current_dib}
           author={card.name}
          />
        ))}
      </div>
    </div>
   </div>
  );
};
export default Discover;
