'use client';
import React, { useEffect, useState } from "react";
import { VscHome } from "react-icons/vsc";
import { PiHandshakeLight } from "react-icons/pi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import Link  from "next/link";
import { BsPeople } from "react-icons/bs";
import {usePathname} from "next/navigation";
const Navbar = () => {
    
  const menuName = usePathname();
   const [nav, setNav] = useState('/');
    useEffect(() => {
        setNav(menuName);
    }, [menuName]);
  let headerStyle ='text-sm flex justify-center items-center gap-1 transition-all duration-500  bg-white text-[var(--bg-orange)] rounded-3xl px-3 py-1 group';
 
  return (
    <div className="w-full min-h-[55px] flex  justify-between transition-all duration-500 items-center  z-10 bg-[var(--bg-orange)] text-[var(--text-color)]">
      <ul className="hidden sm:flex sm:justify-center items-center px-4 py-1 drop-shadow-lg text-white text-lg  ">
        <li>
          <Link href={"/"}  className={nav==="/"?headerStyle:'text-lg'}> <VscHome  size={20} className={nav==="/"?'':'hidden'}  /> Home</Link>
        </li>
        <li>
          <Link href={"/customers"}  className={nav==="/customers"?headerStyle:'text-lg'}> <BsPeople  size={15}  className={nav==="/customers"?'':'hidden'}/> Customers</Link>
        </li>
        <li>
          <Link href={"/sales"}  className={nav==="/sales"?headerStyle:'text-lg'}> <PiHandshakeLight  size={20} className={`${nav==="/sales"?'':'hidden'}`}/> Sales</Link>
        </li>
        <li>
          <Link href={"/dues"}  passHref className={nav==="/dues"?headerStyle:'text-lg'}> <FaMoneyCheckDollar size={20} className={nav==="/dues"?'':'hidden'} /> Dues </Link>
        </li>
      
      </ul>
        <div className="px-5 hidden sm:flex">
      
            <Link href={"/logout"} className={nav==='/logout'?`${headerStyle} px-4 py-2`:''}>
              
              <IoIosLogOut  size={20}/> <span className={nav==="/logout"?'':'hidden'} >
                Logout
              </span>
            </Link>
         
        </div>

      <div className="w-full sm:hidden flex justify-center fixed bottom-2 z-50">
        <ul className=" w-full mx-2 h-12 flex justify-between px-1 items-center bg-[var(--bg-orange)] rounded-3xl   text-sm text-white">
          <li>
            <Link
              href={"/"}
              className={nav==="/"?`${headerStyle} px-4 py-2`:''}
            >
              
              <VscHome size={20} />
              <span
                className={nav==="/"?'':'hidden'}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/customers"} className={nav==="/customers"?`${headerStyle} px-4 py-2`:''}>
          
              <BsPeople /> <span className={nav==="/customers"?"":'hidden'}>Customers</span>
            </Link>
          </li>
          <li>
            <Link href={"/sales"} className={nav==="/sales"?`${headerStyle} px-4 py-2`:''}>
              
              <PiHandshakeLight size={20} />
              <span className={nav==="/sales"?'':'hidden'}>Sales</span>
            </Link>
          </li>
          <li>
            <Link href={"/dues"} className={nav==='/dues'?`${headerStyle} px-4 py-2`:''}>
              
              <FaMoneyCheckDollar size={20} /> <span className={nav==="/dues"?'':'hidden'} >
                Dues
              </span>
            </Link>
          </li> 
          <li>
            <Link href={"/logout"} className={nav==='/logout'?`${headerStyle} px-4 py-2`:''}>
              
              <IoIosLogOut  size={20}/> <span className={nav==="/logout"?'':'hidden'} >
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;