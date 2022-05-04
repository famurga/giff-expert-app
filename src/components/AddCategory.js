import React, { useState } from 'react'

import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {

        console.log(e.target.value)
        setinputValue( e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('handle hecho!!')

        if( inputValue.trim().length > 2){
       
            // setCategories
            setCategories( (valor) => [ inputValue,...valor,])
            setinputValue('')

        }

    }
  return (
    <form onSubmit={handleSubmit}>
        
        <input
         type="text" 
         name="" 
         value={inputValue}
         onChange={ handleInputChange}
         
         />
    </form>
    
  )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory





