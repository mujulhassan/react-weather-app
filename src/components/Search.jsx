import { useState } from "react";
  
  export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
  
    return (
      <form role="search">
        <input
                  type="search"
                  aria-label="Search for a city"
                  placeholder="London"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
              />
        <button type="button">Search</button>
      </form>
    );
  }