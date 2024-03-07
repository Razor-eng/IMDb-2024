import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Results from '../components/Results';
import Pagination from '../components/Pagination';

const API_KEY = "728d13d30634bbf39374eced9e959d2e";
function Home() {
    let [movies, setMovies] = useState([]);
    let [pageNum, setPage] = useState(1);

    useEffect(function () {
        (function () {
            axios
                .get
                (`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${pageNum}`)
                .then((res) => {
                    setMovies(res.data.results);
                })
        })()
    }, [pageNum])

    const onPrev = () => {
        if (pageNum > 1) {
            setPage(pageNum - 1);
        }
    }
    const onNext = () => {
        setPage(pageNum + 1);
    }
    return (
        <div className='flex flex-col items-center'>
            {
                movies.length === 0 ?
                    <div className='mt-32'>
                        <Oval height="80" width="80" radius="9" color="gold" secondaryColor='blue' ariaLabel="loading" />
                    </div>
                    :
                    <div>
                        <Results results={movies} />
                        <Pagination
                            pageNum={pageNum}
                            onPrev={onPrev}
                            onNext={onNext}
                        />
                    </div>
            }
        </div >
    )
}

export default Home;