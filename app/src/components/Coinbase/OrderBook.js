import React, { useState } from "react";
import Orders from "./Orders";

export default function OrderBook() {
  const initialSellOrders = [
    {
      id: Math.random(),
      size: Math.random(),
      price: 37000 + Math.random() * 2000,
      type: "sell",
    },
    {
      id: Math.random(),
      size: Math.random(),
      price: 37000 + Math.random() * 2000,
      type: "sell",
    },
    {
      id: Math.random(),
      size: Math.random(),
      price: 37000 + Math.random() * 2000,
      type: "sell",
    },
  ];

  const initialBuyOrders = [
    {
      id: Math.random(),
      size: Math.random(),
      price: 37000 + Math.random() * 2000,
      type: "buy",
    },
    {
      id: Math.random(),
      size: Math.random(),
      price: 37000 + Math.random() * 2000,
      type: "buy",
    },
    {
      id: Math.random(),
      size: Math.random(),
      price: 37000 + Math.random() * 2000,
      type: "buy",
    },
  ];

  const [sell_orders, setSellOrders] = useState(initialSellOrders);
  const [buy_orders, setBuyOrders] = useState(initialBuyOrders);

  function handleBuyOrder() {
    const order = {
      id: Math.random(),
      size: Math.random(),
      price: 37000 + Math.random() * 2000,
      type: "buy",
    };

    const newOrders = [order, ...buy_orders];
    newOrders.sort((a, b) => b.price - a.price);
    setBuyOrders(newOrders);
  }

  function handleSellOrder() {
    const order = {
      id: Math.random(),
      size: Math.random(),
      price: 37000 + Math.random() * 2000,
      type: "sell",
    };

    const newOrders = [order, ...sell_orders];
    newOrders.sort((a, b) => b.price - a.price);
    setSellOrders(newOrders);
  }

  return (
    <div>
      <div className="button-container">
        <button className="buy-button" type="button" onClick={handleBuyOrder}>
          {" "}
          {"Buy"}{" "}
        </button>
        <button className="sell-button" type="button" onClick={handleSellOrder}>
          {" "}
          {"Sell"}{" "}
        </button>
      </div>
      <Orders orders={sell_orders} />
      <hr className="divider" />
      <Orders orders={buy_orders} />
    </div>
  );
}
