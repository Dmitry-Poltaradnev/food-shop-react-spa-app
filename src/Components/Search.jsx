import { useState } from "react";

export default function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };
  return (
    <div className="row">
      <div className="input-field searchWrapper">
        <input
          placeholder="Search Dish"
          type="search"
          id="search-field"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          value={value}
        />
        <button className="btn searchBtn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}
