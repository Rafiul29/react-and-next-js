import React from 'react'

const SearchBar = ({filterText, onFilterTextChange,inStockOnly, onInStockOnlyChange}) => {
  return (
    <>
      <form className='flex flex-col'>
      <input 
        type="text" 
        className='border p-2 rounded-md'
        value={filterText} placeholder="Search..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
    </>
  )
}

export default SearchBar