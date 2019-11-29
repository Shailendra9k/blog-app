import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
