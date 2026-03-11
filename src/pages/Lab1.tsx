import { useState } from "react";
import { Form, Input, Button, Table, Modal } from "antd";
function UserPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    { key: 1, name: "Hùng", email: "hung@gmail.com", role: "Admin" },
    { key: 2, name: "Nam", email: "nam@gmail.com", role: "User" },
    { key: 3, name: "Lan", email: "lan@gmail.com", role: "User" }
  ]);
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" }
  ];
  const onFinish = (values: any) => {
    console.log("Register:", values);
  };
  const onAddUser = (values: any) => {
    const newUser = {
      key: Date.now(),
      name: values.name,
      email: values.email,
      role: "User"
    };
    setData([...data, newUser]); 
    setOpen(false);
  };
  return (
    <div>
      <h2>Dang ky tai khoan</h2>
      <Form onFinish={onFinish} style={{ maxWidth: 400 }}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <br />
      <Button type="primary" onClick={() => setOpen(true)}>
        Add User
      </Button>
      <Modal
        title="Add User"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
      >
        <Form onFinish={onAddUser}>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
      <br /><br />
      <h2>User Table</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
export default UserPage;