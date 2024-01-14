import React from "react";

import Maps from "../../components/Maps";
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

        <Maps />
      </main>

      <Footer />
    </>
  );
};

export default Home;
