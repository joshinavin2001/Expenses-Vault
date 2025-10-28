import { createSlice } from "@reduxjs/toolkit";

interface Exp {
  id: string;
  title: string;
  amount: string;
  category: string;
  date: string;
}
const expensesSlice = createSlice({
  name: "expenses",
  initialState: { tasks: [] as Exp[] },
  reducers: {
    addTasks: (state, action) => {
      const newTasks: Exp = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        amount: action.payload.amount,
        category: action.payload.category,
        date: action.payload.date,
      };
      state.tasks.push(newTasks);
    },
  },
});
export const { addTasks } = expensesSlice.actions;
export default expensesSlice.reducer;
