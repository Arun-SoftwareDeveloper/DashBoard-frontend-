import React from "react";
import { Layout } from "antd";
import AppHeader from "../Components/Header";
import Sidebar from "../Components/SideBar";
import OverView from "../Components/OverView";
import StockCart from "../Components/StockCart";
import Footer from "../Components/Footer";
import UsersList from "./UsersList";

const { Content } = Layout;

function UserInfo() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout style={{ minWidth: "1200px" }}>
          <AppHeader />
          <Content>
            <UsersList />{" "}
          </Content>

          <Footer />
        </Layout>
      </Layout>
    </div>
  );
}

export default UserInfo;
