import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const { Sider, Content } = Layout;

export default function AdminLayout() {
    return (
        <Layout style={{ minHeight: "100vh" }}>

            {/* Sidebar */}
            <Sider breakpoint="lg" collapsedWidth="0">
                <div
                    style={{
                        color: "white",
                        fontSize: "20px",
                        textAlign: "center",
                        padding: "15px",
                        fontWeight: "bold",
                    }}
                >
                    CLINIC
                </div>

                <Sidebar />
            </Sider>

            <Layout>

                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <Content style={{ margin: "20px" }}>
                    <div
                        style={{
                            padding: "20px",
                            background: "#fff",
                            borderRadius: "10px",
                            minHeight: "400px",
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>

            </Layout>
        </Layout>
    );
}