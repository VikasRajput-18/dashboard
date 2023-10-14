import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 500 },
  { name: "Group B", value: 600 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#643CEA", "#F1EFFC", "#F33B9B"];

export default function PieChartOverview() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <PieChart width={360} height={300}>
      <Pie
        data={data}
        cx={120}
        cy={150} // Adjusted cy for better centering
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            strokeWidth={activeIndex === index ? 2 : 8}
            cursor={"pointer"}
          />
        ))}
      </Pie>
      {/* Add text in the middle */}
      <text
        x={120} // Adjusted x for centering
        y={140} // Adjusted y for centering
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000" // Text color
        fontSize="13" // Adjust font size as needed
        fontWeight="bold"
      >
        65%
      </text>
      <text
        x={120} // Adjusted x for centering
        y={160} // Adjusted y for centering
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000" // Text color
        fontSize="13" // Adjust font size as needed
        fontWeight="500"
      >
        Total New
      </text>
      <text
        x={120} // Adjusted x for centering
        y={180} // Adjusted y for centering
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000" // Text color
        fontSize="13" // Adjust font size as needed
        fontWeight="500"
      >
        Customers
      </text>
    </PieChart>
  );
}
