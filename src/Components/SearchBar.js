import React, { useState } from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';


function SearchBar({setResults}) {
    const [input, setInput] = useState('')

    const fatchData = (value) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json)=>{
                const results = json.filter((user)=>{
                    return(
                       value && user && user.name && user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results)
            })
    }
    const handleChange = (value) => {
        setInput(value)
        fatchData(value)
    }
    return (
        <div className='input-Wrapper'>
            <FaSearch id='search-icon' color='black' />
            <input type="text" placeholder='Type here !' value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}

export default SearchBar