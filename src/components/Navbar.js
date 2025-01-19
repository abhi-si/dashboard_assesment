import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCirclePlay } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 shadow-md w-full fixed top-0  z-50">
      {/* Left side */}
      <div className="flex items-center gap-4">
      
        <div className="text-lg font-bold text-[#39CEF3]">LOGO</div>
        
        <div className="lg:hidden">
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </div>

      {/* Right side  */}
      <div className="flex items-center gap-4 sm:gap-6">
        
        <div className="hidden md:block text-xl">
          <FaRegCirclePlay />
        </div>
     
        <button className="p-2 bg-blue-100 rounded-full hidden sm:block">
          🔔
        </button>
       
        <div className="flex items-center gap-2">
          <img
            src="/contact_icon.png"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          
          <span className="hidden md:block">Hello Abhishek</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
