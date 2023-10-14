import { LayoutDashboard, ChevronRight, ChevronDown, X } from "lucide-react";
import { navLinks, profileImage } from "../utils/constants";
import { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../context/MenuContext";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const { showSidebar, setShowSidebar } = useContext(MenuContext);

  const menuRef = useRef(null);

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as any).contains(event.target as Node)
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <section
      ref={menuRef}
      className={` ${
        showSidebar ? "ml-[0]" : "-ml-[350px]"
      } z-20 lg:ml-0 w-[300px] sidebar-container bg-[#040440] transition-all duration-200 ease-in-out flex flex-col justify-between fixed inset-0 py-8 px-6 text-white overflow-auto`}
    >
      <div className="flex relative items-center gap-2 pl-2">
        <LayoutDashboard />
        <h2 className="font-semibold text-2xl">Dashboard</h2>
        <div className="block lg:hidden absolute right-0" onClick={() => setShowSidebar(false)}>
          <X
            size={20}
            className="stroke-slate-400 cursor-pointer hover:scale-90 transition-all duration-150 ease-in-out"
          />
        </div>
      </div>

      <ul className="mt-16 flex-1 flex flex-col items-start gap-5">
        {navLinks.map((link) => {
          let { icon: Icon } = link;
          return (
            <li
              key={link.label}
              className={`h-10 flex items-center w-full px-2  font-semibold hover:text-white/80 hover:bg-[rgba(45,45,105,0.5)] transition-all duration-100 ease-in-out rounded-md
              ${
                activeLink === link.label
                  ? "text-white bg-[rgb(45,45,105)]"
                  : "text-slate-500"
              }
              `}
              onClick={() => {
                setActiveLink(link.label);
              }}
            >
              <a
                href={link.href}
                className="flex items-center gap-2 text-sm w-full "
              >
                <Icon size={22} />
                {link.label}
                <ChevronRight size={18} className="ml-auto" />
              </a>
            </li>
          );
        })}
      </ul>

      <div className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-[rgb(45,45,105)]">
        <div className="flex items-center gap-2">
          <img
            src={profileImage}
            alt="Vikas Rajput"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="text-xs text-slate-500">
            <p className="text-sm text-slate-200">Vikas Rajput</p>
            <p>Frontend Developer</p>
          </div>
        </div>
        <ChevronDown size={18} className="text-slate-500 cursor-pointer" />
      </div>
    </section>
  );
};

export default Sidebar;
