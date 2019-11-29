import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";
import "./App.css";

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
