import React from "react";
import "./adminHome.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/navbar";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const AdminHome = () => {
  return (
    <div className="admin-home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type = "user" />
          <Widgets type = "order" />
          <Widgets type = "earnings" />
          <Widgets type = "balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Tranactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
