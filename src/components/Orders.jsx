import useActions from "../hooks/useAction";
import useOrders from "../hooks/useOrders";
import usePrototypes from "../hooks/usePrototypes";
import { useMemo } from "react";

export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  console.log(orders);
  const { remove, removeAll } = useActions();
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, prototypes]);

  if (orders.length === 0) {
    return (
      <aside>
        <div className="empty">
          <div className="title">You don't have any orders</div>
          <div className="subtitle">Click on a + to add an order</div>
        </div>
      </aside>
    );
  }
  return (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            console.log("--prototype", prototype);
            console.log("--order", order);
            const click = () => {
              remove(id);
            };
            return (
              <div className="item" key={id + Math.random()}>
                <div className="img">
                  <video src={prototype.thumbnail}></video>
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">${prototype.price * order.quantity}</p>
                  <button className="btn  btn--link" onClick={click}>
                    <i className="icon icon--cross"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">${totalPrice}</div>
            </div>
            <button className="btn btn--link" onClick={removeAll}>
              <i className="icon icon--delete"></i>
            </button>
            <button
              className="btn btn--scendary"
              style={{ width: "100%", marginTop: 10 }}
            >
              Check OUt
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
