import { Fragment, useContext } from "react";
import { Outlet, Link} from "react-router-dom";

import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx';

import {UserContext} from '../../contexts/user.context.jsx';
import {CartContext} from '../../contexts/cart.context.jsx';

import CrwnLogo from "../../assets/crown.svg";
import {signOutUser } from "../../utils/firebase/firebase.util.js";


import { NavigationContainer,
   LogoContainer, 
   NavLinks, 
   NavLink,  
} from "./navigation.styles.jsx";

const Navigation = () => {
  
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrwnLogo} alt="SVG" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )}
            <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
