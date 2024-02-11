import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Graph from "./Components/Graph/Graph";
import Navbar from "./Components/Navigation/Navbar";
import Details from "./Components/Details/Details";

const data = {
  name: "Root",
  children: [
    { name: "New Delhi", value: 100, color: "#40E0D0" }, // Sea blue
    { name: "Kolkata", value: 100, color: "#FFD700" }, // Yellow
    { name: "Mumbai", value: 200, color: "#2E8B57" }, // Sea green
    { name: "Bangaluru", value: 80, color: "#808080" }, // Grey
    { name: "Jaipur", value: 90, color: "#0000FF" }, // Blue
    { name: "Surat", value: 70, color: "#800080" }, // Purple
    { name: "Lucknow", value: 60, color: "#FF8C00" }, // Dark orange
    { name: "Pune", value: 110, color: "#32CD32" }, // Lime green
    { name: "Kanpur", value: 50, color: "#ADD8E6" }, // Light blue
    { name: "Ahmedabad", value: 85, color: "#F0E68C" }, // Khaki
    { name: "Chennai", value: 90, color: "#FF6347" }, // Tomato
    { name: "Hyderabad", value: 95, color: "#4682B4" }, // Steel blue
    { name: "Indore", value: 65, color: "#c8dbc8" }, // Pale green
    { name: "india", value: 150, color: "#c8dbc8" }, // Pale green
    // ... add more cities as needed
  ],
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Graph data={data} />} />
        <Route path="/:state" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
