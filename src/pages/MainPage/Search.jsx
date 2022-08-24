import React, { useState } from "react";

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleClear = () => {
        setQuery('');
        onSearch('');
    }
    return ( 
        <div className="search">
                <label htmlFor="query" className="query">Buscar</label>
                <input 
                    type="text" 
                    name="search" 
                    id="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleClear}>Limpar</button>
                <button onClick={() => onSearch(query)}>Procurar</button>
            </div>
     );
}
 
export default Search;