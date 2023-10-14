import PieChartOverview from "./PieChartOverview";

const CustomerOverview = () => {
  return (
    <div className="col-span-1 min-h-[400px] h-full bg-white rounded-lg shadow-sm hover:shadow-md p-4">
      <h1 className="text-black/90 font-bold text-2xl">Customers</h1>
      <p className="text-sm text-slate-400 mt-1">Customers that buy product</p>
      <div className="max-h-[300px] h-full overflow-hidden w-full flex items-center justify-center lg:block">
        <PieChartOverview />
      </div>
    </div>
  );
};

export default CustomerOverview;
