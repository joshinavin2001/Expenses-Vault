import type { RootState } from "@/redux/store";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { useSelector } from "react-redux";

const ExpenseSummary = () => {
  const totals = useSelector((state: RootState) => state.expenses.total);
  const highestcat = useSelector(
    (state: RootState) => state.expenses.highestCategory
  );
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mx-5 my-5">
      {/* div1 */}
      <div className="  p-6 rounded-lg  shadow-md hover:shadow-lg flex gap-2 ">
        <div className="bg-[#bb830a] rounded-full p-3">
          <Wallet className="text-white" />
        </div>
        <div>
          <h1 className="text-gray-400">Total Expenses</h1>
          <p className="text-[#bb830a] font-bold">{totals}</p>
        </div>
      </div>
      {/* div2 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex gap-2 ">
        <div className="bg-red-200 rounded-full p-3">
          <TrendingUp className="text-red-500" />
        </div>
        <div>
          <h1 className="text-gray-400">Highest Category</h1>
          <div className="flex items-center gap-1 capitalize">
            <p className="text-[#bb830a] font-bold">
              {highestcat ? highestcat.name : "—"}
            </p>
            <p className="text-sm mt-1 text-gray-500">
              {highestcat ? `(₹${highestcat.value})` : ""}
            </p>
          </div>
        </div>
      </div>
      {/* div3 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex gap-2 ">
        <div className="bg-green-200 rounded-full p-3">
          <TrendingDown />
        </div>
        <div>
          <h1 className="text-gray-400">Total Entries</h1>
          <p className="text-[#bb830a] font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
