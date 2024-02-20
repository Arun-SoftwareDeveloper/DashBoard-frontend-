import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;

function AppHeader() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Link to="/dashBoard">
          {" "}
          <Menu.Item key="1">Dashboard</Menu.Item>
        </Link>
        <Link to="/usersList">
          {" "}
          <Menu.Item key="2">Users</Menu.Item>
        </Link>
        <Menu.Item key="3">Settings</Menu.Item>
        <Link to="/login">
          <Menu.Item key="4" style={{ float: "right" }} icon={<UserOutlined />}>
            Logout
          </Menu.Item>
        </Link>
      </Menu>
    </Header>
  );
}

export default AppHeader;
