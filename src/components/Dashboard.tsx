import { analytics } from "../utils/constants";
import AnalyticsCard from "./AnalyticsCard";
import EarningOverview from "./EarningOverview";
import CustomerOverview from "./CustomerOverview";
import ProductDetails from "./ProductDetails";
import SearchComp from "./SearchComp";
import { MenuIcon } from "lucide-react";
import { MenuContext } from "../context/MenuContext";
import { useContext } from "react";

const Dashboard = () => {

  const { setShowSidebar } = useContext(MenuContext);

  return (
    <div>
      <div className="bg-white h-14 shadow flex lg:hidden items-center px-3 fixed top-0 left-0 right-0 w-full z-10">
        <MenuIcon onClick={() => setShowSidebar(true)} className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-between mt-16 lg:mt-0">
        <h2 className="text-sm md:text-lg xl:text-xl text-black/90 font-bold">
          Hello Vikas Rajput , 👋
        </h2>
        <SearchComp />
      </div>
      {/* analytics  */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {analytics.map((analytic) => {
          return <AnalyticsCard key={analytic.label} {...analytic} />;
        })}
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-8 gap-5 ">
        {/* Earnings Overview  */}
        <EarningOverview />
        {/* Customer  */}
        <CustomerOverview />
      </div>
      <ProductDetails />
    </div>
  );
};

export default Dashboard;
