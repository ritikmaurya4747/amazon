const OrderData = {
  OrderItems: JSON.parse(localStorage.getItem("OrderItems")) || [],
};

const OrderAdded = (state = OrderData, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      const productData = {
        ...action.data,
        id: new Date().getTime(), // Assigning a unique ID to each order
      };
      const updatedOrder = [...state.OrderItems, productData];
      localStorage.setItem("OrderItems", JSON.stringify(updatedOrder)); // Update local storage
      return {
        ...state,
        OrderItems: updatedOrder,
      };

    default:
      return state;
  }
};

export default OrderAdded;
