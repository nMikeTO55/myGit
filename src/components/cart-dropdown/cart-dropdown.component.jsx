import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import Button from '../button/button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { selectCartItems } from '../../store/cart/cart.selector.js'

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx';

const CartDropdown = ()=>{

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = ()=>{
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item)=> <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown 