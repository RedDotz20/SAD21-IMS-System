import { Outlet } from 'react-router-dom';
import { Button, Icon } from '@chakra-ui/react';
import NavRoutes from './NavRoutes';
import storeLogo from '../../assets/mainLogo.png';

import { AiFillHome } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';
import { FaWrench } from 'react-icons/fa';
import { BsFillBarChartFill } from 'react-icons/bs';

export default function Sidebar() {
  const userLogout = async () => {
    const { default: userService } = await import('../../api/userService');
    userService.logout();
  };

  return (
    <>
      <nav className="flex flex-col bg-[#F77E21] min-w-[260px]">
        <SidebarLogo />
        <NavRoutes to="/home/dashboard">
          <Icon as={AiFillHome} className="mr-2.5" />
          DASHBOARD
        </NavRoutes>
        <NavRoutes to="/home/products">
          <Icon as={FaWrench} className="mr-2.5" />
          PRODUCTS
        </NavRoutes>
        <NavRoutes to="/home/orders">
          <Icon as={HiDocumentText} className="mr-2.5" color="white" />
          ORDERS
        </NavRoutes>
        <NavRoutes to="/home/sales">
          <Icon as={BsFillBarChartFill} className="mr-2.5" />
          SALES
        </NavRoutes>
        <Button
          className="mt-auto mb-4 mx-4"
          variant="lightyellow"
          onClick={userLogout}
        >
          LOGOUT
        </Button>
      </nav>
      <Outlet />
    </>
  );
}

const SidebarLogo = () => {
  return (
    <div className="bg-[#3C3C3C] grid items-center h-24 mb-2">
      <div className="flex items-center mx-auto">
        <img
          src={storeLogo}
          className="w-14 h-14 object-cover mr-2"
          alt="BGMlogo"
        />
        <div className="flex flex-col">
          <span className="text-white text-2xl text-center select-none font-black">
            Brightsons
          </span>
          <div className="flex items-center justify-center">
            <div className="bg-white h-[1.5px] w-2 select-none"></div>
            <span className="text-white text-[0.65rem] text-center mx-1.5 select-none tracking-tighter font-bold">
              GENERAL MERCHANDISE
            </span>
            <div className="bg-white h-[1.5px] w-2 select-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
