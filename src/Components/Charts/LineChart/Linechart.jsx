import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const getRandomRatio = () => {
  return 0.95 + Math.random() * 0.15; // Generates random ratios between 0.95 and 1.1
};

console.log(getRandomRatio());

const Linechart = () => {
  // Example data for men to women sex ratio across different age groups
  const data = [
    { ageGroup: "0-14", sexRatio: getRandomRatio() },
    { ageGroup: "15-24", sexRatio: getRandomRatio() },
    { ageGroup: "25-34", sexRatio: getRandomRatio() },
    { ageGroup: "35-44", sexRatio: getRandomRatio() },
    { ageGroup: "45-54", sexRatio: getRandomRatio() },
    { ageGroup: "55-64", sexRatio: getRandomRatio() },
    { ageGroup: "65+", sexRatio: getRandomRatio() },
  ];

  return (
    <div className="sexRatioGraph">
      <ResponsiveContainer width="100%" height={450}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 25, bottom: 45 }}
        >
          <CartesianGrid vertical={true} horizontal={true} />
          <XAxis
            dataKey="ageGroup"
            tick={{ fontSize: 15, dy: 10, textAnchor: "middle" }}
            stroke="black"
            axisLine={false}
            tickMargin={10}
            label={{
              value: "Age Group",
              angle: 0,
              position: "bottom",
              offset: 25,
              stroke: "#40E0D0",
            }}
          />
          <YAxis
            stroke="black"
            axisLine={false}
            tickMargin={10}
            label={{
              value: "Sex Ratio",
              angle: -90,
              position: "left",
              offset: 10,
              stroke: "#40E0D0",
            }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sexRatio"
            stroke="#40E0D0"
            activeDot={{ r: 8 }}
            name="Sex Ratio (Men to Women)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;
