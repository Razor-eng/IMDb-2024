import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Results from '../components/Results';
import { useLocation } from 'react-router-dom';
import Pagination from '../components/Pagination';
const API_KEY = "728d13d30634bbf39374eced9e959d2e";

const SearchPage = () => {
    let [movies, setMovies] = useState([]);
    const { pathname } = useLocation();
    let [pageNum, setPage] = useState(1);
    const movieName = pathname.split(":")[1]

    useEffect(function () {
        (function () {
            axios
                .get
                (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}&language=en-US&page=${pageNum}&include_adult=false`)
                .then((res) => {
                    setMovies(res.data.results);
                })
        })()
    }, [pageNum, movieName])
    useEffect(() => {
        setPage(1);
    }, [movieName])

    const onPrev = () => {
        if (pageNum > 1) {
            setPage(pageNum - 1);
        }
    }
    const onNext = () => {
        setPage(pageNum + 1);
    }
    return (
        <div>
            {movies && movies.length === 0 && (
                <h1 className="text-center text-gray-500 pt-12 text-3xl">No results found</h1>
            )}

            {movies && (
                <>
                    <Results results={movies} />
                    {
                        movies.length !== 0 &&
                        (
                            <Pagination
                                pageNum={pageNum}
                                onPrev={onPrev}
                                onNext={onNext}
                            />
                        )
                    }
                </>
            )
            }
        </div>
    )
}

export default SearchPage