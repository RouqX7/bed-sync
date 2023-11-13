import Sidebar from "../../../components/sidebar/Sidebar";
import "./list.scss";
import Navbar from "../../../components/navbar/navbar";

import React from "react";
import Datatable from "../../../components/datatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
