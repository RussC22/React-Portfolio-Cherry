import React from "react";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
