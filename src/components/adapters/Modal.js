import React, { useState } from "react";
import { Button, Modal } from "antd";
import css from "./Modal.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Modals = (props) => {
  const { isOpen, onClose, cardData } = props;
  return (
    <Modal
       title={null}
      open={isOpen}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
      width={800}
      className={css.modalCustom}
    >
      <div className={css.modalContent}>
        <div className={css.modalImageSection}>
          <img
            src={cardData.img}
            alt={cardData.name}
            className={css.modalImage}
          />
        </div>
        <div className={css.modalInfoSection}>
          <h1 className={css.modalTitle}>{cardData.name}</h1>
          <p className={css.modalDescription}>
            A collection of 10,000 utility-enabled PFPs that feature a richly
            diverse and unique pool of rarity-powered traits.
          </p>

          <div className={css.modalDetails}>
            <div className={css.detailRow}>
              <span className={css.detailLabel}>Created by</span>
              <span className={css.detailValue}>Perperzon</span>
            </div>
            <div className={css.detailRow}>
              <span className={css.detailLabel}>Owned by</span>
              <span className={css.detailValue}>Videz</span>
            </div>
          </div>

          <div className={css.bidInfo}>
            <div className={css.bidSection}>
              <span className={css.bidLabel}>Current Bid</span>
              <span className={css.bidPrice}>{cardData.current_dib}</span>
            </div>
            
          </div>

          <Button className={css.placeBidButton}><ShoppingCartOutlined />Place Bid</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Modals;
