import React, { useContext } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Items from './Items';
import { Scrollbars } from 'react-custom-scrollbars';
import { CartContext } from './Cart';

function ContextCart() {

    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

    if (item.length === 0) {
        return (
            <>
                <div className="cart">
                    <header>

                        <div className="continue__shopping">
                            <ArrowBackIcon className="backarrow" />
                            <h3>Continue Shopping</h3>
                        </div>
                        <div className="cart__icon">
                            <ShoppingCartIcon />
                            <p>0</p>
                        </div>
                    </header>
                    <hr />



                        <section className="mainCart__section">
                            <h1>Shopping Cart</h1>
                            <p className="total_items"> You have <span className="total_items_count">0</span>  items in the cart</p>
                        </section>
                </div>
            </>
        )
    }


    return (
        <div className="cart">
            <header>

                <div className="continue__shopping">
                    <ArrowBackIcon className="backarrow" />
                    <h3>Continue Shopping</h3>
                </div>
                <div className="cart__icon">
                    <ShoppingCartIcon />
                    <p>{totalItem}</p>
                </div>

            </header>
            <hr />
            <section className="mainCart__section">
                <h1>Shopping Cart</h1>
                <p className="total_items"> You have <span className="total_items_count">{totalItem}</span>  items in the cart</p>
                <div className="cart_items">
                    <div className="carts_items_container">
                    <Scrollbars style={{ height: 400 }}>
                            {
                                item.map((curItem) => {
                                    return <>
                                        <Items key={curItem.id} {...curItem} />
                                    </>
                                })
                            }

                        </Scrollbars>
                    </div>
                </div>
            </section>
            <section className="total-amount">
                <h3>Total Amount: <span className="item-total"> {totalAmount}</span></h3>
                <button className="item-checkout">Checkout</button>
                <button className="clear-cart" onClick={() => clearCart()}>Clear Cart</button>
            </section>
        </div>
    )
}

export default ContextCart

/* {Products.map((val, ind) => {
    return (
        <div className="ite">
            <Items
                img={val.img}
                title={val.title}
                subtitle={val.subtitle}
                price={val.price}
            />
        </div>)
}
)} */