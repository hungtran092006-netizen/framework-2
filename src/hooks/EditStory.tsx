import { Form, Input, Button, Spin } from "antd";
import { useEditStory } from "./useEditStory";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const EdittStory = () => {
  const [form] = Form.useForm(); // 🔥 cần cái này

  const { mutate, isPending } = useEditStory();
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });
  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const onFinish = (values: any) => {
    mutate({
      ...values,
      id: Number(id),
    });
  };

  if (isLoading) return <Spin />;

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="title">
        <Input placeholder="Tên truyện" />
      </Form.Item>

      <Form.Item name="author">
        <Input placeholder="Tác giả" />
      </Form.Item>

      <Form.Item name="image">
        <Input placeholder="Ảnh" />
      </Form.Item>

      <Form.Item name="description">
        <Input />
      </Form.Item>

      <Form.Item name="createdAt">
        <Input placeholder="Ngày tạo" />
      </Form.Item>

      <Button htmlType="submit" loading={isPending}>
        Cập nhật
      </Button>
    </Form>
  );
};

export default EdittStory;