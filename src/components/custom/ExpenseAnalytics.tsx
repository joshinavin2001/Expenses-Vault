import { BarChart, PieChart } from "lucide-react";

const ExpenseAnalytics = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex gap-2 justify-center">
      <div className="text-center">
        <h2 className="text-[#bb830a] text-2xl font-bold mb-4">
          Expense Analytics
        </h2>
        <div className="flex gap-2 justify-center">
          <button className="flex gap-2 bg-[#bb830a] p-2 active:scale-95 cursor-pointer rounded text-white">
            <PieChart /> Pie Chart
          </button>
          <button className="flex gap-2 active:scale-95 cursor-pointer bg-gray-200 p-2 rounded text-black">
            <BarChart /> Bar Chart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseAnalytics;
