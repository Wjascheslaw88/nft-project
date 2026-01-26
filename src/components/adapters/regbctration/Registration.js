import React, { useState } from "react";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { createNewUsers } from "../../../store/Fetch";
import { useDispatch } from "react-redux";


export default function Registration(props) {
  const dispatch = useDispatch()
   
   const [inputValue, setInputValue] = useState({
      name: "",
      password: "",
      mail: "",
    });
    
     const resetInput = () => {
    setInputValue({
      name: "",
      password: "",
      mail: "",
       });
  };


    const InputChange = (field, value) => {
    setInputValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const uploadNewUsers= ()=>{
    dispatch(createNewUsers(inputValue));
    resetInput();
  }

  return (
    <div>
      <div>
        <label>Name</label>
        <Input
        placeholder="введите логин"
        value={inputValue.name}
        onChange={(e) => InputChange("name", e.target.value)}> 
        </Input>
      </div>
      <div>
        <label>Password</label>
        <Input 
        placeholder="введите пароль"
        value={inputValue.password}
         onChange={(e) => InputChange("password", e.target.value)}>
        </Input>
      </div>
      <div>
        <label>Mail</label>
        <Input
         placeholder="введите почту"
         value={inputValue.mail}
          onChange={(e) => InputChange("mail", e.target.value)}>
         </Input>
      </div>
      <div>
        <Button onClick={()=>{uploadNewUsers()}}>Register</Button>
      </div>
    </div>
  );
}
