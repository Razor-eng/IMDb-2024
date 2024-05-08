import { Link } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { BsHeartFill } from 'react-icons/bs'

const Card = ({ result }) => {
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg  sm:m-2 transition-shadow duration-200 mt-8'>
            <Link to={`/movie/${result.id}`}>
                <div className="relative">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                        className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full sm:w-[500px] sm:h-[200px]'
                        alt={result.title || result.name}
                    />
                    <div className="absolute bg-opacity-35 text-2xl group-hover:opacity-100 opacity-0 flex transition-all ease-in duration-300 gap-1 bottom-0 w-full h-full items-center justify-center text-white">
                        <BsHeartFill className='h-8 mr-1 ml-3 text-red-600' />
                        <p className='text-sm font-semibold'>
                            {result.vote_count}
                        </p>
                    </div>
                </div>
                <div className="p-2 flex flex-col gap-2">
                    <h2 className='text-lg font-bold truncate'>
                        {result.title || result.name}
                    </h2>
                    <p className='line-clamp-3 text-md'>
                        {result.overview}
                    </p>
                    <p className='flex items-center'>
                        {result.release_date || result.first_air_date}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Card