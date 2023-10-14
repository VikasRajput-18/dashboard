import { LucideIcon, MoveDown, MoveUp } from "lucide-react";

type AnalyticsCardProps = {
  label: string;
  amount: number;
  profit: string;
  in_a: string;
  profit_status: boolean;
  icon: LucideIcon;
  bgColor: string;
  color: string;
};

const AnalyticsCard = (data: AnalyticsCardProps) => {
  let { icon: Icon } = data;
  return (
    <div className="py-5 col-span-1 px-2 rounded-md shadow-sm hover:shadow-md transition-all duration-150 ease-in-out bg-white cursor-pointer">
      <div className="flex items-center  gap-3">
        <div
          className="w-20 h-20 flex items-center justify-center  rounded-full"
          style={{
            color: data.color,
            background: data.bgColor,
          }}
        >
          <Icon size={30} />
        </div>
        <div>
          <p className="text-slate-400 text-xs">{data.label}</p>
          <h2 className="text-black/90 text-lg font-bold">${data.amount}k</h2>
          {data.profit_status ? (
            <div className="flex items-center text-xs mt-1">
              <MoveUp className="text-[#01AA4C] font-bold" size={12} />
              <p className="text-[#01AA4C] font-bold"> {data.profit}</p>
              <p className="ml-1">this {data.in_a}</p>
            </div>
          ) : (
            <div className="flex items-center text-xs mt-1">
              <MoveDown className="text-[#DB4179] font-bold" size={12} />
              <p className="text-[#DB4179] font-bold"> {data.profit}</p>
              <p className="ml-1">this {data.in_a}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
