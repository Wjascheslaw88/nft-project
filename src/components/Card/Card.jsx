import React, { useState } from "react";
import css from "./Card.module.css";
import { Button, Card, Statistic } from "antd";
import Meta from "antd/es/card/Meta";
import Modal from "../../components/adapters/Modal"

const Cart = (props) => {

const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className={css.wrapperCards}>
    <Card
      className={css.card}
      cover={
        <div className={css.imagesBlock}>
        <img
          alt={props.name}
          src={props.img}
          className={css.cardImage}
        />
        </div>
      }
      actions={[
        <div key="stats" className={css.actionStats}>
          <Statistic
            title="Current bid"
            value={props.current_dib}
            formatter={(value)=> value}
            valueStyle={{ fontSize: "14px" }}
            
          />
        </div>,
        <Button onClick={showModal} className={css.button}>PLACE BID</Button>,
      ]}
    >
      <Meta
        title={props.name || "Card Title"}
        description={`Author: ${props.author || "Unknown"}`}
      />
    </Card>
     <Modal 
        isOpen={isModalOpen}
        onClose={handleClose}
        cardData={props}
      />
    </div>
  );
};

export default Cart;
