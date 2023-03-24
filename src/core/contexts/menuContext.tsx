import { createContext, useState } from "react";


export interface IMenuContext {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type Props = {
  children: React.ReactNode | React.ReactNode[];
}

export const MenuContext = createContext<IMenuContext>(null as unknown as IMenuContext);

export const MenuProvider: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  )
}