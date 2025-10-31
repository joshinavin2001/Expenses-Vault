import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useState, type ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "@/features/expensesSlice";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const titleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const amountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const submitHandle = () => {
    if (
      title.trim() === "" ||
      amount.trim() === "" ||
      category === "" ||
      date === ""
    ) {
      alert("Please Enter Valid Details...?");
      return;
    }
    // Reset form fields
    dispatch(addTasks({ title, amount, category, date }));

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = useState<string>("");

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
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Travel">Travel</SelectItem>
                <SelectItem value="Bills">Bills</SelectItem>
                <SelectItem value="Shopping">Shopping</SelectItem>
                <SelectItem value="Others">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Picker */}
          <div className="flex flex-col gap-3 w-full max-w-md">
            <Label htmlFor="date" className="px-1">
              Date
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger>
                <Button
                  type="button"
                  variant="outline"
                  id="date"
                  className="w-full justify-between font-normal"
                >
                  {date ? date : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-full overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date ? new Date(date) : undefined}
                  onSelect={(d: Date | undefined) => {
                    if (d) {
                      // ✅ Fix: Format date locally instead of UTC
                      const formatted = d.toLocaleDateString("en-CA"); // gives yyyy-mm-dd
                      setDate(formatted);
                    }
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

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
