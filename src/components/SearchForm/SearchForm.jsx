

import React, { useRef, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const [inputValue, setInputValue] = useState(""); // Track input value
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("book");
  };

  const handleClear = () => {
    setInputValue(""); // Clear the input value
    setSearchTerm(""); // Reset the search term in the context
    setResultTitle(""); // Reset the result title if needed
    searchText.current.focus(); // Refocus the input field
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              
              <input
                type="text"
                className="form-control"
                placeholder="The Lost World ..."
                ref={searchText}
                value={inputValue} 
                onChange={handleInputChange} 
              />
              {/* Buttons */}
              <div className="button-group flex gap-10">
                <button
                  type="submit"
                  className="flex flex-c search-button"
                  onClick={handleSubmit}
                >
                  <FaSearch className="text-brown" size={28} />
                </button>
                <button
                  type="button"
                  className={`flex flex-c clear-button ${
                    inputValue ? "" : "disabled"
                  }`}
                  onClick={handleClear}
                  disabled={!inputValue} 
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
