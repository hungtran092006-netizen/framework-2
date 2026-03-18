import { Button, Input, Form, Checkbox, Select } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

type Story = {
  title: string;
  description: string;
  active: boolean;
  categorymota: string;
};

type Category = {
  mota: string;
  name: string;
};

export default function Lab4() {
  const [newCategory, setNewCategory] = useState({
    name: "",
    mota: "",
  });

 
  const { data: categories, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

  
  const mutation = useMutation({
    mutationFn: async (value: Story) => {
      await axios.post("http://localhost:3000/stories", value);
    },
    onSuccess: () => {
      toast.success("Thêm truyện thành công");
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });


  const addCategoryMutation = useMutation({
    mutationFn: async (value: Category) => {
      await axios.post("http://localhost:3000/categories", value);
    },
    onSuccess: () => {
      toast.success("Thêm category thành công");
      setNewCategory({ name: "", mota: "" });
      refetch();
    },
    onError: () => {
      toast.error("Lỗi khi thêm category");
    },
  });

  const onFinish = (values: Story) => {
    mutation.mutate(values);
  };

  return (
    <div style={{ maxWidth: 500 }}>
      <Form layout="vertical" onFinish={onFinish}>
       
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Nhập tên truyện" }]}
        >
          <Input />
        </Form.Item>

        
        <Form.Item label="Description" name="description">
          <Input.TextArea />
        </Form.Item>

        
        <Form.Item
          label="Active"
          name="active"
          valuePropName="checked"
        >
          <Checkbox>Active</Checkbox>
        </Form.Item>

       
        <Form.Item label="Category" name="categorymota">
          <Select
            placeholder="Chọn category"
            options={categories?.map((c: Category) => ({
              label: c.name,
              value: c.mota,
            }))}
          />
        </Form.Item>

      
        <Form.Item label="Thêm Category mới">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Input
              placeholder="Tên category"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({
                  ...newCategory,
                  name: e.target.value,
                })
              }
            />
            <Input
              placeholder="Mô tả category"
              value={newCategory.mota}
              onChange={(e) =>
                setNewCategory({
                  ...newCategory,
                  mota: e.target.value,
                })
              }
            />
            <Button
              type="primary"
              disabled={!newCategory.name || !newCategory.mota}
              
              onClick={() =>
                addCategoryMutation.mutate(newCategory)
              }
            >
              Thêm
            </Button>
          </div>
        </Form.Item>

        
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}