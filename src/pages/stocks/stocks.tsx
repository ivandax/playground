import React, { useState, useEffect } from "react";

import "./stocks.scss";

type ResolvedAsyncOp<T> = {
  status: "resolved";
  data: { total: number; items: T[] };
};
type PendingAsyncOp = {
  status: "pending";
};

type AsyncOp<T> = ResolvedAsyncOp<T> | PendingAsyncOp;

interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
}

const Stocks = () => {
  const [data, setData] = useState<AsyncOp<Product>>({ status: "pending" });

  const dummyData: Product[] = [
    { id: "111222", name: "product 1", category: "product", quantity: 5 },
    { id: "111223", name: "product 2", category: "product", quantity: 5 },
    { id: "111224", name: "product 3", category: "product", quantity: 5 },
  ];

  useEffect(() => {
    if (data.status === "pending") {
      setTimeout(function () {
        setData({
          status: "resolved",
          data: { total: dummyData.length, items: dummyData },
        });
      }, 5000);
    }
  }, [data.status, dummyData]);

  if (data.status === "pending") {
    return <div>Loading...</div>;
  }
  return (
    <div className="stocks">
      <h3>Product Table</h3>
      <table>
        <tbody>
          {data.data.items.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
