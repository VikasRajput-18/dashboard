import { SearchIcon } from "lucide-react";

type SearchProps = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchComp = ({ onChange, value }: SearchProps) => {
  return (
    <div className="bg-white h-10  w-[160px] md:w-[250px] flex items-center px-2 gap-2 shadow-sm border border-transparent focus-within:border-slate-300 rounded-md">
      <SearchIcon size={20} className="text-slate-500" />
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="w-full h-full border-0 outline-none bg-transparent placeholder:text-slate-500 text-sm"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchComp;
