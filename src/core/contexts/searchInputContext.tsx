import { createContext, useState } from "react";


export interface ISearchInputContext {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

type Props = {
  children: React.ReactNode | React.ReactNode[];
}

export const SearchInputContext = createContext<ISearchInputContext>(null as unknown as ISearchInputContext);

export const SearchInputProvider: React.FC<Props> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <SearchInputContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchInputContext.Provider>
  )
}