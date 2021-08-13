import React, { useState } from 'react'
import PropTypes  from 'prop-types';

export const AddCategory = ({setcategories}) => {
    
    const [inputValue, setinputValue] = useState('');

    const hangleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setcategories(cats => [ inputValue.trim(), ...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit= {handlesubmit}>
            <input type="text" value={inputValue} onChange={hangleInputChange} />
        </form>
    )
}


AddCategory.prototype = {
    setcategories: PropTypes.func.isRequired
}