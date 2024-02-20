import React from "react";
import { Layout } from "antd";
import AppHeader from "../Components/Header";
import Sidebar from "../Components/SideBar";
import OverView from "../Components/OverView";
import StockCart from "../Components/StockCart";
import Footer from "../Components/Footer";

const { Content } = Layout;

function DashBoard() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout style={{ minWidth: "1200px" }}>
          <AppHeader />
          <Content> </Content>
          <OverView />
          <StockCart />
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
}

export default DashBoard;
