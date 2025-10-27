import { TrendingDown, TrendingUp, Wallet} from "lucide-react"

const ExpenseSummary = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mx-5 my-5">
        {/* div1 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex gap-2 ">
        <div className="bg-purple-400 rounded-full p-3">
          <Wallet className="text-white" />
        </div>
        <div>
            <h1 className="text-gray-400">Total Expenses</h1>
            <p className="text-purple-400 font-bold">0.00</p>
        </div>
      </div>
      {/* div2 */}
       <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex gap-2 ">
        <div className="bg-red-200 rounded-full p-3">
          <TrendingUp className="text-red-500" />
        </div>
        <div>
            <h1 className="text-gray-400">Highest Category</h1>
            <p className="text-purple-400 font-bold">None</p>
        </div>
      </div>
      {/* div3 */}
       <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex gap-2 ">
        <div className="bg-green-200 rounded-full p-3">
          <TrendingDown />
        </div>
        <div>
            <h1 className="text-gray-400">Total Entries</h1>
            <p className="text-purple-400 font-bold">0</p>
        </div>
      </div>
    </div>
  )
}

export default ExpenseSummary
