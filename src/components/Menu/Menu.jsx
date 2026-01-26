import React, { useState } from "react";
import css from "./Menu.module.css";
import { Button, Flex, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import logo from "../../assets/Без имени.png";
import Intel from "../adapters/intel/Intel";
import Registration from "../adapters/regbctration/Registration";

const Menu = (props) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const navigate = useNavigate();

  const loginOpen = () => {
    setIsLoginOpen(true);
    setIsRegistrationOpen(false);
  };

  const modalClose = () => {
    setIsLoginOpen(false);
    setIsRegistrationOpen(false);
  };

  const registrationOpen = () => {
    setIsRegistrationOpen(true);
    setIsLoginOpen(false);
  };

  const isModalOpen = isLoginOpen || isRegistrationOpen;
  const modalTitle = isLoginOpen ? "Login" : "Registration";

  const handleOk = () => {
    modalClose();
  };

  return (
    <div className={css.menu}>
      <img
        onClick={() => navigate("/")}
        src={logo}
        className={css.img}
        alt="logo"
      />
      <nav className={css.nav}>
        <Button
          onClick={() => navigate("/discover")}
          className={css.texte}
          type="text"
        >
          Discover
        </Button>

        <Button
          onClick={() => navigate("/creators")}
          className={css.texte}
          type="text"
        >
          Creators
        </Button>

        <Button
          onClick={() => navigate("/sell")}
          className={css.texte}
          type="text"
        >
          Sell
        </Button>

        <Button
          onClick={() => navigate("/stats")}
          className={css.texte}
          type="text"
        >
          Stats
        </Button>
      </nav>
      <div className={css.blockimput}>
        <Input
          className={css.input}
          placeholder="Search Art Work / Creator usage"
        />
      </div>
      <Button
        onClick={loginOpen}
        className={css.button}
        type="primary"
      >
        Login
      </Button>
      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={modalClose}
        cancelText="Cancel"
        footer={[
          <Button key="registration" onClick={registrationOpen}>
            Registration
          </Button>,
          <Button key="login" onClick={loginOpen}>
            Login
          </Button>,
        ]}
      >
        {isLoginOpen && (
          <div>
            <Intel />
          </div>
        )}

        {isRegistrationOpen && (
          <div>
            <Registration />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Menu;
