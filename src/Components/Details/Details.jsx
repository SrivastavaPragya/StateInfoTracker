import React from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import Piecharts from "../Charts/Piechart/Piecharts";
import Linechart from "../Charts/LineChart/Linechart";

const Details = () => {
  const params = useParams();
  console.log(params.state);
  return (
    <section className="detailPage">
      <h1 className="heading"> {`${params.state}'s`} Detailed Analysis</h1>
      <div className="visuals">
        <div className="sec1">
          <h1 className="subHeading">Population Overview</h1>
          <Piecharts />
        </div>
        <div className="sec2">
          <h1 className="subHeading">Gender Analysis</h1>
          <Linechart />
        </div>
      </div>
    </section>
  );
};

export default Details;
