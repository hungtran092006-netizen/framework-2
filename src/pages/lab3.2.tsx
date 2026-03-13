import { Form, Input, Button } from "antd";

const AddForm = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };

    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
            <Form.Item
                label="Name"
                name="Ten san pham"
                rules={[
                    { required: true, message: "Vui lòng nhập tên sản phẩm" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Quantity"
                name="quantity"
                rules={[{ required: true, message: "Vui lòng nhập số lượng sản phẩm" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="mota"
                name="mota"
                rules={[{ required: true, message: "Vui lòng nhập mô tả sản phẩm" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Thêm sản phẩm
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddForm;