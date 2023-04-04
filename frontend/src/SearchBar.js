import React from 'react'

export default function SearchBar(props) {
  return (
    <div>
        <input className='bar' id="outlined-basic"
          variant="outlined"
          fullWidth
          type='text'
          label="Search" onChange={(e) => {props.setSearch(e.target.value); console.log(e.target.value)}} 
          placeholder='Search' />
      
    </div>
  )
}
