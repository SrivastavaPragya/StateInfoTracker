import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./graph.css";
import * as d3 from "d3";

const Graph = ({ data }) => {
  const navigate = useNavigate();
  const d3Container = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);
      const width = 960;
      const height = 600;

      svg.attr("width", width).attr("height", height);

      const root = d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.height - a.height || b.value - a.value);

      d3
        .treemap()
        .size([width, height])
        .paddingTop(15)
        .paddingRight(15)
        .paddingInner(4)(root);

      // Render the treemap rectangles
      const cells = svg
        .selectAll("rect")
        .data(root.leaves())
        .enter()
        .append("rect")
        .attr("x", (d) => d.x0)
        .attr("y", (d) => d.y0)
        .attr("width", (d) => d.x1 - d.x0)
        .attr("rx", 7)
        .attr("ry", 7)
        .attr("height", (d) => d.y1 - d.y0)
        .style("stroke", "white")
        .style("fill", (d) => d.data.color);

      // Add the labels
      svg
        .selectAll("text")
        .data(root.leaves())
        .enter()
        .append("text")
        .attr("x", (d) => d.x0 + (d.x1 - d.x0) / 2)
        .attr("y", (d) => d.y0 + (d.y1 - d.y0) / 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .text((d) => d.data.name)
        .attr("font-size", "15px")
        .attr("fill", "white");

      // Add tooltip
      cells.on("mouseover", (event, d) => {
        const tooltipContent = `
          <div>Name: ${d.data.name}</div>
          <div>Temperature: ${Math.ceil(Math.random() * 10 + 20)}</div>
          <div>Population: ${Math.ceil(Math.random() * 10 + 20)}</div>
        `;
        setTooltip(tooltipContent);
        d3.select(".tooltip").style("opacity", 1);
      });

      cells.on("mousemove", (event) => {
        d3.select(".tooltip")
          .style("left", event.pageX + "px")
          .style("top", event.pageY + "px");
      });

      cells.on("mouseout", () => {
        setTooltip(null);
        d3.select(".tooltip").style("opacity", 0);
      });

      cells.on("click", (event, d) => {
        console.log(d);
        navigate(`/${d.data.name}`);
      });
    }
  }, [data]);

  return (
    <div className="graphComponent">
      <svg className="d3-component" ref={d3Container} />
      {tooltip && (
        <div
          className="tooltip"
          dangerouslySetInnerHTML={{ __html: tooltip }}
        />
      )}
    </div>
  );
};

export default Graph;
