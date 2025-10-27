import Dashboard from "@/components/custom/Dashboard"

import FormAnalytics from "@/components/custom/FormAnalytics"


const LayoutDashboard = () => {
  return (
    <>          
    <div className="min-h-screen bg-gray-50">
    
          <header className="shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">                  
        <div className="flex justify-center items-center md:justify-between">
            <h1 className="text-3xl font-bold text-purple-400">Budget Now Tracker</h1>
            <p className="hidden md:block text-gray-500 ">Track your expenses with ease</p>
        </div>
        </div>
      </header>
 <Dashboard />
<FormAnalytics />
  
    </div>
   
</> 
  )
}

export default LayoutDashboard
