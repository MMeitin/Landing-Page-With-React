import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Body from "./body.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
