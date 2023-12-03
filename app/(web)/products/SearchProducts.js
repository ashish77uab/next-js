"use client";
import React, { useState } from "react";

const SearchProducts = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        className="bg-black"
        onChange={(e) => setText(e.target.value)}
        placeholder="search here"
      />
      <button>Search</button>
    </div>
  );
};

export default SearchProducts;
