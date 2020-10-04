import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderDetail } from "./OrderDetail";

import { historicalStartLoading } from '../../actions/order';

export const OrdersList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(historicalStartLoading());
      }, [dispatch]);

  const { historical } = useSelector((state) => state.orders);
  

  return (
    <div className="container pt-4 pb-5">
      {historical.map((order) => (
        <OrderDetail key = {order.id} order = { order }></OrderDetail>
      ))}
    </div>
  );
};
