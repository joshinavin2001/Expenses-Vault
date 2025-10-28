// import ExpenseSummary from "@/components/custom/ExpenseSummary"
import Dashboard from "@/components/custom/Dashboard";
import FormAnalytics from "@/components/custom/FormAnalytics";
import LayoutDashboard from "@/Layouts/LayoutDashboard";

const Index = () => {
  return (
    <div>
      <LayoutDashboard />
      {/* <ExpenseSummary /> */}
      <Dashboard />
      <FormAnalytics />
    </div>
  );
};

export default Index;
