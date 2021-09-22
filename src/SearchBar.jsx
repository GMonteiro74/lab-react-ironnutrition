import React from 'react';


export default function SearchBar({searchQuery, setSearchQuery}) {

    
    return (
        <div>
            
            <h3>Search</h3>
                <input type='text' name='search-bar' value={searchQuery} onInput={(e) => setSearchQuery(e.target.value)} />
        
        </div>
    )
}
