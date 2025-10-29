import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Travel", value: 300 },
  { name: "Shopping", value: 300 },
  { name: "Bills", value: 200 },
  { name: "Others", value: 300 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#a78bfa"];

const ExpensePieChart = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detect screen width
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-[#bb830a]">
          Expenses Overview (Pie Chart)
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
                // ❌ hide labels on mobile
                label={!isMobile ? ({ name }) => name : false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpensePieChart;
