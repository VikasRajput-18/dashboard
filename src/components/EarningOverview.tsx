import BarChartOverview from "./BarChartOverview.jsx";
import SelectComp from "./SelectComp";

const EarningOverview = () => {
  return (
    <div className="col-span-1 lg:col-span-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-150 ease-in-out min-h-[400px] overflow-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-black/90 text-2xl font-bold">Overview</h2>
          <p className="text-sm text-slate-400 font-semibold mt-1">
            Monthly Earning
          </p>
        </div>
        <SelectComp
          options={[
            {
              label: "Quantity",
              value: "Quantity",
            },
          ]}
        />
      </div>
      <div className="max-h-[300px] h-full overflow-hidden w-full ">
        <BarChartOverview />
      </div>
    </div>
  );
};

export default EarningOverview;
