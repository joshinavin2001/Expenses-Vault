import { useEffect, useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

// const data = [
//   { name: "Food", value: 400 },
//   { name: "Travel", value: 300 },
//   { name: "Shopping", value: 300 },
//   { name: "Bills", value: 200 },
//   { name: "Others", value: 300 },
// ];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#a78bfa"];

const ExpensePieChart = () => {
  const expenseData = useSelector((state: RootState) => state.expenses.tasks);
  const [isMobile, setIsMobile] = useState(false);
  const chartData = useMemo(() => {
    const totals: Record<string, number> = {};
    expenseData.forEach((e) => {
      const catgry = e.category || "Others";
      const amt = Number(e.amount) || 0;
      totals[catgry] = (totals[catgry] || 0) + amt;
    });
    return Object.entries(totals).map(([name, value]) => ({ name, value }));
  }, [expenseData]);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Type-safe custom label
  const renderCustomLabel = (props: {
    x: number;
    y: number;
    index: number;
  }) => {
    const { x, y, index } = props;
    const { name, value } = chartData[index];

    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: isMobile ? "10px" : "12px",
          fill: "#333",
        }}
      >
        <tspan x={x} dy="-0.3em">
          {name}
        </tspan>
        <tspan x={x} dy="1.2em">
          ₹{value}
        </tspan>
      </text>
    );
  };

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
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={isMobile ? 65 : 85}
                fill="#8884d8"
                dataKey="value"
                label={renderCustomLabel}
                labelLine={false}
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`₹${value}`, name]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpensePieChart;
