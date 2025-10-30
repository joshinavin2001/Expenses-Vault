import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { RootState } from "@/redux/store";
const defaultData = [
  { name: "Food", amount: 1 },
  { name: "Travel", amount: 1 },
  { name: "Shopping", amount: 1 },
  { name: "Bills", amount: 1 },
  { name: "Others", amount: 1 },
];
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
const ExpenseBarChart = () => {
  const expenseData = useSelector((state: RootState) => state.expenses.tasks);
  const barChart = useMemo(() => {
    const totals: Record<string, number> = {};
    expenseData.forEach((e) => {
      const catgry = e.category || "Others";
      const amt = Number(e.amount) || 0;
      totals[catgry] = (totals[catgry] || 0) + amt;
    });
    return Object.entries(totals).map(([name, amount]) => ({ name, amount }));
  }, [expenseData]);
  return (
    <div>
      <Card className="w-full max-w-2xl mx-auto shadow-md">
        <CardHeader>
          <CardTitle>Expenses Overview (Bar Chart)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barChart.length > 0 ? barChart : defaultData}
                margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseBarChart;
