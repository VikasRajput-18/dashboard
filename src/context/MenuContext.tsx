import { ReactNode, createContext, useEffect, useState } from "react";

interface MenuContextProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: MenuContextProps = {
  showSidebar: false,
  setShowSidebar: () => {},
};

export const MenuContext = createContext(defaultValue);

const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);


  return (
    <MenuContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
