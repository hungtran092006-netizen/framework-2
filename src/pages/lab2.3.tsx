import { Table, Tag, Button, Space } from "antd";

type User = {
  key: number;
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
};

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
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: "active" | "inactive") => (
      <Tag color={status === "active" ? "green" : "red"}>
        {status}
      </Tag>
    ),
  },
  {
    title: "Action",
    render: (_: unknown, record: User) => (
      <Space>
        <Button type="primary" onClick={() => console.log("Edit", record)}>
          Edit
        </Button>
        <Button danger onClick={() => console.log("Delete", record)}>
          Delete
        </Button>
      </Space>
    ),
  },
];

const data: User[] = [
  {
    key: 1,
    id: 1,
    name: "Nam",
    email: "nam@gmail.com",
    status: "active",
  },
  {
    key: 2,
    id: 2,
    name: "Linh",
    email: "linh@gmail.com",
    status: "inactive",
  },
  {
    key: 3,
    id: 3,
    name: "Hà",
    email: "ha@gmail.com",
    status: "active",
  },
];

export default function User() {
  return (
    <div style={{ width: "700px", margin: "20px auto" }}>
      <h2>User Management</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}