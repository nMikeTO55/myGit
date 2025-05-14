import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { setIsCartOpen } from '../../store/cart/cart.action.js'

import ShoppingSvg from '../../assets/shopping-bag.svg';

import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';
import './cart-icon.styles.scss';

const CartIcon = ()=> {
  const dispatch = useDispatch();

  const cartCount  = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <img src={ShoppingSvg} alt="SVG" className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;