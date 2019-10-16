import React, { useState } from 'react';

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");

    return (
        <div className = "search-params">
            <form>
                <h1>{location}</h1>
                <label htmlFor="location">
                    location
                    <input 
                        id="location" 
                        value={location} 
                        placeholder="Location"
                        onChange={e => setLocation(e.target.value)}>
                    </input>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;