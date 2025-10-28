// import ExpenseSummary from "@/components/custom/ExpenseSummary"
import Dashboard from "@/components/custom/Dashboard";
import ExpHistory from "@/components/custom/ExpHistory";
import FormAnalytics from "@/components/custom/FormAnalytics";
import LayoutDashboard from "@/Layouts/LayoutDashboard";

const Index = () => {
  return (
    <div>
      <LayoutDashboard />
      {/* <ExpenseSummary /> */}
      <Dashboard />
      <FormAnalytics />
      <ExpHistory />
    </div>
  );
};

export default Index;
