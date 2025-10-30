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
  initialState: {
    tasks: [] as Exp[],
    total: 0,
    chartData: [] as { name: string; value: number }[],
    highestCategory: null as { name: string; value: number } | null,
  },

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
      state.total = state.tasks.reduce(
        (acc, elem) => Number(elem.amount) + acc,
        0
      );
      // charts logic
      const totals: Record<string, number> = {};
      state.tasks.forEach((elem) => {
        const cat = elem.category || "Others";
        const amt = Number(elem.amount) || 0;
        totals[cat] = (totals[cat] || 0) + amt;
      });
      state.chartData = Object.entries(totals).map(([name, value]) => ({
        name,
        value,
      }));
      // initial state: highestCategory: [] as ChartItem[]

      if (state.chartData.length > 0) {
        const highest = state.chartData.reduce(
          (max, exp) => (exp.value > max.value ? exp : max),
          state.chartData[0]
        );
        state.highestCategory = highest; // ✅ assign array
      } else {
        state.highestCategory = null;
      }
    },
    deleteTasks: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      state.total = state.tasks.reduce(
        (acc, elem) => Number(elem.amount) + acc,
        0
      );
      const totals: Record<string, number> = {};
      state.tasks.forEach((elem) => {
        const cat = elem.category || "Others";
        const amt = Number(elem.amount) || 0;
        totals[cat] = (totals[cat] || 0) + amt;
      });
      state.chartData = Object.entries(totals).map(([name, value]) => ({
        name,
        value,
      }));
      // initial state: highestCategory: [] as ChartItem[]

      if (state.chartData.length > 0) {
        const highest = state.chartData.reduce(
          (max, exp) => (exp.value > max.value ? exp : max),
          state.chartData[0]
        );
        state.highestCategory = highest; // ✅ assign array
      } else {
        state.highestCategory = null;
      }
    },
  },
});
export const { addTasks, deleteTasks } = expensesSlice.actions;
export default expensesSlice.reducer;
