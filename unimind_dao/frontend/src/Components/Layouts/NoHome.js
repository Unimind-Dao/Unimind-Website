import React from "react";
import Navigation from "../Elements/noHomeNavigation/Navigation";
import Footer from "../Elements/Footer/Footer";
const defaultLayout = (props) => (
  <>
    <Navigation />
    {props.children}
    <Footer />
  </>
);

export default defaultLayout;
