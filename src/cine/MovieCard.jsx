import { useContext } from "react";
import { useState } from "react";
import { getImgeUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
import { toast } from 'react-toastify';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovide] = useState(null)

  const { state,dispatch } = useContext(MovieContext)

  function handelModalClose() {
    setSelectedMovide(null)
    setShowModal(false)
  }

  function handleMovieSelection(movie) {
    setSelectedMovide(movie)
    setShowModal(true)
  }

  function handleAddToCart(event, movie) {
    event.stopPropagation()
    const found = state.cartData.find((item) => {
      return item.id === movie.id
    })
    if (!found) {
      dispatch({
        type:"ADD_TO_CART",
        payload:{
            ...movie
        }
      })
      toast.success(`Movie ${movie.title} added successfully`,{
        position:"bottom-right"
      })
    } else {
      toast.error(`Movie ${movie.title} has been added to the cart already`,{
        position:"bottom-right"
      })
    }
  }

  return (
    <>
      {showModal && <MovieDetailsModal movie={selectedMovie} onClose={handelModalClose} onCartAdd={handleAddToCart} />}
      <figure onClick={() => handleMovieSelection(movie)} className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img
          className="w-full object-cover"
          src={getImgeUrl(movie?.cover)}
          alt={movie?.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie?.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie?.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            onClick={(event) => handleAddToCart(event, movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />

            <span>${movie?.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
