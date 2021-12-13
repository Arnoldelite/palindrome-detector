import React from "react";

export default function Orders({ orders }) {
  return orders.map((order, index) => (
    <div className="price-container blink" key={order.id}>
      <p className="size"> {order.size.toFixed(4)} </p>
      <p className={order.type === "buy" ? "buy-price" : "sell-price"}>
        {" "}
        {order.price.toFixed(2)}{" "}
      </p>
    </div>
  ));
}
