import React, { useState, useEffect } from "react";
import "../src/sass/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingScreen from "./Components/Elements/Loading";
import ScrollToTop from "./Components/Utilities/ScroolToTop";
// views
import Landing from "./Components/Onepage/Landing";
// layouts
import LandingLayout from "./Components/Layouts/Home";
// components (if id)



const AppRoute = ({component:Component, layout:Layout, ...rest }) => (
  <Route {...rest} render={props=>(
    <Layout><Component  {...props}> </Component></Layout>
  )}></Route>
)

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      
    }, 3000)
  }, []);

  return (
  
    
    <>
    { loading ? (
    <LoadingScreen loading={loading} />
    
  ) : (
    <>
    <Router>
    <ScrollToTop>
      <AppRoute exact path="/" layout={LandingLayout} component={Landing} />
      </ScrollToTop>
    </Router>
    </>
    )}

  </>


  )};

export default App;
