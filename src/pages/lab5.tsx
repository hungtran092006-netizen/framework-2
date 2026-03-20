import { Table, Image, Spin, Button, Popconfirm } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

type Story = {
    id: number;
    title: string;
    description: string;
    author: string;
    categoryId: number;
    image: string;
    createdAt: string;
};

const StoryList = () => {
    const { data, isLoading, isError } = useQuery<Story[]>({
        queryKey: ["getAllstories"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/stories");
            return res.data;
        },
    });
    const qc = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      toast.success("Xoa truyen thanh cong");
      qc.invalidateQueries({ queryKey: ["stories"] });
    },
  });
  
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Tên truyện",
            dataIndex: "title",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
        },
        {
            title: "Ảnh",
            dataIndex: "image",
            render: (image: string) => <Image width={100} src={image} />
        },
        {
            title: "Tác giả",
            dataIndex: "author",
        },
        {
            title: "loai truyện",
            dataIndex: "categoryId",
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (date: string) => new Date(date).toLocaleDateString("vi-VN")
        },
         {
      title: "Action",
     render: (_: any, record: any) => (
  <>
    <Popconfirm
      title="xoa truyen"
      description="xoa truyen khong?"
      okText="co"
      cancelText="khong"
      onConfirm={() => mutate(record.id)}
    >
      <Button danger>Delete</Button>
    </Popconfirm>

    <Button type="primary" style={{ marginLeft: 8 }}>
      <Link to={`/lab6/${record.id}`}>Edit</Link>
    </Button>
  </>
),
    },
    ];

    if (isLoading) return <Spin />;
    if (isError) return <p>Lỗi khi tải dữ liệu</p>;

    return (
        <Table
            columns={columns}
            dataSource={data || []}
            rowKey="id"
            pagination={{ pageSize: 5 }}
        />
    );
};

export default StoryList;