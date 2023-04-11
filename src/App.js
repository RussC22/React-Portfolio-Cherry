import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="bgColor">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderCurrentPage()}
        <Footer />
      </div>
    </>
  );
}

export default App;
