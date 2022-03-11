import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  
  const totalPrice = itemsPrice ;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.food}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ₹{item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 ? (
          <>
            <hr></hr>
            
           
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>₹{totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('hey your order is done')}>
                Checkout
              </button>
            </div>
          </>
        ) : null } 
      </div>
    </aside>
  );
}
