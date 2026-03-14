import { Layout, Avatar, Dropdown, Space } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function Navbar() {
    const menuItems = [
        {
            key: "profile",
            label: "Profile",
            icon: <UserOutlined />,
        },
        {
            key: "logout",
            label: "Logout",
            icon: <LogoutOutlined />,
        },
    ];

    return (
        <Header
            style={{
                background: "#fff",
                padding: "0 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2 style={{ fontWeight: "600" }}>Clinic Admin Panel</h2>

            <Dropdown menu={{ items: menuItems }}>
                <Space style={{ cursor: "pointer" }}>
                    <Avatar icon={<UserOutlined />} />
                    Admin
                </Space>
            </Dropdown>
        </Header>
    );
}