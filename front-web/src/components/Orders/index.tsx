import React from "react";

import { OrderLocationData } from "./types";

import OrderLocation from "./components/OrderLocation";

import "./styles.css";

const Orders = () => {
  const [orderLocation, setOrderLocation] = React.useState<OrderLocationData>();

  return (
    <>
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
    </>
  );
};

export default Orders;
