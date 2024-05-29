import { FavouriteContext } from '../Context'
import { useLocalStorage } from '../hooks'

const FavouriteProvider = ({ children }) => {

  const [favourites, setFavourites] = useLocalStorage("favorites", [])

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location
      }
    ])
  }

  const removeFromFavourites = (location) => {
    const restFavouries = favourites.filter((fav) => fav.location != location)
    setFavourites(restFavouries)
  }

  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouriteContext.Provider>
  )
}

export default FavouriteProvider