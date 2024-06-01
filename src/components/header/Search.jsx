import { useState,useContext } from 'react'
import SearchIcon from '../../assets/search.svg'
import { LocationContext } from '../../Context'
import { getLocationByName } from '../../data/location-data'


const Search = () => {

  const [searchTerm,setSearchTerm]=useState("")

  const{setSelectedLocation}=useContext(LocationContext)

  function handleSubmit(e){
    e.preventDefault();
    const fetchLocation=getLocationByName(searchTerm)
    console.log(fetchLocation)
    setSelectedLocation({...fetchLocation})
  }
  
  return (
    <form action="#" onSubmit={handleSubmit}>
    <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
      <input  className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
        type="search" 
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder="Search Location" required />
      <button type="submit">
        <img src={SearchIcon} alt='search'/>
      </button>
    </div>
  </form>
  )
}

export default Search