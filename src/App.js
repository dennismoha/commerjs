import React, { useState } from "react";
// import Home from "./Container/HomeIndex";
import Navbar from "./Container/Layout/Navbar";
import { fetchProducts } from "./store/actions/Products";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Routes from "./Routes";

function App(props) {
  useState(() => {
    props.fetchProducts();
  }, []);
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

App.propTypes = {
  fetchProducts: PropTypes.func,
};
// subscriptions
// const mapToDispatch = (dispatch) => {
//   return {
//     fetchProducts: (value) => dispatch(cardActions.getfullname(value)),
//   };
// };

export default connect(null, { fetchProducts })(App);
