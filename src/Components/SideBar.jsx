import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  TeamOutlined,
  RightOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "../Styles/SideBar.css";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
  return (
    <div className="sidebar-container">
      <Sider
        width={200}
        theme="dark"
        className="sidebar"
        style={{ backgroundColor: "dodgerblue" }} // Apply dodger blue background color
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          className="menu"
        >
          <Menu.Item key="1" icon={<UserOutlined />} className="menu-item">
            User
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />} className="menu-item">
            Dashboard
          </Menu.Item>
          <Link to="/usersList">
            {" "}
            <Menu.Item
              key="3"
              icon={<TeamOutlined />}
              className="menu-item"
              style={{ marginLeft: "25px", textDecorationLine: "none" }}
            >
              Users
            </Menu.Item>
          </Link>
          <Menu.SubMenu
            key="sub1"
            icon={<RightOutlined />}
            title="Account"
            className="sub-menu"
          >
            <Menu.Item key="4" className="menu-item">
              <i className="fa-solid fa-chevron-right"></i>
              Sub-menu 1
            </Menu.Item>
            <Menu.Item key="5" className="menu-item">
              <i className="fa-solid fa-chevron-right"></i>
              Sub-menu 2
            </Menu.Item>
            <Menu.Item key="6" className="menu-item">
              <i className="fa-solid fa-chevron-right"></i>
              Sub-menu 3
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="7" className="menu-item">
            <i className="fa-solid fa-chevron-right"></i>
            Corporate
          </Menu.Item>
          <Menu.Item key="8" className="menu-item">
            <i className="fa-solid fa-chevron-right"></i>
            Blogs
          </Menu.Item>
          <Menu.Item key="9" className="menu-item logout">
            <ArrowRightOutlined style={{ marginRight: "10px" }} />
            Logout
          </Menu.Item>
          {[...Array(15).keys()].map((index) => (
            <Menu.Item key={7 + index} className="menu-item">
              <i className="fa-solid fa-chevron-right"></i>
              Menu Item {7 + index}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </div>
  );
}

export default Sidebar;
