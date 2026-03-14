import { Menu } from "antd";
import {
  DashboardOutlined,
  CalendarOutlined,
  UserOutlined,
  SettingOutlined,
  PictureOutlined,
} from "@ant-design/icons";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: "/appointments",
      icon: <CalendarOutlined />,
      label: <Link to="/appointments">Appointments</Link>,
    },
    {
      key: "/doctors",
      icon: <UserOutlined />,
      label: <Link to="/doctors">Doctors</Link>,
    },
    {
      key: "/gallery",
      icon: <PictureOutlined />,
      label: <Link to="/gallery">Clinic Gallery</Link>,
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      items={menuItems}
    />
  );
}