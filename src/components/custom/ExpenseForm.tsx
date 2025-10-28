import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CalendarExp from "./CalenderExp";
import { useState, type ChangeEvent } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const amountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const submitHandle = () => {
    console.log("Title:", title);
    console.log("Amount:", amount);
    console.log("Category:", category);

    // Reset form fields
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg flex justify-center sm:justify-start">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#bb830a] text-center sm:text-left mb-4">
          Add New Expense
        </h2>

        {/* Form */}
        <div className="space-y-4">
          {/* Description */}
          <div className="block w-full">
            <label className="block mb-1 font-medium text-gray-700">
              Description
            </label>
            <Input
              value={title}
              onChange={titleChange}
              className="w-full"
              placeholder="What did you spend on?"
            />
          </div>

          {/* Amount */}
          <div className="block w-full">
            <label className="block mb-1 font-medium text-gray-700">
              Amount
            </label>
            <Input
              value={amount}
              onChange={amountChange}
              className="w-full"
              placeholder="0.00"
            />
          </div>

          {/* Category */}
          <div className="block w-full">
            <label className="block mb-1 font-medium text-gray-700">
              Category
            </label>
            <Select
              value={category}
              onValueChange={(value) => setCategory(value)}
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

          {/* Date Picker */}
          <CalendarExp />

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="button"
              onClick={submitHandle}
              className="w-full bg-[#bb830a] hover:bg-[#c7911c] text-white"
            >
              Add Expense
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
