import { Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = "728d13d30634bbf39374eced9e959d2e";

const Movie = () => {
    let [movie, setMovie] = useState([]);
    const { pathname } = useLocation();
    const movieId = pathname.split("/movie/")[1]
    useEffect(() => {
        axios.get
            (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
            .then((res) => {
                setMovie(res.data);
            })
    }, [movieId])

    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    className='rounded-lg w-[500px] h-[300px]'
                    style={{ maxWidth: '100%', height: '100%' }}
                    alt={movie.title || movie.name}
                />
                <div className="p-2">
                    <h2 className="text-lg mb-3 font-bold">
                        {movie.title || movie.name}
                    </h2>
                    <p className="text-lg mb-3">
                        {movie.overview}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">
                            Date Released:
                        </span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1">Rating:</span>
                        {movie.vote_count}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Movie