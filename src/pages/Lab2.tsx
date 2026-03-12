import { Table ,Image} from "antd";

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
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (avatar: string) => <Image width={50} src={avatar} />,
    },
];

const data = [
  {key: 1,id: 1,name: "Nam", age: 20,major: "IT",avatar: "https://i.pravatar.cc/150?img=1",},
  {key: 2,id: 2,name: "Linh",age: 21,major: "Business",avatar: "https://i.pravatar.cc/150?img=2",},
  {key: 3,id: 3,name: "Hà", age: 19,major: "Design",avatar: "https://i.pravatar.cc/150?img=3",},
  {key: 4,id: 4,name: "Hung",age: 19,major: "Design",avatar: "https://i.pravatar.cc/150?img=4",},
  {key: 5,id: 5,name: "Hungg",age: 19,major: "Design",avatar: "https://i.pravatar.cc/150?img=5",},
];
export default function StudentTable() {
  return (
    <div style={{ width: "500px", margin: "20px auto" }}>
      <h2>Danh sách sinh viên</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}