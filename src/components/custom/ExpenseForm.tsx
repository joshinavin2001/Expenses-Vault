'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import CalendarExp from "./CalenderExp"

const ExpenseForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex justify-center sm:justify-start">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-purple-400 text-center sm:text-left mb-4">
          Add New Expense
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Description */}
          <div className="block w-full">
            <label className="block mb-1 font-medium text-gray-700">Description</label>
            <Input className="w-full" placeholder="What did you spend on?" />
          </div>

          {/* Amount */}
          <div className="block w-full">
            <label className="block mb-1 font-medium text-gray-700">Amount</label>
            <Input className="w-full" placeholder="0.00" />
          </div>

          {/* Category */}
          <div className="block w-full">
            <label className="block mb-1 font-medium text-gray-700">Category</label>
            <Select>
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

          {/* Date Picker */}
          <CalendarExp />

          {/* Submit Button */}
          <div className="pt-2">
            <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
              Add Expense
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ExpenseForm
