import { Link } from 'react-router-dom'
import { FiThumbsUp } from 'react-icons/fi'
import { Image } from '@chakra-ui/react'

const Card = ({ result }) => {
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 mt-8'>
            <Link to={`/movie/${result.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full sm:w-[500px] sm:h-[200px]'
                    alt={result.title || result.name}
                />
                <div className="p-2">
                    <p className='line-clamp-3 text-md'>
                        {result.overview}
                    </p>
                    <h2 className='text-lg font-bold truncate'>
                        {result.title || result.name}
                    </h2>
                    <p className='flex items-center'>
                        {result.release_date || result.first_air_date}
                        <FiThumbsUp className='h-5 mr-1 ml-3' />
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Card