import React from "react";

import Ordes from "../../components/Orders";
import Footer from "../../components/Footer";
import Emphasis from "./components/Emphasis";
import Indroduction from "./components/Indroduction";

import "./styles.css";

const Home = () => {
  return (
    <>
    <main className="container-home">
      <Indroduction />

      <Emphasis />

      <Ordes />
    </main>
    
    <Footer />
    </>
  );
};

export default Home;
