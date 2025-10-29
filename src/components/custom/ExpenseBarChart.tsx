import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

const data = [
  { name: "Food", amount: 1200 },
  { name: "Travel", amount: 800 },
  { name: "Shopping", amount: 600 },
  { name: "Bills", amount: 400 },
  { name: "Others", amount: 300 },
];
const ExpenseBarChart = () => {
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
                data={data}
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
