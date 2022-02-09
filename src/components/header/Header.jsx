import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { selectCurrentUser } from "../../redux/selectors/user-selector";
import { selectCartHidden } from "../../redux/selectors/cart-selector";

import { ReactComponent as Logo } from "../../assets/img/crown.svg";

import "../header/header.scss";

//Current user refers to de root reducer and then the user referes to the user reducer when we have the current user
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// })

//Destructuring the state looks like this

// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
// }) 

//Selector

const mapStateToProps = createStructuredSelector({  //Create structured selector allows us to no need pass the state this tool search
    currentUser: selectCurrentUser,                 //the top level state and pass automatically
    hidden: selectCartHidden
})

const Header = ({ currentUser, hidden }) => {
    
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="/shop">
                    Tienda
                </Link>
                <Link className="option" to="/contact">
                    Contacto
                </Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Salir
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        Ingresar
                    </Link>
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
            
        </div>
    );
};

export default connect(mapStateToProps)(Header);
