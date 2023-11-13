import React, { useState, useEffect } from "react";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
// import Contact from "../../pages/Contact/Contact";
import Skills from "../../pages/Skills/Skills";
import Navbar from "../Navbar/Navbar";
import Education from "../../pages/Education/Education";

export default function PortfolioContainer() {
  const savedPage = localStorage.getItem('currentPage') || "About";
  const [currentPage, setCurrentPage] = useState(savedPage);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === "Education") {
      return <Education />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    return <About />;
  };

  const handlePageChange = page => {
    localStorage.setItem('currentPage', page);
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

