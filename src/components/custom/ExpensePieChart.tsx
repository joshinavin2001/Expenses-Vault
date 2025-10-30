import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  type PieLabelRenderProps,
} from "recharts";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const defaultData = [
  { name: "Food", value: 400 },
  { name: "Travel", value: 300 },
  { name: "Shopping", value: 300 },
  { name: "Bills", value: 200 },
  { name: "Others", value: 300 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#a78bfa"];

const ExpensePieChart = () => {
  const chartsData = useSelector(
    (state: RootState) => state.expenses.chartData
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Type-safe label render function
  const renderCustomLabel = (props: PieLabelRenderProps) => {
    const {
      cx = 0,
      cy = 0,
      midAngle = 0,
      outerRadius = 0,
      percent = 0,
      index = 0,
    } = props;

    const isRealData = chartsData.length > 0;
    const activeData = isRealData ? chartsData : defaultData;
    const { name, value } = activeData[index];

    if (percent < 0.05) return null; // skip small slices

    // 🧠 Force number conversion (avoid string types like "50%")
    const cxNum = typeof cx === "number" ? cx : parseFloat(cx);
    const cyNum = typeof cy === "number" ? cy : parseFloat(cy);
    const outerRadiusNum =
      typeof outerRadius === "number" ? outerRadius : parseFloat(outerRadius);

    const RADIAN = Math.PI / 180;
    const radius = outerRadiusNum + 25;
    const xPos = cxNum + radius * Math.cos(-midAngle * RADIAN);
    const yPos = cyNum + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={xPos}
        y={yPos}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: isMobile ? "10px" : "11px",
          fill: "#333",
        }}
      >
        <tspan x={xPos} dy="-0.3em">
          {name}
        </tspan>
        {isRealData && (
          <tspan x={xPos} dy="1.4em">
            ₹{value}
          </tspan>
        )}
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
        <div className="h-64 sm:h-64 p-2 sm:p-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <Pie
                data={chartsData.length > 0 ? chartsData : defaultData}
                cx="50%"
                cy="50%"
                outerRadius={isMobile ? 55 : 85}
                innerRadius={isMobile ? 25 : 35}
                fill="#8884d8"
                dataKey="value"
                label={renderCustomLabel}
                labelLine={false}
              >
                {(chartsData.length > 0 ? chartsData : defaultData).map(
                  (_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  )
                )}
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
