import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "ProductName",
    dataIndex: "productname",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
];

const data = [
  {key: 1,id: 1,productname: "Nam", price: 100,category: "Electronics",},
  {key: 2,id: 2,productname: "Linh",price: 21,category: "Business",},
  {key: 3,id: 3,productname: "Hà", price: 19,category: "Design",},
  {key: 4,id: 4,productname: "Hung",price: 19,category: "Design",},
  {key: 5,id: 5,productname: "Hungg",price: 19,category: "Design",},
];
export default function UserTable() {
  return (
    <div style={{ width: "500px", margin: "20px auto" }}>
      <h2>Danh sách sản phẩm</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
    </div>
  );
}