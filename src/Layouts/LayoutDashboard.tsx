import logo from "@/assets/logo/expLogo.png";
const LayoutDashboard = () => {
  return (
    <>
      <div className=" bg-gray-50">
        <header className="shadow-sm">
          <div className="flex justify-start md:justify-between">
            <div className="flex items-center">
              <img className="w-18 mt-2  h-13 " src={logo} alt="" />
              <h1 className=" text-md sm:text-2xl mt-5 font-bold text-[#bb830a]">
                <span className="text-3xl">X</span>pensesVault
              </h1>
            </div>
            <div className="flex items-center mr-5">
              <p className="hidden md:block text-gray-500 ">
                Track your expenses with ease
              </p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default LayoutDashboard;
