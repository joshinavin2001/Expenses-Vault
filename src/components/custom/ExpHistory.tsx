import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const ExpHistory = () => {
  const [category1, setCategory1] = useState("");
  const expHistory = useSelector((state: RootState) => state.expenses.tasks);

  // Filtered Data
  const filteredHistory = category1
    ? expHistory.filter((item) => item.category === category1)
    : expHistory;

  return (
    <>
      {/* Header + Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center shadow-sm m-4 gap-4">
        <h2 className="text-xl sm:text-3xl text-[#bb830a] font-bold">
          Expenses History
        </h2>

        <div className="block w-full p-2 sm:w-56">
          <label className="block mb-1 font-medium text-gray-700">
            Category
          </label>
          <Select
            value={category1}
            onValueChange={(value) => setCategory1(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="bills">Bills</SelectItem>
              <SelectItem value="shopping">Shopping</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* History Table */}
      <div className="w-full overflow-x-auto max-h-[400px] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {/* Header */}
        <div className="flex px-4 min-w-[600px] text-gray-500 font-semibold">
          <h2 className="w-[25%]">Time</h2>
          <h2 className="w-[25%]">Description</h2>
          <h2 className="w-[25%] text-center">Category</h2>
          <h2 className="w-[25%] text-end">Amount</h2>
        </div>
        <hr className="my-2" />

        {/* Empty Message */}
        {filteredHistory.length === 0 ? (
          <div className="flex justify-center my-5">
            <h2 className="text-gray-500">
              No Expenses Found. Please Add Expenses!
            </h2>
          </div>
        ) : (
          filteredHistory.map((t) => (
            <div
              className="flex px-4 py-2 min-w-[600px]  font-medium text-gray-600 border-b border-gray-100"
              key={t.id}
            >
              <h2 className="w-[25%]">{t.date}</h2>
              <h2 className="w-[25%] truncate">{t.title}</h2>
              <h2 className="w-[25%] text-center capitalize">{t.category}</h2>
              <h2 className="w-[25%] text-end text-[#bb830a] font-semibold">
                ₹{t.amount}
              </h2>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ExpHistory;
