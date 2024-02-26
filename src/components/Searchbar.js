import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('')

  function handleChange(e) {
    setSearchTerm(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('search for ', searchTerm)
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input name='search' className='search__input' type='text' onChange={handleChange} placeholder='find your film' />
      <button className='search__button'>
        <BiSearch className='search__icon' />
      </button>
    </form>
  )
}

export default Searchbar;