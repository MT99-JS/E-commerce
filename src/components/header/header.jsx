import React from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart/cartIcon";
import CartDropDown from "../cartdropdown/CartDropDown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionContainerLink,
  OptionContainerDiv,
} from "./header.styledcomponent";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionContainerLink to="/shop">SHOP</OptionContainerLink>
      <OptionContainerLink to="/shop">CONTACT</OptionContainerLink>
      {currentUser ? (
        <OptionContainerDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionContainerDiv>
      ) : (
        <OptionContainerLink className="option" to="/signin">
          SIGN IN
        </OptionContainerLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
