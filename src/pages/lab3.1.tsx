import { Form, Input, Button } from "antd";

const SigninForm = () => {
    const onFinish = (values: any) => {
        console.log("Form data:", values);
    };

    return (
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    { required: true, message: "Vui lòng nhập tên" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: "Vui lòng nhập email" },
                    { type: "email", message: "Email không đúng định dạng" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
            >
                <Input />

            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu" },
                    { min: 6, message: "Mật khẩu phải tối thiểu 6 ký tự" },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[{ required: true, message: "Vui lòng xác nhận mật khẩu" }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SigninForm;