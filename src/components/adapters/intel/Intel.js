import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pushCheckLoginPassword } from "../../../store/Fetch";

export default function Intel() {
  const dispatch = useDispatch();


  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
  });

  const resetInput = () => {
    setInputValue({
      name: "",
      password: "",
    });
  };
  
  const InputChange = (field, value) => {
    setInputValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const checkLogin = () => {
    dispatch(pushCheckLoginPassword(inputValue));
    resetInput();
  }
  return (
    <div>
      <div>
        <label>Name</label>
        <Input 
        placeholder="введите логин" 
        value={inputValue.name} 
        onChange={(e)=>InputChange("name", e.target.value)}
        ></Input>
      </div>
      <div>
        <label>Password</label>
        <Input 
        placeholder="введите пароль" 
        value={inputValue.password} 
        onChange={(e)=>InputChange("password", e.target.value)}
        ></Input>
      </div>
      <div>
        <Button onClick={()=>checkLogin()}>Login</Button>
      </div>
    </div>
  );
}
