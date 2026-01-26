import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopUser } from "../../../store/Fetch";
const { Column, ColumnGroup } = Table;

const TopCollection = () => {
  const { topUsers } = useSelector((state) => state.userReduser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopUser());
  }, []);

  return (
    <Table dataSource={topUsers} pagination={false}>
      <Column
        title="Collection"
        render={(_, record) => (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src={`http://localhost:5000${record.icon}`}
              alt={record.name}
              style={{ width: "30px", height: "30px", borderRadius: "100px" }}
            />
            <span>{record.name}</span>
          </div>
        )}
      />
      <Column title="Volume" dataIndex="volume" />
      <Column 
  title="24h %" 
  dataIndex="precent"
  key="precent"
  render={(value) => {
    if (!value && value !== 0) return '-';
    return `${value}%`;
  }}
/>
      <Column title="Floor Price" dataIndex="floor_price" />
      <Column title="Owners" dataIndex="owners" />
      <Column title="Items" dataIndex="items" />
    </Table>
  );
};

export default TopCollection;
