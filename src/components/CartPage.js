import React from "react";
import { useCart } from "./ContextReducer";
import Cart from "./Cart";


// function createCart(item) {
//     return (<Cart key={item.id}
//         img={item.img}
//         name={item.name}
//         qty={item.qty}
//         price={item.price}
//     />);
// };

function CartPage() {
    let data = useCart();
    return (<div>
        <section className="h-100 gradient-custom">
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Cart - 2 items</h5>
                            </div>
                            {data.map((food, index) => <Cart
                            id={food.id}
                            img={food.img}
                            name={food.name}
                            qty={food.qty}
                            price={food.price}
                            index={index}
                             />)}
                        </div>

                        <div className="card mb-4 mb-lg-0">
                            <div className="card-body">
                                <p><strong>We accept</strong></p>
                                <img className="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                    alt="Visa" />
                                <img className="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                    alt="American Express" />
                                <img className="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                    alt="Mastercard" />
                                <img className="me-2" width="45px"
                                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                                    alt="PayPal acceptance mark" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Summary</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>$53.98</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Gratis</span>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>$53.98</strong></span>
                                    </li>
                                </ul>

                                <button type="button" className="btn btn-success  btn-lg btn-block">
                                    Go to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default CartPage;