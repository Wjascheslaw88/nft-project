import React, { useState } from "react";
import css from "./Inputs.module.css";
import { Button, Input, InputNumber, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Switch } from "antd";
import { useDispatch } from "react-redux";
import { createDataNft } from "../../../store/Fetch";

const Inputs = (props) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({
    name: "",
    cdescription: "",
    current_dib: "",
    size: "",
    tags: "",
    price: 0,
    currency: "ETH",
    inStock: 1,
    directSale: true,
    PutOnSale: true,
  });

  const resetInput = () => {
    setInputValue({
      name: "",
      description: "",
      current_dib: "",
      size: "",
      tags: "",
      price: 0,
      currency: "ETH",
      inStock: 1,
      DirectSale: false,
      PutOnSale: false,
    });
  };

  const handleInputChange = (field, value) => {
    setInputValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSelectChange = (field, value) => {
    setInputValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSwitchChange = (field, checked) => {
    setInputValue((prev) => ({
      ...prev,
      [field]: checked,
    }));
  };

  const handleCreate = () => {
    dispatch(createDataNft(inputValue));
    resetInput();
    
  };
  return (
    <div className={css.inPutsWrapper}>
      <div className={css.inputGroup}>
        <label className={css.label}>Name</label>
        <Input
          value={inputValue.name}
          placeholder="ArtWork Name"
          className={css.input}
          size="large"
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </div>
      <div className={css.inputGroup}>
        <label className={css.label}>Description</label>
        <TextArea
          placeholder="Enter Your Description"
          rows={4}
          className={css.textArea}
          value={inputValue.description}
          onChange={(e) => handleInputChange("Description", e.target.value)}
        />
      </div>

      <div className={css.row}>
        <div className={css.inputGroup}>
          <label className={css.label}>Royalty</label>
          <Select
            size="large"
            placeholder="Royalty"
            className={css.select}
            value={inputValue.current_dib}
            onChange={(value) => handleSelectChange("current_dib", value)}
            options={[
              { value: "1", label: "100" },
              { value: "2", label: "1000" },
              { value: "3", label: "2500" },
            ]}
          />
        </div>
        <div className={css.inputGroup}>
          <label className={css.label}>Size</label>
          <Input
            onChange={(e) => handleInputChange("size", e.target.value)}
            value={inputValue.size}
            placeholder="G:100x100"
            className={css.input}
            size="large"
          />
        </div>
      </div>
      <div className={css.inputGroup}>
        <label className={css.label}>Tags</label>
        <Input
          placeholder="Breadful Costals, Meetings TEC"
          className={css.input}
          size="large"
          value={inputValue.tags}
          onChange={(e) => handleInputChange("tags", e.target.value)}
        />
      </div>
      <div className={css.row}>
        <div className={css.inputGroup}>
          <label className={css.label}>Price</label>
          <InputNumber
            onChange={(value) => handleInputChange("price", value)}
            value={inputValue.price}
            addonBefore={
              <Select defaultValue="ETH" style={{ width: 80 }} size="large">
                <Select.Option value="ETH">ETH</Select.Option>
                <Select.Option value="BTC">BTC</Select.Option>
                <Select.Option value="USD">USD</Select.Option>
              </Select>
            }
            defaultValue={0}
            style={{ width: "100%" }}
            size="large"
            className={css.priceInput}
          />
        </div>

        <div className={css.inputGroup}>
          <label className={css.label}>In Stock</label>
          <InputNumber
            min={1}
            max={999}
            defaultValue={1}
            style={{ width: "100%" }}
            size="large"
            className={css.stockInput}
            value={inputValue.inStock}
            onChange={(value) => handleInputChange("inStock", value)}
          />
        </div>
      </div>
      <div className={css.switchwrapper}>
        <div className={css.switchItem}>
          <div className={css.switchText}>
            <h3>Put On Sale</h3>
            <h4>People Will Bids On Your NFT Project</h4>
          </div>
          <Switch
            defaultChecked
            onChange={(checked) => handleSwitchChange("putOnSale", checked)}
          />
        </div>
        <div className={css.switchItem}>
          <div className={css.switchText}>
            <h3>Direct Sale</h3>
            <h4>No Bids - Only Direct Salling</h4>
          </div>
          <Switch
            defaultChecked
            onChange={(checked) => handleSwitchChange("directSale", checked)}
          />
        </div>
      </div>
      <Button
        onClick={() => {
          handleCreate();
        }}
        className={css.buttonCreate}
      >
        Create
      </Button>
    </div>
  );
};

export default Inputs;
