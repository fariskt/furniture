import React, { useContext } from "react";
import AppContext from "../../../context/AppContext";

const Orders = () => {
  const { userId, orders } = useContext(AppContext);

  const userOrders = orders.filter((order) => order.userId === userId);

  return (
    <div className="container pt-28 mx-auto py-4 px-20 bg-gray-100 min-h-[90vh]">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Orders</h1>
      {userOrders.length > 0 ? (
        <div className="flex flex-col space-y-8">
          {userOrders.map((order, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Order ID: {order.id}
              </h2>
              <p className="text-gray-600 mb-2">
                Order Date: {new Date(order.orderdate).toLocaleDateString()}
              </p>
              <div className="text-gray-800 font-bold mb-4">
                Total: ₹{order.totalAmount}
              </div>
              <div className="border-t border-gray-300 pt-4">
                <h3 className="font-semibold mb-2">Items:</h3>
                {order.items.map((item) => (
                  <div key={item.productId} className="flex mb-4">
                    <img
                      src={item.img}
                      alt="product"
                      className="w-20 h-20 object-cover rounded-md mb-2"
                    />
                    <div className="ml-4">
                      <p>Product ID: {item.productId}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No orders found</p>
      )}
    </div>
  );
};

export default Orders;
