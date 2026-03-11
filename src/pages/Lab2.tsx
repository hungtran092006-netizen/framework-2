import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Major",
    dataIndex: "major",
  },
];

const data = [
  {
    key: 1,
    id: 1,
    name: "Nam",
    age: 20,
    major: "IT",
  },
  {
    key: 2,
    id: 2,
    name: "Linh",
    age: 21,
    major: "Business",
  },
  {
    key: 3,
    id: 3,
    name: "Hà",
    age: 19,
    major: "Design",
  },
  {
    key: 4,
    id: 4,
    name: "Hung",
    age: 19,
    major: "Design",
  },
  {
    key: 5,
    id: 5,
    name: "Hungg",
    age: 19,
    major: "Design",
  },

];

export default function StudentTable() {
  return (
    <div style={{ width: "500px", margin: "20px auto" }}>
      <h2>Danh sách sinh viên</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}