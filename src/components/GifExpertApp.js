import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './AddCategory'
import GiftGrid from './GiftGrid'

const GifExpertApp = props => {

  const [categories, setCategories] = useState(['goku'])


  return (
    <>
    <h2 >GifExPERTaPP</h2>
    <AddCategory setCategories={setCategories} />

    {/* <button onClick={ handleApp}> Agregar heroe</button> */}
    <hr/>

    <ol>
       { 
        categories.map( (category) =>
        <GiftGrid key={category} category={category}/>
        )
       }
    </ol>
    
    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp