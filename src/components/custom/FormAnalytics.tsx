import ExpenseAnalytics from "./ExpenseAnalytics"
import ExpenseForm from "./ExpenseForm"


const FormAnalytics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <ExpenseAnalytics />
      <ExpenseForm />
    </div>
  )
}

export default FormAnalytics
