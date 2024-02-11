import { useEffect, useRef } from "react";
import "./pie.css";
import * as d3 from "d3";

const data = [
  { name: "Mens", value: 400 },
  { name: "Womens", value: 300 },
  { name: "Children", value: 300 },
  { name: "Elders", value: 200 },
];

const Piecharts = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const pie = d3
      .pie()
      .value((d) => d.value)
      .startAngle(0)
      .endAngle(Math.PI * 2);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.5) //handles the inner circle's size
      .outerRadius(radius * 0.9); //handles the outer circle's size

    svg.attr("width", 400).attr("height", 400); //handles the outer padding size
    const pieG = svg
      .append("g")
      .attr("transform", `translate(${400 / 2}, ${400 / 2})`); //handles the position

    const arcs = pieG.selectAll("path").data(pie(data)).enter().append("g");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => d3.schemeCategory10[i]);

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "white") // Set text color to white
      .text(
        (d) =>
          `${Math.round(((d.endAngle - d.startAngle) / (Math.PI * 2)) * 100)}%`
      ); // Round off text digits
  }, []);

  console.log(d3.schemeCategory10);

  return (
    <div className="pieCharts">
      <svg ref={svgRef} />
      <div className="indicators">
        {data.map((item, index) => (
          <p key={index}>
            <span
              style={{
                backgroundColor: d3.schemeCategory10[index],
                display: "inline-block",
                width: "20px", // Adjust width to desired size
                height: "20px", // Adjust height to desired size
                marginRight: "5px", // Add some spacing between color indicator and text
              }}
            ></span>
            <span>{item.name}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Piecharts;
