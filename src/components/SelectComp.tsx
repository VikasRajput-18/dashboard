import React from "react";

type SelectCompProps = {
  options: {
    label: string;
    value: string;
  }[];
};

const SelectComp = ({ options }: SelectCompProps) => {
  return (
    <select className="cursor-pointer text-slate-400">
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectComp;
