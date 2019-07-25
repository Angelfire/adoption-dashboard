import React from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Dashboard;
