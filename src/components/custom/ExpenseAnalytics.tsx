import { BarChart, PieChart } from "lucide-react";
import ExpensePieChart from "./ExpensePieChart";
import ExpenseBarChart from "./ExpenseBarChart";
import { useState } from "react";

const ExpenseAnalytics = () => {
  const [activeCharts, setActiveCharts] = useState("pie");

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg">
      <div className="text-center">
        <h2 className="text-[#bb830a] text-xl sm:text-2xl font-bold mb-3">
          Expense Analytics
        </h2>

        {/* Chart toggle buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            onClick={() => setActiveCharts("pie")}
            className={`flex items-center gap-2 ${
              activeCharts === "pie"
                ? "bg-[#bb830a] text-white"
                : "bg-gray-200 text-gray-700"
            } px-3 py-2 rounded-md active:scale-95 transition`}
          >
            <PieChart className="w-4 h-4 sm:w-5 sm:h-5" /> Pie Chart
          </button>

          <button
            onClick={() => setActiveCharts("bar")}
            className={`flex items-center gap-2 ${
              activeCharts === "bar"
                ? "bg-[#bb830a] text-white"
                : "bg-gray-200 text-gray-700"
            } px-3 py-2 rounded-md active:scale-95 transition`}
          >
            <BarChart className="w-4 h-4 sm:w-5 sm:h-5" /> Bar Chart
          </button>
        </div>

        {/* Chart Container */}
        {/* ⬇️ Horizontal scroll only — vertical scroll disabled */}
        <div className="w-full max-w-[600px] mx-auto overflow-x-auto overflow-y-hidden">
          <div className="min-w-[320px] sm:min-w-[400px] md:min-w-[500px]">
            {activeCharts === "pie" && (
              <div className="w-full h-[300px] sm:h-[350px]">
                <ExpensePieChart />
              </div>
            )}
            {activeCharts === "bar" && (
              <div className="w-full h-[300px] sm:h-[350px]">
                <ExpenseBarChart />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseAnalytics;
