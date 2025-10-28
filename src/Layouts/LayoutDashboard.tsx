import logo from "@/assets/logo/expLogo.png";
const LayoutDashboard = () => {
  return (
    <>
      <div className=" bg-gray-50">
        <header className="shadow-sm">
          <div className="flex justify-center md:justify-between">
            <div className="flex items-center">
              <img className="w-18 mt-2 h-12 pl-4" src={logo} alt="" />
              <h1 className="text-3xl mt-4 font-bold text-[#bb830a]">
                XpensesVault
              </h1>
            </div>
            <div className="flex items-center mr-5">
              <p className="hidden md:block text-gray-500 ">
                Track your expenses with ease
              </p>
            </div>
          </div>
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-center items-center md:justify-between">
              <div className="flex">
                <img className="w-22 h-22" src={logo} alt="" />
                <h1 className="text-3xl flex items-center  font-bold text-purple-400">
                  ExpensesVault
                </h1>
              </div>

              <p className="hidden md:block text-gray-500 ">
                Track your expenses with ease
              </p>
            </div>
          </div> */}
        </header>
      </div>
    </>
  );
};

export default LayoutDashboard;
