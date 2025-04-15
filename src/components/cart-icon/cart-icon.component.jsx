import { useContext } from 'react';

import ShoppingSvg from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context.jsx';

import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';
import './cart-icon.styles.scss';

const CartIcon = ()=> {

  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <img src={ShoppingSvg} alt="SVG" className='shopping-icon'/>
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;