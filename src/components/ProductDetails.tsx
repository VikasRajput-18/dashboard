import SearchComp from "./SearchComp";
import SelectComp from "./SelectComp";
import { productDetails } from "../utils/constants";
import { useState } from "react";
import { productItemsProps } from "../utils/type";

const ProductDetails = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="mt-10 bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-all duration-150 ease-in-out">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0  justify-between">
        <h1 className="text-black/90 text-2xl font-bold">Product Sell</h1>
        <div className="w-full lg:w-auto flex items-center  justify-between gap-4">
          <SearchComp onChange={handleChange} value={searchText} />
          <SelectComp
            options={[
              {
                label: "Last 30 days",
                value: "30",
              },
              {
                label: "Last 15 days",
                value: "15",
              },
              {
                label: "Last 7 days",
                value: "7",
              },
            ]}
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table-auto min-w-[800px] w-full mt-8">
          <thead className="h-14">
            <tr>
              <th className="text-left text-slate-400 text-base font-medium">
                Product Name
              </th>
              <th className="text-left text-slate-400 text-base font-medium">
                Stock
              </th>
              <th className="text-left text-slate-400 text-base font-medium">
                Price
              </th>
              <th className="text-left text-slate-400 text-base font-medium">
                Total Sales
              </th>
            </tr>
          </thead>
          <tbody className="border-t border-slate-200">
            {productDetails
              .filter((item: productItemsProps) => {
                if (searchText === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((product, ind: number) => {
                return (
                  <tr key={ind} className="mt-3 text-base h-16">
                    <td>
                      <div className="flex items-center gap-2">
                        <img
                          src={product.image}
                          alt="product"
                          className="object-cover w-16 rounded-lg h-10"
                        />
                        <div>
                          <p className="font-bold text-lg text-black/90">
                            {product.title}
                          </p>
                          <p className="text-slate-400 text-xs">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-black/90">{product.stock}</td>
                    <td className="text-black/90 font-bold">
                      ${product.price}
                    </td>
                    <td className="text-black/90 text-center">
                      {product.total_sales}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
