import React from "react";
import Navigation from "../Elements/Navigation/Navigation";
import Footer from "../Elements/Footer/Footer";



const LandingLayout = (props) => {
  

  return (
    <>
    <Navigation />
    {props.children}
    <Footer />
    </>
  ); 
};

export default LandingLayout;
