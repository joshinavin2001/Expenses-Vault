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
  return (
    <>
      <div className="flex justify-between items-center shadow-sm m-4">
        <div>
          <h2 className=" text-xl sm:text-3xl text-[#bb830a] font-bold">
            Expenses History
          </h2>
        </div>
        <div>
          <div className="block w-full p-2">
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
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* history  */}
      <div>
        <div className="flex px-4 w-full gap-15 text-gray-500">
          <h2 className="w-70">Time</h2>
          <h2 className="w-62">Description</h2>
          <h2 className="w-62 text-center">Category</h2>
          <h2 className="w-62 text-end">Amount</h2>
        </div>
        <hr />
        <div
          className={`flex justify-center my-5 ${
            expHistory.length > 0 ? "hidden" : "block"
          }`}
        >
          <h2 className="text-gray-500">
            No Expenses Found Please Add Expenses ..!
          </h2>
        </div>
        {/* output  */}
        {expHistory.map((t) => {
          return (
            <div
              className="flex px-4 py-2 gap-15 w-full font-bold text-gray-500"
              key={t.id}
            >
              <h2 className="w-70">{t.date}</h2>
              <h2 className="w-62">{t.title}</h2>
              <h2 className="w-62 text-center">{t.category}</h2>
              <h2 className="w-62 text-end">₹{t.amount}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExpHistory;
