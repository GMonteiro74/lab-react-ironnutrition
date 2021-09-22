import React from 'react';
// import { useState } from 'react/cjs/react.development';


export default function SearchBar(key, setKey) {

    
    return (
        <div>
            <h3>Search</h3>

                <input type='text' onChange={(e) => setKey(e.target.value)} value={key}/>
        
        </div>
    )
}
